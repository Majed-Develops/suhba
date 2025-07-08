<script lang="ts">
  import { onMount } from 'svelte';
  import { 
    Book, User, Settings, Play, MessageCircle, ArrowLeft, 
    Check, Heart, Zap, Shield, Star, Crown, Users, Clock, 
    Trophy, RotateCcw, Lightbulb, SkipForward, Moon, Sun, 
    Scroll, Calendar, Scale, Sparkles, Plus, UserCheck, 
    Compass, Target, FileText, Volume2, BookOpen, List, 
    UserPlus, Globe, Shuffle, Coffee, Building, Sunrise, 
    Cog, Settings2, Wrench, ChevronLeft, ChevronRight, CornerUpLeft,
    History, Link, Layers
  } from 'lucide-svelte';
  import { currentLanguage } from '$lib/stores/language';
  import { translations } from '$lib/stores/translations';
  import { newGameContent, getQuestionNames } from '$lib/gameContent';
  import SettingsModal from '$lib/components/SettingsModal.svelte';
  import AuthModal from '$lib/components/AuthModal.svelte';
  import SalahTimer from '$lib/components/SalahTimer.svelte';

  // Reactive state using Svelte 5 runes
  let currentScreen = $state('home');
  let currentGame = $state(null);
  let score = $state(0);
  let round = $state(1);
  let isFlipped = $state(false);
  let theme = $state('desert');
  let chillCategory = $state(null);
  
  // New game mode states
  let gameMode = $state('solo');
  let players = $state([]);
  let currentPlayer = $state(0);
  let teamScores = $state({});
  
  // New states for modals and UI
  let showSettings = $state(false);
  let showAuth = $state(false);
  let showRoomSelector = $state(false);
  let roomCode = $state('');
  let isRoomHost = $state(false);
  let roomPlayers = $state([]);
  let showCopyMessage = $state(false);
  
  // Language and translations  
  const t = $derived(translations[$currentLanguage?.code || 'en']);
  
  // Initialize language store
  onMount(() => {
    currentLanguage.init();
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('suhba-theme');
    if (savedTheme) {
      theme = savedTheme;
    }
    
    // Load points from localStorage
    const savedPoints = localStorage.getItem('suhba-points');
    if (savedPoints) {
      totalPoints = parseInt(savedPoints);
    }
    
    // Cleanup function for Iman Defender
    return () => {
      if (gameLoop) {
        clearInterval(gameLoop);
        gameLoop = null;
      }
    };
  });
  
  // Save points to localStorage whenever they change
  $effect(() => {
    localStorage.setItem('suhba-points', totalPoints.toString());
  });
  

  // Points and rewards system
  let totalPoints = $state(0);
  let showReward = $state(false);
  let rewardMessage = $state('');
  let showTafsirMoment = $state(false);
  let tafsirContent = $state({});
  
  // Game-specific states
  let currentQuestionIndex = $state(0);
  let currentQuestion = $state(null);
  let gameQuestions = $state([]);
  let selectedAnswer = $state(null);
  let showExplanation = $state(false);
  let isCorrect = $state(false);
  let questionNames = $state({});
  
  // New game states
  let currentGameMode = $state(null); // For sub-game modes (timeline, decisions, etc.)
  let draggedEvents = $state([]); // For timeline scramble
  let currentTimelineChapter = $state(null);
  let userOrder = $state([]); // User's arrangement
  let isTimelineComplete = $state(false);
  let matchedPairs = $state([]); // For Hadith matching
  let currentAsmaName = $state(null); // For Asma'ul Husna wheel
  let wheelRotation = $state(0);
  let timeRemaining = $state(30); // Timer for various games
  
  // Iman Defender states
  let imanDefenderActive = $state(false);
  let fallingWords = $state([]); // Array of falling negative words
  let righteousConcepts = $state([]); // 4 righteous concepts at bottom
  let currentWordPair = $state(null);
  let gameSpeed = $state(2);
  let spawnRate = $state(2000);
  let survivalTime = $state(0);
  let accuracy = $state(1.0);
  let hits = $state(0);
  let misses = $state(0);
  let gameScore = $state(0);
  let activePowerups = $state([]);
  let cannonFiring = $state(false);
  let wordId = $state(0); // Unique ID for each falling word
  let gameRunning = $state(false);
  let gameLoop = $state(null);
  let gamePaused = $state(false); // General pause state for all games
  let lastSpawn = $state(0);
  let difficultyTimer = $state(0);
  let consecutiveHits = $state(0);
  let shieldActive = $state(false);
  let pointMultiplier = $state(1);

  const chillContent = {
    prophets: [
      {
        title: "Ibrahim's Ultimate Test",
        story: "When Allah commanded Prophet Ibrahim عليه السلام to sacrifice his beloved son Ismail, both father and son submitted completely to Allah's will. As Ibrahim prepared to carry out the command, Allah replaced Ismail with a ram, showing that true submission to Allah brings the greatest rewards and that Allah never burdens a soul beyond what it can bear.",
        reflection: "How can we show complete trust in Allah's wisdom during our own tests?"
      },
      {
        title: "Musa and the Poor Man",
        story: "Prophet Musa عليه السلام once saw a man making dua for hours. Musa asked Allah why this man's prayers weren't being answered. Allah revealed that the man had a morsel of haram food in his stomach. When Musa told him, the man wept, fasted for 40 days to purify himself, and then his dua was immediately answered.",
        reflection: "How does the purity of our earnings affect the acceptance of our prayers?"
      }
    ],
    sahaba: [
      {
        title: "The Price of Faith",
        story: "Khabbab ibn al-Aratt was a blacksmith and slave who accepted Islam early in Makkah. His owner tortured him daily, heating iron rods and pressing them to his back until his flesh sizzled and stuck to the ground. When he showed his scars to the Prophet ﷺ and asked for relief, the Prophet replied with tears: 'Those before you were sawed in half yet never gave up their faith. By Allah, this matter will be complete until a rider travels from San'a to Hadramawt fearing no one but Allah.' Years later, when Islam triumphed and people asked about his scars, Khabbab smiled: 'This was the price I paid for the light that entered my heart.'",
        reflection: "What sacrifices are we willing to make for our faith and principles?"
      },
      {
        title: "Abu Bakr's Generosity",
        story: "When the Prophet ﷺ called for donations for the Tabuk expedition, Abu Bakr رضي الله عنه brought everything he owned. When asked what he left for his family, he simply said, 'Allah and His Messenger.' His complete trust in Allah's provision and his willingness to give everything for Islam showed the depth of his faith and love for the Prophet ﷺ.",
        reflection: "How can we balance our worldly responsibilities with our spiritual priorities?"
      }
    ]
  };

  const gameTypes = [
    // The Main Games
    { id: 'fiqhMaster', name: 'Fiqh Master', icon: Scale, gradient: 'from-emerald-400 via-teal-400 to-cyan-400', shadow: 'shadow-emerald-500/25' },
    { id: 'wisdomSeeker', name: 'Wisdom Seeker', icon: Lightbulb, gradient: 'from-blue-400 via-indigo-400 to-purple-400', shadow: 'shadow-blue-500/25' },
    { id: 'chroniclesOfFaith', name: 'Chronicles of Faith', icon: Scroll, gradient: 'from-amber-400 via-orange-400 to-red-400', shadow: 'shadow-amber-500/25' },
    
    // Additional Games
    { id: 'hangman', name: 'Guess the Islamic Figure', icon: Users, gradient: 'from-purple-400 via-pink-400 to-red-400', shadow: 'shadow-purple-500/25' },
    { id: 'tilawahTrail', name: 'Tilawah Trail', icon: Book, gradient: 'from-green-400 via-emerald-400 to-teal-400', shadow: 'shadow-green-500/25' },
    
    // New Interactive Games
    { id: 'seerahScenarios', name: 'Seerah Scenarios', icon: History, gradient: 'from-rose-400 via-pink-400 to-fuchsia-400', shadow: 'shadow-rose-500/25' },
    { id: 'hadithLab', name: 'The Hadith Lab', icon: Link, gradient: 'from-violet-400 via-purple-400 to-indigo-400', shadow: 'shadow-violet-500/25' },
    { id: 'pillarFoundations', name: 'Pillar Foundations', icon: Layers, gradient: 'from-cyan-400 via-blue-400 to-indigo-400', shadow: 'shadow-cyan-500/25' },
    
    // Reflex Games (Solo Only)
    { id: 'imanDefender', name: 'Iman Defender', icon: Shield, gradient: 'from-orange-400 via-red-400 to-pink-400', shadow: 'shadow-orange-500/25', soloOnly: true }
  ];

  // Filter games based on game mode
  const availableGames = $derived(
    gameMode === 'team' 
      ? gameTypes.filter(game => !game.soloOnly)
      : gameTypes
  );

  const chillCategories = $derived([
    { id: 'prophets', name: 'Prophets Stories', icon: Star, gradient: 'from-purple-400 via-indigo-400 to-blue-400', shadow: 'shadow-purple-500/25' },
    { id: 'sahaba', name: 'Sahaba Stories', icon: Users, gradient: 'from-emerald-400 via-green-400 to-teal-400', shadow: 'shadow-emerald-500/25' }
  ]);

  const themes = {
    desert: {
      bg: 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50',
      text: 'text-amber-900',
      cardBg: 'bg-white/90 backdrop-blur-sm',
      border: 'border-amber-200/50',
      iconColor: 'text-amber-700',
      suhbaColor: 'text-amber-900'
    },
    scroll: {
      bg: 'bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100',
      text: 'text-amber-800',
      cardBg: 'bg-amber-50/90 backdrop-blur-sm',
      border: 'border-amber-300/50',
      iconColor: 'text-amber-700',
      suhbaColor: 'text-amber-800'
    },
    midnight: {
      bg: 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900',
      text: 'text-slate-100',
      cardBg: 'bg-slate-800/90 backdrop-blur-sm',
      border: 'border-slate-600/50',
      iconColor: 'text-slate-100',
      suhbaColor: 'text-slate-100'
    }
  };

  const currentTheme = $derived(themes[theme]);
  
  // Theme-based login button properties
  const loginButtonProps = $derived({
    desert: { text: $currentLanguage.code === 'ar' ? 'صحبة' : 'Suhba', icon: Coffee },
    scroll: { text: $currentLanguage.code === 'ar' ? 'صحبة' : 'Suhba', icon: Building },
    midnight: { text: $currentLanguage.code === 'ar' ? 'صحبة' : 'Suhba', icon: Sunrise }
  }[theme] || { text: $currentLanguage.code === 'ar' ? 'صحبة' : 'Suhba', icon: Coffee });
  
  // Theme-based settings icon
  const settingsIcon = $derived({
    desert: Cog,
    scroll: Settings2,
    midnight: Wrench
  }[theme] || Settings);
  
  // Theme-based back button properties
  const backButtonProps = $derived({
    desert: { text: t.back || 'Back', icon: ChevronLeft },
    scroll: { text: t.back || 'Back', icon: ChevronRight },
    midnight: { text: t.back || 'Back', icon: CornerUpLeft }
  }[theme] || { text: t.back || 'Back', icon: ArrowLeft });

  function handleCardClick() {
    isFlipped = !isFlipped;
  }

  function startChillCategory(category) {
    chillCategory = category;
    currentScreen = 'chillTell';
    isFlipped = false;
  }

  function handleCorrect() {
    score++;
    round++;
    isFlipped = false;
  }

  function handleSkip() {
    round++;
    isFlipped = false;
  }

  function handleFlipBack() {
    isFlipped = false;
  }

  function initializeGame() {
    if (gameMode === 'team' && players.length > 0) {
      const initialScores = {};
      players.forEach(player => {
        initialScores[player] = 0;
      });
      teamScores = initialScores;
    }
    currentPlayer = 0;
    score = 0;
    round = 1;
  }

  function cycleTheme() {
    if (theme === 'desert') theme = 'scroll';
    else if (theme === 'scroll') theme = 'midnight';
    else theme = 'desert';
    
    // Save to localStorage
    localStorage.setItem('suhba-theme', theme);
  }

  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }


  function resetGameState() {
    selectedAnswer = null;
    showExplanation = false;
    isCorrect = false;
    currentQuestionIndex = 0;
    currentQuestion = null;
    gameQuestions = [];
    questionNames = {};
    showTafsirMoment = false;
    tafsirContent = {};
    gamePaused = false; // Reset pause state
  }


  function startGame(game) {
    // Check if game is coming soon
    if (game.id === 'tilawahTrail') {
      alert('Tilawah Trail - Coming Soon! This exciting Quranic verse completion game is under development.');
      return;
    }
    
    currentGame = game;
    resetGameState();
    
    // Handle different game types
    if (game.id === 'seerahScenarios' || game.id === 'hadithLab' || game.id === 'pillarFoundations') {
      currentScreen = 'gameMode';
    } else if (game.id === 'imanDefender') {
      currentScreen = 'playing';
      initializeImanDefender();
    } else {
      currentScreen = 'playing';
      initializeGameQuestions(game.id);
    }
  }
  
  function initializeGameQuestions(gameId) {
    if (gameId === 'seerahScenarios') {
      // For Seerah Scenarios in prophetic decisions mode
      gameQuestions = [...newGameContent.seerahScenarios.propheticDecisions];
      shuffleArray(gameQuestions);
    } else if (newGameContent[gameId]) {
      gameQuestions = [...newGameContent[gameId]];
      shuffleArray(gameQuestions);
    }
    currentQuestionIndex = 0;
    loadCurrentQuestion();
  }
  
  function loadCurrentQuestion() {
    if (currentQuestionIndex < gameQuestions.length) {
      currentQuestion = gameQuestions[currentQuestionIndex];
      questionNames = getQuestionNames(gameMode, players, currentQuestion);
      selectedAnswer = null;
      showExplanation = false;
      isCorrect = false;
    }
  }
  
  function handleAnswerSelection(answerIndex) {
    selectedAnswer = answerIndex;
    isCorrect = answerIndex === currentQuestion.correct;
    showExplanation = true;
    
    if (isCorrect) {
      // Award points
      const pointsEarned = currentQuestion.difficulty === 'hard' ? 15 : 
                          currentQuestion.difficulty === 'medium' ? 10 : 5;
      totalPoints += pointsEarned;
      
      if (gameMode === 'team') {
        const currentPlayerName = players[currentPlayer];
        teamScores[currentPlayerName] = (teamScores[currentPlayerName] || 0) + pointsEarned;
      } else {
        score += pointsEarned;
      }
      
      // Show reward message
      rewardMessage = `Great job! +${pointsEarned} points`;
      showReward = true;
      setTimeout(() => showReward = false, 2000);
    } else {
      // Show Tafsir Moment for wrong answers
      showTafsirMoment = true;
      tafsirContent = {
        explanation: currentQuestion.explanation,
        hadith: currentQuestion.hadith || null,
        verse: currentQuestion.verse || null
      };
    }
  }
  
  function nextQuestion() {
    if (gameMode === 'team') {
      currentPlayer = (currentPlayer + 1) % players.length;
    }
    
    currentQuestionIndex++;
    round++;
    
    if (currentQuestionIndex < gameQuestions.length) {
      loadCurrentQuestion();
    } else {
      // Game finished
      currentScreen = 'gameComplete';
    }
  }
  
  function closeTafsirMoment() {
    showTafsirMoment = false;
  }
  
  function formatQuestionText(text, names) {
    let formattedText = text;
    
    // Replace character names based on game mode
    if (names.character) {
      formattedText = formattedText.replace(/Ali|Ahmed|Ayub|Amina|Yusuf|Omar/g, names.character);
    }
    if (names.questioner) {
      formattedText = formattedText.replace(/Ahmed|Amina|Yusuf/g, names.questioner);
    }
    if (names.mufti && names.mufti !== 'you') {
      formattedText = formattedText.replace(/you/g, names.mufti);
    }
    
    return formattedText;
  }

  
  // Room management functions
  function createRoom() {
    roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    isRoomHost = true;
    roomPlayers = ['Host']; // Add host as first player
    gameMode = 'team';
    currentScreen = 'roomLobby';
    console.log('Created room:', roomCode);
  }
  
  function joinRoom() {
    if (roomCode.trim()) {
      isRoomHost = false;
      roomPlayers = ['Host', 'Player']; // Simulate joined room
      gameMode = 'team';
      currentScreen = 'roomLobby';
      console.log('Joining room:', roomCode);
    }
  }
  
  function leaveRoom() {
    roomCode = '';
    isRoomHost = false;
    roomPlayers = [];
    gameMode = 'team';
    currentScreen = 'suhbaSelector';
  }
  
  function copyRoomCode() {
    navigator.clipboard.writeText(roomCode).then(() => {
      showCopyMessage = true;
      setTimeout(() => {
        showCopyMessage = false;
      }, 2000);
    });
  }
  
  function startMultiplayerGame() {
    if (roomPlayers.length >= 2) {
      players = [...roomPlayers];
      currentScreen = 'gameSelector';
    }
  }
  
  // New game functions
  function selectGameMode(mode) {
    currentGameMode = mode;
    currentScreen = 'playing';
    
    if (currentGame.id === 'seerahScenarios') {
      if (mode === 'timelineScramble') {
        initializeTimelineScramble();
      } else if (mode === 'propheticDecisions') {
        initializeGameQuestions('seerahScenarios');
      }
    } else if (currentGame.id === 'hadithLab') {
      initializeHadithLab(mode);
    } else if (currentGame.id === 'pillarFoundations') {
      initializePillarFoundations(mode);
    }
  }
  
  function initializeTimelineScramble() {
    const chapters = newGameContent.seerahScenarios.timelineScramble;
    currentTimelineChapter = chapters[Math.floor(Math.random() * chapters.length)];
    draggedEvents = [...currentTimelineChapter.events].sort(() => Math.random() - 0.5);
    userOrder = [];
    isTimelineComplete = false;
  }
  
  function initializeHadithLab(mode) {
    if (mode === 'isnadChains') {
      const chains = newGameContent.hadithLab.isnadChains;
      currentQuestion = chains[Math.floor(Math.random() * chains.length)];
    } else if (mode === 'matnMatching') {
      const matching = newGameContent.hadithLab.matnMatching;
      currentQuestion = matching[Math.floor(Math.random() * matching.length)];
      matchedPairs = [];
    } else if (mode === 'sourceScholar') {
      const scholar = newGameContent.hadithLab.sourceScholar;
      currentQuestion = scholar[Math.floor(Math.random() * scholar.length)];
    }
  }
  
  function initializePillarFoundations(mode) {
    if (mode === 'beliefBuilder') {
      const beliefs = newGameContent.pillarFoundations.beliefBuilder;
      currentQuestion = beliefs[Math.floor(Math.random() * beliefs.length)];
    } else if (mode === 'categorizationBlitz') {
      const categories = newGameContent.pillarFoundations.categorizationBlitz;
      currentQuestion = categories[Math.floor(Math.random() * categories.length)];
      timeRemaining = 30;
    } else if (mode === 'asmaUlHusna') {
      const names = newGameContent.pillarFoundations.asmaUlHusna;
      currentAsmaName = names[Math.floor(Math.random() * names.length)];
      wheelRotation = 0;
      timeRemaining = 15;
    }
  }
  
  // Iman Defender Functions
  function initializeImanDefender() {
    imanDefenderActive = true;
    fallingWords = [];
    righteousConcepts = [];
    gameSpeed = newGameContent.imanDefender.difficulty.baseSpeed;
    spawnRate = newGameContent.imanDefender.difficulty.spawnRate;
    survivalTime = 0;
    accuracy = 1.0;
    hits = 0;
    misses = 0;
    gameScore = 0;
    activePowerups = [];
    cannonFiring = false;
    wordId = 0;
    gameRunning = true;
    lastSpawn = Date.now();
    difficultyTimer = 0;
    consecutiveHits = 0;
    shieldActive = false;
    pointMultiplier = 1;
    
    // Generate initial righteous concepts
    generateRighteousConcepts();
    
    // Start game loop
    startImanDefenderLoop();
  }
  
  function generateRighteousConcepts() {
    const wordPairs = newGameContent.imanDefender.wordPairs;
    const randomPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
    currentWordPair = randomPair;
    
    // Shuffle the positives array and take 4
    const shuffled = [...randomPair.positives].sort(() => Math.random() - 0.5);
    righteousConcepts = shuffled.slice(0, 4);
  }
  
  function startImanDefenderLoop() {
    gameLoop = setInterval(() => {
      updateImanDefenderGame();
    }, 16); // ~60 FPS
  }
  
  function updateImanDefenderGame() {
    if (!gameRunning) return;
    
    const now = Date.now();
    
    // Update survival time
    survivalTime += 16;
    
    // Update difficulty every 10 seconds
    difficultyTimer += 16;
    if (difficultyTimer >= 10000) {
      increaseDifficulty();
      difficultyTimer = 0;
    }
    
    // Spawn new words
    if (now - lastSpawn >= spawnRate) {
      spawnFallingWord();
      lastSpawn = now;
    }
    
    // Update falling words positions
    updateFallingWords();
    
    // Update powerups
    updatePowerups();
    
    // Update score
    gameScore = calculateScore();
  }
  
  function increaseDifficulty() {
    const diff = newGameContent.imanDefender.difficulty;
    gameSpeed = Math.min(gameSpeed + diff.speedIncrease, diff.maxSpeed);
    spawnRate = Math.max(spawnRate - diff.spawnRateDecrease, diff.minSpawnRate);
  }
  
  function spawnFallingWord() {
    const wordPairs = newGameContent.imanDefender.wordPairs;
    const randomWord = wordPairs[Math.floor(Math.random() * wordPairs.length)];
    
    // Check for powerup spawn
    const shouldSpawnPowerup = Math.random() < newGameContent.imanDefender.difficulty.powerupChance;
    
    if (shouldSpawnPowerup) {
      spawnPowerup();
    } else {
      const newWord = {
        id: wordId++,
        text: randomWord.negative,
        arabic: randomWord.arabic,
        correctAnswer: randomWord.correctAnswer,
        x: Math.random() * 300 + 50, // Random horizontal position
        y: -50, // Start above screen
        speed: gameSpeed,
        type: 'negative'
      };
      
      fallingWords = [...fallingWords, newWord];
    }
  }
  
  function spawnPowerup() {
    const powerups = newGameContent.imanDefender.powerups;
    const randomPowerup = powerups[Math.floor(Math.random() * powerups.length)];
    
    const newPowerup = {
      id: wordId++,
      ...randomPowerup,
      x: Math.random() * 300 + 50,
      y: -50,
      speed: gameSpeed * 0.8, // Slightly slower than negative words
      type: 'powerup'
    };
    
    fallingWords = [...fallingWords, newPowerup];
  }
  
  function updateFallingWords() {
    fallingWords = fallingWords.map(word => ({
      ...word,
      y: word.y + word.speed
    })).filter(word => {
      // Remove words that reached the bottom
      if (word.y >= 500) { // Assuming game area height is 500px
        if (word.type === 'negative') {
          // Game over if negative word reaches bottom
          if (!shieldActive) {
            endImanDefenderGame();
            return false;
          } else {
            // Shield protects from one miss
            shieldActive = false;
          }
        }
        return false;
      }
      return true;
    });
  }
  
  function updatePowerups() {
    const now = Date.now();
    activePowerups = activePowerups.filter(powerup => {
      return now - powerup.startTime < powerup.duration;
    });
    
    // Update effects
    pointMultiplier = activePowerups.some(p => p.effect === 'doublePoints') ? 2 : 1;
    shieldActive = activePowerups.some(p => p.effect === 'shield');
  }
  
  function calculateScore() {
    const scoring = newGameContent.imanDefender.scoring;
    let score = hits * scoring.correctHit * pointMultiplier;
    score += Math.floor(survivalTime / 1000) * scoring.survivalBonus;
    score += Math.floor(consecutiveHits / 5) * scoring.accuracyBonus;
    return score;
  }
  
  function handleRighteousConceptClick(concept) {
    if (!gameRunning || cannonFiring) return;
    
    // Find the closest falling negative word
    const negativeWords = fallingWords.filter(w => w.type === 'negative');
    if (negativeWords.length === 0) return;
    
    const closestWord = negativeWords.reduce((closest, word) => {
      return word.y > closest.y ? word : closest;
    });
    
    // Check if correct answer
    if (concept === closestWord.correctAnswer) {
      fireCannonAtWord(closestWord, true);
      hits++;
      consecutiveHits++;
    } else {
      fireCannonAtWord(closestWord, false);
      misses++;
      consecutiveHits = 0;
    }
    
    // Update accuracy
    accuracy = hits / (hits + misses);
    
    // Generate new concepts for next word
    generateRighteousConcepts();
  }
  
  function fireCannonAtWord(word, isCorrect) {
    cannonFiring = true;
    
    // Visual cannon firing effect
    setTimeout(() => {
      if (isCorrect) {
        // Remove the word (successful hit)
        fallingWords = fallingWords.filter(w => w.id !== word.id);
        
        // Add points and effects
        const points = newGameContent.imanDefender.scoring.correctHit * pointMultiplier;
        totalPoints += points;
      }
      cannonFiring = false;
    }, 300);
  }
  
  function handlePowerupClick(powerup) {
    if (!gameRunning) return;
    
    // Remove powerup from falling words
    fallingWords = fallingWords.filter(w => w.id !== powerup.id);
    
    // Activate powerup effect
    activatePowerup(powerup);
    
    // Add powerup points
    const points = newGameContent.imanDefender.scoring.powerupBonus * pointMultiplier;
    totalPoints += points;
  }
  
  function activatePowerup(powerup) {
    const now = Date.now();
    
    switch (powerup.effect) {
      case 'slowMotion':
        gameSpeed *= 0.5;
        setTimeout(() => {
          gameSpeed = newGameContent.imanDefender.difficulty.baseSpeed;
        }, powerup.duration);
        break;
        
      case 'clearAll':
        fallingWords = fallingWords.filter(w => w.type !== 'negative');
        break;
        
      case 'shield':
      case 'highlight':
      case 'doublePoints':
        activePowerups.push({
          ...powerup,
          startTime: now
        });
        break;
    }
  }
  
  function endImanDefenderGame() {
    gameRunning = false;
    imanDefenderActive = false;
    
    if (gameLoop) {
      clearInterval(gameLoop);
      gameLoop = null;
    }
    
    // Show game over screen
    currentScreen = 'gameComplete';
  }
  
  function pauseImanDefender() {
    gameRunning = !gameRunning;
    if (gameRunning) {
      startImanDefenderLoop();
    } else if (gameLoop) {
      clearInterval(gameLoop);
      gameLoop = null;
    }
  }
  
  function pauseGame() {
    gamePaused = !gamePaused;
    
    // For Iman Defender, use the existing specific pause function
    if (currentGame?.id === 'imanDefender') {
      pauseImanDefender();
      return;
    }
    
    // For other games, handle pause state
    if (gamePaused) {
      // Game is now paused - stop any timers if they exist
      if (gameLoop) {
        clearInterval(gameLoop);
        gameLoop = null;
      }
    } else {
      // Game is resumed - restart timers if needed
      // This can be extended based on specific game needs
    }
  }
