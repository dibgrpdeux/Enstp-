/* ========== الترجمة ========== */
const DIR = {ar:'rtl', fr:'ltr', en:'ltr'};
const frTo   = x => x.startsWith('le ') ? 'au '+x.slice(3)  : x.startsWith('les ') ? 'aux '+x.slice(4)  : 'à '+x;
const frFrom = x => x.startsWith('le ') ? 'du '+x.slice(3)  : x.startsWith('les ') ? 'des '+x.slice(4)  : 'de '+x;

const TX = {
ar:{
 pageTitle:'دليل قاريدي 1', title:'قاريدي 1',
 sub:'اختر وجهتك أو رقم غرفتك، ونرسم لك الطريق',
 startLabel:'أنا الآن عند', tabPlaces:'أماكن', tabRooms:'غرف',
 ph:'رقم الغرفة، مثال: 52', phAria:'رقم الغرفة', go:'ابحث',
 zin:'تكبير', zout:'تصغير', zhome:'العودة لوسط الخريطة',
 tsat:'تبديل الصورة الجوية', satAlt:'صورة جوية',
 here:'أنت هنا', dest:'الوجهة', tap:'المس أي رمز لاختياره · 🛰️ الصورة الجوية',
 foot:'المسارات تقريبية، وقد تختلف الممرات الفعلية قليلاً.',
 kitchen:'مطبخ', wing:b=>'الجناح '+b,
 emptyPlaces:'اختر وجهة من الأعلى أو المس رمزاً على الخريطة.',
 emptyRooms:'اختر الجناح ثم اكتب رقم غرفتك.',
 pickBlock:'اختر الجناح أولاً.', enterNum:'اكتب رقم الغرفة.',
 gapMsg:(a,b)=>`الغرف ${a} إلى ${b} في الجناح C غير ظاهرة، اسأل الإدارة.`,
 partialMsg:(n,b)=>`الغرفة ${n} خارج الممرات الموثقة للجناح ${b}، فالمتوفر الطابق الأرضي والأول فقط.`,
 maxMsg:(b,mx)=>`أكبر رقم في الجناح ${b} هو ${mx}.`,
 nfMsg:(n,b)=>`الغرفة ${n} غير موجودة في الجناح ${b}.`,
 routeFrom:s=>`الطريق من ${s}`, howEntrance:'كيف يبدو المدخل؟',
 startFrom:s=>`انطلق من <b>${s}</b>`,
 via:x=>`مرّ على <b>${x}</b>`,
 arrive:x=>`ستصل إلى <b>${x}</b>`,
 arriveWing:b=>`ستصل إلى <b>مدخل الجناح ${b}</b>`,
 near:'أنت قريب من الوجهة.',
 shared:(o,w)=>`تشترك مع الجناح ${o} في مدخل واحد: «الجناح ${w}»`,
 pickOrNum:'اختر الممر أو اكتب رقم الغرفة.',
 noDocs:'لم تُوثَّق ممرات هذا الجناح بعد.',
 deTitle:'مدخل البرج D E', deText:'لافتة خضراء «الجناح D E» فوق الباب.',
 gapNote:(a,b)=>`الغرف ${a}–${b} غير موثقة.`,
 deRdcNote:b=>`لافتات الأرضي للجناح ${b} غير موثقة.`,
 aNote:'ممرات الطابقين 2 و3 للجناح A غير موثقة.',
 abNote:'يوجد هنا أيضاً مصلى الفضيل الورتلاني.',
 roomHead:(n,f)=>n!==null?`الغرفة ${n} · ${f}`:f,
 corrLine:(b,a,z,t)=>`الجناح ${b} · الممر من ${a} إلى ${z} (${t} غرفة)`,
 corrTitle:'هذا هو مدخل الممر',
 corrDesc:s=>`باب حديدي رمادي مزدوج، وفوقه لوحة بيضاء: <span dir="ltr">${s}</span>.`,
 enterWing:w=>`ادخل من <b>الجناح ${w}</b>`,
 climb:f=>`اصعد للـ <b>${f}</b>`,
 stay:'ابقَ في <b>الطابق الأرضي</b>',
 findSign:s=>`ابحث فوق الباب عن <b dir="ltr">${s}</b> وادخل الممر`,
 yourRoom:n=>`غرفتك <b>${n}</b> داخل هذا الممر`,
 FL:['الطابق الأرضي','الطابق الأول','الطابق الثاني','الطابق الثالث']
},
fr:{
 pageTitle:'Guide Garidi 1', title:'Garidi 1',
 sub:'Choisissez une destination ou un numéro de chambre',
 startLabel:'Je suis actuellement à', tabPlaces:'Lieux', tabRooms:'Chambres',
 ph:'N° de chambre, ex. : 52', phAria:'Numéro de chambre', go:'Chercher',
 zin:'Zoom avant', zout:'Zoom arrière', zhome:'Revenir au centre',
 tsat:'Vue aérienne', satAlt:'Vue aérienne',
 here:'Vous êtes ici', dest:'Destination', tap:'Touchez un symbole · 🛰️ vue aérienne',
 foot:'Les itinéraires sont approximatifs.',
 kitchen:'Cuisine', wing:b=>'Aile '+b,
 emptyPlaces:'Choisissez une destination ci-dessus ou touchez un symbole.',
 emptyRooms:'Choisissez l’aile, puis saisissez le numéro.',
 pickBlock:'Choisissez d’abord l’aile.', enterNum:'Saisissez le numéro.',
 gapMsg:(a,b)=>`Les chambres ${a} à ${b} de l’aile C ne figurent pas.`,
 partialMsg:(n,b)=>`La chambre ${n} est hors des couloirs documentés de l’aile ${b}.`,
 maxMsg:(b,mx)=>`Le plus grand numéro de l’aile ${b} est ${mx}.`,
 nfMsg:(n,b)=>`La chambre ${n} n’existe pas dans l’aile ${b}.`,
 routeFrom:s=>`Chemin depuis : ${s}`, howEntrance:'À quoi ressemble l’entrée ?',
 startFrom:s=>`Partez <b>${frFrom(s)}</b>`,
 via:x=>`Passez par <b>${x}</b>`,
 arrive:x=>`Vous arrivez <b>${frTo(x)}</b>`,
 arriveWing:b=>`Vous arrivez à <b>l’entrée de l’aile ${b}</b>`,
 near:'Vous êtes déjà proche.',
 shared:(o,w)=>`Entrée unique avec l’aile ${o} : « Aile ${w} »`,
 pickOrNum:'Choisissez le couloir ou saisissez le numéro.',
 noDocs:'Couloirs non documentés.',
 deTitle:'Entrée tour D E', deText:'Panneau vert « Aile D E » au-dessus de la porte.',
 gapNote:(a,b)=>`Les chambres ${a}–${b} ne figurent pas.`,
 deRdcNote:b=>`Plaques du RDC de l’aile ${b} non documentées.`,
 aNote:'Couloirs 2e et 3e étages de l’aile A non documentés.',
 abNote:'Cette entrée dessert aussi la salle de prière.',
 roomHead:(n,f)=>n!==null?`Chambre ${n} · ${f}`:f,
 corrLine:(b,a,z,t)=>`Aile ${b} · couloir de ${a} à ${z} (${t} chambres)`,
 corrTitle:'Voici l’entrée du couloir',
 corrDesc:s=>`Double porte métallique grise, plaque blanche : <span dir="ltr">${s}</span>.`,
 enterWing:w=>`Entrez par l’<b>aile ${w}</b>`,
 climb:f=>`Montez au <b>${f}</b>`,
 stay:'Restez au <b>rez-de-chaussée</b>',
 findSign:s=>`Cherchez la plaque <b dir="ltr">${s}</b> et entrez`,
 yourRoom:n=>`Votre chambre <b>${n}</b> est dans ce couloir`,
 FL:['Rez-de-chaussée','1er étage','2e étage','3e étage']
},
en:{
 pageTitle:'Garidi 1 Guide', title:'Garidi 1',
 sub:'Pick a destination or room number and we’ll draw the way',
 startLabel:'I am now at', tabPlaces:'Places', tabRooms:'Rooms',
 ph:'Room number, e.g. 52', phAria:'Room number', go:'Search',
 zin:'Zoom in', zout:'Zoom out', zhome:'Back to center',
 tsat:'Aerial view', satAlt:'Aerial view',
 here:'You are here', dest:'Destination', tap:'Tap a symbol · 🛰️ aerial view',
 foot:'Routes are approximate.',
 kitchen:'Kitchen', wing:b=>'Wing '+b,
 emptyPlaces:'Pick a destination above or tap a symbol on the map.',
 emptyRooms:'Pick the wing, then type your room number.',
 pickBlock:'Pick the wing first.', enterNum:'Type the room number.',
 gapMsg:(a,b)=>`Rooms ${a}–${b} in Wing C aren’t documented.`,
 partialMsg:(n,b)=>`Room ${n} is outside the documented corridors of Wing ${b}.`,
 maxMsg:(b,mx)=>`The highest room number in Wing ${b} is ${mx}.`,
 nfMsg:(n,b)=>`Room ${n} isn’t in Wing ${b}.`,
 routeFrom:s=>`Route from ${s}`, howEntrance:'What does the entrance look like?',
 startFrom:s=>`Start from <b>${s}</b>`,
 via:x=>`Go via <b>${x}</b>`,
 arrive:x=>`You will arrive at <b>${x}</b>`,
 arriveWing:b=>`You will arrive at the <b>Wing ${b} entrance</b>`,
 near:'You are already close.',
 shared:(o,w)=>`Shares one entrance with Wing ${o}: “Wing ${w}”`,
 pickOrNum:'Choose the corridor or type the room number.',
 noDocs:'Corridor plates not documented yet.',
 deTitle:'D E tower entrance', deText:'Green sign “Wing D E” above the door.',
 gapNote:(a,b)=>`Rooms ${a}–${b} aren’t documented.`,
 deRdcNote:b=>`Ground-floor plates of Wing ${b} aren’t documented.`,
 aNote:'2nd & 3rd floor corridors of Wing A aren’t documented.',
 abNote:'This entrance also leads to the prayer room.',
 roomHead:(n,f)=>n!==null?`Room ${n} · ${f}`:f,
 corrLine:(b,a,z,t)=>`Wing ${b} · corridor ${a} to ${z} (${t} rooms)`,
 corrTitle:'This is the corridor entrance',
 corrDesc:s=>`A grey double metal door with a white plate reading <span dir="ltr">${s}</span>.`,
 enterWing:w=>`Enter through <b>Wing ${w}</b>`,
 climb:f=>`Take the stairs to the <b>${f}</b>`,
 stay:'Stay on the <b>ground floor</b>',
 findSign:s=>`Look for the plate <b dir="ltr">${s}</b> and enter`,
 yourRoom:n=>`Your room <b>${n}</b> is in this corridor`,
 FL:['Ground floor','1st floor','2nd floor','3rd floor']
}};

