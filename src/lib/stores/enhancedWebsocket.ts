// Enhanced WebSocket Manager for Suhba Islamic Trivia
import { writable, derived } from 'svelte/store';
import { toastManager } from './toast';

// Enhanced interfaces for better type safety
interface Player {
  id: string;
  name: string;
  avatar?: string;
  score: number;
  isHost: boolean;
  connected: boolean;
  lastSeen: number;
}

interface GameState {
  currentQuestion: number;
  questionStartTime: number;
  answers: Record<string, any>;
  scores: Record<string, number>;
  phase: 'waiting' | 'question' | 'answers' | 'results' | 'finished';
}

interface Room {
  id: string;
  code: string;
  gameType: string;
  maxPlayers: number;
  players: Player[];
  gameState: GameState;
  settings: {
    difficulty: 'easy' | 'medium' | 'hard';
    timePerQuestion: number;
    questionsCount: number;
  };
}

interface ConnectionState {
  connected: boolean;
  connecting: boolean;
  reconnecting: boolean;
  error: string | null;
  latency: number;
  quality: 'excellent' | 'good' | 'fair' | 'poor' | 'disconnected';
}

// Enhanced message types for better multiplayer experience
interface WebSocketMessage {
  type: string;
  timestamp: number;
  messageId: string;
  data?: any;
  playerId?: string;
  roomId?: string;
}

// Stores
export const connectionState = writable<ConnectionState>({
  connected: false,
  connecting: false,
  reconnecting: false,
  error: null,
  latency: 0,
  quality: 'disconnected'
});

export const currentRoom = writable<Room | null>(null);
export const currentPlayer = writable<Player | null>(null);
export const realtimeMessages = writable<WebSocketMessage[]>([]);

// Derived stores for UI
export const connectedPlayers = derived(currentRoom, ($room) => 
  $room?.players.filter(p => p.connected) || []
);

export const isHost = derived([currentRoom, currentPlayer], ([$room, $player]) => 
  $room && $player ? $player.isHost : false
);

export const gameInProgress = derived(currentRoom, ($room) => 
  $room?.gameState.phase !== 'waiting'
);

class EnhancedWebSocketManager {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 10;
  private reconnectDelay = 1000;
  private heartbeatInterval: number | null = null;
  private latencyCheckInterval: number | null = null;
  private messageQueue: WebSocketMessage[] = [];
  private pendingAcks = new Map<string, { resolve: Function; reject: Function; timeout: number }>();

  async connect(url: string = 'ws://localhost:3005'): Promise<void> {
    if (this.ws?.readyState === WebSocket.OPEN) {
      return Promise.resolve();
    }

    connectionState.update(state => ({ 
      ...state, 
      connecting: true, 
      error: null 
    }));

    return new Promise((resolve, reject) => {
      try {
        this.ws = new WebSocket(url);

        const connectTimeout = setTimeout(() => {
          this.ws?.close();
          reject(new Error('Connection timeout'));
        }, 10000);

        this.ws.onopen = () => {
          clearTimeout(connectTimeout);
          console.log('🕌 Enhanced Suhba WebSocket connected');
          
          connectionState.update(state => ({ 
            ...state, 
            connected: true, 
            connecting: false,
            reconnecting: false,
            error: null,
            quality: 'excellent'
          }));

          this.reconnectAttempts = 0;
          this.startHeartbeat();
          this.startLatencyCheck();
          this.processMessageQueue();
          
          resolve();
        };

        this.ws.onmessage = (event) => {
          try {
            const message: WebSocketMessage = JSON.parse(event.data);
            this.handleMessage(message);
          } catch (error) {
            console.error('❌ Failed to parse message:', error);
          }
        };

        this.ws.onclose = (event) => {
          clearTimeout(connectTimeout);
          console.log('🔌 WebSocket disconnected:', event.code, event.reason);
          
          connectionState.update(state => ({ 
            ...state, 
            connected: false, 
            connecting: false,
            quality: 'disconnected'
          }));

          this.stopHeartbeat();
          this.stopLatencyCheck();
          
          if (event.code !== 1000) { // Not a normal closure
            this.attemptReconnect();
          }
        };

        this.ws.onerror = (error) => {
          clearTimeout(connectTimeout);
          console.error('❌ WebSocket error:', error);
          
          connectionState.update(state => ({ 
            ...state, 
            error: this.getErrorMessage(url),
            connecting: false,
            quality: 'disconnected'
          }));
          
          reject(error);
        };

      } catch (error) {
        connectionState.update(state => ({ 
          ...state, 
          error: 'Failed to create connection',
          connecting: false 
        }));
        reject(error);
      }
    });
  }

