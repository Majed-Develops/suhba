import os
import json
import asyncio
from datetime import datetime, timedelta
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Request
from fastapi.middleware.cors import CORSMiddleware
from geoip2.database import Reader
from country_emoji import flag
from quizzes import prep_ghareeb, prep_tarteeb_suwar, prep_maqasid, prep_makan_nuzul


quiz_map = {
    'ghareeb': prep_ghareeb,
    'tarteeb_suwar': prep_tarteeb_suwar,
    'maqasid': prep_maqasid,
    'makan_nuzul': prep_makan_nuzul,
}


#################################################
# Custom JSON Encoder
#################################################
class DateTimeEncoder(json.JSONEncoder):
    """Custom JSON encoder to handle datetime objects."""

    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        return super().default(obj)


#################################################
# FastAPI Setup
#################################################
app = FastAPI()
@app.get("/")
async def root():
    return {"message": "Welcome to the QuizVS backend!"}

@app.get('/some_route')
async def some_route():
    """Example route returning the current timestamp."""
    return {'timestamp': datetime.now()}

@app.get('/health')
async def health_check():
    """Health check endpoint for testing."""
    return {'status': 'healthy', 'rooms': len(rooms)}

@app.get('/api/health')
async def api_health_check():
    """API health check endpoint."""
    return {'status': 'healthy', 'rooms': len(rooms), 'endpoint': 'api'}

@app.options('/api')
async def websocket_options():
    """Handle OPTIONS request for WebSocket endpoint."""
    return {'message': 'WebSocket endpoint available'}


# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

PORT = int(os.getenv('PORT', 3005))
try:
    geoip_reader = Reader('GeoLite2-Country.mmdb')
except FileNotFoundError:
    geoip_reader = None


#################################################
# Room Class
#################################################
rooms = {}
class Room:
    def __init__(self, config):
        self.sockets = set()
        self.config = {**config, 'time': datetime.now()}

    async def broadcast(self, type: str, msg: dict):
        print(f"Broadcasting '{type}' message to {len(self.sockets)} sockets")
        for i, socket in enumerate(self.sockets):
            try:
                await socket.send_text(json.dumps({'type': type, **msg}, cls=DateTimeEncoder))
                print(f"  ✅ Sent to socket {i+1}")
            except Exception as e:
                print(f"  ❌ Failed to send to socket {i+1}: {e}")

    def add_socket(self, socket: WebSocket):
        self.sockets.add(socket)

    def remove_socket(self, socket: WebSocket):
        self.sockets.discard(socket)


#################################################
# WebSocket Helper Functions
#################################################
async def send(websocket: WebSocket, type: str, msg: dict):
    await websocket.send_text(json.dumps({'type': type, **msg}, cls=DateTimeEncoder))


def get_peer(room, websocket):
    return next((s for s in room.sockets if s != websocket), None)


#################################################
# WebSocket Endpoint
#################################################
@app.websocket('/api')
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    # Get country from IP
    client_host = websocket.client.host
    try:
        country = geoip_reader.country(client_host)
        country_emoji = flag(country.country.iso_code.upper())
    except Exception as e:
        country_emoji = '🌎'

    websocket.country_emoji = country_emoji

    try:
        while True:
            data = await websocket.receive_text()
            await on_message(websocket, data)
    except WebSocketDisconnect:
        await on_disconnect(websocket)


#################################################
# Message Handlers
#################################################
async def on_disconnect(websocket: WebSocket):
    # Find which room the disconnected websocket was in
    room_to_clean = None
    for room_id, room in rooms.items():
        if websocket in room.sockets:
            room.remove_socket(websocket)
            
            # Broadcast updated player count to remaining players
            await room.broadcast('left', {
                'player_count': len(room.sockets),
                'room_id': room_id
            })
            
            # Mark for cleanup if empty
            if len(room.sockets) == 0:
                room_to_clean = room_id
            break
    
    # Clean up empty room outside the iteration
    if room_to_clean:
        del rooms[room_to_clean]


async def on_message(websocket: WebSocket, data: str):
    try:
        msg = json.loads(data)
        print(f"Processing message: {msg['type']} from {websocket.client.host}")

        match msg['type']:
            case 'room_open':
                await handle_room_open(websocket, msg)
            case 'get_active':
                await handle_get_active(websocket, msg)
            case 'join':
                await handle_join(websocket, msg)
            case 'leave':
                await handle_leave(websocket, msg)
            case 'start_game':
                await handle_start_game(websocket, msg)
            case 'answer_selected':
                await handle_answer_selected(websocket, msg)
            case 'next_question':
                await handle_next_question(websocket, msg)
            case 'ended':
                await handle_ended(websocket, msg)
            case 'answered':
                await handle_answered(websocket, msg)
            case 'error':
                await handle_error(websocket, msg)
            case _:
                print(f"Unknown message type: {msg['type']}")
    except json.JSONDecodeError as e:
        print(f"JSON decode error: {e}")
        await send(websocket, 'error', {'details': 'Invalid JSON format'})
    except Exception as e:
        print(f"Error processing message: {e}")
        await send(websocket, 'error', {'details': f'Message processing failed: {str(e)}'})


async def handle_room_open(websocket: WebSocket, msg: dict):
    if msg['room_id'] in rooms:
        rooms[msg['room_id']].config['open'] = msg['open']


