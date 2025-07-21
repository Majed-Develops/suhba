// New game content for the three main games
export const newGameContent = {
  // Game One: "Fiqh Master" - Islamic Jurisprudence Questions
  fiqhMaster: {
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
        options: ["Repeat prayer", "Ignore it", "Do sujood as-sahw (prostration of forgetfulness)", "Restart from beginning"],
        correct: 2,
        explanation: "When someone forgets a part of prayer, they should perform sujood as-sahw (prostration of forgetfulness) to correct the mistake.",
        hadith: "Prophet ﷺ taught: 'If one of you forgets something, let him prostrate and let him complete his prayer.' - Referencing sujood of forgetfulness. (Abu Dawud)",
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
  },

  // Game Two: "Wisdom Seeker" - Contemporary Islamic Ethics & Fatwa
  wisdomSeeker: {
    easy: [
      {
        prompt: "Can a Muslim attend a non-Muslim friend's wedding (non-religious ceremony)?",
        prompt_ar: "هل يجوز للمسلم حضور حفل زفاف صديق غير مسلم (حفل مدني)؟",
        options: ["Yes, if no haram is involved", "No, it's forbidden", "Only if they don't eat the food", "Only if it's family"],
        options_ar: ["نعم، إذا كان مجرد احتفال", "لا أبدًا", "فقط إذا لم يأكل الطعام", "فقط إذا كان عائلة"],
        correct: 0,
        explanation: "It is permissible to attend non-religious celebrations as long as no haram activities are involved and it maintains good relations.",
        explanation_ar: "حضور المناسبات التي لا تتضمن محرّمات جائز عمومًا.",
        scholarly_opinion: "Scholarly consensus: permissible if no haram served; based on mutual courtesy and good neighborly relations.",
        difficulty: "easy",
        category: "social_ethics"
      },
      {
        prompt: "Is it okay to give zakah to a poor relative?",
        prompt_ar: "هل يجوز إخراج الزكاة لأقارب فقراء؟",
        options: ["Yes, if not already financially supported", "No, never to relatives", "Only to parents", "Only during Ramadan"],
        options_ar: ["نعم، مستحب", "لا أبدًا", "فقط للأقارب البعيدين", "فقط لغير الأقارب"],
        correct: 0,
        explanation: "Zakah can be given to poor relatives who are not already your financial dependents, combining charity with maintaining family ties.",
        explanation_ar: "الزكاة للأقارب تجمع بين الصدقة وصلة الرحم.",
        scholarly_opinion: "Quran (9:60) and scholars state it's permissible if not immediate dependent - doubles the reward.",
        difficulty: "easy",
        category: "zakah"
      },
      {
        prompt: "Can a Muslim man shake hands with a non-mahram woman?",
        prompt_ar: "هل يجوز للمسلم مصافحة غير المحرم؟",
        options: ["Yes, always", "No", "Only in business", "Only if she initiates"],
        options_ar: ["نعم دائماً", "لا", "فقط في الأعمال", "فقط إذا بدأت هي"],
        correct: 1,
        explanation: "Physical contact between non-mahram men and women should be avoided to maintain Islamic boundaries.",
        explanation_ar: "يجب تجنب الاتصال الجسدي بين الرجال والنساء غير المحارم للحفاظ على الحدود الإسلامية.",
        scholarly_opinion: "Prophet ﷺ refrained from shaking hands with women; majority scholars hold handshake is impermissible.",
        hadith_ar: "النبي ﷺ امتنع عن مصافحة النساء؛ غالبية العلماء يعتبرون المصافحة غير جائزة.",
        difficulty: "easy",
        category: "gender_relations"
      },
      {
        prompt: "Is it permissible to celebrate birthdays Islamically?",
        prompt_ar: "هل يجوز الاحتفال بأعياد الميلاد إسلامياً؟",
        options: ["Yes, always", "Disputed, best avoided if imitating non-Muslim customs", "Only for children", "Only with Islamic songs"],
        options_ar: ["نعم دائماً", "مختلف عليه، الأفضل تجنبه إذا كان تقليداً للغير", "فقط للأطفال", "فقط بالأناشيد الإسلامية"],
        correct: 1,
        explanation: "There is scholarly difference on birthdays. Many recommend avoiding celebration if it imitates non-Islamic customs.",
        explanation_ar: "هناك اختلاف بين العلماء حول أعياد الميلاد. كثيرون ينصحون بتجنب الاحتفال إذا كان تقليداً للعادات غير الإسلامية.",
        scholarly_opinion: "Sheikh Ibn Baz and others: discouraged if imitating non-Muslim customs or considered religious celebration.",
        hadith_ar: "الشيخ ابن باز وآخرون: مكروه إذا كان تقليداً للعادات غير الإسلامية أو اعتبر احتفالاً دينياً.",
        difficulty: "easy",
        category: "celebrations"
      },
      {
        prompt: "Can Muslims invest in halal stocks?",
        prompt_ar: "هل يجوز للمسلمين الاستثمار في الأسهم الحلال؟",
        options: ["Yes", "No", "Only in Muslim countries", "Only in Islamic banks"],
        options_ar: ["نعم", "لا", "فقط في البلدان الإسلامية", "فقط في البنوك الإسلامية"],
        correct: 0,
        explanation: "Investing in stocks of companies that operate according to Islamic principles is permissible.",
        explanation_ar: "الاستثمار في أسهم الشركات التي تعمل وفق المبادئ الإسلامية جائز.",
        scholarly_opinion: "Permissible if company is riba-free and doesn't deal in haram goods. Cited by AAOIFI standards.",
        hadith_ar: "جائز إذا كانت الشركة خالية من الربا ولا تتعامل بالسلع المحرمة. حسب معايير الأيوفي.",
        difficulty: "easy",
        category: "finance"
      },
      {
        prompt: "Can one pray while wearing a hoodie or hat?",
        prompt_ar: "هل يجوز الصلاة بارتداء قلنسوة أو قبعة؟",
        options: ["Yes", "No", "Only men", "Only if it covers awrah"],
        options_ar: ["نعم", "لا", "فقط للرجال", "فقط إذا كان يغطي العورة"],
        correct: 0,
        explanation: "There is no prohibition on wearing a hoodie or hat during prayer as long as it doesn't interfere with the prayer movements.",
        explanation_ar: "لا يوجد منع من ارتداء قلنسوة أو قبعة أثناء الصلاة طالما لا تتعارض مع حركات الصلاة.",
        scholarly_opinion: "No hadith prohibits; scholars say covering awrah is key, not garment type.",
        hadith_ar: "لا يوجد حديث يمنع؛ العلماء يقولون أن تغطية العورة هو المهم، وليس نوع الثوب.",
        difficulty: "easy",
        category: "prayer_attire"
      },
      {
        prompt: "Is listening to music haram?",
        prompt_ar: "هل الاستماع للموسيقى حرام؟",
        options: ["Yes, always", "Disputed, many scholars consider it discouraged or haram depending on type", "No, never", "Only vocal music is allowed"],
        options_ar: ["نعم دائماً", "مختلف عليه، كثير من العلماء يعتبرونه مكروهاً أو حراماً حسب النوع", "لا أبداً", "فقط الموسيقى الصوتية مسموحة"],
        correct: 1,
        explanation: "Music is a matter of scholarly difference, with positions ranging from completely haram to permissible with conditions.",
        explanation_ar: "الموسيقى مسألة اختلاف بين العلماء، مع مواقف تتراوح من الحرام المطلق إلى الجائز بشروط.",
        scholarly_opinion: "Many scholars (al‑Albani, Ibn Baz): haram except percussion/voice; others see it as makruh or permissible with conditions.",
        hadith_ar: "كثير من العلماء (الألباني، ابن باز): حرام عدا الطبل والصوت؛ آخرون يرونه مكروهاً أو جائزاً بشروط.",
        difficulty: "easy",
        category: "entertainment"
      },
      {
        prompt: "Can Muslims donate blood?",
        prompt_ar: "هل يجوز للمسلمين التبرع بالدم؟",
        options: ["Yes", "No", "Only to Muslims", "Only in emergencies"],
        options_ar: ["نعم", "لا", "فقط للمسلمين", "فقط في الطوارئ"],
        correct: 0,
        explanation: "Blood donation is not only permissible but encouraged as it can save lives.",
        explanation_ar: "التبرع بالدم ليس فقط جائزاً بل مستحب لأنه يمكن أن ينقذ الأرواح.",
        scholarly_opinion: "Permissible—as saving a life is maslahah and Prophet ﷺ approved helping others in need.",
        hadith_ar: "جائز - لأن إنقاذ الحياة مصلحة والنبي ﷺ أقر مساعدة الآخرين المحتاجين.",
        difficulty: "easy",
        category: "medical_ethics"
      },
      {
        prompt: "Is it allowed to work in a bank that deals with interest?",
        prompt_ar: "هل يجوز العمل في بنك يتعامل بالربا؟",
        options: ["Yes, always", "No, unless no riba-related tasks", "Only as security", "Only part-time"],
        options_ar: ["نعم دائماً", "لا، إلا إذا لم تكن المهام متعلقة بالربا", "فقط كحارس", "فقط بدوام جزئي"],
        correct: 1,
        explanation: "Working in a bank is generally discouraged, but may be permissible if the role doesn't directly involve interest transactions.",
        explanation_ar: "العمل في البنك مكروه عموماً، لكن قد يكون جائزاً إذا كان الدور لا يتضمن مباشرة معاملات ربوية.",
        scholarly_opinion: "Major opinion: involved in riba is haram. Minority: permissible if role doesn't facilitate riba directly.",
        hadith_ar: "الرأي الأكبر: المشاركة في الربا حرام. الأقلية: جائز إذا كان الدور لا يسهل الربا مباشرة.",
        difficulty: "easy",
        category: "finance"
      },
      {
        prompt: "Can Muslims fast while traveling?",
        prompt_ar: "هل يجوز للمسلمين الصيام أثناء السفر؟",
        options: ["Yes, it's optional", "No, forbidden", "Only short trips", "Only by plane"],
        options_ar: ["نعم، اختياري", "لا، ممنوع", "فقط الرحلات القصيرة", "فقط بالطائرة"],
        correct: 0,
        explanation: "Fasting while traveling is optional - one can choose to fast or break the fast and make it up later.",
        explanation_ar: "الصيام أثناء السفر اختياري - يمكن اختيار الصيام أو الإفطار وقضاؤه لاحقاً.",
        scholarly_opinion: "Quran (2:185) gives permission to break fast while traveling, but fasting is also allowed.",
        hadith_ar: "القرآن (2:185) يعطي الإذن بالإفطار أثناء السفر، لكن الصيام أيضاً مسموح.",
        difficulty: "easy",
        category: "fasting"
      }
    ],
    medium: [
      {
        prompt: "A Muslim is invited to an office party with alcohol—what should they do?",
        prompt_ar: "مسلم مدعو لحفلة في المكتب فيها كحول - ماذا يفعل؟",
        options: ["Avoid completely", "Attend but avoid haram activities", "Only attend for work networking", "Attend but leave early"],
        options_ar: ["تجنب تماماً", "يحضر لكن يتجنب الأنشطة المحرمة", "يحضر فقط للتواصل المهني", "يحضر لكن يغادر مبكراً"],
        correct: 1,
        explanation: "One can attend office functions while avoiding haram activities, maintaining professional relationships without compromising Islamic values.",
        explanation_ar: "يمكن حضور الفعاليات المكتبية مع تجنب الأنشطة المحرمة، والحفاظ على العلاقات المهنية دون التنازل عن القيم الإسلامية.",
        scholarly_opinion: "Scholars say you can attend—without drinking for da'wah or work reasons, while maintaining Islamic boundaries.",
        hadith_ar: "العلماء يقولون يمكن الحضور - بدون شرب لأسباب الدعوة أو العمل، مع الحفاظ على الحدود الإسلامية.",
        difficulty: "medium",
        category: "workplace_ethics"
      },
      {
        prompt: "Is taking student loans with interest allowed?",
        prompt_ar: "هل يجوز أخذ قروض الطلاب بفوائد؟",
        options: ["Never allowed", "Only in cases of dire necessity, with intention to pay quickly", "Always allowed for education", "Only for Islamic studies"],
        options_ar: ["غير مسموح أبداً", "فقط في حالات الضرورة القصوى، مع النية للسداد سريعاً", "مسموح دائماً للتعليم", "فقط للدراسات الإسلامية"],
        correct: 1,
        explanation: "Interest-based loans are generally forbidden, but some scholars allow them for education in cases of dire necessity when no alternatives exist.",
        explanation_ar: "القروض الربوية محرمة عموماً، لكن بعض العلماء يجيزونها للتعليم في حالات الضرورة القصوى عندما لا توجد بدائل.",
        scholarly_opinion: "Sheikh Qaradawi and others: permissible if dire need & no Islamic finance options available.",
        hadith_ar: "الشيخ القرضاوي وآخرون: جائز في حالة الضرورة القصوى وعدم وجود خيارات التمويل الإسلامي.",
        difficulty: "medium",
        category: "education_finance"
      },
      {
        prompt: "Can a Muslim take part in interfaith dialogue?",
        prompt_ar: "هل يجوز للمسلم المشاركة في الحوار بين الأديان؟",
        options: ["No, forbidden", "Yes, if done respectfully and with clear understanding of Islam", "Only with Christians", "Only as listeners"],
        options_ar: ["لا، ممنوع", "نعم، إذا تم باحترام وفهم واضح للإسلام", "فقط مع المسيحيين", "فقط كمستمعين"],
        correct: 1,
        explanation: "Interfaith dialogue is encouraged to promote understanding, as long as Islamic beliefs are clearly maintained and presented.",
        explanation_ar: "الحوار بين الأديان مشجع لتعزيز الفهم، طالما أن المعتقدات الإسلامية محافظ عليها ومقدمة بوضوح.",
        scholarly_opinion: "Permissible, endorsed by senior scholars, as long as clear Islamic position maintained and no compromise of faith.",
        hadith_ar: "جائز، مؤيد من كبار العلماء، طالما أن الموقف الإسلامي الواضح محافظ عليه وبدون تنازل عن الإيمان.",
        difficulty: "medium",
        category: "interfaith_relations"
      },
      {
        prompt: "Is IVF (In Vitro Fertilization) allowed in Islam?",
        prompt_ar: "هل يجوز أطفال الأنابيب في الإسلام؟",
        options: ["Never allowed", "Yes, if between married couple with no third party involvement", "Only for men's infertility", "Only in Muslim countries"],
        options_ar: ["غير مسموح أبداً", "نعم، إذا كان بين الزوجين بدون تدخل طرف ثالث", "فقط لعقم الرجال", "فقط في البلدان الإسلامية"],
        correct: 1,
        explanation: "IVF is permissible between married couples using their own genetic material, without third-party donors.",
        explanation_ar: "أطفال الأنابيب جائز بين الأزواج باستخدام مادتهم الوراثية، بدون متبرعين خارجيين.",
        scholarly_opinion: "Fiqh councils: permissible within marriage without third‑party donors (sperm, egg, or surrogate).",
        hadith_ar: "المجامع الفقهية: جائز داخل الزواج بدون متبرعين خارجيين (حيوانات منوية، بويضة، أو أم بديلة).",
        difficulty: "medium",
        category: "medical_ethics"
      },
      {
        prompt: "Is trading cryptocurrency allowed?",
        prompt_ar: "هل يجوز تداول العملات الرقمية؟",
        options: ["Always forbidden", "Yes, if not involving gambling or excessive uncertainty", "Only Bitcoin", "Only for Muslims"],
        options_ar: ["ممنوع دائماً", "نعم، إذا لم يتضمن قماراً أو غرراً مفرطاً", "فقط البيتكوين", "فقط للمسلمين"],
        correct: 1,
        explanation: "Cryptocurrency trading can be permissible if it avoids gambling-like speculation and excessive uncertainty (gharar).",
        explanation_ar: "تداول العملات الرقمية يمكن أن يكون جائزاً إذا تجنب المضاربة الشبيهة بالقمار والغرر المفرط.",
        scholarly_opinion: "Permitted if avoids gambling and uncertainty—in line with AAOIFI and MUFIC Islamic finance standards.",
        hadith_ar: "جائز إذا تجنب القمار والغرر - يتماشى مع معايير الأيوفي والمجلس الإسلامي للتمويل.",
        difficulty: "medium",
        category: "modern_finance"
      },
      {
        prompt: "A Muslim owns a shop in Ramadan. Can he sell food to non-Muslims during fasting hours?",
        prompt_ar: "مسلم يملك متجراً في رمضان. هل يجوز بيع الطعام لغير المسلمين أثناء ساعات الصيام؟",
        options: ["No, forbidden", "Yes", "Only non-Muslims", "Only after sunset"],
        options_ar: ["لا، ممنوع", "نعم", "فقط لغير المسلمين", "فقط بعد غروب الشمس"],
        correct: 1,
        explanation: "It is permissible to sell food to non-Muslims during Ramadan as fasting is a pillar (rukn) of the pillars (arkan) of Islam that applies specifically to Muslims.",
        explanation_ar: "يجوز بيع الطعام لغير المسلمين في رمضان لأن الصيام ركن من أركان الإسلام يخص المسلمين تحديداً.",
        scholarly_opinion: "Sheikh Ibn Baz and the Permanent Committee for Scholarly Research: Non-Muslims are not obligated to fast, so serving them food is permissible.",
        hadith_ar: "الشيخ ابن باز واللجنة الدائمة للبحوث العلمية: غير المسلمين غير ملزمين بالصيام، فخدمتهم بالطعام جائزة.",
        difficulty: "medium",
        category: "business_ethics"
      },
      {
        prompt: "Can a woman lead a group of women in salah?",
        prompt_ar: "هل يجوز للمرأة أن تؤم مجموعة من النساء في الصلاة؟",
        options: ["No, never", "Yes", "Only in emergencies", "Only if no men available"],
        options_ar: ["لا، أبداً", "نعم", "فقط في الطوارئ", "فقط إذا لم يكن هناك رجال"],
        correct: 1,
        explanation: "A woman can lead other women in prayer, and this is established from the time of the Prophet ﷺ.",
        explanation_ar: "يمكن للمرأة أن تؤم النساء الأخريات في الصلاة، وهذا ثابت من زمن النبي ﷺ.",
        scholarly_opinion: "Hadith from Umm Waraqa, and scholarly consensus holds it's permissible for women to lead women in prayer.",
        hadith_ar: "حديث من أم ورقة، وإجماع العلماء يؤكد أنه جائز للنساء أن يؤممن النساء في الصلاة.",
        difficulty: "medium",
        category: "women_leadership"
      },
      {
        prompt: "Is life insurance permissible in Islam?",
        prompt_ar: "هل يجوز تأمين الحياة في الإسلام؟",
        options: ["Yes, always", "Generally discouraged or forbidden due to gharar and riba", "Only Islamic insurance", "Only for breadwinners"],
        options_ar: ["نعم، دائماً", "مكروه أو ممنوع عموماً بسبب الغرر والربا", "فقط التأمين الإسلامي", "فقط لمعيلي الأسرة"],
        correct: 1,
        explanation: "Conventional life insurance is generally considered impermissible due to elements of uncertainty (gharar) and interest (riba).",
        explanation_ar: "التأمين التقليدي على الحياة يعتبر عموماً غير جائز بسبب عناصر عدم اليقين (الغرر) والربا.",
        scholarly_opinion: "Most scholars deem conventional insurance impermissible due to riba and gharar; Takaful (Islamic insurance) permitted.",
        hadith_ar: "معظم العلماء يعتبرون التأمين التقليدي غير جائز بسبب الربا والغرر؛ التكافل (التأمين الإسلامي) جائز.",
        difficulty: "medium",
        category: "insurance"
      },
      {
        prompt: "Can Muslims make TikToks for da'wah?",
        prompt_ar: "هل يجوز للمسلمين عمل فيديوهات تيك توك للدعوة؟",
        options: ["No, social media is haram", "Yes, with modesty and proper purpose", "Only men", "Only Islamic content"],
        options_ar: ["لا، وسائل التواصل الاجتماعي حرام", "نعم، بشرط الاحتشام والهدف الصحيح", "فقط الرجال", "فقط المحتوى الإسلامي"],
        correct: 1,
        explanation: "Using social media platforms for da'wah is permissible if done modestly and with proper Islamic guidelines.",
        explanation_ar: "استخدام منصات وسائل التواصل الاجتماعي للدعوة جائز إذا تم باحتشام ووفق الضوابط الإسلامية الصحيحة.",
        scholarly_opinion: "Permissible per scholars if message is Islamic, modest, and serves a beneficial purpose.",
        hadith_ar: "جائز حسب العلماء إذا كانت الرسالة إسلامية ومتزنة وتخدم هدفاً نافعاً.",
        difficulty: "medium",
        category: "digital_dawah"
      },
      {
        prompt: "What is the ruling on euthanasia?",
        prompt_ar: "ما حكم القتل الرحيم؟",
        options: ["Allowed if suffering", "Not permitted - life is sacred", "Only for terminal illness", "Only with family consent"],
        options_ar: ["مسموح في حالة المعاناة", "غير مسموح - الحياة مقدسة", "فقط في حالة المرض المميت", "فقط بموافقة العائلة"],
        correct: 1,
        explanation: "Euthanasia is not permitted in Islam as life is sacred and only Allah has the right to determine its end.",
        explanation_ar: "القتل الرحيم غير جائز في الإسلام لأن الحياة مقدسة ولله وحده الحق في تحديد نهايتها.",
        scholarly_opinion: "Forbidden. Prophet ﷺ said: 'There should be neither harming nor reciprocating harm.' (Ibn Majah)",
        hadith_ar: "ممنوع. قال النبي ﷺ: 'لا ضرر ولا ضرار.' (ابن ماجه)",
        difficulty: "medium",
        category: "medical_ethics"
      }
    ],
    hard: [
      {
        prompt: "Is gender transition surgery permissible in Islam?",
        prompt_ar: "هل يجوز عمليات تغيير الجنس في الإسلام؟",
        options: ["Yes, if desired", "No, intersex correction is different and can be allowed", "Only for adults", "Only with religious approval"],
        options_ar: ["نعم، إذا رغب", "لا، تصحيح الخنثى مختلف ويمكن السماح به", "فقط للبالغين", "فقط بموافقة دينية"],
        correct: 1,
        explanation: "Gender transition surgery is generally not permitted, but medical correction for genuine intersex conditions may be allowed.",
        explanation_ar: "عمليات تغيير الجنس غير مسموحة عموماً، لكن التصحيح الطبي لحالات الخنبى الحقيقية قد يكون مسموحاً.",
        scholarly_opinion: "Generally forbidden; intersex correction is different medical issue and can be allowed by Islamic Fiqh Academy.",
        hadith_ar: "ممنوع عموماً؛ تصحيح الخنبى قضية طبية مختلفة ويمكن السماح بها من قبل مجمع الفقه الإسلامي.",
        difficulty: "hard",
        category: "medical_ethics"
      },
      {
        prompt: "Can Muslims use conventional banks for savings when there are no Islamic alternatives?",
        prompt_ar: "هل يجوز للمسلمين استخدام البنوك التقليدية للادخار عندما لا توجد بدائل إسلامية؟",
        options: ["Never", "Yes, if no interest is taken", "Only for business", "Only temporarily"],
        options_ar: ["أبداً", "نعم، إذا لم يوخذ ربا", "فقط للأعمال", "فقط مؤقتاً"],
        correct: 1,
        explanation: "In areas without Islamic banking, using conventional banks for essential services without taking interest may be permissible due to necessity.",
        explanation_ar: "في المناطق التي لا توجد بها مصارف إسلامية، قد يكون استخدام البنوك التقليدية للخدمات الأساسية بدون أخذ ربا جائزاً للضرورة.",
        scholarly_opinion: "Yes, if no interest is taken and used only for essential banking services due to necessity (darura).",
        hadith_ar: "نعم، إذا لم يوخذ ربا واستخدم فقط للخدمات المصرفية الأساسية بسبب الضرورة.",
        difficulty: "hard",
        category: "banking"
      },
      {
        prompt: "Can one pray behind an imam who commits innovation (bid'ah)?",
        prompt_ar: "هل يجوز الصلاة خلف إمام يرتكب بدعة؟",
        options: ["Never", "Yes, if the bid'ah is not major kufr", "Only sometimes", "Only if forced"],
        options_ar: ["أبداً", "نعم، إذا لم تكن البدعة كفراً أكبر", "فقط أحياناً", "فقط إذا أجبر"],
        correct: 1,
        explanation: "Prayer behind an imam who commits minor innovations is generally valid, but not behind one who commits major kufr.",
        explanation_ar: "الصلاة خلف إمام يرتكب بدعاً صغيرة صحيحة عموماً، لكن ليس خلف من يرتكب كفراً أكبر.",
        scholarly_opinion: "Yes, if the bid'ah is not major kufr that takes one outside Islam (Shafi'i, Hanafi jurisprudence).",
        hadith_ar: "نعم، إذا لم تكن البدعة كفراً أكبر يخرج من الإسلام (الفقه الشافعي والحنفي).",
        difficulty: "hard",
        category: "prayer_leadership"
      },
      {
        prompt: "A Muslim lives in a non-Muslim country with no mosque nearby—can he pray at home?",
        prompt_ar: "مسلم يعيش في بلد غير مسلم لا يوجد به مسجد قريب - هل يجوز الصلاة في المنزل؟",
        options: ["No, must travel to mosque", "Yes", "Only Friday prayers", "Only if over 40 miles away"],
        options_ar: ["لا، يجب السفر إلى المسجد", "نعم", "فقط صلاة الجمعة", "فقط إذا كان أكثر من 40 ميلاً"],
        correct: 1,
        explanation: "Prayer at home is permissible when no mosque is accessible, as Islam emphasizes ease and removing hardship.",
        explanation_ar: "الصلاة في المنزل جائزة عندما لا يكون المسجد متاحاً، لأن الإسلام يؤكد على التيسير ورفع المشقة.",
        scholarly_opinion: "Clearly permissible per Prophet's migration experience; emphasis on prayer regardless of location.",
        hadith_ar: "جائز بوضوح حسب تجربة هجرة النبي؛ التأكيد على الصلاة بغض النظر عن المكان.",
        difficulty: "hard",
        category: "prayer_location"
      },
      {
        prompt: "Can women travel alone for da'wah or studies?",
        prompt_ar: "هل يجوز للنساء السفر بمفردهن للدعوة أو الدراسة؟",
        options: ["Never allowed", "Permissible with safety and necessity according to many scholars", "Only with mahram", "Only in Muslim countries"],
        options_ar: ["غير مسموح أبداً", "جائز بشرط الأمان والضرورة حسب كثير من العلماء", "فقط مع محرم", "فقط في البلدان المسلمة"],
        correct: 1,
        explanation: "Contemporary scholars often permit women to travel alone for beneficial purposes like education or da'wah when safe and necessary.",
        explanation_ar: "علماء العصر كثيراً ما يسمحون للنساء بالسفر بمفردهن لأغراض نافعة مثل التعليم أو الدعوة عندما يكون آمناً وضرورياً.",
        scholarly_opinion: "Permissible with safety and necessity according to many contemporary scholars, considering modern circumstances.",
        hadith_ar: "جائز بشرط الأمان والضرورة حسب كثير من علماء العصر، مع مراعاة الظروف الحديثة.",
        difficulty: "hard",
        category: "women_travel"
      },
      {
        prompt: "Is it permissible to sell cigarettes?",
        prompt_ar: "هل يجوز بيع السجائر؟",
        options: ["Yes, it's business", "No, because of harm", "Only to adults", "Only in moderation"],
        options_ar: ["نعم، هذا عمل", "لا، بسبب الضرر", "فقط للبالغين", "فقط باعتدال"],
        correct: 1,
        explanation: "Selling cigarettes is generally considered impermissible due to the established harm they cause to health.",
        explanation_ar: "بيع السجائر يعتبر عموماً غير جائز بسبب الضرر المثبت الذي تسببه للصحة.",
        scholarly_opinion: "Scholars equate selling cigarettes with selling harmful substances → forbidden (haram) due to harm principle.",
        hadith_ar: "العلماء يعادلون بيع السجائر ببيع المواد الضارة → ممنوع (حرام) بسبب مبدأ الضرر.",
        difficulty: "hard",
        category: "business_ethics"
      },
      {
        prompt: "Is organ donation after death allowed in Islam?",
        prompt_ar: "هل يجوز التبرع بالأعضاء بعد الموت في الإسلام؟",
        options: ["Never allowed", "Permissible in necessity according to many scholars", "Only to Muslims", "Only certain organs"],
        options_ar: ["غير مسموح أبداً", "جائز في الضرورة حسب كثير من العلماء", "فقط للمسلمين", "فقط أعضاء معينة"],
        correct: 1,
        explanation: "Many contemporary scholars permit organ donation after death to save lives, based on the principle of saving life being paramount.",
        explanation_ar: "كثير من علماء العصر يسمحون بالتبرع بالأعضاء بعد الموت لإنقاذ الأرواح، بناءً على مبدأ أن إنقاذ الحياة أهم.",
        scholarly_opinion: "Acceptable per necessity and saving life according to resolutions by Islamic Fiqh Academy.",
        hadith_ar: "مقبول عند الضرورة وإنقاذ الحياة حسب قرارات مجمع الفقه الإسلامي.",
        difficulty: "hard",
        category: "medical_ethics"
      },
      {
        prompt: "Can a Muslim be a judge in a secular court system?",
        prompt_ar: "هل يجوز للمسلم أن يكون قاضياً في نظام قضاء علماني؟",
        options: ["Never", "Yes, if they uphold justice and avoid haram rulings", "Only in family court", "Only Muslim-majority areas"],
        options_ar: ["أبداً", "نعم، إذا أقام العدل وتجنب الأحكام المحرمة", "فقط في محاكم الأسرة", "فقط في المناطق ذات الأغلبية المسلمة"],
        correct: 1,
        explanation: "Serving as a judge in secular courts can be permissible if one upholds justice and avoids rulings that contradict Islamic principles.",
        explanation_ar: "العمل كقاضٍ في المحاكم العلمانية يمكن أن يكون جائزاً إذا أقام العدل وتجنب الأحكام التي تتعارض مع المبادئ الإسلامية.",
        scholarly_opinion: "Prophet ﷺ appointed non-Muslim judges; permissible if justice is upheld and haram rulings avoided.",
        hadith_ar: "النبي ﷺ عين قضاة غير مسلمين؛ جائز إذا أُقيم العدل وتُجنبت الأحكام المحرمة.",
        difficulty: "hard",
        category: "public_service"
      },
      {
        prompt: "Can Muslims buy houses with riba mortgages if no halal options exist?",
        prompt_ar: "هل يجوز للمسلمين شراء المنازل بقروض ربوية إذا لم توجد خيارات حلال؟",
        options: ["Never", "Only in extreme necessity", "Yes, it's acceptable", "Only for first home"],
        options_ar: ["أبداً", "فقط في الضرورة القصوى", "نعم، هذا مقبول", "فقط للمنزل الأول"],
        correct: 1,
        explanation: "Riba-based mortgages are generally forbidden, but some scholars allow them in extreme necessity when no Islamic alternatives exist.",
        explanation_ar: "الرهون الربوية محرمة عموماً، لكن بعض العلماء يسمحون بها في الضرورة القصوى عندما لا توجد بدائل إسلامية.",
        scholarly_opinion: "Only in extreme necessity when no alternatives exist, with intention to replace when possible (scholars like Ibn Taymiyyah).",
        hadith_ar: "فقط في الضرورة القصوى عندما لا توجد بدائل، مع النية للاستبدال عند الإمكان (علماء مثل ابن تيمية).",
        difficulty: "hard",
        category: "housing_finance"
      },
      {
        prompt: "Is it allowed to remove hijab in dangerous or oppressive situations?",
        prompt_ar: "هل يجوز نزع الحجاب في المواقف الخطرة أو القمعية؟",
        options: ["Never", "Yes, for safety", "Only at night", "Only with permission"],
        options_ar: ["أبداً", "نعم، للأمان", "فقط في الليل", "فقط بإذن"],
        correct: 1,
        explanation: "In situations where wearing hijab poses genuine danger to life or safety, it may be temporarily removed based on necessity.",
        explanation_ar: "في المواقف التي يشكل فيها ارتداء الحجاب خطراً حقيقياً على الحياة أو السلامة، يمكن نزعه مؤقتاً بناءً على الضرورة.",
        scholarly_opinion: "Yes, for safety and protection from harm - necessity overrides normal requirements in dangerous situations.",
        hadith_ar: "نعم، للأمان والحماية من الضرر - الضرورة تغلب المتطلبات العادية في المواقف الخطرة.",
        difficulty: "hard",
        category: "religious_obligations"
      }
    ]
  },

  // Game Three: "Chronicles of Faith" - Islamic History & Seerah
  chroniclesOfFaith: {
    easy: [
      {
        prompt: "Where was the Prophet Muhammad ﷺ born?",
        prompt_ar: "أين ولد النبي محمد ﷺ؟",
        options: ["Madinah", "Makkah", "Ta'if", "Yemen"],
        options_ar: ["المدينة", "مكة", "الطائف", "اليمن"],
        correct: 1,
        explanation: "The Prophet Muhammad ﷺ was born in Makkah in the year 570 CE, in the tribe of Quraysh.",
        explanation_ar: "ولد النبي محمد ﷺ في مكة عام 570 ميلادية، في قبيلة قريش.",
        historical_context: "Born during the Year of the Elephant, when Abraha's army was destroyed while attempting to attack the Kaaba.",
        hadith_ar: "ولد في عام الفيل، عندما دمر جيش أبرهة أثناء محاولته مهاجمة الكعبة.",
        sources: ["Seerah Ibn Hisham", "Sahih Bukhari"],
        difficulty: "easy",
        category: "prophet_life"
      },
      {
        prompt: "How old was the Prophet ﷺ when he received his first revelation?",
        prompt_ar: "كم كان عمر النبي ﷺ عندما تلقى أول وحي؟",
        options: ["35", "40", "45", "50"],
        options_ar: ["35", "40", "45", "50"],
        correct: 1,
        explanation: "The Prophet ﷺ was 40 years old when he received his first revelation from Angel Jibril in the cave of Hira.",
        explanation_ar: "كان النبي ﷺ في الأربعين من عمره عندما تلقى أول وحي من الملائك جبريل في غار حراء.",
        historical_context: "This occurred during the month of Ramadan, marking the beginning of his 23-year prophetic mission.",
        hadith_ar: "حدث هذا في شهر رمضان، مما وضع بداية رسالته النبوية التي استمرت 23 عاماً.",
        sources: ["Sahih Bukhari", "Seerah sources"],
        difficulty: "easy",
        category: "revelation"
      },
      {
        prompt: "What was the name of the first battle in Islam?",
        prompt_ar: "ما اسم أول معركة في الإسلام؟",
        options: ["Uhud", "Badr", "Khandaq", "Khaybar"],
        options_ar: ["أحد", "بدر", "الخندق", "خيبر"],
        correct: 1,
        explanation: "The Battle of Badr was the first major battle in Islamic history, taking place in 624 CE.",
        explanation_ar: "معركة بدر كانت أول معركة كبرى في التاريخ الإسلامي، وقعت عام 624 ميلادية.",
        historical_context: "Despite being outnumbered 3:1, the Muslims achieved victory through Allah's help, establishing Islamic military credibility.",
        hadith_ar: "رغم أن المسلمين كانوا أقل عدداً بنسبة 3:1، حققوا النصر بعون الله، مما أرسى المصداقية العسكرية الإسلامية.",
        sources: ["Seerah sources", "Historical chronicles"],
        difficulty: "easy",
        category: "battles"
      },
      {
        prompt: "Who was the first caliph after the Prophet ﷺ?",
        options: ["Ali", "Umar", "Abu Bakr", "Uthman"],
        correct: 2,
        explanation: "Abu Bakr As-Siddiq became the first caliph after the Prophet's ﷺ death, chosen by the companions.",
        historical_context: "He was the Prophet's closest friend and was with him in the cave during Hijra.",
        sources: ["Historical chronicles", "Sahih Bukhari"],
        difficulty: "easy",
        category: "caliphate"
      },
      {
        prompt: "Who was the Prophet's ﷺ first wife?",
        options: ["Aisha", "Khadijah", "Hafsa", "Zainab"],
        correct: 1,
        explanation: "Khadijah bint Khuwaylid was the Prophet's ﷺ first wife and the first person to accept Islam.",
        historical_context: "She was a successful businesswoman who employed the Prophet ﷺ and later proposed marriage to him.",
        sources: ["Seerah Ibn Hisham", "Historical sources"],
        difficulty: "easy",
        category: "prophet_life"
      },
      {
        prompt: "Where did the Prophet ﷺ migrate to from Makkah?",
        options: ["Ta'if", "Madinah", "Abyssinia", "Syria"],
        correct: 1,
        explanation: "The Prophet ﷺ migrated from Makkah to Madinah in 622 CE, an event known as the Hijra.",
        historical_context: "This migration marks the beginning of the Islamic calendar and established the first Islamic state.",
        sources: ["Seerah sources", "Historical chronicles"],
        difficulty: "easy",
        category: "hijra"
      },
      {
        prompt: "What was the treaty signed between Muslims and the Quraysh?",
        options: ["Treaty of Badr", "Treaty of Hudaybiyyah", "Treaty of Uhud", "Treaty of Khaybar"],
        correct: 1,
        explanation: "The Treaty of Hudaybiyyah was a peace agreement signed in 628 CE between Muslims and the Quraysh tribe.",
        historical_context: "Though initially disappointing to some Muslims, it proved to be a great victory that led to the spread of Islam.",
        sources: ["Sahih Bukhari", "Seerah sources"],
        difficulty: "easy",
        category: "treaties"
      },
      {
        prompt: "How long did the Prophet ﷺ live in Madinah?",
        options: ["8 years", "10 years", "12 years", "15 years"],
        correct: 1,
        explanation: "The Prophet ﷺ lived in Madinah for 10 years, from 622 CE until his death in 632 CE.",
        historical_context: "During this period, he established the Islamic state and completed the revelation of the Quran.",
        sources: ["Seerah sources", "Historical chronicles"],
        difficulty: "easy",
        category: "prophet_life"
      },
      {
        prompt: "Which battle was a major defeat for Muslims due to disobedience of orders?",
        options: ["Badr", "Uhud", "Khandaq", "Mecca"],
        correct: 1,
        explanation: "The Battle of Uhud resulted in a setback for Muslims when archers disobeyed the Prophet's ﷺ orders and left their positions.",
        historical_context: "This battle taught the importance of obedience to leadership and following strategic instructions in warfare.",
        sources: ["Seerah sources", "Historical chronicles"],
        difficulty: "easy",
        category: "battles"
      },
      {
        prompt: "What year did the Hijra (migration) take place?",
        options: ["620 CE", "622 CE", "624 CE", "626 CE"],
        correct: 1,
        explanation: "The Hijra took place in 622 CE, marking the beginning of the Islamic calendar.",
        historical_context: "This migration from Makkah to Madinah was so significant that it became the starting point of the Islamic era.",
        sources: ["Historical sources", "Islamic calendar"],
        difficulty: "easy",
        category: "hijra"
      }
    ],
    medium: [
      {
        prompt: "Which Christian king sheltered Muslims in Abyssinia?",
        options: ["King David", "Najashi (Negus)", "King Solomon", "King Constantine"],
        correct: 1,
        explanation: "The Najashi (Negus) of Abyssinia provided protection to Muslim refugees during the first migration.",
        historical_context: "When early Muslims faced persecution in Makkah, the Prophet ﷺ advised them to migrate to Abyssinia where the just Christian king would protect them.",
        sources: ["Seerah Ibn Hisham", "Historical chronicles"],
        difficulty: "medium",
        category: "migrations"
      },
      {
        prompt: "Which companion was known as 'the sword of Allah'?",
        options: ["Ali ibn Abi Talib", "Khalid ibn al-Walid", "Hamza ibn Abdul-Muttalib", "Sa'd ibn Abi Waqqas"],
        correct: 1,
        explanation: "Khalid ibn al-Walid was given the title 'Sayf Allah al-Maslul' (The Drawn Sword of Allah) by the Prophet ﷺ.",
        historical_context: "Muhammad rewarded Khalid by bestowing on him the honorary title after his military prowess and undefeated record in battle.",
        sources: ["Abu Amina Elias", "Reddit", "Wikipedia", "smallstepstoallah.com"],
        difficulty: "medium",
        category: "companions"
      },
      {
        prompt: "How many years did the Meccan boycott against the Muslims last?",
        options: ["2 years", "3 years", "4 years", "5 years"],
        correct: 1,
        explanation: "The Meccan boycott lasted for 3 years, during which Muslims faced severe hardship and isolation.",
        historical_context: "Chronicled by Ibn Ishaq and al‑Tabari, this boycott was an attempt by the Quraysh to pressure the Muslims and their supporters.",
        sources: ["Ibn Ishaq", "Al-Tabari"],
        difficulty: "medium",
        category: "persecution"
      },
      {
        prompt: "What was the name of the Prophet's ﷺ camel?",
        options: ["Qaswa", "Adba", "Sarab", "Buraq"],
        correct: 0,
        explanation: "The Prophet's ﷺ famous she-camel was named Qaswa, which he rode during important journeys including the Farewell Pilgrimage.",
        historical_context: "Umm Salamah narrated how the Prophet rode his she-camel Qaswa during the Farewell Pilgrimage.",
        sources: ["Hadith collections", "Seerah sources"],
        difficulty: "medium",
        category: "prophet_life"
      },
      {
        prompt: "Who was the Prophet's ﷺ wet nurse?",
        options: ["Aminah", "Halimah Sa'diyyah", "Thuwaybah", "Barakah"],
        correct: 1,
        explanation: "Halimah Sa'diyyah from the Banu Sa'd tribe was the Prophet's ﷺ wet nurse during his early years.",
        historical_context: "According to Arab custom, children were sent to Bedouin tribes for nursing to develop strength and eloquence.",
        sources: ["Ibn Ishaq", "Seerah sources"],
        difficulty: "medium",
        category: "prophet_life"
      },
      {
        prompt: "Which tribe betrayed the Muslims during the Battle of Khandaq (Trench)?",
        options: ["Banu Qaynuqa", "Banu Qurayzah", "Banu Nadir", "Banu Hashim"],
        correct: 1,
        explanation: "Banu Qurayzah broke their treaty with the Muslims and sided with the enemy during the Battle of the Trench.",
        historical_context: "Ibn Hisham and tabi'un historians record this betrayal during the trench incident, which posed a serious threat to Madinah.",
        sources: ["Ibn Hisham", "Historical chronicles"],
        difficulty: "medium",
        category: "battles"
      },
      {
        prompt: "Who conquered Jerusalem peacefully during the Rashidun Caliphate?",
        options: ["Abu Bakr", "Umar ibn al-Khattab", "Uthman", "Ali"],
        correct: 1,
        explanation: "Umar ibn al-Khattab conquered Jerusalem peacefully in 638 CE, showing remarkable tolerance to its inhabitants.",
        historical_context: "Described in seerah accounts as a model of Islamic justice and tolerance toward other faiths.",
        sources: ["Historical chronicles", "Seerah sources"],
        difficulty: "medium",
        category: "caliphate"
      },
      {
        prompt: "How long did the Prophet's ﷺ prophetic mission last?",
        options: ["20 years", "23 years", "25 years", "30 years"],
        correct: 1,
        explanation: "The Prophet's ﷺ mission lasted 23 years, from age 40 to 63.",
        historical_context: "13 years in Makkah and 10 years in Madinah, during which the Quran was revealed and Islam was established.",
        sources: ["Seerah consensus", "Historical sources"],
        difficulty: "medium",
        category: "prophet_life"
      },
      {
        prompt: "Which battle involved digging a trench around Madinah?",
        options: ["Battle of Badr", "Battle of Uhud", "Battle of Khandaq (Trench)", "Battle of Khaybar"],
        correct: 2,
        explanation: "The Battle of Khandaq (Trench) in 627 CE involved digging a defensive trench around Madinah.",
        historical_context: "Seerah historians like al-Tabari detail this siege in 5 AH, where the idea of digging a trench came from Salman al-Farisi.",
        sources: ["Al-Tabari", "Seerah sources"],
        difficulty: "medium",
        category: "battles"
      },
      {
        prompt: "Which companion compiled the Quran into one mushaf (book form)?",
        options: ["Abu Bakr", "Umar", "Uthman ibn Affan", "Ali"],
        correct: 2,
        explanation: "Uthman ibn Affan ordered the compilation and standardization of the Quran into one mushaf.",
        historical_context: "Seerah sources state Uthman ordered the compilation and standardization after multiple readings emerged in different regions.",
        sources: ["Seerah sources", "Historical chronicles"],
        difficulty: "medium",
        category: "quran_compilation"
      }
    ],
    hard: [
      {
        prompt: "Which companion was a Roman slave before converting to Islam?",
        options: ["Bilal ibn Rabah", "Suhayb Ar-Rumi", "Salman al-Farisi", "Abdullah ibn Mas'ud"],
        correct: 1,
        explanation: "Suhayb Ar-Rumi was originally from the Byzantine (Roman) territories and earned his epithet 'Ar-Rumi' due to his Roman origins.",
        historical_context: "Tabi'un biographies record how he earned his epithet 'Ar‑Rumi' due to Roman origins and his sacrifice for Islam.",
        sources: ["Tabi'un biographies", "Historical sources"],
        difficulty: "hard",
        category: "companions"
      },
      {
        prompt: "Who led the Muslim army after Zayd ibn Harithah was martyred at the Battle of Mu'tah?",
        options: ["Khalid ibn al-Walid", "Ja'far ibn Abi Talib", "Abdullah ibn Rawahah", "All of them in sequence"],
        correct: 3,
        explanation: "The leadership passed from Zayd to Ja'far ibn Abi Talib, then to Abdullah ibn Rawahah, and finally to Khalid ibn al-Walid who led the tactical withdrawal.",
        historical_context: "Documented in hadith: 'Who was the sword of the swords of Allah…then it was gripped by a sword of the swords of Allah…'",
        sources: ["Sahih Muslim", "Quran and Hadith"],
        difficulty: "hard",
        category: "battles"
      },
      {
        prompt: "In which city did the Prophet ﷺ pass away?",
        options: ["Makkah", "Madinah", "Ta'if", "Jerusalem"],
        correct: 1,
        explanation: "The Prophet ﷺ passed away in Madinah in the house of his wife Aisha.",
        historical_context: "Recorded in Sahih al‑Bukhari: his death occurred in his wife 'Aisha's chamber in Madinah.",
        sources: ["Sahih Bukhari", "Seerah sources"],
        difficulty: "hard",
        category: "prophet_death"
      },
      {
        prompt: "Which event marked the Prophet ﷺ publicly calling people to Islam?",
        options: ["First revelation", "Mount Safa declaration", "Migration to Madinah", "Treaty of Hudaybiyyah"],
        correct: 1,
        explanation: "The public declaration of Islam began when the Prophet ﷺ climbed Mount Safa and called the tribes of Makkah to listen to his message.",
        historical_context: "Seerah books cite the event on Mount Safa after receiving the command to warn his nearest relatives as the public proclamation.",
        sources: ["Seerah sources", "Historical chronicles"],
        difficulty: "hard",
        category: "public_dawah"
      },
      {
        prompt: "In which year (AH) did the Farewell Hajj take place?",
        options: ["8 AH", "9 AH", "10 AH", "11 AH"],
        correct: 2,
        explanation: "The Farewell Hajj took place in 10 AH, during which the Prophet ﷺ delivered his famous farewell sermon.",
        historical_context: "Hadith narrated by Ibn Umar marks this as the Prophet's last Hajj when he completed the message of Islam.",
        sources: ["Hadith collections", "Historical sources"],
        difficulty: "hard",
        category: "hajj"
      },
      {
        prompt: "Who was the first martyr in Islam?",
        options: ["Hamza ibn Abdul-Muttalib", "Sumayyah bint Khayyat", "Mus'ab ibn Umayr", "Yasir ibn Amir"],
        correct: 1,
        explanation: "Sumayyah bint Khayyat was the first person to be martyred for Islam, killed by Abu Jahl for refusing to renounce her faith.",
        historical_context: "Seerah records state Abu Jahl speared her; after he was killed at Badr, the Prophet ﷺ told Ammar: 'Allah has killed your mother's killer.'",
        sources: ["Reddit", "Wikipedia", "Seerah sources"],
        difficulty: "hard",
        category: "martyrs"
      },
      {
        prompt: "Who killed Musaylimah the Liar during the Ridda Wars?",
        options: ["Khalid ibn al-Walid", "Wahshi", "Abu Bakr", "Zayd ibn Thabit"],
        correct: 1,
        explanation: "Wahshi ibn Harb, who had previously killed Hamza at Uhud, killed Musaylimah the Liar during the Battle of Yamamah.",
        historical_context: "Tabi'un history: Wahshi ibn Harb killed Musaylimah at Yamamah during the Ridda wars under Abu Bakr's caliphate.",
        sources: ["Historical chronicles", "Ridda Wars accounts"],
        difficulty: "hard",
        category: "ridda_wars"
      },
      {
        prompt: "Which treaty was broken by the Quraysh, leading to the Conquest of Makkah?",
        options: ["Treaty of Aqaba", "Treaty of Hudaybiyyah", "Pact of Mutayyabin", "Constitution of Madinah"],
        correct: 1,
        explanation: "The Quraysh broke the Treaty of Hudaybiyyah by attacking the Banu Khuza'ah, who were allies of the Muslims.",
        historical_context: "Seerah texts record Quraysh violating the treaty through their allies, prompting the conquest of Makkah.",
        sources: ["Seerah sources", "Historical chronicles"],
        difficulty: "hard",
        category: "conquest"
      },
      {
        prompt: "Approximately how many letters did the Prophet ﷺ send to kings and rulers inviting them to Islam?",
        options: ["5", "7", "10", "12"],
        correct: 1,
        explanation: "The Prophet ﷺ sent approximately 7 letters to various kings and rulers, including Heraclius, Chosroes, and the Najashi.",
        historical_context: "Seerah narrations list letters sent to Heraclius, Caesar, Chosroes, Najashi, Mukkawar, and others—around seven or more.",
        sources: ["Seerah sources", "Historical chronicles"],
        difficulty: "hard",
        category: "diplomacy"
      },
      {
        prompt: "Who was buried next to the Prophet ﷺ in his room?",
        options: ["Ali and Abbas", "Abu Bakr and Umar", "Hamza and Ja'far", "Uthman and Ali"],
        correct: 1,
        explanation: "Abu Bakr and Umar ibn al-Khattab were buried next to the Prophet ﷺ in Aisha's room.",
        historical_context: "Sahih al‑Bukhari and Muslim narrate his burial; Abu Bakr and Umar were later buried beside him in Aisha's room.",
        sources: ["Sahih Bukhari", "Sahih Muslim"],
        difficulty: "hard",
        category: "burial"
      }
    ]
  },

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