  private handleMessage(message: WebSocketMessage) {
    console.log('📨 Received:', message.type);
    
    // Handle acknowledgments
    if (message.type === 'ack' && message.data?.messageId) {
      const pending = this.pendingAcks.get(message.data.messageId);
      if (pending) {
        clearTimeout(pending.timeout);
        pending.resolve(message);
        this.pendingAcks.delete(message.data.messageId);
      }
      return;
    }

    // Handle heartbeat response
    if (message.type === 'pong') {
      this.updateLatency(message.timestamp);
      return;
    }

    // Update message store
    realtimeMessages.update(msgs => [...msgs.slice(-50), message]); // Keep last 50 messages

    // Handle game-specific messages
    switch (message.type) {
      case 'room_joined':
        this.handleRoomJoined(message);
        break;
      
      case 'player_joined':
        this.handlePlayerJoined(message);
        break;
      
      case 'player_left':
        this.handlePlayerLeft(message);
        break;
      
      case 'game_started':
        this.handleGameStarted(message);
        break;
      
      case 'question_started':
        this.handleQuestionStarted(message);
        break;
      
      case 'answer_submitted':
        this.handleAnswerSubmitted(message);
        break;
      
      case 'question_ended':
        this.handleQuestionEnded(message);
        break;
      
      case 'game_ended':
        this.handleGameEnded(message);
        break;
      
      case 'player_typing':
        this.handlePlayerTyping(message);
        break;
      
      case 'room_settings_changed':
        this.handleRoomSettingsChanged(message);
        break;
      
      case 'error':
        this.handleError(message);
        break;
      
      default:
        console.log('🤷 Unhandled message type:', message.type);
    }
  }

