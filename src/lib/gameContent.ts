// New game content for the three main games
export const newGameContent = {
  // Game One: "Fiqh Master" - General Knowledge (Fiqh Focus)
  fiqhMaster: [
    {
      prompt: "Ali went late to Maghrib prayer and missed 2 raka'as. What is the order of how he should pray those 2 after Imam finishes salah?",
      options: [
        "First raka'a after salam he doesn't remain seated, second raka'a he remains seated for tashahud",
        "First raka'a after salam he remains seated, second raka'a he remains seated for tashahud",
        "He should pray 3 raka'as since he missed 2",
        "He should wait for the next prayer"
      ],
      correct: 1,
      explanation: "When Ali entered the salah and attended only the 3rd raka'a, that means the 3rd raka'a in jamaa is his first raka'a solo. So he should continue doing qadaa normally after the imam does salam. Since he finished the 3rd with imam (which was his first), he should do the remaining prayer normally with tashahud.",
      character: "Ali",
      difficulty: "medium"
    },
    {
      prompt: "Ayub accidentally broke his wudu during the first raka'a of Fajr prayer. What should he do?",
      options: [
        "Continue praying and make wudu after finishing",
        "Immediately stop, make wudu, and restart the prayer",
        "Wait until after the prayer to make wudu",
        "Continue praying but make sajda sahw at the end"
      ],
      correct: 1,
      explanation: "When wudu is broken during prayer, the prayer becomes invalid. Ayub must immediately stop, renew his wudu, and start the prayer again from the beginning.",
      character: "Ayub",
      difficulty: "easy"
    },
    {
      prompt: "Omar is traveling and it's time for Dhuhr prayer, but he can only find a place that's not completely clean. What should he do?",
      options: [
        "Skip the prayer until he finds a clean place",
        "Pray on his jacket or any clean cloth he has",
        "Delay the prayer until he reaches his destination",
        "Pray while standing without prostration"
      ],
      correct: 1,
      explanation: "A traveler should make every effort to pray on time. If the ground is not clean, he can pray on a clean cloth, jacket, or prayer mat. The prayer should not be delayed unnecessarily.",
      character: "Omar",
      difficulty: "medium"
    }
  ],

  // Game Two: "Wisdom Seeker" - Fatwa-based game
  wisdomSeeker: [
    {
      prompt: "Ahmed came to you asking about a theft issue. He stole money from a stranger long ago, and after he did tawba, he wants to return the money but doesn't know the person he stole from. What should he do?",
      options: [
        "Search for him everywhere and if he doesn't find him then he can't rest",
        "Ahmed can just forget about it since he did tawba",
        "Ahmed should give the equivalent amount in charity with the intention of returning the stolen money",
        "Ahmed should keep the money but make extra prayers"
      ],
      correct: 2,
      explanation: "When the rightful owner cannot be found after making reasonable efforts, the person should give the equivalent amount in charity with the intention that if the owner appears, the reward should go to them. This is the most accepted scholarly opinion.",
      questioner: "Ahmed",
      mufti: "you",
      difficulty: "hard"
    },
    {
      prompt: "Amina asks you about her job at a bank. She works in the customer service department but is worried about working in a place that deals with riba (interest). What should she advise?",
      options: [
        "She should immediately quit her job",
        "It's completely fine since she's not directly involved in interest transactions",
        "She should look for alternative employment while continuing her current job, and give part of her salary to charity",
        "She should only work there if she has no other options and constantly seek forgiveness"
      ],
      correct: 2,
      explanation: "Working in a bank in a non-interest role is a matter of scholarly difference. The safer approach is to seek alternative employment while continuing current work out of necessity, and to give a portion of salary to charity as a precaution.",
      questioner: "Amina",
      mufti: "you",
      difficulty: "hard"
    },
    {
      prompt: "Yusuf asks about playing chess. His friend told him it's haram, but he enjoys the strategic thinking it requires. What do you tell him?",
      options: [
        "Chess is completely haram and should be avoided",
        "Chess is permissible if it doesn't distract from prayers or other obligations",
        "Chess is only allowed if played for educational purposes",
        "Chess is permissible only if no money is involved"
      ],
      correct: 1,
      explanation: "The majority of contemporary scholars consider chess permissible as long as it doesn't lead to neglecting religious obligations, doesn't involve gambling, and doesn't cause excessive preoccupation that harms one's deen or life.",
      questioner: "Yusuf",
      mufti: "you",
      difficulty: "medium"
    }
  ],

  // Game Three: "Chronicles of Faith" - Islamic History game
  chroniclesOfFaith: [
    {
      prompt: "Which battle was the first major victory for the Muslims and demonstrated that faith could overcome superior numbers?",
      options: [
        "Battle of Uhud",
        "Battle of Badr",
        "Battle of Khandaq (Trench)",
        "Conquest of Makkah"
      ],
      correct: 1,
      explanation: "The Battle of Badr (624 CE) was the first major military victory for the Muslims. Despite being outnumbered 3:1, the Muslims achieved victory through their faith, unity, and Allah's help. This battle boosted Muslim morale and established their credibility.",
      year: "624 CE",
      significance: "First major Muslim victory, established Islamic military credibility",
      difficulty: "easy"
    },
    {
      prompt: "Who was the first person to be martyred for the sake of Islam?",
      options: [
        "Hamza ibn Abdul-Muttalib",
        "Sumayya bint Khabat",
        "Mus'ab ibn Umayr",
        "Abdullah ibn Mas'ud"
      ],
      correct: 1,
      explanation: "Sumayya bint Khabat (رضي الله عنها) was the first martyr in Islam. She was tortured and killed by Abu Jahl for refusing to renounce her faith. Her steadfastness in the face of persecution exemplifies the courage of early Muslim women.",
      year: "Early Meccan period",
      significance: "First martyr of Islam, symbol of faith under persecution",
      difficulty: "medium"
    },
    {
      prompt: "What was the main reason for the Battle of Uhud taking place?",
      options: [
        "The Muslims wanted to expand their territory",
        "The Quraysh wanted revenge for their defeat at Badr",
        "There was a trade dispute",
        "The Muslims attacked a Quraysh caravan"
      ],
      correct: 1,
      explanation: "The Battle of Uhud (625 CE) was primarily motivated by the Quraysh's desire for revenge after their humiliating defeat at Badr. They gathered a large army of 3,000 warriors to attack the Muslims in Madinah.",
      year: "625 CE",
      significance: "Taught Muslims the importance of discipline and following the Prophet's orders",
      difficulty: "easy"
    },
    {
      prompt: "Which Companion was known as 'Sayf Allah al-Maslul' (The Drawn Sword of Allah)?",
      options: [
        "Ali ibn Abi Talib",
        "Khalid ibn al-Walid",
        "Hamza ibn Abdul-Muttalib",
        "Sa'd ibn Abi Waqqas"
      ],
      correct: 1,
      explanation: "Khalid ibn al-Walid (رضي الله عنه) was given this title by Prophet Muhammad ﷺ. He was an exceptional military strategist who never lost a battle. Initially a fierce opponent of Muslims, he later became one of Islam's greatest generals.",
      year: "Throughout his military career",
      significance: "Undefeated military commander, key figure in Islamic expansion",
      difficulty: "medium"
    }
  ],

  // Hangman Game - Guess Islamic Historical Figures
  hangman: [
    {
      answer: "PROPHET MUHAMMAD",
      category: "Prophet",
      backstory: "The final messenger of Allah, born in Makkah, known for his truthfulness and trustworthiness even before receiving the message.",
      hint1: "He was called 'Al-Amin' (The Trustworthy) by his people before prophethood.",
      hint2: "He received the first revelation in the cave of Hira during the month of Ramadan.",
      hint3: "Okay, but you need to learn more tbh → He is the Seal of the Prophets, mentioned by name in the Quran.",
      arabic: "محمد ﷺ",
      significance: "The final messenger who completed the message of Islam"
    },
    {
      answer: "PROPHET IBRAHIM",
      category: "Prophet",
      backstory: "Known as the friend of Allah, he was willing to sacrifice everything for his faith, including his beloved son.",
      hint1: "He smashed the idols of his people to show them the futility of idol worship.",
      hint2: "He was thrown into a fire by Nimrod but Allah made it cool and safe for him.",
      hint3: "Okay, but you need to learn more tbh → He built the Kaaba with his son Ismail and established the Hajj.",
      arabic: "إبراهيم عليه السلام",
      significance: "Father of monotheism and builder of the Kaaba"
    },
    {
      answer: "ABU BAKR",
      category: "Sahabi",
      backstory: "The closest friend of the Prophet ﷺ, first man to accept Islam, and known for his unwavering faith.",
      hint1: "He was the Prophet's companion in the cave during the Hijra to Madinah.",
      hint2: "He was called 'As-Siddiq' (The Truthful) for immediately believing in the Isra and Mi'raj.",
      hint3: "Okay, but you need to learn more tbh → He became the first Caliph after the Prophet's passing and compiled the Quran.",
      arabic: "أبو بكر الصديق رضي الله عنه",
      significance: "First Caliph and closest companion of the Prophet"
    },
    {
      answer: "UMAR IBN KHATTAB",
      category: "Sahabi",
      backstory: "Initially a fierce enemy of Islam who later became one of its strongest defenders and the second Caliph.",
      hint1: "He was on his way to kill the Prophet ﷺ when he learned his sister had accepted Islam.",
      hint2: "The Prophet ﷺ prayed for either him or Abu Jahl to accept Islam, and Allah chose him.",
      hint3: "Okay, but you need to learn more tbh → He was called 'Al-Faruq' (The Criterion) and expanded the Islamic empire greatly.",
      arabic: "عمر بن الخطاب رضي الله عنه",
      significance: "Second Caliph who established many Islamic institutions"
    },
    {
      answer: "KHADIJAH",
      category: "Sahabi",
      backstory: "A successful businesswoman who became the first person to accept Islam and the Prophet's first wife.",
      hint1: "She employed the Prophet ﷺ to trade on her behalf before their marriage.",
      hint2: "When the Prophet ﷺ received his first revelation, she was the first to believe and comfort him.",
      hint3: "Okay, but you need to learn more tbh → She supported the Prophet ﷺ with her wealth during the early difficult years of Islam.",
      arabic: "خديجة بنت خويلد رضي الله عنها",
      significance: "First Muslim and beloved wife of the Prophet"
    },
    {
      answer: "ALI IBN ABI TALIB",
      category: "Sahabi",
      backstory: "The cousin and son-in-law of the Prophet ﷺ, known for his bravery, wisdom, and knowledge.",
      hint1: "He slept in the Prophet's bed during the Hijra to protect him from assassins.",
      hint2: "He was the youngest person to accept Islam and was raised by the Prophet ﷺ.",
      hint3: "Okay, but you need to learn more tbh → He became the fourth Caliph and was known as the 'Lion of Allah'.",
      arabic: "علي بن أبي طالب رضي الله عنه",
      significance: "Fourth Caliph and gate to the city of knowledge"
    }
  ],

  // Quranic Verse Completion Games
  surahMode: {
    easy: [ // Juz Amma
      {
        surah: "Al-Fatiha",
        arabic: "الفاتحة",
        verses: [
          {
            prompt: "بِسْمِ اللَّهِ الرَّحْمَٰنِ...",
            answer: "الرَّحِيمِ",
            translation: "In the name of Allah, the Most Gracious, the Most Merciful"
          },
          {
            prompt: "الْحَمْدُ لِلَّهِ رَبِّ...",
            answer: "الْعَالَمِينَ",
            translation: "All praise is due to Allah, Lord of the worlds"
          }
        ]
      },
      {
        surah: "Al-Ikhlas",
        arabic: "الإخلاص",
        verses: [
          {
            prompt: "قُلْ هُوَ اللَّهُ...",
            answer: "أَحَدٌ",
            translation: "Say: He is Allah, the One"
          },
          {
            prompt: "اللَّهُ...",
            answer: "الصَّمَدُ",
            translation: "Allah, the Eternal, Absolute"
          }
        ]
      }
    ],
    medium: [ // Medium surahs
      {
        surah: "Maryam",
        arabic: "مريم",
        verses: [
          {
            prompt: "كهيعص",
            answer: "ذِكْرُ رَحْمَتِ رَبِّكَ عَبْدَهُ زَكَرِيَّا",
            translation: "Kaf Ha Ya Ain Sad. This is a mention of the mercy of your Lord to His servant Zechariah"
          }
        ]
      },
      {
        surah: "Al-Kahf",
        arabic: "الكهف",
        verses: [
          {
            prompt: "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَل...",
            answer: "لَّهُ عِوَجًا",
            translation: "All praise is due to Allah who revealed the Book to His servant and made no crookedness therein"
          }
        ]
      }
    ],
    hard: [ // Large/uncommon surahs
      {
        surah: "Al-Baqarah",
        arabic: "البقرة",
        verses: [
          {
            prompt: "الم",
            answer: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ",
            translation: "Alif Lam Meem. This is the Book in which there is no doubt, a guidance for the righteous"
          }
        ]
      },
      {
        surah: "Al-Imran",
        arabic: "آل عمران",
        verses: [
          {
            prompt: "الم",
            answer: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
            translation: "Alif Lam Meem. Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence"
          }
        ]
      }
    ]
  },

  // Line Jumper - Next verse game
  lineJumper: [
    {
      surah: "Al-Fatiha",
      verse: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      nextVerse: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      options: [
        "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        "الرَّحْمَٰنِ الرَّحِيمِ",
        "مَالِكِ يَوْمِ الدِّينِ",
        "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ"
      ],
      correct: 0
    },
    {
      surah: "Al-Baqarah",
      verse: "الم",
      nextVerse: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ",
      options: [
        "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
        "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ",
        "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        "قُلْ هُوَ اللَّهُ أَحَدٌ"
      ],
      correct: 1
    }
  ],

  // Seerah Scenarios - Timeline Scramble and Prophetic Decisions
  seerahScenarios: {
    timelineScramble: [
      {
        chapter: "The First Revelation",
        events: [
          { id: 1, text: "The Prophet ﷺ retreats to Cave Hira for contemplation", order: 1 },
          { id: 2, text: "Angel Jibril appears and commands 'Read!'", order: 2 },
          { id: 3, text: "The Prophet ﷺ returns home trembling to Khadijah", order: 3 },
          { id: 4, text: "Khadijah consoles him and takes him to Waraqah", order: 4 },
          { id: 5, text: "Waraqah confirms the Prophet's calling", order: 5 }
        ],
        difficulty: "medium",
        background: "This marks the beginning of the prophetic mission in 610 CE"
      },
      {
        chapter: "The Year of Sorrow",
        events: [
          { id: 1, text: "Abu Talib falls seriously ill", order: 1 },
          { id: 2, text: "The Prophet ﷺ visits Abu Talib on his deathbed", order: 2 },
          { id: 3, text: "Abu Talib passes away", order: 3 },
          { id: 4, text: "Khadijah falls ill and passes away", order: 4 },
          { id: 5, text: "The Prophet ﷺ loses his main protector and supporter", order: 5 }
        ],
        difficulty: "medium",
        background: "619 CE - The Prophet ﷺ loses his beloved wife and protective uncle"
      },
      {
        chapter: "The Conquest of Makkah",
        events: [
          { id: 1, text: "The Quraysh break the Treaty of Hudaybiyyah", order: 1 },
          { id: 2, text: "The Prophet ﷺ gathers 10,000 companions for march", order: 2 },
          { id: 3, text: "Abu Sufyan comes to negotiate and accepts Islam", order: 3 },
          { id: 4, text: "The Muslim army enters Makkah peacefully", order: 4 },
          { id: 5, text: "The Prophet ﷺ destroys the idols around the Kaaba", order: 5 }
        ],
        difficulty: "hard",
        background: "630 CE - The peaceful conquest that changed the course of history"
      }
    ],
    propheticDecisions: [
      {
        scenario: "During the Battle of the Trench, the companions are exhausted and starving. The hypocrites are spreading doubt. What was the Prophet's (ﷺ) immediate action to bolster morale?",
        options: [
          "Give a powerful sermon about the rewards of Paradise",
          "Order a full-scale, desperate attack to end the siege quickly",
          "Personally join the companions in digging the trench, revealing the miracle of the rock",
          "Announce that anyone who wishes to leave may do so without penalty"
        ],
        correct: 2,
        explanation: "The Prophet ﷺ joined his companions in the physical labor of digging, demonstrating true leadership through example. When he struck a large rock that wouldn't break, Allah revealed to him visions of future Muslim victories in Syria, Persia, and Yemen. This miracle and his personal involvement lifted the spirits of the believers, showing that a true leader shares in the struggles of his people.",
        difficulty: "hard",
        lesson: "Leadership through example and trust in Allah's plan"
      },
      {
        scenario: "When the delegation from Ta'if stoned the Prophet (ﷺ) and drove him out bleeding, Angel Jibril appeared with the Angel of Mountains, offering to crush the city between two mountains. How did the Prophet (ﷺ) respond?",
        options: [
          "He accepted, saying they deserved punishment for their rejection",
          "He declined, hoping that their descendants might become Muslim",
          "He asked for time to consider the offer",
          "He requested a lesser punishment instead"
        ],
        correct: 1,
        explanation: "Despite his physical pain and emotional hurt, the Prophet ﷺ declined the offer of revenge. He said: 'No, I hope that Allah will bring from their descendants people who will worship Allah alone and not associate anything with Him.' This shows his incredible mercy, forgiveness, and long-term vision for humanity's guidance.",
        difficulty: "medium",
        lesson: "Mercy and forgiveness even in the face of persecution"
      },
      {
        scenario: "During the Treaty of Hudaybiyyah, the Quraysh negotiator refused to write 'Muhammad, Messenger of Allah' and insisted on 'Muhammad ibn Abdullah.' The companions were upset. What did the Prophet (ﷺ) do?",
        options: [
          "He refused to sign unless his full title was acknowledged",
          "He accepted the change and erased 'Messenger of Allah' himself",
          "He walked away from the negotiations",
          "He asked Ali to write a different version"
        ],
        correct: 1,
        explanation: "The Prophet ﷺ showed incredible wisdom and humility. He said 'I am the Messenger of Allah, and I am Muhammad ibn Abdullah' and erased the title himself. This pragmatic approach led to a treaty that brought 10 years of peace and allowed Islam to spread rapidly. He prioritized the greater good over personal recognition.",
        difficulty: "hard",
        lesson: "Wisdom, humility, and strategic thinking in negotiations"
      }
    ]
  },

  // The Hadith Lab - Isnad chains, Matn matching, Source Scholar
  hadithLab: {
    isnadChains: [
      {
        hadithText: "Actions are but by intention, and every person will have only what they intended.",
        narrators: [
          { name: "Imam al-Bukhari", role: "compiler", order: 4, portrait: "bukhari" },
          { name: "Yahya ibn Sa'id", role: "tabi'i", order: 3, portrait: "yahya" },
          { name: "Muhammad ibn Ibrahim", role: "tabi'i", order: 2, portrait: "muhammad" },
          { name: "Umar ibn al-Khattab", role: "sahabi", order: 1, portrait: "umar" }
        ],
        difficulty: "medium",
        source: "Sahih al-Bukhari"
      },
      {
        hadithText: "The believer is not one who eats his fill while his neighbor goes hungry.",
        narrators: [
          { name: "Imam Ahmad", role: "compiler", order: 4, portrait: "ahmad" },
          { name: "Shu'bah", role: "tabi'i", order: 3, portrait: "shubah" },
          { name: "Mansur", role: "tabi'i", order: 2, portrait: "mansur" },
          { name: "Abdullah ibn Mas'ud", role: "sahabi", order: 1, portrait: "abdullah" }
        ],
        difficulty: "hard",
        source: "Musnad Ahmad"
      },
      {
        hadithText: "Paradise lies at the feet of your mother.",
        narrators: [
          { name: "Imam an-Nasa'i", role: "compiler", order: 4, portrait: "nasai" },
          { name: "Mu'awiyah ibn Salih", role: "tabi'i", order: 3, portrait: "muawiyah" },
          { name: "Yahya ibn Jabir", role: "tabi'i", order: 2, portrait: "yahya_jabir" },
          { name: "Mu'awiyah ibn Jahimah", role: "sahabi", order: 1, portrait: "muawiyah_jahimah" }
        ],
        difficulty: "hard",
        source: "Sunan an-Nasa'i"
      }
    ],
    matnMatching: [
      {
        hadiths: [
          "He who cheats us is not one of us",
          "The strong person is not the one who can wrestle others down",
          "Whoever believes in Allah and the Last Day should speak good or keep silent",
          "The best of people are those who benefit others"
        ],
        meanings: [
          "Honesty in business and dealings",
          "Self-control and anger management",
          "Careful speech and avoiding harm",
          "Service to humanity and community"
        ],
        difficulty: "medium"
      },
      {
        hadiths: [
          "Seek knowledge from the cradle to the grave",
          "The world is green and beautiful, and Allah has appointed you as His stewards",
          "Smiling at your brother is charity",
          "Make things easy and do not make them difficult"
        ],
        meanings: [
          "Lifelong learning and education",
          "Environmental stewardship and care",
          "Kindness and positive interactions",
          "Compassion and avoiding hardship"
        ],
        difficulty: "easy"
      }
    ],
    sourceScholar: [
      {
        hadith: "The most beloved of people to Allah are those who are most beneficial to people.",
        options: [
          { book: "Sahih al-Bukhari", color: "green", correct: false },
          { book: "Sahih Muslim", color: "red", correct: false },
          { book: "Sunan Ibn Majah", color: "blue", correct: true },
          { book: "Jami' at-Tirmidhi", color: "purple", correct: false }
        ],
        explanation: "This hadith is found in Sunan Ibn Majah and is classified as hasan (good) by scholars.",
        difficulty: "hard"
      },
      {
        hadith: "A Muslim is one from whose tongue and hands the people are safe.",
        options: [
          { book: "Sahih al-Bukhari", color: "green", correct: true },
          { book: "Sahih Muslim", color: "red", correct: false },
          { book: "Sunan Abu Dawood", color: "orange", correct: false },
          { book: "Musnad Ahmad", color: "yellow", correct: false }
        ],
        explanation: "This fundamental hadith about the character of a Muslim is found in Sahih al-Bukhari.",
        difficulty: "medium"
      }
    ]
  },

  // Pillar Foundations - Belief Builder, Categorization Blitz, Asma'ul Husna Ring
  pillarFoundations: {
    beliefBuilder: [
      {
        scenario: "Abdullah trusts that his final exam results are part of Allah's plan, regardless of the outcome.",
        pillar: "Belief in Divine Decree (Qadr)",
        category: "iman",
        explanation: "Qadr means believing that everything happens according to Allah's knowledge and will. Abdullah's trust in Allah's plan demonstrates this pillar of faith.",
        difficulty: "medium"
      },
      {
        scenario: "Ayub performs his five daily prayers on time every day.",
        pillar: "Salah (Prayer)",
        category: "islam",
        explanation: "Salah is one of the Five Pillars of Islam, the regular connection between a Muslim and Allah performed five times daily.",
        difficulty: "easy"
      },
      {
        scenario: "Omar believes that Angel Jibril brought revelations to Prophet Muhammad ﷺ.",
        pillar: "Belief in Angels",
        category: "iman",
        explanation: "Belief in angels is one of the Six Pillars of Iman. Angels are Allah's messengers and servants, including Jibril who brought the Quran.",
        difficulty: "easy"
      },
      {
        scenario: "Aisha saves 2.5% of her wealth to give to the poor each year.",
        pillar: "Zakah (Charity)",
        category: "islam",
        explanation: "Zakah is the mandatory charity paid by Muslims who meet certain wealth criteria, purifying their wealth and helping the less fortunate.",
        difficulty: "medium"
      }
    ],
    categorizationBlitz: [
      {
        category: "Pillars of Islam",
        items: [
          { term: "Salah", belongs: true },
          { term: "Belief in Angels", belongs: false },
          { term: "Zakah", belongs: true },
          { term: "Hajj", belongs: true },
          { term: "Belief in Divine Decree", belongs: false },
          { term: "Shahada", belongs: true },
          { term: "Sawm", belongs: true },
          { term: "Belief in Prophets", belongs: false }
        ]
      },
      {
        category: "Pillars of Iman",
        items: [
          { term: "Belief in Allah", belongs: true },
          { term: "Salah", belongs: false },
          { term: "Belief in Angels", belongs: true },
          { term: "Zakah", belongs: false },
          { term: "Belief in Books", belongs: true },
          { term: "Hajj", belongs: false },
          { term: "Belief in Prophets", belongs: true },
          { term: "Belief in Last Day", belongs: true },
          { term: "Belief in Divine Decree", belongs: true }
        ]
      },
      {
        category: "Attributes of Allah",
        items: [
          { term: "Ar-Rahman", belongs: true },
          { term: "Performing Hajj", belongs: false },
          { term: "Al-Hakeem", belongs: true },
          { term: "Five daily prayers", belongs: false },
          { term: "As-Sabur", belongs: true },
          { term: "Giving charity", belongs: false },
          { term: "Al-Ghafoor", belongs: true }
        ]
      }
    ],
    asmaUlHusna: [
      {
        arabic: "الرَّحْمَٰنُ",
        transliteration: "Ar-Rahman",
        meaning: "The Most Gracious",
        description: "The One whose mercy encompasses all of creation"
      },
      {
        arabic: "الرَّحِيمُ",
        transliteration: "Ar-Raheem",
        meaning: "The Most Merciful",
        description: "The One who shows special mercy to the believers"
      },
      {
        arabic: "الْعَلِيمُ",
        transliteration: "Al-Aleem",
        meaning: "The All-Knowing",
        description: "The One who knows all things, seen and unseen"
      },
      {
        arabic: "الْحَكِيمُ",
        transliteration: "Al-Hakeem",
        meaning: "The All-Wise",
        description: "The One who places everything in its proper place"
      },
      {
        arabic: "الْبَصِيرُ",
        transliteration: "Al-Baseer",
        meaning: "The All-Seeing",
        description: "The One who sees all things, nothing is hidden from Him"
      },
      {
        arabic: "السَّمِيعُ",
        transliteration: "As-Samee",
        meaning: "The All-Hearing",
        description: "The One who hears all sounds and voices"
      },
      {
        arabic: "الْغَفُورُ",
        transliteration: "Al-Ghafoor",
        meaning: "The Most Forgiving",
        description: "The One who forgives sins and covers faults"
      },
      {
        arabic: "الصَّبُورُ",
        transliteration: "As-Saboor",
        meaning: "The Most Patient",
        description: "The One who does not hasten to punish the sinners"
      },
      {
        arabic: "الْقَادِرُ",
        transliteration: "Al-Qadir",
        meaning: "The All-Powerful",
        description: "The One who has power over all things"
      }
    ]
  },

  // Iman Defender - Fast-paced reflex game
  imanDefender: {
    // Negative words (sins/harmful traits) and their positive counterparts
    wordPairs: [
      {
        negative: "Lying",
        arabic: "الكذب",
        positives: ["Honesty", "Truthfulness", "Sincerity", "Trust"],
        correctAnswer: "Honesty",
        islamicContext: "The Prophet ﷺ said: 'Truthfulness leads to righteousness'"
      },
      {
        negative: "Backbiting",
        arabic: "الغيبة", 
        positives: ["Silence", "Praise", "Forgiveness", "Charity"],
        correctAnswer: "Silence",
        islamicContext: "Speaking good or remaining silent protects from sin"
      },
      {
        negative: "Anger",
        arabic: "الغضب",
        positives: ["Patience", "Forgiveness", "Kindness", "Prayer"],
        correctAnswer: "Patience",
        islamicContext: "The strong person controls their anger through patience"
      },
      {
        negative: "Envy",
        arabic: "الحسد",
        positives: ["Gratitude", "Contentment", "Dua", "Charity"],
        correctAnswer: "Gratitude",
        islamicContext: "Gratitude for Allah's blessings removes envy from the heart"
      },
      {
        negative: "Pride",
        arabic: "الكبر",
        positives: ["Humility", "Worship", "Service", "Gratitude"],
        correctAnswer: "Humility",
        islamicContext: "Pride prevents entry to Paradise; humility elevates the believer"
      },
      {
        negative: "Greed",
        arabic: "الطمع",
        positives: ["Charity", "Generosity", "Zakah", "Gratitude"],
        correctAnswer: "Charity",
        islamicContext: "Giving charity purifies wealth and removes greed"
      },
      {
        negative: "Hatred",
        arabic: "البغضاء",
        positives: ["Love", "Forgiveness", "Brotherhood", "Prayer"],
        correctAnswer: "Forgiveness",
        islamicContext: "Forgiveness brings hearts together and earns Allah's mercy"
      },
      {
        negative: "Laziness",
        arabic: "الكسل",
        positives: ["Prayer", "Work", "Effort", "Knowledge"],
        correctAnswer: "Prayer",
        islamicContext: "Regular prayer disciplines the soul and fights laziness"
      },
      {
        negative: "Despair",
        arabic: "اليأس",
        positives: ["Hope", "Dua", "Trust", "Prayer"],
        correctAnswer: "Hope",
        islamicContext: "Hope in Allah's mercy overcomes all despair"
      },
      {
        negative: "Injustice",
        arabic: "الظلم",
        positives: ["Justice", "Fairness", "Rights", "Equity"],
        correctAnswer: "Justice",
        islamicContext: "Justice is the foundation of Islamic society"
      },
      {
        negative: "Wastefulness",
        arabic: "الإسراف",
        positives: ["Moderation", "Gratitude", "Sharing", "Charity"],
        correctAnswer: "Moderation",
        islamicContext: "Moderation in all things is the way of the righteous"
      },
      {
        negative: "Ignorance",
        arabic: "الجهل",
        positives: ["Knowledge", "Learning", "Wisdom", "Study"],
        correctAnswer: "Knowledge",
        islamicContext: "Seek knowledge from the cradle to the grave"
      }
    ],

    // Powerups that can appear during gameplay
    powerups: [
      {
        name: "Freeze Time",
        arabic: "تجميد الوقت",
        icon: "❄️",
        description: "Slows down falling words for 5 seconds",
        duration: 5000,
        rarity: "rare",
        effect: "slowMotion"
      },
      {
        name: "Word Cleanse",
        arabic: "تطهير الكلمات",
        icon: "✨",
        description: "Destroys all current falling words",
        duration: 0,
        rarity: "epic",
        effect: "clearAll"
      },
      {
        name: "Shield of Iman",
        arabic: "درع الإيمان",
        icon: "🛡️",
        description: "Protects from one mistake for 10 seconds",
        duration: 10000,
        rarity: "uncommon",
        effect: "shield"
      },
      {
        name: "Light of Guidance",
        arabic: "نور الهداية",
        icon: "💡",
        description: "Highlights correct answers for 8 seconds",
        duration: 8000,
        rarity: "rare",
        effect: "highlight"
      },
      {
        name: "Dua Boost",
        arabic: "تعزيز الدعاء",
        icon: "🤲",
        description: "Doubles points for 15 seconds",
        duration: 15000,
        rarity: "uncommon",
        effect: "doublePoints"
      }
    ],

    // Difficulty progression settings
    difficulty: {
      baseSpeed: 2, // pixels per frame
      speedIncrease: 0.1, // increase every 10 seconds
      spawnRate: 2000, // milliseconds between words
      spawnRateDecrease: 50, // decrease every 10 seconds
      maxSpeed: 8,
      minSpawnRate: 500,
      powerupChance: 0.05 // 5% chance per word
    },

    // Scoring system
    scoring: {
      correctHit: 10,
      survivalBonus: 1, // per second
      accuracyBonus: 50, // for perfect accuracy streaks
      powerupBonus: 25,
      difficultyMultiplier: 1.5 // increases with game speed
    },

    // Game achievements
    achievements: [
      {
        name: "Defender of Faith",
        description: "Survive for 60 seconds",
        requirement: "survival",
        value: 60,
        reward: 100
      },
      {
        name: "Accuracy Master",
        description: "Achieve 95% accuracy",
        requirement: "accuracy",
        value: 0.95,
        reward: 150
      },
      {
        name: "Word Warrior",
        description: "Destroy 100 negative words",
        requirement: "wordsDestroyed",
        value: 100,
        reward: 200
      },
      {
        name: "Powerup Collector",
        description: "Collect 10 powerups in one game",
        requirement: "powerups",
        value: 10,
        reward: 75
      }
    ]
  }
};