/* ========== الحالة العامة ========== */
let LANG = 'ar', CHOSEN = false;
try {
  const s = localStorage.getItem('garidi_lang');
  if (s && TX[s]) { LANG = s; CHOSEN = true; }
} catch(e) {}

const t = (k, ...a) => {
  const v = (TX[LANG][k] ?? TX.ar[k]);
  return typeof v === 'function' ? v(...a) : v;
};
const L = o => o[LANG] || o.ar;
const pname = id => L(PLACES[id].n);
const sname = id => pname(id);

const S = {
  tab: 'places', start: 'gate', dest: null,
  block: null, floor: null, num: null,
  zoom: 1, msg: null
};

/* ========== بناء الرسم البياني ========== */
const adj = {};
E.forEach(([a,b]) => {
  const d = Math.hypot(N[a].x - N[b].x, N[a].y - N[b].y);
  (adj[a] = adj[a] || []).push([b, d]);
  (adj[b] = adj[b] || []).push([a, d]);
});

/* ========== Dijkstra ========== */
function path(from, to) {
  const dist = {}, prev = {}, q = new Set(Object.keys(N));
  Object.keys(N).forEach(k => dist[k] = Infinity);
  dist[from] = 0;
  while (q.size) {
    let u = null;
    q.forEach(k => { if (u === null || dist[k] < dist[u]) u = k; });
    if (u === to || dist[u] === Infinity) break;
    q.delete(u);
    (adj[u] || []).forEach(([v, d]) => {
      if (dist[u] + d < dist[v]) { dist[v] = dist[u] + d; prev[v] = u; }
    });
  }
  const p = [];
  let c = to;
  while (c) { p.unshift(c); c = prev[c]; }
  return p[0] === from ? p : [from, to];
}