</script>

{#if currentScreen === 'home'}
  {@const LoginIcon = loginButtonProps.icon}
  {@const SettingsIcon = settingsIcon}
  <div class="min-h-screen {currentTheme.bg} flex flex-col items-center justify-center p-6 relative overflow-hidden" dir="{$currentLanguage.direction}">
    <!-- Top Navigation -->
    <div class="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
      <!-- User Button -->
      <button
        onclick={() => showAuth = true}
        class="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}"
      >
        <LoginIcon class="w-5 h-5 {currentTheme.iconColor}" />
        <span class="font-medium {currentTheme.suhbaColor}">{loginButtonProps.text}</span>
      </button>
      
      <!-- Salah Timer -->
      <SalahTimer {currentTheme} {theme} />
    </div>
    
    <!-- Settings Button -->
    <button
      onclick={() => showSettings = true}
      class="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
    >
      <SettingsIcon class="w-5 h-5 {currentTheme.iconColor}" />
    </button>

    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
    </div>

    <div class="text-center mb-16 relative z-10">
      <div class="mb-6">
        <div class="w-24 h-24 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl transform rotate-12">
          <Book class="w-12 h-12 text-white transform -rotate-12" />
        </div>
      </div>
      <h1 class="text-7xl font-light {currentTheme.suhbaColor} mb-4 font-serif tracking-wide">{t.appTitle}</h1>
      <p class="{currentTheme.text} opacity-80 text-xl font-medium">{t.appTagline}</p>
      <div class="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mt-4"></div>
    </div>

    <div class="space-y-6 w-full max-w-sm relative z-10">
      <button
        onclick={() => currentScreen = 'modeSelector'}
        class="group w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-6 px-8 rounded-3xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div class="relative flex items-center justify-center space-x-3 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}">
          <Play class="w-6 h-6" />
          <span>{t.startGame}</span>
        </div>
      </button>

      <button
        onclick={() => currentScreen = 'chillSelector'}
        class="group w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white py-6 px-8 rounded-3xl font-semibold text-lg shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div class="relative flex items-center justify-center space-x-3 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}">
          <MessageCircle class="w-6 h-6" />
          <span>{t.chillTell}</span>
        </div>
      </button>
    </div>

    <div class="mt-16 relative z-10">
      <button
        onclick={cycleTheme}
        class="{currentTheme.text} opacity-60 hover:opacity-100 transition-all duration-300 text-sm flex items-center space-x-2 px-4 py-2 rounded-full {currentTheme.cardBg} {currentTheme.border} border backdrop-blur-sm"
      >
        {#if theme === 'desert'}
          <Sun class="w-4 h-4" />
        {:else if theme === 'scroll'}
          <Scroll class="w-4 h-4" />
        {:else}
          <Moon class="w-4 h-4" />
        {/if}
        <span>{t.theme}: {theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
      </button>
    </div>
  </div>

{:else if currentScreen === 'modeSelector'}
  {@const SettingsIcon = settingsIcon}
  {@const BackIcon = backButtonProps.icon}
  <div class="min-h-screen {currentTheme.bg} p-6 relative overflow-hidden" dir="{$currentLanguage.direction}">
    <!-- Settings and Salah Timer -->
    <div class="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
      <div></div>
      <SalahTimer {currentTheme} {theme} />
    </div>
    
    <button
      onclick={() => showSettings = true}
      class="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
    >
      <SettingsIcon class="w-5 h-5 {currentTheme.iconColor}" />
    </button>
    
    <div class="max-w-2xl mx-auto relative z-10">
      <div class="flex items-center justify-between mb-12">
        <button
          onclick={() => currentScreen = 'home'}
          class="flex items-center space-x-2 {currentTheme.text} opacity-70 hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl {currentTheme.cardBg} {currentTheme.border} border backdrop-blur-sm"
        >
          <BackIcon class="w-5 h-5 {currentTheme.iconColor}" />
          <span>{backButtonProps.text}</span>
        </button>
        <h2 class="text-3xl font-bold {currentTheme.text}">{t.chooseGameMode}</h2>
        <div></div>
      </div>

      <div class="space-y-8">
        <button
          onclick={() => {
            gameMode = 'solo';
            currentScreen = 'gameSelector';
          }}
          class="group w-full bg-gradient-to-r from-blue-400 to-indigo-500 p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-white"
        >
          <User class="w-16 h-16 mx-auto mb-6" />
          <h3 class="text-2xl font-bold mb-4">{t.soloPlay}</h3>
          <p class="opacity-90 text-lg">{t.soloDescription}</p>
        </button>

        <button
          onclick={() => {
            gameMode = 'team';
            currentScreen = 'suhbaSelector';
          }}
          class="group w-full bg-gradient-to-r from-emerald-400 to-teal-500 p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-white"
        >
          <Users class="w-16 h-16 mx-auto mb-6" />
          <h3 class="text-2xl font-bold mb-4">Suhba Mode</h3>
          <p class="opacity-90 text-lg">Play together with friends and family</p>
        </button>
      </div>
    </div>
  </div>

{:else if currentScreen === 'suhbaSelector'}
  {@const SettingsIcon = settingsIcon}
  {@const BackIcon = backButtonProps.icon}
  <div class="min-h-screen {currentTheme.bg} p-6 relative overflow-hidden" dir="{$currentLanguage.direction}">
    <!-- Settings and Salah Timer -->
    <div class="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
      <div></div>
      <SalahTimer {currentTheme} {theme} />
    </div>
    
    <button
      onclick={() => showSettings = true}
      class="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
    >
      <SettingsIcon class="w-5 h-5 {currentTheme.iconColor}" />
    </button>
    
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <div class="flex items-center justify-between mb-12">
        <button
          onclick={() => currentScreen = 'modeSelector'}
          class="flex items-center space-x-2 {currentTheme.text} opacity-70 hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl {currentTheme.cardBg} {currentTheme.border} border backdrop-blur-sm"
        >
          <BackIcon class="w-5 h-5 {currentTheme.iconColor}" />
          <span>{backButtonProps.text}</span>
        </button>
        <h2 class="text-3xl font-bold {currentTheme.text}">{t.teamPlay}</h2>
        <div></div>
      </div>

      <!-- Room Options -->
      <div class="mb-8">
        <h3 class="text-2xl font-bold {currentTheme.text} mb-6 text-center">{t.roomOptions}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <!-- Create Room -->
          <button
            onclick={createRoom}
            class="group bg-gradient-to-br from-purple-400 to-pink-500 p-6 rounded-3xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 text-white"
          >
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Plus class="w-8 h-8 text-white" />
            </div>
            <h4 class="text-xl font-bold mb-2">{t.createRoom}</h4>
            <p class="text-sm opacity-90">{t.invitePlayers}</p>
          </button>
          
          <!-- Join Room -->
          <div class="group bg-gradient-to-br from-teal-400 to-cyan-500 p-6 rounded-3xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 text-white">
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <UserPlus class="w-8 h-8 text-white" />
            </div>
            <h4 class="text-xl font-bold mb-4">{t.joinRoom}</h4>
            <div class="space-y-3">
              <input
                type="text"
                bind:value={roomCode}
                placeholder="{t.roomCodePlaceholder}"
                class="w-full p-3 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder-white/60 backdrop-blur-sm focus:border-white/40 transition-colors text-center"
                maxlength="6"
              />
              <button
                onclick={joinRoom}
                disabled={!roomCode.trim()}
                class="w-full bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-xl hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
              >
                {t.joinRoom}
              </button>
            </div>
          </div>
          
          <!-- Local Team Setup -->
          <button
            onclick={() => {
              gameMode = 'team';
              players = [];
              currentScreen = 'teamSetup';
            }}
            class="group bg-gradient-to-br from-indigo-400 to-blue-500 p-6 rounded-3xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 text-white"
          >
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users class="w-8 h-8 text-white" />
            </div>
            <h4 class="text-xl font-bold mb-2">{t.teamSetup}</h4>
            <p class="text-sm opacity-90">Local multiplayer</p>
          </button>
        </div>
      </div>

      <!-- Games Section -->
      <div>
        <h3 class="text-2xl font-bold {currentTheme.text} mb-6 text-center">{t.chooseYourGame}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {#each availableGames as game}
          {@const GameIcon = game.icon}
            <button
              onclick={() => startGame(game)}
              class="group relative bg-gradient-to-br {game.gradient} p-8 rounded-3xl hover:shadow-2xl {game.shadow} hover:-translate-y-3 hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative">
                <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GameIcon class="w-8 h-8 text-white" />
                </div>
                <h3 class="text-white font-bold text-xl text-center leading-tight">{game.name}</h3>
                <div class="w-12 h-1 bg-white/40 rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-300"></div>
              </div>
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>

{:else if currentScreen === 'gameSelector'}
  {@const LoginIcon = loginButtonProps.icon}
  {@const BackIcon = backButtonProps.icon}
  <div class="min-h-screen {currentTheme.bg} p-6 relative overflow-hidden" dir="{$currentLanguage.direction}">
    <!-- User, Settings and Salah Timer -->
    <div class="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
      <!-- User Button -->
      <button
        onclick={() => showAuth = true}
        class="flex items-center space-x-2 {currentTheme.cardBg} {currentTheme.border} border backdrop-blur-sm rounded-xl px-4 py-2 {currentTheme.text} opacity-70 hover:opacity-100 transition-all duration-300 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}"
      >
        <LoginIcon class="w-5 h-5 {currentTheme.text}" />
        <span class="font-medium">{loginButtonProps.text}</span>
      </button>
      
      <SalahTimer {currentTheme} {theme} />
      
      <!-- Settings Button -->
      <button
        onclick={() => showSettings = true}
        class="{currentTheme.cardBg} {currentTheme.border} border backdrop-blur-sm rounded-xl p-3 {currentTheme.text} opacity-70 hover:opacity-100 transition-all duration-300"
      >
        <Settings class="w-5 h-5 {currentTheme.text}" />
      </button>
    </div>
    
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <div class="flex items-center justify-between mb-12">
        <button
          onclick={() => {
            if (gameMode === 'solo') {
              currentScreen = 'modeSelector';
            } else if (players.length > 0) {
              currentScreen = 'teamSetup';
            } else {
              currentScreen = 'suhbaSelector';
            }
          }}
          class="flex items-center space-x-2 {currentTheme.text} opacity-70 hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl {currentTheme.cardBg} {currentTheme.border} border backdrop-blur-sm"
        >
          <BackIcon class="w-5 h-5 {currentTheme.iconColor}" />
          <span>{backButtonProps.text}</span>
        </button>
        <h2 class="text-3xl font-bold {currentTheme.text}">{t.chooseYourGame}</h2>
        <div></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each availableGames as game}
          {@const GameIcon = game.icon}
          <button
            onclick={() => startGame(game)}
            class="group relative bg-gradient-to-br {game.gradient} p-8 rounded-3xl hover:shadow-2xl {game.shadow} hover:-translate-y-3 hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative">
              <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <GameIcon class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-white font-bold text-xl text-center leading-tight">{game.name}</h3>
              <div class="w-12 h-1 bg-white/40 rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-300"></div>
            </div>
          </button>
        {/each}
      </div>
    </div>
  </div>

{:else if currentScreen === 'chillSelector'}
  {@const SettingsIcon = settingsIcon}
  {@const BackIcon = backButtonProps.icon}
  <div class="min-h-screen {currentTheme.bg} p-6 relative overflow-hidden" dir="{$currentLanguage.direction}">
    <!-- Settings and Salah Timer -->
    <div class="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
      <div></div>
      <SalahTimer {currentTheme} {theme} />
    </div>
    
    <button
      onclick={() => showSettings = true}
      class="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
    >
      <SettingsIcon class="w-5 h-5 {currentTheme.iconColor}" />
    </button>
    
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <div class="flex items-center justify-between mb-12">
        <button
          onclick={() => currentScreen = 'home'}
          class="flex items-center space-x-2 {currentTheme.text} opacity-70 hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl {currentTheme.cardBg} {currentTheme.border} border backdrop-blur-sm"
        >
          <BackIcon class="w-5 h-5 {currentTheme.iconColor}" />
          <span>{backButtonProps.text}</span>
        </button>
        <h2 class="text-3xl font-bold {currentTheme.text}">Choose a Category</h2>
        <div></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each chillCategories as category}
          {@const CategoryIcon = category.icon}
          <button
            onclick={() => startChillCategory(category)}
            class="group relative bg-gradient-to-br {category.gradient} p-8 rounded-3xl hover:shadow-2xl {category.shadow} hover:-translate-y-3 hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative">
              <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CategoryIcon class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-white font-bold text-xl text-center leading-tight">{category.name}</h3>
              <div class="w-12 h-1 bg-white/40 rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-300"></div>
            </div>
          </button>
        {/each}
      </div>
    </div>
  </div>

{:else if currentScreen === 'playing'}
  {@const BackIcon = backButtonProps.icon}
  {@const SettingsIcon = settingsIcon}
  {@const CurrentGameIcon = currentGame.icon}
  <!-- Unified playing screen with settings and salah timer -->
  <div class="min-h-screen {currentTheme.bg} relative overflow-hidden" dir="{$currentLanguage.direction}">
    <!-- Navigation Header -->
    <div class="relative z-10 p-6">
      <div class="flex items-center justify-between mb-8">
        <button
          onclick={() => currentScreen = 'gameSelector'}
          class="flex items-center space-x-2 {currentTheme.text} opacity-70 hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl {currentTheme.cardBg} {currentTheme.border} border backdrop-blur-sm {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}"
        >
          <BackIcon class="w-5 h-5 {currentTheme.iconColor}" />
          <span>{backButtonProps.text}</span>
        </button>
        
        <div class="flex items-center space-x-6 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}">
          <SalahTimer {currentTheme} {theme} />
          {#if gameMode === 'solo' && currentGame?.id !== 'imanDefender'}
            <button
              onclick={pauseGame}
              class="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
            >
              <span class="{currentTheme.iconColor} text-lg">{gamePaused ? '▶️' : '⏸️'}</span>
            </button>
          {/if}
          <button
            onclick={() => showSettings = true}
            class="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
          >
            <SettingsIcon class="w-5 h-5 {currentTheme.iconColor}" />
          </button>
        </div>
      </div>
      
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold {currentTheme.text}">{currentGame?.name}</h2>
        <div class="flex items-center justify-center space-x-6 text-sm mt-2">
          {#if gameMode === 'team' && players.length > 0}
            <span class="{currentTheme.text} opacity-60">Round {round}</span>
          {:else}
            <span class="{currentTheme.text} opacity-60">Round {round}</span>
            <span class="{currentTheme.text} opacity-60">•</span>
            <span class="{currentTheme.text} opacity-60">Score: {score}</span>
          {/if}
          <span class="{currentTheme.text} opacity-60">•</span>
          <div class="flex items-center space-x-2">
            <Star class="w-4 h-4 text-amber-500" />
            <span class="{currentTheme.text} opacity-60">Total: {totalPoints}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Game Content -->
    <div class="px-6 pb-6">
      {#if currentGame?.id === 'imanDefender' && imanDefenderActive}
        <!-- Iman Defender Game -->
        <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden" style="height: 600px;">
          <!-- Game Header -->
          <div class="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
            <div class="flex items-center space-x-4">
              <div class="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <span class="{currentTheme.text} text-sm font-semibold">Time: {Math.floor(survivalTime / 1000)}s</span>
              </div>
              <div class="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <span class="{currentTheme.text} text-sm font-semibold">Score: {gameScore}</span>
              </div>
              <div class="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <span class="{currentTheme.text} text-sm font-semibold">Accuracy: {Math.floor(accuracy * 100)}%</span>
              </div>
            </div>
            
            <button
              onclick={pauseImanDefender}
              class="bg-white/10 backdrop-blur-sm p-2 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <span class="{currentTheme.text}">{gameRunning ? '⏸️' : '▶️'}</span>
            </button>
          </div>
          
          <!-- Active Powerups Display -->
          {#if activePowerups.length > 0}
            <div class="absolute top-16 right-4 z-10">
              {#each activePowerups as powerup}
                <div class="bg-gradient-to-r from-amber-400/20 to-orange-400/20 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                  <span class="{currentTheme.text} text-xs font-semibold">{powerup.icon} {powerup.name}</span>
                </div>
              {/each}
            </div>
          {/if}
          
          <!-- Game Area -->
          <div class="absolute inset-4 top-20 bottom-24 overflow-hidden rounded-xl bg-gradient-to-b from-sky-400/10 via-blue-400/5 to-purple-400/10">
            <!-- Falling Words -->
            {#each fallingWords as word (word.id)}
              <div 
                class="absolute transition-all duration-75 ease-linear cursor-pointer select-none"
                style="left: {word.x}px; top: {word.y}px;"
                onclick={() => word.type === 'powerup' ? handlePowerupClick(word) : null}
              >
                {#if word.type === 'negative'}
                  <div class="bg-gradient-to-br from-red-400 to-red-600 text-white px-4 py-2 rounded-xl shadow-lg border-2 border-red-300/50 text-center min-w-[120px]">
                    <div class="font-bold text-sm">{word.text}</div>
                    <div class="text-xs opacity-80">{word.arabic}</div>
                  </div>
                {:else if word.type === 'powerup'}
                  <div class="bg-gradient-to-br from-amber-400 to-orange-500 text-white px-3 py-2 rounded-xl shadow-lg border-2 border-amber-300/50 text-center animate-pulse">
                    <div class="text-lg">{word.icon}</div>
                    <div class="text-xs font-semibold">{word.name}</div>
                  </div>
                {/if}
              </div>
            {/each}
            
            <!-- Cannon Visual -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div class="relative">
                <!-- Cannon Base -->
                <div class="w-16 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-b-full"></div>
                <!-- Cannon Barrel -->
                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-full {cannonFiring ? 'animate-pulse' : ''}"></div>
                <!-- Firing Effect -->
                {#if cannonFiring}
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-2 h-4 bg-gradient-to-t from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
                {/if}
              </div>
            </div>
          </div>
          
          <!-- Righteous Concepts Buttons -->
          <div class="absolute bottom-4 left-4 right-4">
            <div class="grid grid-cols-2 gap-3">
              {#each righteousConcepts as concept}
                <button
                  onclick={() => handleRighteousConceptClick(concept)}
                  disabled={!gameRunning || cannonFiring}
                  class="bg-gradient-to-br from-emerald-400 to-teal-500 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed {
                    activePowerups.some(p => p.effect === 'highlight') && concept === currentWordPair?.correctAnswer ? 'ring-4 ring-amber-400 ring-opacity-75' : ''
                  }"
                >
                  {concept}
                </button>
              {/each}
            </div>
          </div>
          
          <!-- Shield Active Indicator -->
          {#if shieldActive}
            <div class="absolute inset-0 border-4 border-blue-400 rounded-3xl animate-pulse pointer-events-none">
              <div class="absolute top-2 left-2 bg-blue-400 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                🛡️ Shield Active
              </div>
            </div>
          {/if}
        </div>
        
      {:else if currentGame?.id === 'seerahScenarios' && currentGameMode === 'timelineScramble'}
        <!-- Timeline Scramble Game -->
        {#if currentTimelineChapter}
          <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-8 backdrop-blur-sm">
            <div class="text-center mb-8">
              <div class="w-16 h-16 bg-gradient-to-br {currentGame.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CurrentGameIcon class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-2xl font-semibold {currentTheme.text} mb-2">{currentTimelineChapter.chapter}</h3>
              <p class="{currentTheme.text} opacity-70">{currentTimelineChapter.background}</p>
            </div>
            
            <div class="mb-8">
              <h4 class="font-semibold {currentTheme.text} mb-4">Arrange these events in chronological order:</h4>
              <div class="grid grid-cols-1 gap-4">
                {#each draggedEvents as event, index}
                  <div 
                    class="p-4 rounded-xl border-2 {currentTheme.cardBg} {currentTheme.border} cursor-move hover:border-blue-300/50 transition-all duration-300"
                    draggable="true"
                  >
                    <div class="flex items-center space-x-3">
                      <div class="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <span class="{currentTheme.text} flex-1">{event.text}</span>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
            
            <div class="text-center">
              <button
                onclick={() => {
                  // Simple check for now - in a real implementation, you'd handle drag/drop
                  const isCorrect = draggedEvents.every((event, index) => event.order === index + 1);
                  if (isCorrect) {
                    alert('Perfect! You got the timeline right!');
                    currentScreen = 'gameComplete';
                  } else {
                    alert('Not quite right. Try rearranging the events!');
                  }
                }}
                class="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Check Timeline
              </button>
            </div>
          </div>
        {/if}
        
      {:else if currentQuestion}
        <!-- Regular Question-Answer Game -->
        <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-8 backdrop-blur-sm">
          <!-- Question Display -->
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-br {currentGame.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CurrentGameIcon class="w-8 h-8 text-white" />
            </div>
            
            <!-- Show current player's turn in multiplayer -->
            {#if gameMode === 'team' && players.length > 0}
              <div class="mb-6">
                <div class="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100/20 to-teal-100/20 px-4 py-2 rounded-full">
                  <User class="w-5 h-5 {currentTheme.text}" />
                  <span class="{currentTheme.text} font-semibold">{players[currentPlayer]}'s Turn</span>
                </div>
              </div>
            {/if}
            
            <h3 class="text-xl font-semibold {currentTheme.text} mb-6 leading-relaxed">
              {#if currentQuestion.scenario}
                {formatQuestionText(currentQuestion.scenario, questionNames)}
              {:else if currentQuestion.hadithText}
                {currentQuestion.hadithText}
              {:else if currentQuestion.prompt}
                {formatQuestionText(currentQuestion.prompt, questionNames)}
              {:else}
                {currentQuestion.text || 'Question content'}
              {/if}
            </h3>
          </div>
          
          <!-- Answer Options -->
          {#if currentQuestion.options}
            <div class="space-y-4 mb-8">
              {#each currentQuestion.options as option, index}
                <button
                  onclick={() => !showExplanation && handleAnswerSelection(index)}
                  disabled={showExplanation}
                  class="w-full p-4 rounded-xl text-left transition-all duration-300 border-2 {
                    showExplanation 
                      ? (index === currentQuestion.correct 
                          ? 'bg-green-100/20 border-green-300/50 {currentTheme.text}' 
                          : (index === selectedAnswer 
                              ? 'bg-red-100/20 border-red-300/50 {currentTheme.text}' 
                              : '{currentTheme.cardBg} {currentTheme.border} opacity-50'))
                      : 'hover:bg-gradient-to-r hover:from-blue-100/20 hover:to-purple-100/20 hover:border-blue-300/50 {currentTheme.cardBg} {currentTheme.border}'
                  } {currentTheme.text}"
                >
                  <div class="flex items-center space-x-4">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-bold text-sm">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span class="flex-1">{option}</span>
                    {#if showExplanation}
                      {#if index === currentQuestion.correct}
                        <Check class="w-5 h-5 text-green-600" />
                      {:else if index === selectedAnswer}
                        <ArrowLeft class="w-5 h-5 text-red-600 rotate-45" />
                      {/if}
                    {/if}
                  </div>
                </button>
              {/each}
            </div>
          {/if}
          
          <!-- Explanation Section -->
          {#if showExplanation}
            <div class="bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-2xl p-6 mb-6">
              <div class="flex items-center space-x-2 mb-4">
                <Lightbulb class="w-5 h-5 text-blue-600" />
                <h4 class="font-semibold {currentTheme.text}">Explanation</h4>
              </div>
              <p class="{currentTheme.text} opacity-80 leading-relaxed">
                {currentQuestion.explanation}
              </p>
              
              {#if currentQuestion.lesson}
                <div class="mt-4 p-4 bg-gradient-to-r from-emerald-100/20 to-teal-100/20 rounded-xl">
                  <p class="{currentTheme.text} opacity-80 italic text-sm font-medium">
                    Lesson: {currentQuestion.lesson}
                  </p>
                </div>
              {/if}
              
              {#if currentQuestion.hadith}
                <div class="mt-4 p-4 bg-gradient-to-r from-amber-100/20 to-orange-100/20 rounded-xl">
                  <p class="{currentTheme.text} opacity-80 italic text-sm">
                    "{currentQuestion.hadith}"
                  </p>
                </div>
              {/if}
            </div>
            
            <div class="text-center">
              <button
                onclick={nextQuestion}
                class="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold flex items-center space-x-2 mx-auto"
              >
                <SkipForward class="w-5 h-5 {currentTheme.iconColor}" />
                <span>Next Question</span>
              </button>
            </div>
          {/if}
        </div>
      {:else}
        <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-8 backdrop-blur-sm text-center">
          <h3 class="text-xl font-semibold {currentTheme.text} mb-4">Loading...</h3>
          <p class="{currentTheme.text} opacity-70">Preparing your questions...</p>
        </div>
      {/if}
    </div>
    
    <!-- Team Scores (if team mode) -->
    {#if gameMode === 'team' && players.length > 0}
      <div class="px-6 pb-6">
        <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-6 backdrop-blur-sm">
          <h3 class="text-lg font-semibold {currentTheme.text} mb-4 text-center">{t.teamScores}</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {#each players as player, index}
              <div 
                class="p-3 rounded-xl text-center transition-all duration-300 {
                  index === currentPlayer 
                    ? 'bg-gradient-to-r from-emerald-100/30 to-teal-100/30 border-2 border-emerald-300/50' 
                    : 'bg-gradient-to-r from-gray-100/20 to-gray-200/20'
                }"
              >
                <p class="{currentTheme.text} font-medium">{player}</p>
                <p class="{currentTheme.text} text-2xl font-bold">{teamScores[player] || 0}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/if}
    
    <!-- Pause Overlay for Solo Mode Games -->
    {#if gameMode === 'solo' && gamePaused && currentGame?.id !== 'imanDefender'}
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-8 backdrop-blur-sm text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span class="text-white text-2xl">⏸️</span>
          </div>
          <h3 class="text-2xl font-bold {currentTheme.text} mb-4">Game Paused</h3>
          <p class="{currentTheme.text} opacity-80 mb-6">Take a break and come back when you're ready!</p>
          <button
            onclick={pauseGame}
            class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Resume Game
          </button>
        </div>
      </div>
    {/if}
  </div>

{:else if currentScreen === 'roomLobby'}
  {@const SettingsIcon = settingsIcon}
  {@const BackIcon = backButtonProps.icon}
  <div class="min-h-screen {currentTheme.bg} p-6 relative overflow-hidden" dir="{$currentLanguage.direction}">
    <!-- Settings and Salah Timer -->
    <div class="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
      <div></div>
      <SalahTimer {currentTheme} {theme} />
    </div>
    
    <button
      onclick={() => showSettings = true}
      class="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
    >
      <SettingsIcon class="w-5 h-5 {currentTheme.iconColor}" />
    </button>
    
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-4xl mx-auto relative z-10">
      <div class="flex items-center justify-between mb-12">
        <button
          onclick={leaveRoom}
          class="flex items-center space-x-2 {currentTheme.text} opacity-70 hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl {currentTheme.cardBg} {currentTheme.border} border backdrop-blur-sm"
        >
          <BackIcon class="w-5 h-5 {currentTheme.iconColor}" />
          <span>{backButtonProps.text}</span>
        </button>
        <h2 class="text-3xl font-bold {currentTheme.text}">{t.roomOptions}</h2>
        <div></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Room Info -->
        <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-8 backdrop-blur-sm">
          <div class="text-center mb-8">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Globe class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold {currentTheme.text} mb-2">Room Code</h3>
            <div class="bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-2xl p-6 mb-4">
              <div class="text-4xl font-mono font-bold {currentTheme.text} tracking-wider">{roomCode}</div>
            </div>
            
            <div class="flex space-x-3 justify-center {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}">
              <button
                onclick={copyRoomCode}
                class="bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center space-x-2 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}"
              >
                <Shuffle class="w-4 h-4" />
                <span class="text-sm font-medium">{t.copyRoomCode}</span>
              </button>
              
              {#if showCopyMessage}
                <div class="bg-green-500 text-white px-4 py-3 rounded-xl text-sm font-medium animate-fade-in">
                  {t.roomCodeCopied}
                </div>
              {/if}
            </div>
            
            <p class="{currentTheme.text} opacity-60 text-sm mt-4">{t.shareRoomCode}</p>
          </div>
        </div>

        <!-- Players List -->
        <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-8 backdrop-blur-sm">
          <div class="flex items-center space-x-3 mb-6 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}">
            <Users class="w-6 h-6 {currentTheme.text}" />
            <h3 class="text-xl font-bold {currentTheme.text}">{t.playersInRoom}</h3>
            <span class="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {roomPlayers.length}
            </span>
          </div>
          
          <div class="space-y-3 mb-8">
            {#each roomPlayers as player, index}
              <div class="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-gray-100/20 to-gray-200/20 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}">
                <div class="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                  <User class="w-5 h-5 text-white" />
                </div>
                <div class="flex-1">
                  <p class="{currentTheme.text} font-medium">{player}</p>
                  {#if index === 0}
                    <p class="{currentTheme.text} opacity-60 text-sm">Host</p>
                  {/if}
                </div>
                {#if isRoomHost && index === 0}
                  <Crown class="w-5 h-5 text-amber-500" />
                {/if}
              </div>
            {/each}
          </div>
          
          {#if roomPlayers.length < 2}
            <div class="text-center py-8">
              <div class="w-16 h-16 bg-gradient-to-br from-gray-300/20 to-gray-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock class="w-8 h-8 {currentTheme.text} opacity-50" />
              </div>
              <p class="{currentTheme.text} opacity-60">{t.waitingForPlayers}</p>
            </div>
          {:else if isRoomHost}
            <button
              onclick={startMultiplayerGame}
              class="w-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-3 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}"
            >
              <Play class="w-6 h-6" />
              <span>{t.startMultiplayerGame}</span>
            </button>
          {:else}
            <div class="text-center py-4">
              <p class="{currentTheme.text} opacity-60">Waiting for host to start the game...</p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>

{:else if currentScreen === 'teamSetup'}
  {@const SettingsIcon = settingsIcon}
  {@const BackIcon = backButtonProps.icon}
  <div class="min-h-screen {currentTheme.bg} p-6 relative overflow-hidden" dir="{$currentLanguage.direction}">
    <!-- Settings and Salah Timer -->
    <div class="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
      <div></div>
      <SalahTimer {currentTheme} {theme} />
    </div>
    
    <button
      onclick={() => showSettings = true}
      class="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
    >
      <SettingsIcon class="w-5 h-5 {currentTheme.iconColor}" />
    </button>
    
    <div class="max-w-2xl mx-auto relative z-10">
      <div class="flex items-center justify-between mb-12">
        <button
          onclick={() => currentScreen = 'suhbaSelector'}
          class="flex items-center space-x-2 {currentTheme.text} opacity-70 hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl {currentTheme.cardBg} {currentTheme.border} border backdrop-blur-sm"
        >
          <BackIcon class="w-5 h-5 {currentTheme.iconColor}" />
          <span>{backButtonProps.text}</span>
        </button>
        <h2 class="text-3xl font-bold {currentTheme.text}">{t.teamSetup}</h2>
        <div></div>
      </div>

      <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-8 backdrop-blur-sm">
        <h3 class="text-xl font-bold {currentTheme.text} mb-6">{t.addPlayers}</h3>
        
        <!-- Add Player Input -->
        <div class="flex space-x-3 mb-6 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}">
          <input
            type="text"
            placeholder="{t.playerName}"
            class="flex-1 p-4 rounded-xl border-2 {currentTheme.border} {currentTheme.cardBg} {currentTheme.text} placeholder-opacity-60 backdrop-blur-sm focus:border-emerald-300 transition-colors"
            onkeydown={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                players = [...players, e.target.value.trim()];
                e.target.value = '';
              }
            }}
          />
          <button
            onclick={(e) => {
              const input = e.target.parentElement.querySelector('input');
              if (input.value.trim()) {
                players = [...players, input.value.trim()];
                input.value = '';
              }
            }}
            class="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <Plus class="w-5 h-5 {currentTheme.iconColor}" />
          </button>
        </div>
        
        <!-- Players List -->
        {#if players.length > 0}
          <div class="space-y-3 mb-6">
            {#each players as player, index}
              <div class="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-emerald-100/20 to-teal-100/20 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}">
                <User class="w-5 h-5 {currentTheme.text}" />
                <span class="{currentTheme.text} font-medium flex-1">{player}</span>
                <button
                  onclick={() => players = players.filter((_, i) => i !== index)}
                  class="text-red-500 hover:text-red-700 transition-colors"
                >
                  <ArrowLeft class="w-4 h-4 rotate-45" />
                </button>
              </div>
            {/each}
          </div>
        {/if}
        
        {#if players.length >= 2}
          <button
            onclick={() => {
              initializeGame();
              currentScreen = 'gameSelector';
            }}
            class="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-3 {$currentLanguage.direction === 'rtl' ? 'space-x-reverse' : ''}"
          >
            <Play class="w-6 h-6" />
            <span>{t.startTeamGame} ({players.length} {t.players})</span>
          </button>
        {:else}
          <p class="{currentTheme.text} opacity-60 text-center py-4">Add at least 2 players to start</p>
        {/if}
      </div>
    </div>
  </div>

{:else if currentScreen === 'chillTell'}
  {@const stories = chillContent[chillCategory?.id] || []}
  {@const story = stories[0]}
  {#if story}
    <div class="min-h-screen {currentTheme.bg} p-6 relative overflow-hidden" dir="{$currentLanguage.direction}">
      <!-- Settings and Salah Timer -->
      <div class="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
        <div></div>
        <SalahTimer {currentTheme} {theme} />
      </div>
      
      <button
        onclick={() => showSettings = true}
        class="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
      >
        <Settings class="w-5 h-5 {currentTheme.text}" />
      </button>
      
      <!-- Background decoration -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-5xl mx-auto relative z-10">
        <div class="flex items-center justify-between mb-12">
          <button
            onclick={() => currentScreen = 'chillSelector'}
            class="flex items-center space-x-2 {currentTheme.text} opacity-70 hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl {currentTheme.cardBg} {currentTheme.border} border backdrop-blur-sm"
          >
            <ArrowLeft class="w-5 h-5 {currentTheme.iconColor}" />
            <span>{t.back}</span>
          </button>
          <h2 class="text-2xl font-bold {currentTheme.text}">{chillCategory?.name} Stories</h2>
          <div></div>
        </div>

        <div class="mb-16">
          <div class="perspective-1000 w-full max-w-lg mx-auto">
            <div 
              class="relative w-full h-96 transform-style-preserve-3d transition-all duration-700 cursor-pointer {isFlipped ? 'rotate-y-180' : ''} hover:scale-105"
              onclick={handleCardClick}
              role="button"
              tabindex="0"
              onkeydown={(e) => e.key === 'Enter' && handleCardClick()}
            >
              <!-- Front of card -->
              <div class="absolute inset-0 w-full h-full backface-hidden">
                <div class="w-full h-full {currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center backdrop-blur-sm">
                  <div class="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Book class="w-8 h-8 text-white" />
                  </div>
                  <h3 class="text-xl font-semibold text-center {currentTheme.text} mb-6 leading-relaxed">
                    {story.title}
                  </h3>
                  <div class="text-center {currentTheme.text} opacity-60 text-sm flex items-center space-x-2">
                    <div class="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                    <span>{t.tapToReveal}</span>
                    <div class="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              <!-- Back of card -->
              <div class="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                <div class="w-full h-full bg-gradient-to-br from-emerald-400/10 via-teal-400/10 to-cyan-400/10 {currentTheme.cardBg} border-2 border-emerald-300/50 rounded-3xl shadow-2xl p-8 flex flex-col justify-center backdrop-blur-sm">
                  <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <Check class="w-8 h-8 text-white" />
                  </div>
                  <div class="text-center">
                    <h4 class="text-lg font-semibold {currentTheme.text} mb-4 leading-relaxed">
                      {story.story}
                    </h4>
                    {#if story.reflection}
                      <div class="mt-6 p-4 bg-gradient-to-r from-emerald-100/20 to-teal-100/20 rounded-2xl">
                        <MessageCircle class="w-5 h-5 mx-auto mb-2 text-emerald-600" />
                        <p class="{currentTheme.text} opacity-80 text-sm italic">{story.reflection}</p>
                      </div>
                    {/if}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {#if isFlipped}
          <div class="text-center">
            <button
              onclick={handleFlipBack}
              class="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-12 py-6 rounded-3xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-bold text-lg flex items-center space-x-4 mx-auto hover:scale-105"
            >
              <MessageCircle class="w-6 h-6" />
              <span>{t.discussThis}</span>
            </button>
          </div>
        {/if}
      </div>
    </div>
  {/if}

{:else if currentScreen === 'gameComplete'}
  {@const SettingsIcon = settingsIcon}
  <div class="min-h-screen {currentTheme.bg} p-6 relative overflow-hidden" dir="{$currentLanguage.direction}">
    <!-- Settings and Salah Timer -->
    <div class="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
      <div></div>
      <SalahTimer {currentTheme} {theme} />
    </div>
    
    <button
      onclick={() => showSettings = true}
      class="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
    >
      <SettingsIcon class="w-5 h-5 {currentTheme.iconColor}" />
    </button>
    
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-4xl mx-auto relative z-10">
      <div class="flex items-center justify-between mb-12">
        <button
          onclick={() => currentScreen = 'gameSelector'}
          class="flex items-center space-x-2 {currentTheme.text} opacity-70 hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl {currentTheme.cardBg} {currentTheme.border} border backdrop-blur-sm"
        >
          <ArrowLeft class="w-5 h-5 {currentTheme.iconColor}" />
          <span>Back to Games</span>
        </button>
        <h2 class="text-3xl font-bold {currentTheme.text}">Game Complete!</h2>
        <div></div>
      </div>

      <div class="text-center mb-12">
        <div class="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Trophy class="w-12 h-12 text-white" />
        </div>
        <h3 class="text-2xl font-bold {currentTheme.text} mb-4">Congratulations!</h3>
        <p class="{currentTheme.text} opacity-70 text-lg">You've completed {currentGame?.name}</p>
      </div>

      {#if currentGame?.id === 'imanDefender'}
        <!-- Iman Defender Specific Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-6 backdrop-blur-sm text-center">
            <Clock class="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 class="text-lg font-semibold {currentTheme.text} mb-2">Survival Time</h4>
            <p class="text-3xl font-bold {currentTheme.text}">{Math.floor(survivalTime / 1000)}s</p>
          </div>
          
          <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-6 backdrop-blur-sm text-center">
            <Target class="w-8 h-8 text-emerald-500 mx-auto mb-3" />
            <h4 class="text-lg font-semibold {currentTheme.text} mb-2">Accuracy</h4>
            <p class="text-3xl font-bold {currentTheme.text}">{Math.floor(accuracy * 100)}%</p>
          </div>
          
          <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-6 backdrop-blur-sm text-center">
            <Star class="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <h4 class="text-lg font-semibold {currentTheme.text} mb-2">Final Score</h4>
            <p class="text-3xl font-bold {currentTheme.text}">{gameScore}</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-6 backdrop-blur-sm text-center">
            <Shield class="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h4 class="text-lg font-semibold {currentTheme.text} mb-2">Words Defeated</h4>
            <p class="text-3xl font-bold {currentTheme.text}">{hits}</p>
          </div>
          
          <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-6 backdrop-blur-sm text-center">
            <Zap class="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <h4 class="text-lg font-semibold {currentTheme.text} mb-2">Best Streak</h4>
            <p class="text-3xl font-bold {currentTheme.text}">{consecutiveHits}</p>
          </div>
        </div>
      {:else}
        <!-- Regular Game Stats -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <!-- Total Points -->
          <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-6 backdrop-blur-sm text-center">
            <Star class="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <h4 class="text-lg font-semibold {currentTheme.text} mb-2">Total Points</h4>
            <p class="text-3xl font-bold {currentTheme.text}">{totalPoints}</p>
          </div>
          
          <!-- Questions Answered -->
          <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-6 backdrop-blur-sm text-center">
            <Check class="w-8 h-8 text-emerald-500 mx-auto mb-3" />
            <h4 class="text-lg font-semibold {currentTheme.text} mb-2">Questions</h4>
            <p class="text-3xl font-bold {currentTheme.text}">{currentQuestionIndex}</p>
          </div>
        </div>
      {/if}

      <!-- Team Scores (if multiplayer) -->
      {#if gameMode === 'team' && players.length > 0}
        <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-8 backdrop-blur-sm mb-8">
          <h3 class="text-xl font-bold {currentTheme.text} mb-6 text-center">Final Scores</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {#each players as player}
              <div class="p-4 rounded-xl text-center bg-gradient-to-r from-emerald-100/20 to-teal-100/20">
                <User class="w-6 h-6 {currentTheme.text} mx-auto mb-2" />
                <p class="{currentTheme.text} font-medium">{player}</p>
                <p class="{currentTheme.text} text-2xl font-bold">{teamScores[player] || 0}</p>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <div class="text-center space-y-4">
        <button
          onclick={() => {
            currentScreen = 'gameSelector';
            resetGameState();
          }}
          class="bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold mr-4"
        >
          Play Again
        </button>
        <button
          onclick={() => currentScreen = 'home'}
          class="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
        >
          Home
        </button>
      </div>
    </div>
  </div>

{:else if currentScreen === 'gameMode'}
  {@const SettingsIcon = settingsIcon}
  {@const BackIcon = backButtonProps.icon}
  {@const CurrentGameIcon = currentGame.icon}
  <div class="min-h-screen {currentTheme.bg} p-6 relative overflow-hidden" dir="{$currentLanguage.direction}">
    <!-- Settings and Salah Timer -->
    <div class="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
      <div></div>
      <SalahTimer {currentTheme} {theme} />
    </div>
    
    <button
      onclick={() => showSettings = true}
      class="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
    >
      <SettingsIcon class="w-5 h-5 {currentTheme.iconColor}" />
    </button>
    
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-4xl mx-auto relative z-10">
      <div class="flex items-center justify-between mb-12">
        <button
          onclick={() => currentScreen = 'gameSelector'}
          class="flex items-center space-x-2 {currentTheme.text} opacity-70 hover:opacity-100 transition-all duration-300 px-4 py-2 rounded-xl {currentTheme.cardBg} {currentTheme.border} border backdrop-blur-sm"
        >
          <BackIcon class="w-5 h-5 {currentTheme.iconColor}" />
          <span>{backButtonProps.text}</span>
        </button>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-gradient-to-br {currentGame.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CurrentGameIcon class="w-8 h-8 text-white" />
          </div>
          <h2 class="text-3xl font-bold {currentTheme.text}">{currentGame?.name}</h2>
          <p class="{currentTheme.text} opacity-60">Choose Your Challenge</p>
        </div>
        <div></div>
      </div>

      <!-- Game Mode Options -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#if currentGame?.id === 'seerahScenarios'}
          <!-- Timeline Scramble -->
          <button
            onclick={() => selectGameMode('timelineScramble')}
            class="group bg-gradient-to-br from-amber-400 to-orange-500 p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 text-white"
          >
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Calendar class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-4">Timeline Scramble</h3>
            <p class="text-sm opacity-90">Arrange Seerah events in chronological order</p>
          </button>
          
          <!-- Prophetic Decisions -->
          <button
            onclick={() => selectGameMode('propheticDecisions')}
            class="group bg-gradient-to-br from-emerald-400 to-teal-500 p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 text-white"
          >
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-4">Prophetic Decisions</h3>
            <p class="text-sm opacity-90">Learn from the Prophet's ﷺ wise choices</p>
          </button>
          
        {:else if currentGame?.id === 'hadithLab'}
          <!-- Isnad Chains -->
          <button
            onclick={() => selectGameMode('isnadChains')}
            class="group bg-gradient-to-br from-violet-400 to-purple-500 p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 text-white"
          >
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Link class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-4">Link the Chain</h3>
            <p class="text-sm opacity-90">Connect narrators in correct Isnad order</p>
          </button>
          
          <!-- Matn Matching -->
          <button
            onclick={() => selectGameMode('matnMatching')}
            class="group bg-gradient-to-br from-blue-400 to-indigo-500 p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 text-white"
          >
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-4">Match the Matn</h3>
            <p class="text-sm opacity-90">Connect Hadith texts to their meanings</p>
          </button>
          
          <!-- Source Scholar -->
          <button
            onclick={() => selectGameMode('sourceScholar')}
            class="group bg-gradient-to-br from-teal-400 to-cyan-500 p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 text-white"
          >
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-4">Source Scholar</h3>
            <p class="text-sm opacity-90">Identify the correct Hadith collections</p>
          </button>
          
        {:else if currentGame?.id === 'pillarFoundations'}
          <!-- Belief Builder -->
          <button
            onclick={() => selectGameMode('beliefBuilder')}
            class="group bg-gradient-to-br from-cyan-400 to-blue-500 p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 text-white"
          >
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Layers class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-4">Belief Builder</h3>
            <p class="text-sm opacity-90">Build pillars by identifying beliefs</p>
          </button>
          
          <!-- Categorization Blitz -->
          <button
            onclick={() => selectGameMode('categorizationBlitz')}
            class="group bg-gradient-to-br from-rose-400 to-pink-500 p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 text-white"
          >
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-4">Categorization Blitz</h3>
            <p class="text-sm opacity-90">Quick-fire categorization challenge</p>
          </button>
          
          <!-- Asma'ul Husna Ring -->
          <button
            onclick={() => selectGameMode('asmaUlHusna')}
            class="group bg-gradient-to-br from-emerald-400 to-green-500 p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 text-white"
          >
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Star class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-4">Asma'ul Husna Ring</h3>
            <p class="text-sm opacity-90">Spin to match Allah's beautiful names</p>
          </button>
        {/if}
      </div>
    </div>
  </div>
{/if}

<!-- Modals -->
<SettingsModal 
  isOpen={showSettings} 
  onClose={() => showSettings = false}
  currentTheme={currentTheme}
  onThemeChange={(newTheme) => {
    theme = newTheme;
    localStorage.setItem('suhba-theme', theme);
  }}
/>

<AuthModal 
  isOpen={showAuth} 
  onClose={() => showAuth = false}
/>

<!-- Tafsir Moment Modal -->
{#if showTafsirMoment}
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6">
    <div class="{currentTheme.cardBg} {currentTheme.border} border-2 rounded-3xl p-8 backdrop-blur-sm max-w-2xl w-full">
      <div class="text-center mb-6">
        <div class="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Book class="w-8 h-8 text-white" />
        </div>
        <h3 class="text-2xl font-bold {currentTheme.text} mb-2">Tafsir Moment</h3>
        <p class="{currentTheme.text} opacity-60">Learn from this moment</p>
      </div>
      
      <div class="space-y-4">
        <div class="bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-2xl p-6">
          <h4 class="font-semibold {currentTheme.text} mb-3">Explanation</h4>
          <p class="{currentTheme.text} opacity-80 leading-relaxed">
            {tafsirContent.explanation}
          </p>
        </div>
        
        {#if tafsirContent.hadith}
          <div class="bg-gradient-to-r from-amber-100/20 to-orange-100/20 rounded-2xl p-6">
            <h4 class="font-semibold {currentTheme.text} mb-3">Related Hadith</h4>
            <p class="{currentTheme.text} opacity-80 italic leading-relaxed">
              "{tafsirContent.hadith}"
            </p>
          </div>
        {/if}
        
        {#if tafsirContent.verse}
          <div class="bg-gradient-to-r from-emerald-100/20 to-teal-100/20 rounded-2xl p-6">
            <h4 class="font-semibold {currentTheme.text} mb-3">Related Verse</h4>
            <p class="{currentTheme.text} opacity-80 leading-relaxed">
              {tafsirContent.verse}
            </p>
          </div>
        {/if}
      </div>
      
      <div class="text-center mt-8">
        <button
          onclick={closeTafsirMoment}
          class="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
        >
          Continue Learning
        </button>
      </div>
    </div>
  </div>
{/if}

<!-- Reward Notification -->
{#if showReward}
  <div class="fixed top-24 right-6 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-fade-in">
    <div class="flex items-center space-x-2">
      <Trophy class="w-5 h-5 {currentTheme.iconColor}" />
      <span class="font-semibold">{rewardMessage}</span>
    </div>
  </div>
{/if}