// Random names for solo mode
export const randomNames = [
  "Ahmad", "Ali", "Omar", "Yusuf", "Ibrahim", "Ismail", "Musa", "Isa", "Dawud", "Sulaiman",
  "Ayub", "Aisha", "Khadija", "Maryam", "Zainab", "Umm Kulthum", "Safiyyah", "Hafsa", "Amina", "Ruqayya",
  "Abdullah", "Abdul Rahman", "Abdur Rahman", "Abdul Malik", "Abdur Rahim", "Khalid", "Hamza", "Bilal", "Salman", "Abu Bakr"
];

// Get random name from the list
export function getRandomName(excludeNames = []) {
  const availableNames = randomNames.filter(name => !excludeNames.includes(name));
  return availableNames[Math.floor(Math.random() * availableNames.length)];
}

// Get random names for questions based on mode
export function getQuestionNames(gameMode, players = [], questionData = {}) {
  if (gameMode === 'solo') {
    // For solo mode, use random names
    const name1 = getRandomName();
    const name2 = getRandomName([name1]);
    
    return {
      character: questionData.character || name1,
      questioner: questionData.questioner || name1,
      mufti: questionData.mufti === 'you' ? name2 : (questionData.mufti || name2)
    };
  } else {
    // For multiplayer mode, use player names
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
    return {
      character: questionData.character || shuffledPlayers[0],
      questioner: questionData.questioner || shuffledPlayers[0],
      mufti: questionData.mufti === 'you' ? shuffledPlayers[1] : (questionData.mufti || shuffledPlayers[1])
    };
  }
}