/* ========== رسم الممرات الأساسية ========== */
const NS = 'http://www.w3.org/2000/svg';
(function drawBasePaths() {
  const pg = document.getElementById('paths');
  E.forEach(([a, b]) => {
    const l = document.createElementNS(NS, 'line');
    l.setAttribute('x1', N[a].x); l.setAttribute('y1', N[a].y);
    l.setAttribute('x2', N[b].x); l.setAttribute('y2', N[b].y);
    l.setAttribute('class', 'pth');
    pg.appendChild(l);
  });

  // أشجار عشوائية
  let s = 7;
  const rnd = () => {
    s |= 0; s = s + 0x6D2B79F5 | 0;
    let t = Math.imul(s ^ s >>> 15, 1 | s);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
  const zones = [
    [120,235,34,14],[145,330,30,12],[195,440,34,10],[112,160,26,8],
    [165,100,22,5],[545,190,38,13],[515,115,26,8],[598,245,34,10],
    [430,372,22,6],[330,230,32,9],[290,160,20,5],[580,60,16,4],
    [460,215,16,4],[470,350,22,6],[640,200,30,8],[300,470,40,8]
  ];
  const tg = document.getElementById('trees');
  zones.forEach(([cx, cy, r, n]) => {
    for (let i = 0; i < n; i++) {
      const a = rnd() * 6.283, d = Math.sqrt(rnd()) * r;
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', (cx + Math.cos(a) * d).toFixed(1));
      c.setAttribute('cy', (cy + Math.sin(a) * d).toFixed(1));
      c.setAttribute('r', (4 + rnd() * 5).toFixed(1));
      c.setAttribute('class', 'tree');
      tg.appendChild(c);
    }
  });
})();

/* ========== أدوات مساعدة ========== */
const W = 705, H = 596;
const pad = n => String(n).padStart(2, '0');
const sign = f => f === 0 ? 'RDC' : f + ' ETAGE';
const plate = (b, f, cls = '') => {
  const r = BLOCKS[b].f[f];
  return `<span class="plate ${cls}"><span class="L">${b}</span>
    <span class="R"><i>${sign(f)}</i><b>${pad(r[0])}-${pad(r[1])}</b></span></span>`;
};
const $ = id => document.getElementById(id);
const stage = $('stage');

const pct = (x, y) => `left:${x / W * 100}%;top:${y / H * 100}%`;

/* ========== إضافة العلامات ========== */
const kitchen = document.createElement('span');
kitchen.className = 'lb';
kitchen.style.cssText = pct(587, 148);
stage.appendChild(kitchen);

Object.entries(PLACES).forEach(([id, p]) => {
  const n = N[p.node];
  const b = document.createElement('button');
  b.className = 'pin';
  b.dataset.id = id; b.dataset.kind = 'p';
  b.style.cssText = pct(n.x, n.y);
  b.innerHTML = `${p.emoji}<span class="cap"></span>`;
  b.onclick = () => { S.tab = 'places'; S.dest = id; S.msg = null; render(true); };
  stage.appendChild(b);
});

Object.entries(BLOCKS).forEach(([id, bl]) => {
  const b = document.createElement('button');
  b.className = 'bp';
  b.dataset.id = id; b.dataset.kind = 'b';
  b.style.cssText = pct(bl.x, bl.y);
  b.textContent = id;
  b.onclick = () => {
    S.tab = 'rooms'; S.block = id; S.floor = null;
    S.num = null; S.msg = null; render(true);
  };
  stage.appendChild(b);
});

/* ========== التطبيق الثابت ========== */
let startOpts = [];
function applyStatic() {
  const de = document.documentElement;
  de.lang = LANG; de.dir = DIR[LANG];
  document.title = t('pageTitle');

  document.querySelectorAll('[data-i18n]').forEach(e => e.textContent = t(e.dataset.i18n));
  document.querySelectorAll('[data-i18n-aria]').forEach(e => e.setAttribute('aria-label', t(e.dataset.i18nAria)));
  $('num').placeholder = t('ph');
  $('sat').alt = t('satAlt');
  kitchen.textContent = t('kitchen');
  document.querySelectorAll('.lang button').forEach(b =>
    b.setAttribute('aria-pressed', b.dataset.lang === LANG)
  );

  startOpts = Object.keys(PLACES).map(id => [id, pname(id)])
    .concat(Object.keys(BLOCKS).map(b => [b, t('wing', b)]));
  $('start').innerHTML = startOpts.map(([v, x]) => `<option value="${v}">${x}</option>`).join('');

  stage.querySelectorAll('.pin').forEach(el =>
    el.setAttribute('aria-label', pname(el.dataset.id))
  );
  stage.querySelectorAll('.bp').forEach(el =>
    el.setAttribute('aria-label', t('wing', el.dataset.id))
  );
}

/* ========== أحداث اللغة ========== */
document.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => {
  LANG = b.dataset.lang;
  try { localStorage.setItem('garidi_lang', LANG); } catch(e) {}
  $('langgate').hidden = true;
  applyStatic(); render();
});
$('langgate').hidden = CHOSEN;
$('start').onchange = e => { S.start = e.target.value; render(); };