  // Enhanced message sending with acknowledgments
  async sendMessage(type: string, data: any = {}, requireAck: boolean = false): Promise<WebSocketMessage | void> {
    const message: WebSocketMessage = {
      type,
      timestamp: Date.now(),
      messageId: this.generateMessageId(),
      data,
      playerId: this.getCurrentPlayerId()
    };

    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
      
      if (requireAck) {
        return this.waitForAck(message.messageId);
      }
    } else {
      // Queue message for when connection is restored
      this.messageQueue.push(message);
      console.log('📝 Message queued (disconnected):', type);
    }
  }

  // Game-specific methods
  async createRoom(gameType: string, settings: any): Promise<void> {
    try {
      const response = await this.sendMessage('create_room', {
        gameType,
        settings,
        playerName: this.getPlayerName()
      }, true);
      
      toastManager.success('🏠 Room created successfully!');
    } catch (error) {
      toastManager.error('❌ Failed to create room');
      throw error;
    }
  }

  async joinRoom(roomCode: string, playerName: string): Promise<void> {
    try {
      await this.sendMessage('join_room', {
        roomCode,
        playerName
      }, true);
      
      toastManager.success(`🎮 Joined room ${roomCode}!`);
    } catch (error) {
      toastManager.error('❌ Failed to join room');
      throw error;
    }
  }

  async startGame(): Promise<void> {
    await this.sendMessage('start_game', {}, true);
  }

  async submitAnswer(questionId: number, answer: any): Promise<void> {
    await this.sendMessage('submit_answer', {
      questionId,
      answer,
      timestamp: Date.now()
    });
  }

  async sendTypingIndicator(isTyping: boolean): Promise<void> {
    await this.sendMessage('typing', { isTyping });
  }

  async leaveRoom(): Promise<void> {
    await this.sendMessage('leave_room');
    currentRoom.set(null);
  }

  // Connection management
  private attemptReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      connectionState.update(state => ({
        ...state,
        error: 'Connection lost - please refresh to reconnect'
      }));
      return;
    }

    this.reconnectAttempts++;
    connectionState.update(state => ({
      ...state,
      reconnecting: true,
      error: `Reconnecting... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`
    }));

    setTimeout(() => {
      this.connect().catch(() => {
        // Will retry automatically
      });
    }, this.reconnectDelay * this.reconnectAttempts);
  }

  private startHeartbeat(): void {
    this.heartbeatInterval = window.setInterval(() => {
      this.sendMessage('ping', { timestamp: Date.now() });
    }, 30000); // Every 30 seconds
  }

  private stopHeartbeat(): void {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  }

  private startLatencyCheck(): void {
    this.latencyCheckInterval = window.setInterval(() => {
      this.sendMessage('ping', { timestamp: Date.now() });
    }, 5000); // Every 5 seconds
  }

  private stopLatencyCheck(): void {
    if (this.latencyCheckInterval) {
      clearInterval(this.latencyCheckInterval);
      this.latencyCheckInterval = null;
    }
  }

  private updateLatency(serverTimestamp: number): void {
    const latency = Date.now() - serverTimestamp;
    let quality: ConnectionState['quality'] = 'excellent';
    
    if (latency > 500) quality = 'poor';
    else if (latency > 200) quality = 'fair';
    else if (latency > 100) quality = 'good';
    
    connectionState.update(state => ({
      ...state,
      latency,
      quality
    }));
  }

  // Message handlers
  private handleRoomJoined(message: WebSocketMessage): void {
    currentRoom.set(message.data.room);
    currentPlayer.set(message.data.player);
    toastManager.success('🎮 Successfully joined the Suhba!');
  }

  private handlePlayerJoined(message: WebSocketMessage): void {
    currentRoom.update(room => {
      if (!room) return room;
      return {
        ...room,
        players: [...room.players, message.data.player]
      };
    });
    
    toastManager.info(`👋 ${message.data.player.name} joined the Suhba`);
  }

  private handlePlayerLeft(message: WebSocketMessage): void {
    currentRoom.update(room => {
      if (!room) return room;
      return {
        ...room,
        players: room.players.filter(p => p.id !== message.data.playerId)
      };
    });
    
    toastManager.info(`👋 ${message.data.playerName} left the Suhba`);
  }

  private handleGameStarted(message: WebSocketMessage): void {
    currentRoom.update(room => {
      if (!room) return room;
      return {
        ...room,
        gameState: {
          ...room.gameState,
          phase: 'question',
          currentQuestion: 0,
          questionStartTime: Date.now()
        }
      };
    });
    
    toastManager.success('🎯 Game started! May Allah bless this Suhba');
  }

  private handleQuestionStarted(message: WebSocketMessage): void {
    currentRoom.update(room => {
      if (!room) return room;
      return {
        ...room,
        gameState: {
          ...room.gameState,
          phase: 'question',
          currentQuestion: message.data.questionNumber,
          questionStartTime: Date.now(),
          answers: {}
        }
      };
    });
  }

  private handleAnswerSubmitted(message: WebSocketMessage): void {
    currentRoom.update(room => {
      if (!room) return room;
      return {
        ...room,
        gameState: {
          ...room.gameState,
          answers: {
            ...room.gameState.answers,
            [message.data.playerId]: message.data.answer
          }
        }
      };
    });
  }

  private handleQuestionEnded(message: WebSocketMessage): void {
    currentRoom.update(room => {
      if (!room) return room;
      return {
        ...room,
        gameState: {
          ...room.gameState,
          phase: 'results',
          scores: message.data.scores
        }
      };
    });
  }

  private handleGameEnded(message: WebSocketMessage): void {
    currentRoom.update(room => {
      if (!room) return room;
      return {
        ...room,
        gameState: {
          ...room.gameState,
          phase: 'finished'
        }
      };
    });
    
    toastManager.success('🏆 Game completed! Barakallahu feekum');
  }

  private handlePlayerTyping(message: WebSocketMessage): void {
    // Handle typing indicators for chat or answer input
    console.log(`✍️ ${message.data.playerName} is typing...`);
  }

  private handleRoomSettingsChanged(message: WebSocketMessage): void {
    currentRoom.update(room => {
      if (!room) return room;
      return {
        ...room,
        settings: { ...room.settings, ...message.data.settings }
      };
    });
  }

  private handleError(message: WebSocketMessage): void {
    toastManager.error(message.data.message || 'An error occurred');
    console.error('🚨 Server error:', message.data);
  }

  // Utility methods
  private generateMessageId(): string {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getCurrentPlayerId(): string | undefined {
    // This would get the current player ID from your app state
    return 'player_' + Math.random().toString(36).substr(2, 9);
  }

  private getPlayerName(): string {
    return localStorage.getItem('suhba-player-name') || 'Anonymous';
  }

  private getErrorMessage(url: string): string {
    if (url.includes('localhost')) {
      return '🔧 Backend server not running - Please start the multiplayer server';
    } else if (!navigator.onLine) {
      return '📡 No internet connection';
    } else {
      return '🔌 Unable to connect to game server';
    }
  }

  private async waitForAck(messageId: string): Promise<WebSocketMessage> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.pendingAcks.delete(messageId);
        reject(new Error('Message acknowledgment timeout'));
      }, 10000);

      this.pendingAcks.set(messageId, { resolve, reject, timeout });
    });
  }

  private processMessageQueue(): void {
    while (this.messageQueue.length > 0 && this.ws?.readyState === WebSocket.OPEN) {
      const message = this.messageQueue.shift();
      if (message) {
        this.ws.send(JSON.stringify(message));
      }
    }
  }

  disconnect(): void {
    this.stopHeartbeat();
    this.stopLatencyCheck();
    
    if (this.ws) {
      this.ws.close(1000, 'Client disconnect');
      this.ws = null;
    }
    
    connectionState.update(state => ({
      ...state,
      connected: false,
      connecting: false,
      reconnecting: false,
      quality: 'disconnected'
    }));
  }
}

// Export singleton instance
export const enhancedWsManager = new EnhancedWebSocketManager();