async def handle_get_active(websocket: WebSocket, msg: dict):
    active = [
        {**room.config, 'country': next(iter(room.sockets)).country_emoji}
        for room in rooms.values()
        if room.config['open'] and len(room.sockets) == 1
    ]
    await send(
        websocket,
        'active',
        {'active': active, 'total': len(rooms), 'connected': sum(len(room.sockets) for room in rooms.values())},
    )


async def handle_join(websocket: WebSocket, msg: dict):
    room_id = msg['room_id']
    print(f"Player attempting to join room {room_id}")
    
    if room_id not in rooms:
        print(f"Creating new room {room_id}")
        rooms[room_id] = Room({'open': msg['open'], 'id': room_id, 'quiz_type': msg['quiz_type']})

    room = rooms[room_id]
    print(f"Room {room_id} currently has {len(room.sockets)} players")

    # Increase room capacity to support more players (up to 6)
    max_players = 6
    if len(room.sockets) >= max_players:
        print(f"Room {room_id} is full with {len(room.sockets)} players")
        await send(websocket, 'error', {'details': f'Room is full (max {max_players} players)'})
        return

    room.add_socket(websocket)
    current_player_count = len(room.sockets)
    print(f"Player joined room {room_id}. New player count: {current_player_count}")
    
    # Broadcast that a new player joined
    await room.broadcast('joined', {
        'player_count': current_player_count,
        'room_id': room_id
    })
    print(f"Broadcasted join message to {current_player_count} players in room {room_id}")

    # Don't auto-start quiz - wait for manual start from host
    # Auto-start removed to allow manual game start control


async def handle_leave(websocket: WebSocket, msg: dict):
    if msg['room_id'] in rooms:
        room = rooms[msg['room_id']]
        room.remove_socket(websocket)
        
        # Broadcast updated player count to remaining players
        await room.broadcast('left', {
            'player_count': len(room.sockets),
            'room_id': msg['room_id']
        })
        
        # Clean up empty rooms
        if len(room.sockets) == 0:
            del rooms[msg['room_id']]


async def handle_ended(websocket: WebSocket, msg: dict):
    if msg['room_id'] in rooms:
        room = rooms[msg['room_id']]
        peer = get_peer(room, websocket)
        if peer:
            await send(peer, 'ended', {})
        del rooms[msg['room_id']]


async def handle_answered(websocket: WebSocket, msg: dict):
    if msg['room_id'] in rooms:
        room = rooms[msg['room_id']]
        peer = get_peer(room, websocket)
        if peer:
            await send(peer, 'answered', {})


async def handle_start_game(websocket: WebSocket, msg: dict):
    if msg['room_id'] in rooms:
        room = rooms[msg['room_id']]
        print(f"Broadcasting game start to {len(room.sockets)} players in room {msg['room_id']}")
        
        # Broadcast game start to all players in the room with complete game data
        await room.broadcast('game_started', {
            'room_id': msg['room_id'],
            'game_type': msg.get('game_type', 'default'),
            'game_id': msg.get('game_id', 'default'),
            'started_by': 'host',
            'player_count': len(room.sockets)
        })
        print(f"Game start broadcast completed for room {msg['room_id']}")


async def handle_answer_selected(websocket: WebSocket, msg: dict):
    try:
        if msg['room_id'] in rooms:
            room = rooms[msg['room_id']]
            print(f"Player selected answer {msg.get('answer_index')} in room {msg['room_id']}")
            
            # Broadcast answer selection to all players
            await room.broadcast('answer_selected', {
                'room_id': msg['room_id'],
                'answer_index': msg.get('answer_index'),
                'is_correct': msg.get('is_correct', False),
                'current_player': msg.get('current_player', 0),
                'player_name': msg.get('player_name', 'Unknown')
            })
            print(f"Answer selection broadcasted to {len(room.sockets)} players")
        else:
            print(f"Room {msg['room_id']} not found for answer selection")
    except Exception as e:
        print(f"Error in handle_answer_selected: {e}")
        await send(websocket, 'error', {'details': f'Answer selection failed: {str(e)}'})


async def handle_next_question(websocket: WebSocket, msg: dict):
    try:
        if msg['room_id'] in rooms:
            room = rooms[msg['room_id']]
            print(f"Moving to next question in room {msg['room_id']}")
            
            # Broadcast next question event to all players
            await room.broadcast('next_question', {
                'room_id': msg['room_id'],
                'next_player': msg.get('next_player', 0),
                'question_index': msg.get('question_index', 0)
            })
            print(f"Next question broadcasted to {len(room.sockets)} players")
        else:
            print(f"Room {msg['room_id']} not found for next question")
    except Exception as e:
        print(f"Error in handle_next_question: {e}")
        await send(websocket, 'error', {'details': f'Next question failed: {str(e)}'})


async def handle_error(websocket: WebSocket, msg: dict):
    # Handle error case if needed
    pass


#################################################
# Room Cleanup Task
#################################################
async def cleanup_rooms():
    while True:
        current_time = datetime.now()
        rooms_to_delete = []

        for room_id, room in rooms.items():
            if len(room.sockets) == 0 or (current_time - room.config['time']) > timedelta(minutes=30):
                rooms_to_delete.append(room_id)

        for room_id in rooms_to_delete:
            del rooms[room_id]

        await asyncio.sleep(10)


#################################################
# Startup Event
#################################################
@app.on_event('startup')
async def startup_event():
    asyncio.create_task(cleanup_rooms())


#################################################
# Main
#################################################
if __name__ == '__main__':
    import uvicorn

    uvicorn.run(app, host='0.0.0.0', port=PORT)
