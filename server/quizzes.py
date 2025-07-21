import random
from pathlib import Path


#################################################
# Utility Functions
#################################################
def r(f):
    return Path(f).read_text(encoding='utf-8')


def shuffle(ar):
    ar = ar.copy()
    random.shuffle(ar)
    return ar


def random_int(min, max):
    return random.randint(min, max)


def split(string, delimiter, n):
    parts = string.split(delimiter)
    return parts[0 : n - 1] + [delimiter.join(parts[n - 1 :])]


def sample(population, k):
    return random.sample(population, k)


#################################################
# Data Loading
#################################################
maqasid = r('../data/maqasid.txt').split('\n')
ghareeb = r('../data/ghareeb.txt').split('\n')
suwar = 'الفاتحة,البقرة,آل عمران,النساء,المائدة,الأنعام,الأعراف,الأنفال,التوبة,يونس,هود,يوسف,الرعد,إبراهيم,الحجر,النحل,الإسراء,الكهف,مريم,طه,الأنبياء,الحج,المؤمنون,النور,الفرقان,الشعراء,النمل,القصص,العنكبوت,الروم,لقمان,السجدة,الأحزاب,سبأ,فاطر,يس,الصافات,ص,الزمر,غافر,فصلت,الشورى,الزخرف,الدخان,الجاثية,الأحقاف,محمد,الفتح,الحجرات,ق,الذاريات,الطور,النجم,القمر,الرحمن,الواقعة,الحديد,المجادلة,الحشر,الممتحنة,الصف,الجمعة,المنافقون,التغابن,الطلاق,التحريم,الملك,القلم,الحاقة,المعارج,نوح,الجن,المزمل,المدثر,القيامة,الإنسان,المرسلات,النبأ,النازعات,عبس,التكوير,الانفطار,المطففين,الانشقاق,البروج,الطارق,الأعلى,الغاشية,الفجر,البلد,الشمس,الليل,الضحى,الشرح,التين,العلق,القدر,البينة,الزلزلة,العاديات,القارعة,التكاثر,العصر,الهمزة,الفيل,قريش,الماعون,الكوثر,الكافرون,النصر,المسد,الإخلاص,الفلق,الناس'.split(
    ','
)


#################################################
# Preparation Functions
#################################################
def prep_ghareeb():
    questions_num = 7

    words = [split(l, ': ', 2) for l in random.sample(ghareeb, questions_num)]
    return {
        'words': shuffle([[w[0:][0], i] for i, w in enumerate(words)]),
        'defs': shuffle([[w[1:], i] for i, w in enumerate(words)]),
    }


def prep_tarteeb_suwar():
    questions_num = 15
    offset = random_int(1, 115)
    return {
        'offset': offset,
        'data': shuffle([{'id': i + 1, 'data': [i, s]} for i, s in enumerate(suwar)][offset : offset + questions_num]),
    }


def prep_maqasid():
    questions_num = 2
    data = [[i + 1, l.split(',')] for i, l in enumerate(maqasid)]

    sampled = random.sample(data, questions_num)
    suwar_groups = [{'no': m[0], 'items': [], 'name': suwar[m[0] - 1]} for m in sampled]
    quiz_data = shuffle([{'data': maqsad, 'no': d[0], 'id': random.random()} for d in sampled for maqsad in d[1]])
    return {'suwar_groups': suwar_groups, 'data': quiz_data}


def prep_makan_nuzul():
    questions_num = 15
    answers_raw = (
        '0 1 1 1 1 0 0 1 1 0 0 0 1 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 '
        '0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 1 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 1 '
        '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0'
    )
    answers = [int(a) for a in answers_raw.split()]
    data = [{'id': i, 'data': [s, ['مكية', 'مدنية'][answers[i]]]} for i, s in enumerate(suwar)]
    return random.sample(data, questions_num)