/* ========== تبويبات ========== */
$('tab-places').onclick = () => { S.tab = 'places'; render(); };
$('tab-rooms').onclick  = () => { S.tab = 'rooms';  render(); };

/* ========== تكبير ========== */
function setZoom(z) {
  S.zoom = Math.max(1, Math.min(4, z));
  stage.style.width = (S.zoom * 100) + '%';
  stage.classList.toggle('zoomed', S.zoom >= 2.6);
}
function home() {
  setZoom(1.8);
  requestAnimationFrame(() => {
    const sc = $('scroller'), w = sc.clientWidth, h = sc.clientHeight, z = S.zoom;
    sc.scrollTo({
      left: 410 / W * w * z - w / 2,
      top: 240 / H * (w * H / W) * z - h / 2
    });
  });
}
$('zin').onclick = () => setZoom(S.zoom + .5);
$('zout').onclick = () => setZoom(S.zoom - .5);
$('zhome').onclick = home;
$('tsat').onclick = e => {
  const on = stage.classList.toggle('sat');
  e.currentTarget.setAttribute('aria-pressed', on);
};

/* ========== البحث عن غرفة ========== */
function findRoom(b, n) {
  const bl = BLOCKS[b];
  for (const f in bl.f) {
    const r = bl.f[f];
    if (n >= r[0] && n <= r[1]) return +f;
  }
  return null;
}
function search() {
  const raw = $('num').value.trim();
  const n = parseInt(raw, 10);
  if (!S.block) { S.msg = () => t('pickBlock'); return render(); }
  if (!raw || isNaN(n)) { S.msg = () => t('enterNum'); return render(); }

  const bl = BLOCKS[S.block], b = S.block;
  const f = findRoom(b, n);
  if (f === null) {
    const mx = Math.max(...Object.values(bl.f).map(r => r[1]));
    if (bl.gap && n >= bl.gap[0] && n <= bl.gap[1])
      S.msg = () => t('gapMsg', bl.gap[0], bl.gap[1]);
    else if (n > mx && bl.partial)
      S.msg = () => t('partialMsg', n, b);
    else if (n > mx)
      S.msg = () => t('maxMsg', b, mx);
    else
      S.msg = () => t('nfMsg', n, b);
    S.floor = null; S.num = null;
    return render();
  }
  S.msg = null; S.floor = f; S.num = n; render(true);
}
$('go').onclick = search;
$('num').addEventListener('keydown', e => {
  if (e.key === 'Enter') { e.preventDefault(); search(); }
});

