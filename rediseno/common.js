// Partes comunes de las opciones del rediseño (vista previa; la web real es ../index.html).
document.documentElement.classList.add('js');

var JR = (function() {
  var F = '../resources/fotografias/';
  // Fotos que en el post llevan marco blanco: se usan recortadas a la foto real.
  var TRIM = ["atleti-castilla-02", "atleti-castilla-03", "atleti-castilla-06", "atleti-castilla-08", "atleti-castilla-09", "atleti-villarreal-01", "atleti-villarreal-02", "atleti-villarreal-03", "atleti-villarreal-04", "atleti-villarreal-06", "atleti-villarreal-07", "atleti-villarreal-09", "atleti-villarreal-10", "atleti-zaragoza-02", "atleti-zaragoza-03", "atleti-zaragoza-06", "atleti-zaragoza-08", "estudiantes-palencia-10", "estudiantes-palencia-15", "hero-carrusel-03", "hero-carrusel-08", "leganes-butarque-01", "leganes-butarque-02", "leganes-butarque-03", "leganes-butarque-04", "leganes-butarque-05", "leganes-butarque-06", "leganes-butarque-07", "leganes-butarque-08", "leganes-butarque-09", "leganes-butarque-10", "sporting-girona-02", "sporting-girona-03", "sporting-girona-04", "sporting-girona-05", "sporting-girona-07"];
  // Medidas de las fotos que no son 1080×1350 (para reservar su hueco antes de cargar).
  var DIMS = {"atleti-castilla-02":[766,1018],"atleti-castilla-03":[1016,1260],"atleti-castilla-06":[942,1182],"atleti-castilla-08":[968,1187],"atleti-castilla-09":[964,1284],"atleti-villarreal-01":[843,1180],"atleti-villarreal-02":[969,1306],"atleti-villarreal-03":[786,671],"atleti-villarreal-04":[786,671],"atleti-villarreal-05":[1013,1350],"atleti-villarreal-06":[955,1194],"atleti-villarreal-07":[751,1026],"atleti-villarreal-08":[1013,1350],"atleti-villarreal-09":[873,530],"atleti-villarreal-10":[875,582],"atleti-zaragoza-02":[766,1018],"atleti-zaragoza-03":[1016,1260],"atleti-zaragoza-06":[942,1182],"atleti-zaragoza-08":[802,1096],"estudiantes-palencia-10":[1080,609],"estudiantes-palencia-15":[1080,609],"hero-carrusel-03":[1020,1264],"hero-carrusel-08":[978,1196],"leganes-butarque-01":[982,1251],"leganes-butarque-02":[982,1252],"leganes-butarque-03":[982,1252],"leganes-butarque-04":[1031,1252],"leganes-butarque-05":[1080,1252],"leganes-butarque-06":[1031,1252],"leganes-butarque-07":[982,1252],"leganes-butarque-08":[982,1252],"leganes-butarque-09":[1030,1251],"leganes-butarque-10":[1031,1251],"pret-getafe-01":[1920,1080],"pret-getafe-02":[1920,1080],"pret-getafe-03":[1920,1080],"pret-getafe-04":[1920,1080],"pret-leganes-01":[1920,1162],"pret-leganes-02":[1920,1080],"pret-leganes-03":[1920,1080],"pret-leganes-04":[1920,1080],"sporting-girona-02":[1033,1286],"sporting-girona-03":[876,1094],"sporting-girona-04":[838,717],"sporting-girona-05":[837,716],"sporting-girona-07":[827,1259]};
  function dims(name) { return DIMS[name] || [1080, 1350]; }
  function src(name) { return TRIM.indexOf(name) >= 0 ? 'img/full/' + name + '.jpg' : F + name + '.jpg'; }
  function seq(slug, n) { var a = []; for (var i = 1; i <= n; i++) a.push(slug + '-' + String(i).padStart(2, '0')); return a; }

  var CHAPTERS = [
    { id: 'atleti', t: 'Atlético Madrileño', c: 'Atlético Stats', l: 'Primera Federación · 2026/27', matches: [
        { s: 'vs Real Zaragoza', d: '11.10.2026', ig: 'DeZDKNvln8I', files: seq('atleti-zaragoza', 10) },
        { s: 'vs Real Madrid Castilla', d: '02.10.2026', ig: 'DeBy3bfG0Qt', files: seq('atleti-castilla', 10) },
        { s: 'vs Villarreal B', d: '25.09.2026', ig: 'DduMFgFjVts', files: seq('atleti-villarreal', 10) } ],
      picks: ['atleti-zaragoza-01', 'atleti-castilla-04', 'atleti-villarreal-05', 'atleti-zaragoza-02', 'atleti-castilla-01', 'atleti-villarreal-08'] },
    { id: 'estu', t: 'Movistar Estudiantes', c: 'Encestando.es', l: 'Primera FEB · Movistar Arena', matches: [
        { s: 'vs Iberolea Palencia', d: '18.10.2026', ig: 'Deq_iP9jb80', files: seq('estudiantes-palencia', 15) } ],
      picks: ['estudiantes-palencia-01', 'estudiantes-palencia-06', 'estudiantes-palencia-03', 'estudiantes-palencia-09', 'estudiantes-palencia-12', 'estudiantes-palencia-14'] },
    { id: 'sporting', t: 'Sporting de Gijón', c: 'César Gelabert', l: 'LaLiga Hypermotion · El Molinón', matches: [
        { s: 'vs Burgos CF · 1–0', d: 'El Molinón', ig: 'DcZSBeODboX', files: seq('hero-carrusel', 10) },
        { s: 'vs Girona FC', d: '05.09.2026', ig: 'DdCEN_mDUzf', files: seq('sporting-girona', 8) } ],
      picks: ['hero-carrusel-01', 'sporting-girona-07', 'hero-carrusel-07', 'sporting-girona-06', 'hero-carrusel-10', 'sporting-girona-03'] },
    { id: 'lega', t: 'CD Leganés', c: 'Patrick Soko', l: 'LaLiga Hypermotion · Butarque', matches: [
        { s: 'Victoria en Butarque', d: 'Butarque', ig: 'DcqszTFlOn7', files: seq('leganes-butarque', 10) },
        { s: 'vs Granada CF', d: '20.09.2026', ig: 'DdmHV5MDTu_', files: seq('leganes-granada', 10) } ],
      picks: ['leganes-granada-01', 'leganes-butarque-03', 'leganes-granada-05', 'leganes-butarque-02', 'leganes-butarque-01', 'leganes-granada-03'] },
    { id: 'pret', t: 'Pretemporada 26/27', c: 'CD Leganés · Getafe CF', l: 'Presentaciones y fichajes', wide: true, matches: [
        { s: 'CD Leganés', d: 'Presentaciones', files: seq('pret-leganes', 4) },
        { s: 'Getafe CF', d: 'Presentaciones', files: seq('pret-getafe', 4) } ],
      picks: ['pret-leganes-01', 'pret-getafe-01', 'pret-leganes-03', 'pret-getafe-02', 'pret-leganes-02', 'pret-getafe-04'] }
  ];

  // Todas las fotos de un capítulo, en orden, con su pie para el visor.
  function photos(ch) {
    var out = [];
    ch.matches.forEach(function(m) {
      m.files.forEach(function(f, k) {
        out.push({ name: f, src: src(f), title: ch.t + ' ' + m.s, meta: [m.d, ch.c].filter(Boolean).join(' · ') + ' · ' + (k + 1) + ' de ' + m.files.length,
                   alt: ch.t + ' ' + m.s + ', fotografía ' + (k + 1) + ' de ' + m.files.length, ig: m.ig });
      });
    });
    return out;
  }
  function total(ch) { return ch.matches.reduce(function(a, m) { return a + m.files.length; }, 0); }

  // Los cuatro planos de la retransmisión del Getafe – Partizan, en orden de partido.
  var CLIPS = [
    { v: 'getafe-conf-01', min: 'Previa', score: '0–0', pct: 1 },
    { v: 'getafe-conf-02', min: "10'", score: '1–0', pct: 11 },
    { v: 'getafe-conf-04', min: "74'", score: '1–1', pct: 82 },
    { v: 'getafe-conf-03', min: "87'", score: '2–1', pct: 97 }
  ];

  var PARTS = {
    nav: '<nav class="top" aria-label="Principal"><a class="logo" href="#top"><span>José Rodríguez</span></a><ul>' +
         '<li><a href="#trabajo">Trabajo</a></li><li><a href="#video">Vídeo</a></li><li><a href="#info">Info</a></li><li><a href="#contacto">Contacto</a></li></ul></nav>',
    hero: '<header class="hero wrap" id="top">' +
      '<video class="hero-bg" src="../resources/videos/getafe-conf-01.mp4" poster="../resources/fotografias/getafe-conf-01.jpg" autoplay muted loop playsinline></video>' +
      '<p class="mono">Fotografía deportiva · Operador de cámara · Steadicam — Madrid</p>' +
      '<h1>José<br><span>Rodríguez</span></h1>' +
      '<div class="hero-foot"><p>Cuento el partido desde el borde del campo: la tensión, la alegría y el espectáculo. Para Atlético Stats, Encestando.es y jugadores de LaLiga Hypermotion.</p>' +
      '<div class="feat" role="button" tabindex="0" id="feat" aria-label="Reproducir el vlog de Atlético Stats">' +
      '<div class="feat-frame"><img src="../resources/fotografias/vlog-atletico-stats.jpg" alt="Vlog del evento de Atlético Stats en el Metropolitano"><span class="play"></span></div>' +
      '<div class="mono"><span>Destacado · Vlog Atlético Stats</span><span>▶ YouTube</span></div></div></div></header>' +
      '<div class="clients wrap" aria-label="Han confiado en mi trabajo"><span class="mono">Para</span>' +
      '<b>Atlético Stats</b><b>Encestando.es</b><b>César Gelabert</b><b>Patrick Soko</b><b>Getafe CF</b><b>CD Leganés</b><b>PEVYPE</b></div>',
    info: '<section class="info wrap" id="info"><img class="rv" src="../resources/fotografias/profile-picture.jpeg" alt="José Rodríguez con un steadicam durante un rodaje">' +
      '<div class="rv" style="--d:.1s"><p class="mono">Info</p>' +
      '<p class="lead">Comunicador audiovisual especializado en <em>deporte</em>: fotografía a pie de campo y operación de cámara en 1ª RFEF y LEB Oro.</p>' +
      '<p>Me apasiona todo lo que se cuenta a través de la imagen y la complejidad del proceso. Siempre busco aprender algo nuevo, mejorar y formar parte de una narrativa bien estructurada que transmita al espectador.</p>' +
      '<ul class="xp">' +
      '<li><span class="mono">2026 — hoy</span><span>Fotógrafo freelance · Sporting de Gijón, CD Leganés</span><span class="mono">Freelance</span></li>' +
      '<li><span class="mono">2025 — hoy</span><span>Operador de cámara en retransmisiones · LEB Oro, 1ª RFEF</span><span class="mono">PEVYPE</span></li>' +
      '<li><span class="mono">2024 — 2025</span><span>Técnico de logística audiovisual</span><span class="mono">Escuela CEV</span></li>' +
      '<li><span class="mono">2024</span><span>Iluminación y cámara en plató (prácticas)</span><span class="mono">7yACCIÓN</span></li></ul></div></section>',
    contact: '<section class="contact wrap" id="contacto"><p class="mono">¿Trabajamos juntos? Abierto a proyectos</p>' +
      '<a class="bigmail" href="mailto:joserdez011@gmail.com">joserdez011@gmail.com</a>' +
      '<div class="contact-row mono"><a href="tel:+34685044900">+34 685 044 900</a>' +
      '<a href="https://instagram.com/joserodriguez.mov" target="_blank" rel="noopener">Instagram @joserodriguez.mov ↗</a><span>Madrid, España</span></div>' +
      '<footer class="mono"><span>© 2026 José Rodríguez</span><span><a href="../legal.html">Aviso legal</a><a href="../legal.html#privacidad">Privacidad</a></span></footer></section>',
    lb: '<dialog class="lb" id="lb" aria-label="Foto a pantalla completa"><div class="lb-stage" id="lbStage"><img id="lbImg" alt=""></div>' +
      '<div class="lb-bar"><div><b id="lbTitle"></b><span class="mono" id="lbMeta"></span></div><div class="lb-btns">' +
      '<button type="button" id="lbPrev">‹ Anterior</button><button type="button" id="lbNext">Siguiente ›</button><button type="button" class="lb-x" id="lbClose">Cerrar ✕</button></div></div></dialog>'
  };
  document.querySelectorAll('[data-part]').forEach(function(el) { el.outerHTML = PARTS[el.dataset.part]; });

  // Selector A · B · C para comparar (sólo maqueta).
  var here = location.pathname.split('/').pop().replace('_shot-', 'opcion-');
  var opts = [['opcion-a.html', 'A · Capítulos'], ['opcion-b.html', 'B · Portada y carrete']];
  document.body.insertAdjacentHTML('beforeend', '<div class="picker" aria-label="Opciones de la maqueta">' + opts.map(function(o) {
    return '<a href="' + o[0] + '"' + (o[0] === here ? ' aria-current="page"' : '') + '>' + o[1].replace(' · ', '<span class="pk-name"> · ') + '</span></a>';
  }).join('') + '</div>');

  // Visor a pantalla completa (diálogo nativo: Esc cierra).
  var lb = document.getElementById('lb'), set = [], at = 0;
  function show(n) {
    at = (n + set.length) % set.length;
    document.getElementById('lbImg').src = set[at].src; document.getElementById('lbImg').alt = set[at].alt;
    document.getElementById('lbTitle').textContent = set[at].title; document.getElementById('lbMeta').textContent = set[at].meta;
  }
  function open(list, i) { set = list; show(i); lb.showModal(); }
  document.getElementById('lbPrev').onclick = function() { show(at - 1); };
  document.getElementById('lbNext').onclick = function() { show(at + 1); };
  document.getElementById('lbClose').onclick = function() { lb.close(); };
  lb.addEventListener('click', function(e) { if (e.target === lb || e.target.id === 'lbStage') lb.close(); });
  lb.addEventListener('keydown', function(e) { if (e.key === 'ArrowRight') show(at + 1); if (e.key === 'ArrowLeft') show(at - 1); });
  var x0 = null;
  lb.addEventListener('pointerdown', function(e) { x0 = e.clientX; });
  lb.addEventListener('pointerup', function(e) { if (x0 === null) return; var dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 50) show(at + (dx < 0 ? 1 : -1)); });

  // Vlog: el iframe (sin cookies) sólo entra al pulsar.
  var feat = document.getElementById('feat');
  function playVlog() {
    feat.querySelector('.feat-frame').innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/KY1CASKn1mo?autoplay=1" title="Vlog Atlético Stats" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
  }
  feat.addEventListener('click', playVlog, { once: true });
  feat.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); playVlog(); } });

  document.addEventListener('DOMContentLoaded', function() {
    // Botones de sonido: arrancan el vídeo con audio desde el principio.
    document.querySelectorAll('[data-sound]').forEach(function(b) {
      var v = document.getElementById(b.dataset.sound);
      b.addEventListener('click', function() {
        var on = v.muted; v.muted = !on; if (on) { v.currentTime = 0; v.play(); }
        b.textContent = on ? 'Silenciar' : 'Activar sonido'; b.setAttribute('aria-pressed', on);
      });
    });
    // Entradas al hacer scroll.
    var io = new IntersectionObserver(function(es) {
      es.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.rv').forEach(function(el) { io.observe(el); });
  });

  return { dims: dims, CHAPTERS: CHAPTERS, CLIPS: CLIPS, photos: photos, total: total, src: src, open: open, F: F };
})();
