/* ========== إحداثيات النقاط على الخريطة (705×596) ========== */
const N = {
  gate: {x:655,y:548,l:1}, gd:{x:674,y:524}, g2:{x:640,y:495}, g3:{x:618,y:440,l:1},
  re:   {x:602,y:395}, rm:{x:545,y:392}, rde:{x:480,y:396,l:1},
  rc:   {x:432,y:398,l:1}, rb:{x:352,y:404,l:1}, rw:{x:300,y:408,l:1},
  pk:   {x:562,y:432},
  n1:   {x:428,y:356}, td:{x:413,y:314,l:1}, c2:{x:420,y:282}, cd:{x:408,y:245,l:1},
  adm:  {x:456,y:198}, act:{x:452,y:238}, clinic:{x:474,y:266,l:1},
  c3:   {x:428,y:200}, c4:{x:416,y:150}, ab:{x:318,y:106}, ae:{x:380,y:112,l:1},
  wk:   {x:445,y:98}, cl:{x:486,y:182},
  e3:   {x:540,y:200}, e2:{x:546,y:270,l:1}, e1:{x:548,y:345}, rest:{x:548,y:122},
  bn1:  {x:268,y:300}, bn2:{x:250,y:255}, bn3:{x:228,y:175}, bd:{x:256,y:124,l:1},
  bk:   {x:215,y:258},
  f1:   {x:290,y:395}, foot:{x:275,y:368}, sw1:{x:278,y:445}, sw:{x:254,y:480}
};

/* ========== الطرق بين النقاط ========== */
const E = [
  ['gate','gd'],['gate','g2'],['g2','g3'],['g3','re'],['re','rm'],
  ['rm','rde'],['rde','rc'],['rc','rb'],['rb','rw'],['rm','pk'],
  ['n1','td'],['e2','clinic'],['td','c2'],['c2','cd'],['c2','clinic'],
  ['adm','cl'],['adm','c3'],['cd','act'],['cd','c3'],['c3','c4'],
  ['c4','ae'],['ae','ab'],['c4','wk'],['c3','cl'],
  ['rm','e1'],['e1','e2'],['e2','e3'],['e3','rest'],
  ['rw','f1'],['f1','foot'],['rw','sw1'],['sw1','sw'],
  ['rw','bn1'],['bn1','bn2'],['bn2','bn3'],['bn3','bd'],['bn2','bk']
];