/* ========== الوجهة الحالية ========== */
function curDest() {
  if (S.tab === 'places' && S.dest)
    return { node: PLACES[S.dest].node, id: S.dest, kind: 'p' };
  if (S.tab === 'rooms' && S.block)
    return { node: BLOCKS[S.block].node, id: S.block, kind: 'b' };
  return null;
}
function startNode() {
  return PLACES[S.start] ? PLACES[S.start].node : BLOCKS[S.start].node;
}
function startName() {
  return startOpts.find(o => o[0] === S.start)[1];
}

/* ========== الرسم الكامل ========== */
function render(focusMap) {
  $('tab-places').setAttribute('aria-selected', S.tab === 'places');
  $('tab-rooms').setAttribute('aria-selected', S.tab === 'rooms');
  $('panel-places').hidden = S.tab !== 'places';
  $('panel-rooms').hidden = S.tab !== 'rooms';
  $('start').value = S.start;

  const FL = t('FL');

  // شرائح الأماكن
  $('chips').innerHTML = Object.entries(PLACES)
    .filter(([, p]) => !p.nochip)
    .map(([id, p]) => `<button class="chip" data-id="${id}" aria-pressed="${S.dest === id}">
      <span class="e">${p.emoji}</span>${pname(id)}</button>`).join('');
  $('chips').querySelectorAll('.chip').forEach(b =>
    b.onclick = () => { S.dest = b.dataset.id; render(true); }
  );

  // الأجنحة
  $('blocks').innerHTML = Object.keys(BLOCKS).map(b =>
    `<button class="bt" data-b="${b}" aria-pressed="${S.block === b}"
       aria-label="${t('wing', b)}">${b}</button>`
  ).join('');
  $('blocks').querySelectorAll('.bt').forEach(b =>
    b.onclick = () => {
      S.block = b.dataset.b; S.floor = null; S.num = null;
      S.msg = null; render(true);
    }
  );

  // الطوابق
  $('floors').innerHTML = S.block ? Object.keys(BLOCKS[S.block].f).map(f => {
    const r = BLOCKS[S.block].f[f];
    return `<button class="plate" data-f="${f}"
      aria-pressed="${S.floor == f && S.num === null}"
      aria-label="${FL[f]}"><span class="L">${S.block}</span>
      <span class="R"><i>${sign(+f)}</i><b>${pad(r[0])}-${pad(r[1])}</b></span></button>`;
  }).join('') : '';
  $('floors').querySelectorAll('button').forEach(b =>
    b.onclick = () => {
      S.floor = +b.dataset.f; S.num = null; S.msg = null;
      $('num').value = ''; render(true);
    }
  );

  // رسالة
  $('msg').innerHTML = S.msg ? `<div class="msg">${S.msg()}</div>` : '';

  // تحديث العلامات
  const d = curDest();
  stage.querySelectorAll('.pin,.bp').forEach(el => {
    const id = el.dataset.id, kind = el.dataset.kind;
    const isStart = S.start === id;
    const isDest  = !!d && d.kind === kind && d.id === id;
    el.classList.toggle('on', isDest && !isStart);
    el.classList.toggle('start', isStart);
    const cap = el.querySelector('.cap');
    if (cap) cap.textContent = isStart ? t('here') : pname(id);
  });

  drawRoute(d, startNode(), focusMap);
  renderResult(d, startNode());
}

