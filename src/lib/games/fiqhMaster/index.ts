// Fiqh Master - Islamic Jurisprudence Trivia Game
export interface FiqhQuestion {
  prompt: string;
  prompt_ar: string;
  options: string[];
  options_ar: string[];
  correct: number;
  explanation: string;
  explanation_ar: string;
  hadith: string;
  hadith_ar: string;
  sources: string[];
  difficulty: string;
  category: string;
}

export interface FiqhGameContent {
  easy: FiqhQuestion[];
  medium: FiqhQuestion[];
  hard: FiqhQuestion[];
}

export const fiqhMaster: FiqhGameContent = {
  easy: [
    {
      prompt: "What breaks wudu (ablution)?",
      prompt_ar: "ما الذي ينقض الوضوء؟",
      options: [
        "Eating garlic",
        "Laughing during salah",
        "Deep sleep",
        "Drinking water"
      ],
      options_ar: [
        "أكل الثوم",
        "الضحك أثناء الصلاة",
        "النوم العميق",
        "شرب الماء"
      ],
      correct: 2,
      explanation: "Deep sleep breaks wudu because it causes a person to lose awareness of what might come out of them.",
      explanation_ar: "النوم العميق ينقض الوضوء لأنه يفقد الشخص الوعي بما قد يخرج منه.",
      hadith: "Abu Hurairah reported that the Prophet ﷺ said: 'Wudu is required for one who sleeps while lying down.' - Collected by Abu Dawud and authenticated by Al-Albani.",
      hadith_ar: "عن أبي هريرة أن النبي ﷺ قال: 'الوضوء مما مس النار أو من النوم مضطجعاً.' - رواه أبو داود وصححه الألباني.",
      sources: ["Islam-QA", "Wikipedia", "Reddit", "Islamweb", "Sunnah"],
      difficulty: "easy",
      category: "tahara"
    },
    {
      prompt: "How many times do Muslims pray each day?",
      prompt_ar: "كم مرة يصلي المسلمون في اليوم؟",
      options: ["3", "5", "7", "2"],
      options_ar: ["3", "5", "7", "2"],
      correct: 1,
      explanation: "Muslims are required to pray five times daily: Fajr, Dhuhr, Asr, Maghrib, and Isha.",
      explanation_ar: "يجب على المسلمين الصلاة خمس مرات يومياً: الفجر والظهر والعصر والمغرب والعشاء.",
      hadith: "Jabir reported: 'Then Allah enjoined fifty prayers on my followers… Moses said: 'Your followers will not bear it.' So I returned, and He reduced it to half… then to five prayers, and they are equal to fifty in reward…'",
      hadith_ar: "عن جابر قال: 'ثم فرض الله على أمتي خمسين صلاة... فقال موسى: إن أمتك لا تطيق ذلك. فرجعت، فوضع الشطر... ثم إلى خمس صلوات، وهن بخمسين في الأجر...'",
      sources: ["The Review of Religions", "Islam Stack Exchange", "Wikipedia"],
      difficulty: "easy",
      category: "salah"
    },
    {
      prompt: "Which body part is washed first in wudu?",
      prompt_ar: "أي جزء من الجسم يُغسل أولاً في الوضوء؟",
      options: ["Arms", "Face", "Feet", "Hands"],
      options_ar: ["الذراعان", "الوجه", "القدمان", "اليدان"],
      correct: 3,
      explanation: "According to the Prophet's ﷺ practice, hands are washed first as part of the standard wudu sequence.",
      explanation_ar: "حسب ممارسة النبي ﷺ، تُغسل اليدان أولاً كجزء من تسلسل الوضوء المعتاد.",
      hadith: "According to Prophet ﷺ's order—part of the standard sequence: hands, mouth, nose… (Found in many fiqh manuals)",
      hadith_ar: "حسب أمر النبي ﷺ - جزء من التسلسل المعتاد: اليدان، الفم، الأنف... (موجود في كتب الفقه)",
      sources: ["Fiqh manuals"],
      difficulty: "easy",
      category: "tahara"
    },
    {
      prompt: "What is the qibla direction in prayer?",
      prompt_ar: "ما هو اتجاه القبلة في الصلاة؟",
      options: ["Jerusalem", "Madinah", "Kaaba in Makkah", "Mount Sinai"],
      options_ar: ["القدس", "المدينة", "الكعبة في مكة", "جبل سيناء"],
      correct: 2,
      explanation: "Muslims face the Kaaba in Makkah during prayer, as commanded in the Quran.",
      explanation_ar: "يتجه المسلمون إلى الكعبة في مكة أثناء الصلاة، كما أمر القرآن.",
      hadith: "The Quran clearly says: 'but wherever you turn, there is the face of Allah. Indeed, Allah is all‑encompassing, all‑knowing.' (Surah al‑Baqarah 2:115) - With the Prophet ﷺ instructing direction change from Bayt al-Maqdis to the Kaaba in Madinah.",
      hadith_ar: "يقول القرآن بوضوح: 'فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ إِنَّ اللَّهَ وَاسِعٌ عَلِيمٌ' (البقرة 2:115) - مع توجيه النبي ﷺ بتغيير الاتجاه من بيت المقدس إلى الكعبة في المدينة.",
      sources: ["Quran 2:115"],
      difficulty: "easy",
      category: "salah"
    },
    {
      prompt: "Which month do Muslims fast in?",
      prompt_ar: "في أي شهر يصوم المسلمون؟",
      options: ["Muharram", "Dhul Hijjah", "Ramadan", "Sha'ban"],
      options_ar: ["محرم", "ذو الحجة", "رمضان", "شعبان"],
      correct: 2,
      explanation: "Ramadan is the ninth month of the Islamic calendar when Muslims fast from dawn to sunset.",
      explanation_ar: "رمضان هو الشهر التاسع من التقويم الإسلامي عندما يصوم المسلمون من الفجر حتى غروب الشمس.",
      hadith: "The Prophet ﷺ said: 'Islam is built upon five: testifying there is no god but Allah… fasting Ramadan…' - Referring to fasting in Ramadan as a pillar. (Sahih Bukhari & Muslim)",
      hadith_ar: "قال النبي ﷺ: 'بني الإسلام على خمس: شهادة أن لا إله إلا الله... وصوم رمضان...' - في إشارة إلى صوم رمضان كركن. (صحيح البخاري ومسلم)",
      sources: ["Sahih Bukhari", "Sahih Muslim"],
      difficulty: "easy",
      category: "sawm"
    },
    {
      prompt: "Which action nullifies the prayer?",
      prompt_ar: "أي عمل يبطل الصلاة؟",
      options: ["Sneezing", "Smiling", "Eating", "Raising hands"],
      options_ar: ["العطس", "الابتسام", "الأكل", "رفع اليدين"],
      correct: 2,
      explanation: "Eating or drinking during prayer breaks the prayer and requires it to be restarted.",
      explanation_ar: "الأكل أو الشرب أثناء الصلاة يبطل الصلاة ويتطلب إعادتها.",
      hadith: "Scholars unanimously agree that eating or drinking intentionally during prayer invalidates it, as it contradicts the essential focus and reverence required.",
      hadith_ar: "العلماء متفقون على أن الأكل أو الشرب عمداً أثناء الصلاة يبطلها، لأنه يتعارض مع الخشوع والتركيز المطلوبين.",
      sources: ["Fiqh collections"],
      difficulty: "easy",
      category: "salah"
    },
    {
      prompt: "When does Fajr prayer end?",
      prompt_ar: "متى ينتهي وقت صلاة الفجر؟",
      options: ["Sunrise", "Midday", "Dhuhr", "Sunset"],
      options_ar: ["شروق الشمس", "الظهيرة", "الظهر", "غروب الشمس"],
      correct: 0,
      explanation: "Fajr prayer time ends at sunrise when the sun becomes visible above the horizon.",
      explanation_ar: "ينتهي وقت صلاة الفجر عند شروق الشمس عندما تصبح مرئية فوق الأفق.",
      hadith: "Prophet ﷺ said: 'If the sun passes the meridian, then Dhuhr has come. If it rises, then Fajr has ended.' - Timing defined in hadith.",
      hadith_ar: "قال النبي ﷺ: 'إذا زالت الشمس فقد دخل وقت الظهر. وإذا طلعت فقد انتهى وقت الفجر.' - التوقيت محدد في الحديث.",
      sources: ["Hadith collections"],
      difficulty: "easy",
      category: "salah"
    },
    {
      prompt: "What is tayammum?",
      prompt_ar: "ما هو التيمم؟",
      options: ["Dry ablution", "Shortened prayer", "Sunnah prayer", "Charity"],
      options_ar: ["الوضوء الجاف", "الصلاة المقصورة", "الصلاة السنة", "الصدقة"],
      correct: 0,
      explanation: "Tayammum is the ritual purification using clean earth or dust when water is not available.",
      explanation_ar: "التيمم هو التطهر الطقسي باستخدام التراب الطاهر أو الغبار عندما لا يتوفر الماء.",
      hadith: "Allah said: 'And if you find no water, then seek clean earth and wipe over your faces and your hands…' (Qur'an 5:6) - And the Prophet ﷺ performed tayammum for the one without water.",
      hadith_ar: "قال الله تعالى: 'فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُمْ...' (المائدة 5:6) - والنبي ﷺ تيمم للذي لا يجد الماء.",
      sources: ["Islam-QA", "Reddit", "Islam Stack Exchange", "YouTube", "Wikipedia", "Islamweb", "Sunnah"],
      difficulty: "easy",
      category: "tahara"
    },
    {
      prompt: "Can you pray in shoes?",
      prompt_ar: "هل يمكن الصلاة بالأحذية؟",
      options: ["Yes, if clean", "Only if white", "Only on Fridays", "No"],
      options_ar: ["نعم، إذا كانت نظيفة", "فقط إذا كانت بيضاء", "فقط يوم الجمعة", "لا"],
      correct: 0,
      explanation: "Prayer in clean shoes is permissible according to the Prophet's ﷺ practice.",
      explanation_ar: "الصلاة بالأحذية النظيفة جائزة حسب ممارسة النبي ﷺ.",
      hadith: "The Prophet ﷺ said to leave the khuffs (leather socks) on for three days, washing under them during wudu, implying prayer with clean shoes/khuffs is acceptable. (Sahih Muslim)",
      hadith_ar: "قال النبي ﷺ بترك الخفين (الجوارب الجلدية) لثلاثة أيام، والغسل تحتها أثناء الوضوء، مما يدل على أن الصلاة بالأحذية النظيفة/الخفين مقبولة. (صحيح مسلم)",
      sources: ["Sahih Muslim"],
      difficulty: "easy",
      category: "salah"
    },
    {
      prompt: "How many rak'ahs in Maghrib?",
      prompt_ar: "كم ركعة في صلاة المغرب؟",
      options: ["2", "3", "4", "5"],
      options_ar: ["2", "3", "4", "5"],
      correct: 1,
      explanation: "Maghrib prayer consists of 3 obligatory rak'ahs as established by the Prophet ﷺ.",
      explanation_ar: "تتكون صلاة المغرب من 3 ركعات فرض كما ثبت عن النبي ﷺ.",
      hadith: "Standard from the Prophet ﷺ's practice: Maghrib has 3 obligatory rak'ahs—recorded in hadith books like Bukhari & Muslim.",
      hadith_ar: "المعيار من ممارسة النبي ﷺ: المغرب له 3 ركعات فرض - مسجل في كتب الحديث مثل البخاري ومسلم.",
      sources: ["Sahih Bukhari", "Sahih Muslim"],
      difficulty: "easy",
      category: "salah"
    }
  ],
  medium: [
    {
      prompt: "What is the ruling on missing a prayer intentionally?",
      prompt_ar: "ما حكم ترك الصلاة عمدًا؟",
      options: ["Must make it up", "No sin", "Major sin", "Allowed with excuse"],
      options_ar: ["يجب قضاؤها", "لا إثم", "كبيرة", "جائزة بعذر"],
      correct: 2,
      explanation: "Intentionally missing prayer without a valid excuse is considered a major sin in Islam.",
      explanation_ar: "ترك الصلاة عمدًا بدون عذر يُعد من الكبائر.",
      hadith: "Prophet ﷺ said: 'Between a person and shirk and kufr is abandoning the prayer.' - Highlighting severity. (Sahih Muslim)",
      hadith_ar: "قال النبي ﷺ: 'بين الرجل وبين الشرك والكفر ترك الصلاة' - مما يؤكد على خطورة ترك الصلاة. (صحيح مسلم)",
      sources: ["Sahih Muslim"],
      difficulty: "medium",
      category: "salah"
    },
    {
      prompt: "A traveler can shorten the prayer if traveling...",
      prompt_ar: "هل يجوز للمسافر قصر الصلاة إذا كانت المسافة...؟",
      options: ["30km or more", "48 miles or more", "10 minutes away", "Within city"],
      options_ar: ["30 كم فأكثر", "48 ميلًا فأكثر", "مع بُعد 10 دقائق", "داخل المدينة"],
      correct: 1,
      explanation: "Islamic scholars generally agree that the minimum distance for travel concessions is approximately 48 miles (77 km).",
      explanation_ar: "اتفقت غالبية العلماء على أن المسافة الموجبة للقصر تقريبًا 48 ميلًا (~77 كم).",
      hadith: "Quran and hadith provide concession; jurists defined it as approx. 48 miles. (Tafsir)",
      hadith_ar: "القرآن والحديث يوفران الرخصة؛ وحدد الفقهاء المسافة بتقريبًا 48 ميلًا. (التفسير)",
      sources: ["Tafsir", "Juristic consensus"],
      difficulty: "medium",
      category: "salah"
    },
    {
      prompt: "If a person forgets a sajdah in salah, what should they do?",
      prompt_ar: "إذا نسي شخص سجدة في الصلاة، ماذا يفعل؟",
      options: ["Repeat prayer", "Ignore it", "Do sujood as-sahw (prostration of forgetfulness)", "Restart from beginning"],
      options_ar: ["يعيد الصلاة", "يتجاهلها", "يسجد سجود السهو", "يعيد من البداية"],
      correct: 2,
      explanation: "When someone forgets a part of prayer, they should perform sujood as-sahw (prostration of forgetfulness) to correct the mistake.",
      explanation_ar: "عندما ينسى شخص جزءًا من الصلاة، يجب عليه أداء سجود السهو لتصحيح الخطأ.",
      hadith: "Prophet ﷺ taught: 'If one of you forgets something, let him prostrate and let him complete his prayer.' - Referencing sujood of forgetfulness. (Abu Dawud)",
      hadith_ar: "علم النبي ﷺ: 'إذا نسي أحدكم شيئًا، فليسجد وليتم صلاته.' - في إشارة إلى سجود السهو. (أبو داود)",
      sources: ["Abu Dawud"],
      difficulty: "medium",
      category: "salah"
    },
    {
      prompt: "When is ghusl (ritual bath) obligatory?",
      prompt_ar: "متى يجب الاغتسال؟",
      options: ["After swimming", "After eating", "After marital relations", "After vomiting"],
      options_ar: ["بعد السباحة", "بعد الأكل", "بعد الحدث الأكبر", "بعد القيء"],
      correct: 2,
      explanation: "Ghusl becomes obligatory after marital relations, wet dreams, menstruation, and post-childbirth bleeding.",
      explanation_ar: "الاغتسال واجب بعد الحدث الأكبر، مثل الجماع أو الاحتلام.",
      hadith: "The Prophet ﷺ said: 'When a man meets his wife and ejaculates, ghusl becomes obligatory for him.' - Found in Bukhari & Muslim.",
      hadith_ar: "قال النبي ﷺ: 'إذا جلس بين شعبها الأربع ثم جهدها فقد وجب الغسل.' - مؤكداً على الحدث الأكبر. (صحيح البخاري ومسلم)",
      sources: ["Sahih Bukhari", "Sahih Muslim"],
      difficulty: "medium",
      category: "tahara"
    },
    {
      prompt: "Can you combine Dhuhr and Asr while traveling?",
      prompt_ar: "هل يمكن جمع صلاة الظهر والعصر أثناء السفر؟",
      options: ["No", "Yes, always", "Yes, with valid intention", "Only on Fridays"],
      options_ar: ["لا أبدًا", "نعم، في أي وقت", "نعم، بنية صحيحة", "فقط يوم الجمعة"],
      correct: 2,
      explanation: "Combining prayers while traveling is permissible with proper intention and valid reason.",
      explanation_ar: "يجوز جمع الصلوات أثناء السفر تيسيرًا.",
      hadith: "Quran: 'And when you travel…and you fear that those who disbelieve may harm you…then bind on the prayer…' (Qur'an 4:101) - Jurists allow combining due to hardship/travel.",
      hadith_ar: "روى ابن عباس: 'جمع رسول الله ﷺ بين الظهر والعصر وبين المغرب والعشاء في السفر.' - رخصة السفر. (صحيح مسلم)",
      sources: ["Quran 4:101", "Juristic opinions"],
      difficulty: "medium",
      category: "salah"
    },
    {
      prompt: "Which part of the body must water reach in wudu?",
      prompt_ar: "عن أي جزء من الجسم يجب أن يصل الماء في الوضوء؟",
      options: ["Front teeth", "Nose and mouth", "Chest", "Back"],
      options_ar: ["الأسنان الأمامية", "الأنف والفم", "الصدر", "الظهر"],
      correct: 1,
      explanation: "During wudu, water must reach inside the nose and mouth as part of the washing process.",
      explanation_ar: "يجب أن يصل الماء إلى كل الأعضاء المطلوبة، بما بينها وبين الأصابع.",
      hadith: "Prophet ﷺ washed nose and mouth in wudu, setting precedent in hadith collections.",
      hadith_ar: "كان النبي ﷺ يغسل الأنق والفم في الوضوء، مما وضع سابقة في مجموعات الحديث.",
      sources: ["Hadith collections"],
      difficulty: "medium",
      category: "tahara"
    },
    {
      prompt: "Can a woman pray during menstruation?",
      prompt_ar: "هل تصلي المرأة أثناء الحيض؟",
      options: ["Yes", "No", "Only Fajr", "Only Taraweeh"],
      options_ar: ["نعم", "لا", "فقط الفجر", "فقط التراويح"],
      correct: 1,
      explanation: "Women are exempted from prayer during menstruation and do not need to make up these prayers.",
      explanation_ar: "المرأة معذورة من الصلاة أثناء الحيض، وتُقضى بعدها.",
      hadith: "Quran: 'They ask you concerning menstruation. Say: it is harm, so keep away from women during menstruation…' (Qur'an 2:222)",
      hadith_ar: "قال تعالى: 'ويسألونك عن المحيض قل هو أذى فاعتزلوا النساء في المحيض...' (البقرة 2:222)",
      sources: ["Quran 2:222"],
      difficulty: "medium",
      category: "tahara"
    },
    {
      prompt: "What nullifies fasting?",
      prompt_ar: "ما الذي يُفطر الصائم؟",
      options: ["Forgetful eating", "Vomiting unintentionally", "Swallowing saliva", "Eating deliberately"],
      options_ar: ["الأكل نسياناً", "القيء غير عمدي", "بلع الريق", "الأكل عمدًا"],
      correct: 3,
      explanation: "Deliberately eating or drinking during fasting hours breaks the fast and requires making it up.",
      explanation_ar: "الأكل أو الشرب عمدًا يفطر ويجب قضاء اليوم.",
      hadith: "The Prophet ﷺ said: 'Whoever eats or drinks deliberately during Ramadan, then let him complete his fast and make up for it, for the expiation is only for him.' - (Sahih al-Bukhari & Muslim)",
      hadith_ar: "قال النبي ﷺ: 'من أكل أو شرب عامداً في رمضان، فليتم صيامه وليقضه، فإنما الكفارة عليه.' - (صحيح البخاري ومسلم)",
      sources: ["Sahih Bukhari", "Sahih Muslim"],
      difficulty: "medium",
      category: "sawm"
    },
    {
      prompt: "If someone oversleeps Fajr, what should they do?",
      prompt_ar: "إذا استيقظ شخص وأفطر عن صلاة الفجر (نام عنها)، ماذا يفعل؟",
      options: ["Skip it", "Pray when they wake", "Make it up the next day", "Only pray Dhuhr"],
      options_ar: ["يتخطاها", "يصليها فور تذكره", "يقضيها في اليوم التالي", "يصلي الظهر فقط"],
      correct: 1,
      explanation: "If someone misses a prayer due to sleep or forgetfulness, they should pray it as soon as they remember or wake up.",
      explanation_ar: "تُؤدى الصلاة عند التذكر، مهما كان الوقت.",
      hadith: "Prophet ﷺ said: 'Whoever misses the prayer out of sleep or forgetfulness, let him pray as soon as he remembers…' - (Sahih Muslim)",
      hadith_ar: "قال النبي ﷺ: 'من نام عن صلاة أو نسيها فليصلها إذا ذكرها...' - (صحيح مسلم)",
      sources: ["Sahih Muslim"],
      difficulty: "medium",
      category: "salah"
    },
    {
      prompt: "Does bleeding from a small cut break wudu?",
      prompt_ar: "هل النزيف من جرح صغير يبطل الوضوء؟",
      options: ["Always", "Never", "Depends on amount and madhhab", "Only if painful"],
      options_ar: ["دائمًا", "لا", "يعتمد على الكمية والمذهب", "فقط إن كان مؤلمًا"],
      correct: 2,
      explanation: "There is scholarly difference regarding bleeding and wudu. Some schools consider any bleeding to break wudu, others require significant bleeding.",
      explanation_ar: "النزيف الطفيف الذي لا يتدفق لا يبطله حسب رأي الأكثرية.",
      hadith: "Hadith: 'Wudu is required for what comes out, not what goes in.' - (Sunan al-Daraqutni), leading to juristic difference on bleeding.",
      hadith_ar: "حديث: 'الوضوء مما خرج وليس مما دخل.' - (سنن الدارقطني)، مما أدى إلى اختلاف فقهي حول النزيف.",
      sources: ["Sunan al-Daraqutni", "Juristic differences"],
      difficulty: "medium",
      category: "tahara"
    }
  ],
  hard: [
    {
      prompt: "What is the difference between fard and wajib in Hanafi fiqh?",
      prompt_ar: "ما الفرق بين الفرض والواجب في الفقه الحنفي؟",
      options: ["They are the same", "Wajib is optional", "Fard is proven by definitive evidence; wajib is not", "Wajib is more important than fard"],
      options_ar: ["هما نفس الشيء", "الواجب اختياري", "الفرض ثابت بدليل قطعي؛ الواجب ليس كذلك", "الواجب أهم من الفرض"],
      correct: 2,
      explanation: "In Hanafi fiqh, fard is established by definitive proof (qat'i), while wajib is established by probable proof (ظن). Both are obligatory but fard has stronger evidence.",
      explanation_ar: "في الفقه الحنفي، الفرض ثابت بدليل قطعي، بينما الواجب ثابت بدليل ظني. كلاهما إلزامي لكن الفرض له دليل أقوى.",
      hadith: "Imam Abu Hanifa: 'Fard means there is no doubt, wajib is almost that—but with slight difference.' (Texts from Al-Hidayah)",
      hadith_ar: "الإمام أبو حنيفة: 'الفرض يعني لا شك فيه، الواجب تقريباً كذلك - لكن مع فرق طفيف.' (نصوص من الهداية)",
      sources: ["Al-Hidayah", "Hanafi texts"],
      difficulty: "hard",
      category: "usul"
    },
    {
      prompt: "According to the Shafi'i school, is touching a woman nullifying wudu?",
      prompt_ar: "هل لمس المرأة ينقض الوضوء حسب المذهب الشافعي؟",
      options: ["Yes, always", "No", "Only if desire is felt", "Only if alone"],
      options_ar: ["نعم، دائماً", "لا", "فقط إذا شُعِر بالرغبة", "فقط إذا كان وحيداً"],
      correct: 0,
      explanation: "In the Shafi'i school, touching a non-mahram woman always breaks wudu, regardless of desire or circumstances.",
      explanation_ar: "في المذهب الشافعي، لمس المرأة غير المحرم دائماً ينقض الوضوء، بغض النظر عن الرغبة أو الظروف.",
      hadith: "Imam Shafi'i held: 'Touching a woman with desire—breaks wudu even without wetness.' (Al-Umm)",
      hadith_ar: "الإمام الشافعي قال: 'لمس المرأة بشهوة - ينقض الوضوء حتى بدون بلل.' (الأم)",
      sources: ["Al-Umm", "Shafi'i jurisprudence"],
      difficulty: "hard",
      category: "tahara"
    },
    {
      prompt: "When does zakah become obligatory on savings?",
      prompt_ar: "متى تصبح الزكاة واجبة على المدخرات؟",
      options: ["Immediately", "After 1 year passes on nisab", "On Eid", "When a person gets married"],
      options_ar: ["فوراً", "بعد مرور سنة على النصاب", "في العيد", "عند الزواج"],
      correct: 1,
      explanation: "Zakah becomes obligatory when wealth reaches nisab (minimum threshold) and a full lunar year passes while maintaining that amount.",
      explanation_ar: "تصبح الزكاة واجبة عندما تصل الثروة إلى النصاب (الحد الأدنى) وتمر سنة قمرية كاملة مع الحفاظ على هذا المبلغ.",
      hadith: "Prophet ﷺ said: 'Leave zakah on that which remains a year…' - Scholars confirm annual calculation.",
      hadith_ar: "قال النبي ﷺ: 'اتركوا الزكاة على ما يبقى سنة...' - العلماء يؤكدون الحساب السنوي.",
      sources: ["Hadith collections", "Scholarly consensus"],
      difficulty: "hard",
      category: "zakah"
    },
    {
      prompt: "A muqim (resident) starts traveling after praying Dhuhr. Can he shorten Asr?",
      prompt_ar: "مقيم يبدأ السفر بعد صلاة الظهر. هل يمكنه قصر العصر؟",
      options: ["Yes", "No", "Only if very far", "Depends on intention"],
      options_ar: ["نعم", "لا", "فقط إذا كان بعيداً جداً", "يعتمد على النية"],
      correct: 0,
      explanation: "Once a person becomes a traveler, they can apply travel concessions including shortening prayers, even if they started the journey after one prayer.",
      explanation_ar: "بمجرد أن يصبح الشخص مسافراً، يمكنه تطبيق رخص السفر بما في ذلك قصر الصلوات، حتى لو بدأ الرحلة بعد صلاة واحدة.",
      hadith: "Scholars relied on verse (4:101) and Prophet's practice in Medina.",
      hadith_ar: "اعتمد العلماء على الآية (4:101) وممارسة النبي في المدينة.",
      sources: ["Quran 4:101", "Prophetic practice"],
      difficulty: "hard",
      category: "salah"
    },
    {
      prompt: "Can Friday prayer be valid without a khutbah?",
      prompt_ar: "هل تصح صلاة الجمعة بدون خطبة؟",
      options: ["Yes", "No", "Only if late", "If the imam forgets"],
      options_ar: ["نعم", "لا", "فقط إذا تأخر", "إذا نسي الإمام"],
      correct: 1,
      explanation: "The khutbah (sermon) is an essential part of Jumu'ah prayer. Without it, the Friday prayer is not valid.",
      explanation_ar: "الخطبة جزء أساسي من صلاة الجمعة. بدونها، صلاة الجمعة غير صحيحة.",
      hadith: "The khutbah is a required condition for Jumu'ah prayer according to scholarly consensus. Sheikh Ibn Baz stated: 'The Friday prayer is not valid without the khutbah.'",
      hadith_ar: "الخطبة شرط لصحة صلاة الجمعة باتفاق العلماء. قال الشيخ ابن باز: 'صلاة الجمعة لا تصح بدون خطبة.'",
      sources: ["Al-Tirmidhi"],
      difficulty: "hard",
      category: "salah"
    },
    {
      prompt: "If a fasting person is forced to eat, is the fast broken?",
      prompt_ar: "إذا أُجبِر الصائم على الأكل، هل ينقض الصوم؟",
      options: ["Yes", "No", "Makruh", "Doubtful"],
      options_ar: ["نعم", "لا", "مكروه", "مشكوك فيه"],
      correct: 1,
      explanation: "If someone is forced to eat against their will, their fast remains valid as they had no choice in the matter.",
      explanation_ar: "إذا أُجبِر شخص على الأكل ضد إرادته، يبقى صومه صحيحاً لأنه لم يكن له خيار في الأمر.",
      hadith: "Prophet ﷺ said: 'Allah has forgiven my nation for mistakes, forgetfulness, and what they do under compulsion.' (Ibn Majah)",
      hadith_ar: "قال النبي ﷺ: 'إن الله قد غفر لأمتي الخطأ والنسيان وما استُكرِهوا عليه.' (ابن ماجة)",
      sources: ["Ibn Majah"],
      difficulty: "hard",
      category: "sawm"
    },
    {
      prompt: "What's the maximum days a traveler can shorten salah?",
      prompt_ar: "ما هو الحد الأقصى للأيام التي يمكن للمسافر قصر الصلاة فيها؟",
      options: ["2", "4", "15", "10"],
      options_ar: ["2", "4", "15", "10"],
      correct: 2,
      explanation: "According to Hanafi jurisprudence, a traveler can shorten prayers for up to 15 days while away from home.",
      explanation_ar: "حسب الفقه الحنفي، يمكن للمسافر قصر الصلوات لمدة تصل إلى 15 يوماً أثناء غيابه عن المنزل.",
      hadith: "Based on consensus of Hanafi jurists like Abu Hanifa in his text al-Fiqh al-Akbar.",
      hadith_ar: "مبني على إجماع فقهاء الحنفية مثل أبي حنيفة في نصه الفقه الأكبر.",
      sources: ["Al-Fiqh al-Akbar", "Hanafi jurisprudence"],
      difficulty: "hard",
      category: "salah"
    },
    {
      prompt: "Can zakah be given to non-Muslims?",
      prompt_ar: "هل يمكن إعطاء الزكاة لغير المسلمين؟",
      options: ["Yes", "No", "Only poor ones", "Only if mu'allaf"],
      options_ar: ["نعم", "لا", "فقط الفقراء", "فقط إذا كانوا مؤلفة"],
      correct: 3,
      explanation: "Zakah can be given to mu'allafati qulubuhum (those whose hearts are to be reconciled) - new Muslims or those inclined toward Islam.",
      explanation_ar: "يمكن إعطاء الزكاة للمؤلفة قلوبهم (الذين يراد تأليف قلوبهم) - المسلمون الجدد أو المائلون نحو الإسلام.",
      hadith: "Quran allows zakah for 'the new Muslims' (mu'allafati qulubuhum) (9:60) — scholars limit to those embracing faith.",
      hadith_ar: "يسمح القرآن بالزكاة للمؤلفة قلوبهم (9:60) - العلماء يحصرونها في الذين يعتنقون الإيمان.",
      sources: ["Quran 9:60"],
      difficulty: "hard",
      category: "zakah"
    },
    {
      prompt: "If someone forgets to say Bismillah before wudu...",
      prompt_ar: "إذا نسي شخص قول بسم الله قبل الوضوء...",
      options: ["Wudu invalid", "Wudu still valid (difference of opinion)", "Must restart", "Must say shahadah"],
      options_ar: ["الوضوء باطل", "الوضوء مازال صحيحاً (اختلاف بين العلماء)", "يجب الإعادة", "يجب قول الشهادة"],
      correct: 1,
      explanation: "There is scholarly difference on this matter. Some scholars consider the wudu valid but less rewarded if Bismillah is forgotten.",
      explanation_ar: "هناك اختلاف بين العلماء في هذه المسألة. بعض العلماء يعتبرون الوضوء صحيحاً لكن أقل أجراً إذا نُسيت البسملة.",
      hadith: "Imam Malik and Ibn Hazm held: 'Wudu without Bismillah is valid but less rewarded.'",
      hadith_ar: "الإمام مالك وابن حزم قالا: 'الوضوء بدون بسملة صحيح لكن أقل أجراً.'",
      sources: ["Maliki jurisprudence", "Ibn Hazm"],
      difficulty: "hard",
      category: "tahara"
    },
    {
      prompt: "In Maliki fiqh, which condition invalidates salah?",
      prompt_ar: "في الفقه المالكي، أي شرط يبطل الصلاة؟",
      options: ["Not standing straight", "Eyes wandering", "Reciting quietly", "Not facing qibla intentionally"],
      options_ar: ["عدم الوقوف معتدلاً", "النظر في اتجاهات مختلفة", "القراءة بصوت منخفض", "عدم التوجه إلى القبلة عمداً"],
      correct: 3,
      explanation: "In Maliki jurisprudence, intentionally not facing the qibla invalidates the prayer.",
      explanation_ar: "في الفقه المالكي، عدم التوجه إلى القبلة عمداً يبطل الصلاة.",
      hadith: "According to Maliki jurisprudence, deliberately turning away from the qibla without excuse invalidates prayer, based on Allah's command: 'Turn your face toward al-Masjid al-Haram' (Quran 2:144).",
      hadith_ar: "حسب المذهب المالكي، الانحراف عن القبلة عمداً بدون عذر يبطل الصلاة، بناءً على قول الله: 'فول وجهك شطر المسجد الحرام' (القرآن 2:144).",
      sources: ["Sahih Muslim", "Maliki jurisprudence"],
      difficulty: "hard",
      category: "salah"
    }
  ]
};