/* ========== الأماكن ========== */
const PLACES = {
  gate:    {n:{ar:'المدخل الرئيسي',fr:'Entrée principale',en:'Main entrance'}, node:'gate', emoji:'🚪', nochip:true},
  guard:   {n:{ar:'مركز الحراسة',fr:'Poste de garde',en:'Guard post'}, node:'gd', emoji:'🛡️',
            hint:{ar:'عند باب مدخل الإقامة.',fr:'À la porte d’entrée de la résidence.',en:'At the residence entrance gate.'}},
  adm:     {n:{ar:'الإدارة',fr:'Administration',en:'Administration'}, node:'adm', emoji:'🏢',
            hint:{ar:'تقع بجانب النادي. باب حديدي أزرق.',fr:'À côté du club. Porte en fer bleue.',en:'Next to the club. Blue iron gate.'}},
  act:     {n:{ar:'مصلحة النشاطات',fr:'Service des activités',en:'Activities Service'}, node:'act', emoji:'🩺',
            hint:{ar:'باب أسود بشبكة حديدية وأمامه درجتان.',fr:'Porte noire avec grille en fer, deux marches devant.',en:'Black door with an iron grille and two steps.'}},
  clinic:  {n:{ar:'العيادة',fr:'Infirmerie',en:'Clinic'}, node:'clinic', emoji:'🏥',
            hint:{ar:'لافتة زرقاء على الجدار. المدخل بباب بشبكة حديدية.',fr:'Plaque bleue sur le mur. Entrée avec porte à grille.',en:'Blue sign on the wall. Iron-grilled entrance door.'}},
  rest:    {n:{ar:'المطعم',fr:'Restaurant',en:'Restaurant'}, node:'rest', emoji:'🍽️',
            hint:{ar:'قاعة الإطعام، وفيها شباك شحن البطاقات.',fr:'Salle de restauration, avec guichet de rechargement.',en:'Dining hall, with a card top-up window.'}},
  club:    {n:{ar:'النادي (أكل سريع ومقهى)',fr:'Club (fast-food)',en:'Club (fast food)'}, node:'cl', emoji:'☕',
            hint:{ar:'لافتة «النادي · FOYER» على يمين الباب الأزرق.',fr:'Enseigne « FOYER · النادي » à droite de la porte bleue.',en:'The “FOYER · النادي” sign is to the right of the blue door.'}},
  work:    {n:{ar:'المرش',fr:'Douches',en:'Showers'}, node:'wk', emoji:'🚿'},
  foot:    {n:{ar:'ملعب كرة القدم',fr:'Terrain de football',en:'Football pitch'}, node:'foot', emoji:'⚽'},
  basket:  {n:{ar:'ملعب كرة السلة',fr:'Terrain de basket',en:'Basketball court'}, node:'bk', emoji:'🏀'},
  park:    {n:{ar:'موقف السيارات',fr:'Parking',en:'Parking lot'}, node:'pk', emoji:'🅿️'},
  mosalla: {n:{ar:'مصلى الفضيل الورتلاني',fr:'Salle de prière',en:'Prayer room'}, node:'ab', emoji:'🕌',
            hint:{ar:'يقع تحت الطابق الأول.',fr:'Situé sous le 1er étage.',en:'Located below the first floor.'}},
  sw:      {n:{ar:'Street Workout',fr:'Street Workout',en:'Street Workout'}, node:'sw', emoji:'🏋️'}
};

/* ========== الأجنحة والغرف ========== */
const BLOCKS = {
  A: {node:'ab', x:370, y:58,  f:{0:[1,11], 1:[12,22]}, partial:true},
  B: {node:'ab', x:255, y:92,  f:{0:[1,11], 1:[12,22], 2:[23,33], 3:[34,44]}},
  C: {node:'cd', x:360, y:205, f:{0:[1,17], 1:[22,43], 2:[44,65], 3:[66,87]}, gap:[18,21]},
  D: {node:'td', x:480, y:313, f:{1:[1,13], 2:[14,26], 3:[27,39]}},
  E: {node:'td', x:352, y:350, f:{1:[1,11], 2:[12,22], 3:[23,33]}}
};

/* أسماء النقاط الوسيطة (للسرد) */
const WL = {
  gate:{ar:'المدخل الرئيسي',fr:'l’entrée principale',en:'the main entrance'},
  g3:{ar:'الطريق بمحاذاة الموقف',fr:'la route le long du parking',en:'the road alongside the parking lot'},
  rde:{ar:'أسفل الجناح D',fr:'le bas de l’aile D',en:'the bottom of Wing D'},
  rc:{ar:'المفترق المؤدي للبرج المركزي',fr:'le carrefour vers la tour centrale',en:'the junction toward the central tower'},
  rb:{ar:'أسفل الجناح E',fr:'le bas de l’aile E',en:'the bottom of Wing E'},
  rw:{ar:'آخر الطريق غرب الجناح E',fr:'le bout de la route, à l’ouest de l’aile E',en:'the end of the road, west of Wing E'},
  td:{ar:'البرج المركزي',fr:'la tour centrale',en:'the central tower'},
  cd:{ar:'شرق الجناح C',fr:'le côté est de l’aile C',en:'the east side of Wing C'},
  ae:{ar:'ممر الجناح A',fr:'le passage de l’aile A',en:'the Wing A passage'},
  e2:{ar:'شرق الجناح D',fr:'le côté est de l’aile D',en:'the east side of Wing D'},
  bd:{ar:'أسفل الجناح B',fr:'le bas de l’aile B',en:'the bottom of Wing B'}
};