/* ========== رسم المسار ========== */
function drawRoute(d, sn, focus) {
  if (!d || sn === d.node) {
    $('rline').setAttribute('points', '');
    $('rcase').setAttribute('points', '');
    return;
  }
  const p = path(sn, d.node);
  const pts = p.map(k => `${N[k].x},${N[k].y}`).join(' ');
  $('rline').setAttribute('points', pts);
  $('rcase').setAttribute('points', pts);

  if (focus) {
    const xs = p.map(k => N[k].x), ys = p.map(k => N[k].y);
    const minx = Math.min(...xs), maxx = Math.max(...xs);
    const miny = Math.min(...ys), maxy = Math.max(...ys);
    const sc = $('scroller'), w = sc.clientWidth, h = sc.clientHeight;
    const bw = Math.max(60, (maxx - minx) / W * w);
    const bh = Math.max(60, (maxy - miny) / W * w);
    let z = Math.min(w / (bw * 1.5), h / (bh * 1.5));
    z = Math.max(1.2, Math.min(3, Math.round(z * 2) / 2));
    setZoom(z);
    requestAnimationFrame(() => {
      const cx = (minx + maxx) / 2 / W * w * z - w / 2;
      const cy = (miny + maxy) / 2 / H * (w * H / W) * z - h / 2;
      sc.scrollTo({ left: cx, top: cy, behavior: 'smooth' });
    });
  }
}

