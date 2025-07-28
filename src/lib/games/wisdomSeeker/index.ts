// Wisdom Seeker - Contemporary Islamic Ethics & Fatwa Game
export interface WisdomQuestion {
  prompt: string;
  prompt_ar: string;
  options: string[];
  options_ar: string[];
  correct: number;
  explanation: string;
  explanation_ar: string;
  scholarly_opinion: string;
  difficulty: string;
  category: string;
  hadith_ar?: string; // Optional field for some questions
  sources?: string[]; // Optional field for some questions
}

export interface WisdomGameContent {
  easy: WisdomQuestion[];
  medium: WisdomQuestion[];
  hard: WisdomQuestion[];
}

export const wisdomSeeker: WisdomGameContent = {
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
};