/* ========== خطوات المسار ========== */
function routeSteps(d, sn, destHTML, isEnd = true) {
  if (sn === d.node)
    return `<li${isEnd ? ' class="end"' : ''}>${t('near')}</li>`;

  const p = path(sn, d.node);
  const mids = p.slice(1, -1).filter(k => N[k].l);
  let h = `<li>${t('startFrom', PLACES[S.start] ? sname(S.start) : t('wing', S.start))}</li>`;
  mids.forEach(k => {
    h += `<li>${t('via', k === 'clinic' ? sname('clinic') : L(WL[k]))}</li>`;
  });
  h += `<li${isEnd ? ' class="end"' : ''}>${destHTML}</li>`;
  return h;
}

/* ========== نتيجة البحث ========== */
function renderResult(d, sn) {
  const r = $('result');
  const FL = t('FL');

  if (!d) {
    r.innerHTML = `<p class="empty">${S.tab === 'places' ? t('emptyPlaces') : t('emptyRooms')}</p>`;
    return;
  }

  if (S.tab === 'places') {
    const p = PLACES[d.id], nm = pname(d.id);
    r.innerHTML = `<h2>${p.emoji} ${nm}</h2>
      <p class="sub">${t('routeFrom', startName())}</p>
      ${p.hint ? `<p class="sub" style="margin-top:8px"><b>${t('howEntrance')}</b><br>${L(p.hint)}</p>` : ''}
      <ol class="steps">${routeSteps(d, sn, t('arrive', sname(d.id)))}</ol>`;
    return;
  }

  const b = S.block, bl = BLOCKS[b];
  let h = '';
  const wing   = {A:'A B', B:'A B', D:'D E', E:'D E'}[b];
  const shared = !!wing;
  const other  = {A:'B', B:'A', D:'E', E:'D'}[b];

  if (S.floor === null) {
    h = `<h2>${t('wing', b)}</h2>
      <p class="sub">${shared
        ? t('shared', other, wing)
        : (Object.keys(bl.f).length ? t('pickOrNum') : t('noDocs'))}</p>
      ${wing === 'D E'
        ? `<div class="photo"><p><b>${t('deTitle')}</b><br>${t('deText')}</p></div>` : ''}
      <ol class="steps">${route
