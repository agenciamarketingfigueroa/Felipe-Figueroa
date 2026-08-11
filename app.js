const STORAGE_KEY = "felipe-figueroa-studio-v1";
const PROFESSOR_AUTH_KEY = "ff-professor-auth";
const STUDENT_AUTH_KEY = "ff-student-auth";
const WORKBOOK_URL = "assets/materials/apostila-facilitando-o-violao.pdf";
const WORKBOOK_MODULES = [
  { number: "01", title: "Introdução", page: 6, topics: "Instrumento, afinação e conceitos musicais" },
  { number: "02", title: "Fundamentos", page: 17, topics: "Cromatismos, dedilhado e palhetada alternada" },
  { number: "03", title: "Primeiros acordes", page: 32, topics: "Acordes maiores, ritmo e leitura de cifras" },
  { number: "04", title: "Acordes menores", page: 80, topics: "Formação, aplicação e notas no braço" },
  { number: "05", title: "A pestana", page: 91, topics: "Técnica, shapes e independência dos dedos" },
  { number: "06", title: "Noções de tempo", page: 106, topics: "Compasso, metrônomo, contratempo e inversões" },
  { number: "07", title: "Tétrades", page: 125, topics: "Sétimas, dinâmica, campo harmônico e CAGED" },
  { number: "08", title: "Solos e arranjos", page: 170, topics: "Regiões, hammer-on, pull-off e vibrato" },
  { number: "09", title: "Pentatônica", page: 178, topics: "Shapes, relativos e improvisação" },
];
const ARTIST_SHOWCASE = [
  { name: "Ramon e Rafael", type: "Dupla", image: "assets/artists/ramon-e-rafael.jpg", position: "50% 38%" },
  { name: "Flávio Vitor Jr.", type: "Artista", image: "assets/artists/flavio-vitor-jr.jpg", position: "50% 30%" },
  { name: "Junho Chu", type: "Artista", image: "assets/artists/junho-chu.jpg", position: "50% 35%" },
  { name: "Juninho Cassimiro", type: "Artista", image: "assets/artists/juninho-cassimiro.jpg", position: "50% 30%" },
  { name: "Davidson Silva", type: "Artista", image: "assets/artists/davidson-silva.jpg", position: "50% 28%" },
  { name: "Diego Fernandes", type: "Artista", image: "assets/artists/diego-fernandes.jpg", position: "50% 34%" },
  { name: "Celina Borges", type: "Artista", image: "assets/artists/celina-borges.jpg", position: "50% 30%" },
  { name: "GBA Worship", type: "Projeto", image: "assets/artists/gba-worship.jpg", position: "50% 45%" },
  { name: "Suely Façanha", type: "Artista", image: "assets/artists/suely-facanha.jpg", position: "50% 30%" },
  { name: "Nandah", type: "Artista", image: "assets/artists/nandah.jpg", position: "50% 42%" },
  { name: "Lucimare Nascimento", type: "Artista", image: "assets/artists/lucimare-nascimento.jpg", position: "50% 30%" },
  { name: "Rogério Henrique", type: "Artista", image: "assets/artists/rogerio-henrique.jpg", position: "50% 50%" },
  { name: "Ministério Jeito Ágape", type: "Ministério", image: "assets/artists/jeito-agape.jpg", position: "50% 50%" },
  { name: "Green Line Band", type: "Banda", image: "assets/artists/green-line-band.jpg", position: "50% 45%" },
];

const icons = {
  arrow: '<svg class="icon" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  calendar: '<svg class="icon" viewBox="0 0 24 24"><path d="M8 2v4m8-4v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z"/></svg>',
  users: '<svg class="icon" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87m-2-12a4 4 0 0 1 0 7.75"/></svg>',
  home: '<svg class="icon" viewBox="0 0 24 24"><path d="m3 11 9-8 9 8v10h-6v-6H9v6H3Z"/></svg>',
  money: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4-10v12"/></svg>',
  bell: '<svg class="icon" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 13h4"/></svg>',
  download: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3v12m-5-5 5 5 5-5M4 21h16"/></svg>',
  upload: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 15V3m-5 5 5-5 5 5M4 21h16"/></svg>',
  plus: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  search: '<svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  more: '<svg class="icon" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>',
  external: '<svg class="icon" viewBox="0 0 24 24"><path d="M15 3h6v6m0-6-9 9M10 5H5v14h14v-5"/></svg>',
  close: '<svg class="icon" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  trash: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3m3 0-1 14H7L6 7m4 4v6m4-6v6"/></svg>',
  clock: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  book: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 4h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4Zm16 0h-4a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h4Z"/></svg>',
  check: '<svg class="icon" viewBox="0 0 24 24"><path d="m6 12 4 4 8-9"/></svg>',
  music: '<svg class="icon" viewBox="0 0 24 24"><path d="M9 18V5l11-2v13M9 9l11-2M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm11-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>',
  timer: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M9 2h6m-3 3v3m6-1 2 2"/></svg>',
  whatsapp: '<svg class="icon" viewBox="0 0 24 24"><path d="M20 11.5A8.5 8.5 0 0 1 7.4 19L3 20l1.2-4A8.5 8.5 0 1 1 20 11.5Z"/><path d="M8 8c.4 4 3 6.5 7 7"/></svg>',
  mail: '<svg class="icon" viewBox="0 0 24 24"><path d="M3 5h18v14H3Zm0 1 9 7 9-7"/></svg>',
  menu: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
};

const seedData = {
  version: 1,
  lastBackup: null,
  students: [
    { id: "ana", studentNumber: "1001", birthday: "1995-04-15", name: "Ana Souza", email: "ana@email.com", phone: "5511999991001", level: "Intermediário", instrument: "Violão", plan: "Mensal", payment: "paid", notes: "Quer trabalhar repertório fingerstyle.", current: "Inversões de acordes no campo harmônico", next: "Condução de vozes em DADGAD", streak: 4 },
    { id: "bruno", studentNumber: "1002", birthday: "1998-08-21", name: "Bruno Lima", email: "bruno@email.com", phone: "5511999991002", level: "Iniciante", instrument: "Guitarra", plan: "Mensal", payment: "pending", notes: "Foco em base e tempo.", current: "Pentatônica menor — posição 1", next: "Bends afinados e vibrato", streak: 2 },
    { id: "carol", studentNumber: "1003", birthday: "1992-11-07", name: "Carolina Reis", email: "carol@email.com", phone: "5511999991003", level: "Avançado", instrument: "Guitarra", plan: "Trimestral", payment: "paid", notes: "Preparação para audição.", current: "Improvisação sobre dominantes", next: "Outside playing — abordagem cromática", streak: 7 },
    { id: "diego", studentNumber: "1004", birthday: "1989-02-23", name: "Diego Martins", email: "diego@email.com", phone: "5511999991004", level: "Intermediário", instrument: "Violão", plan: "Avulso", payment: "late", notes: "Aulas quinzenais.", current: "Ritmos brasileiros — baião", next: "Levadas híbridas com palheta", streak: 1 },
  ],
  lessons: [
    { id: "l1", studentId: "ana", date: futureISO(0, 14, 0), duration: 60, mode: "Online", link: "https://meet.google.com/abc-defg-hij", status: "scheduled", topic: "Condução de vozes" },
    { id: "l2", studentId: "bruno", date: futureISO(0, 16, 0), duration: 60, mode: "Presencial", link: "", status: "scheduled", topic: "Pentatônica" },
    { id: "l3", studentId: "carol", date: futureISO(1, 10, 30), duration: 60, mode: "Online", link: "https://meet.google.com/abc-defg-hij", status: "scheduled", topic: "Dominantes" },
    { id: "l4", studentId: "diego", date: futureISO(2, 18, 0), duration: 50, mode: "Online", link: "https://meet.google.com/abc-defg-hij", status: "scheduled", topic: "Baião" },
    { id: "l5", studentId: "ana", date: futureISO(4, 14, 0), duration: 60, mode: "Online", link: "https://meet.google.com/abc-defg-hij", status: "scheduled", topic: "DADGAD — condução de vozes" },
  ],
  exercises: {
    ana: [
      { id: "e1", title: "Voicings em DADGAD", detail: "Ciclos de 5 min · 60 BPM", done: true },
      { id: "e2", title: "Incondicional — trecho A", detail: "Compassos 1–16 · tocar 3x", done: false },
      { id: "e3", title: "Trocas sem interromper o tempo", detail: "10 min · metrônomo em 72 BPM", done: false },
    ],
  },
  supportMaterials: {
    ana: [
      { id: "m1", title: "Apostila — Condução de vozes", detail: "Revisar as páginas indicadas antes da próxima aula.", url: `${WORKBOOK_URL}#page=125` },
    ],
  },
  updates: {},
  notes: { ana: "Gravar o exercício 2 até sexta. Atenção à dinâmica no segundo ciclo." },
};

function futureISO(days, hour, minute) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
}

function cloneSeed() { return JSON.parse(JSON.stringify(seedData)); }
function loadData() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored && Array.isArray(stored.students) && Array.isArray(stored.lessons)) {
      const demoBirthdays = ["1995-04-15", "1998-08-21", "1992-11-07", "1989-02-23"];
      stored.students.forEach((student, index) => {
        if (!student.studentNumber) student.studentNumber = String(1001 + index);
        if (!student.birthday) student.birthday = demoBirthdays[index] || "2000-01-01";
      });
      if (!stored.exercises) stored.exercises = {};
      if (!stored.supportMaterials) stored.supportMaterials = {};
      if (!stored.updates) stored.updates = {};
      if (!stored.notes) stored.notes = {};
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
      return stored;
    }
  } catch (_) {}
  const initial = cloneSeed();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  return initial;
}
let db = loadData();

function saveData(message = "Alterações salvas neste dispositivo") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  if (message) toast(message);
}

function esc(value = "") {
  return String(value).replace(/[&<>'"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]));
}
function initials(name) { return name.split(/\s+/).slice(0, 2).map(n => n[0]).join("").toUpperCase(); }
function studentById(id) { return db.students.find(s => s.id === id); }
function studentMaterials(id) { return (db.supportMaterials && db.supportMaterials[id]) || []; }
function isProfessorAuthenticated() { return sessionStorage.getItem(PROFESSOR_AUTH_KEY) === "true"; }
function authenticatedStudentId() { return sessionStorage.getItem(STUDENT_AUTH_KEY); }
function birthdayPassword(birthday = "") {
  const match = birthday.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return match ? `${match[3]}${match[2]}` : birthday.replace(/\D/g, "").slice(0, 4);
}
function fmtDate(date, options = {}) { return new Intl.DateTimeFormat("pt-BR", options).format(new Date(date)); }
function money(value) { return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value); }
function slugify(s) { return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function safeHref(value = "") {
  const href = String(value).trim();
  if (/^https?:\/\//i.test(href) || /^assets\//i.test(href)) return esc(href);
  return "#";
}
function toast(message) {
  const region = document.querySelector("#toast-region");
  const el = document.createElement("div"); el.className = "toast"; el.textContent = message; region.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}
function todayLong() { return fmtDate(new Date(), { weekday: "long", day: "2-digit", month: "long" }); }

function publicPage() {
  return `
    <header class="site-nav">
      <div class="container site-nav-inner">
        <a class="brand" href="#home"><span class="brand-mark" aria-label="Felipe Figueroa"></span><strong>Felipe Figueroa</strong><span>/ guitar</span></a>
        <nav class="nav-links" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a><a href="#trabalhos">Trabalhos</a><a href="#curso">Curso</a><a href="#contato">Contato</a>
          <span class="nav-access"><a class="btn btn-outline" href="#login/aluno">Aluno</a><a class="btn btn-primary" href="#login/professor">Professor ${icons.arrow}</a></span>
        </nav>
        <div class="nav-mobile-access"><a class="icon-btn" href="#login/aluno" aria-label="Acesso do aluno" title="Aluno">${icons.book}</a><a class="icon-btn" href="#login/professor" aria-label="Acesso do professor" title="Professor">${icons.users}</a></div>
      </div>
    </header>
    <main>
      <section class="hero">
        <div class="container hero-inner">
          <div class="hero-copy">
            <span class="eyebrow">Guitarrista · Sideman · Professor</span>
            <h1>Felipe <span>Figueroa</span></h1>
            <p class="hero-lead">Música feita com intenção — no palco, no estúdio e na sala de aula. Uma carreira dedicada à guitarra e a transformar conhecimento em som.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#contato">Vamos trabalhar juntos ${icons.arrow}</a>
              <button class="btn btn-outline" data-action="print-kit">Baixar mídia kit ${icons.download}</button>
            </div>
          </div>
          <div class="hero-side-note">Belo Horizonte · Brasil / Disponível para turnês e sessões</div>
        </div>
      </section>
      <div class="marquee" aria-hidden="true"><div class="marquee-track">
        ${Array(2).fill("Guitarra &nbsp; ✦ &nbsp; Sideman &nbsp; ✦ &nbsp; DADGAD &nbsp; ✦ &nbsp; Aulas online &nbsp; ✦ &nbsp; Gravações &nbsp; ✦ &nbsp;").map(x => `<span>${x}</span>`).join("")}
      </div></div>

      <section class="public-section" id="sobre">
        <div class="container">
          <div class="section-head"><span class="eyebrow">01 / A história</span><div><h2>Entre o palco e a sala de aula.</h2><p>Felipe Figueroa é músico, guitarrista, sideman e professor. Une experiência prática, repertório e didática para criar performances e formar músicos mais conscientes.</p></div></div>
          <div class="about-grid">
            <article class="about-statement"><span class="tag lime"><i class="dot"></i> Em atividade</span><blockquote>“Ensinar música não é entregar respostas. É ajudar cada aluno a <em>escutar melhor.</em>”</blockquote><small>Performance · Direção musical · Guitarra e violão<br>Online e presencial</small></article>
            <div class="stats">
              <div class="stat"><strong>500+</strong><span>alunos no Brasil e no exterior</span></div>
              <div class="stat"><strong>+20</strong><span>artistas e bandas como sideman</span></div>
              <div class="stat"><strong>2010</strong><span>início da carreira como músico e professor</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="public-section artists-section" id="trabalhos">
        <div class="container">
          <div class="section-head"><span class="eyebrow">02 / Na estrada</span><div><h2>Palcos, estúdios e histórias.</h2><p>Uma seleção de artistas, projetos e bandas que fazem parte da trajetória musical de Felipe.</p></div></div>
          <div class="artist-grid">
            ${ARTIST_SHOWCASE.map((artist, index) => `<article class="artist-card"><img class="artist-image" src="${artist.image}" alt="${esc(artist.name)}" style="--pos:${artist.position}" ${index > 3 ? 'loading="lazy"' : ""} decoding="async"><div class="artist-label"><span>${artist.type} · Colaboração</span><strong>${artist.name}</strong></div></article>`).join("")}
          </div>
          <p class="artist-note">Trabalhos e encontros que atravessam diferentes fases da carreira.</p>
        </div>
      </section>

      <section class="public-section" id="curso">
        <div class="container">
          <div class="course-card">
            <div class="course-visual"><div class="tuning-disc"><strong>DAD<br>GAD</strong></div></div>
            <div class="course-copy"><span class="eyebrow">Curso autoral</span><h2>Descomplicando o DADGAD</h2><p>Um mergulho acessível na afinação celta: da lógica do braço aos voicings, repertório e aplicação musical. Conteúdo em português, feito para você tocar de verdade.</p><div class="course-list"><div>≈ 40 aulas</div><div>Acesso online</div><div>Comunidade</div></div><a class="btn btn-primary" target="_blank" rel="noopener" href="https://descomplicandodadgad.com.br">Conheça o curso ${icons.external}</a></div>
          </div>
        </div>
      </section>

      <section class="contact-section" id="contato">
        <div class="container"><div class="contact-big"><div><span class="eyebrow">Agenda aberta</span><h2>Vamos fazer<br><span>música?</span></h2></div><div class="contact-links">
          <a class="contact-link" href="mailto:contato@felipefigueroa.com.br"><span>E-mail</span>${icons.arrow}</a>
          <a class="contact-link" target="_blank" rel="noopener" href="https://instagram.com/felipefigueroagt"><span>@felipefigueroagt</span>${icons.external}</a>
          <a class="contact-link" href="#login/professor"><span>Área do professor</span>${icons.arrow}</a>
          <a class="contact-link" href="#login/aluno"><span>Área do aluno</span>${icons.arrow}</a>
        </div></div><footer class="site-footer"><span>© ${new Date().getFullYear()} Felipe Figueroa</span><span>Guitarrista · Sideman · Professor · Belo Horizonte, BR</span><a href="#login/aluno">Acesso do aluno</a></footer></div>
      </section>
    </main>`;
}

function sidebar(active) {
  const items = [
    ["dashboard", "Visão geral", icons.home], ["agenda", "Agenda", icons.calendar], ["alunos", "Alunos", icons.users], ["materiais", "Materiais", icons.book], ["pagamentos", "Pagamentos", icons.money]
  ];
  return `<aside class="sidebar" id="sidebar"><a class="brand" href="#home"><span class="brand-mark" aria-label="Felipe Figueroa"></span><strong>Studio</strong></a>
    <span class="side-label">Gestão</span><nav class="side-nav">${items.map(i => `<button class="side-link ${active === i[0] ? "active" : ""}" data-route="${i[0]}">${i[2]}<span>${i[1]}</span>${i[0] === "agenda" ? `<b class="side-badge">${db.lessons.filter(l => l.status === "scheduled").length}</b>` : ""}</button>`).join("")}</nav>
    <span class="side-label">Site</span><nav class="side-nav"><a class="side-link" href="#home">${icons.external}<span>Ver site público</span></a><button class="side-link" data-action="export">${icons.download}<span>Exportar dados</span></button><button class="side-link" data-action="import">${icons.upload}<span>Importar backup</span></button></nav>
    <div class="sidebar-bottom"><div class="backup-note"><strong>Backup local</strong><span>${db.lastBackup ? `Último: ${fmtDate(db.lastBackup, {day:"2-digit", month:"2-digit", hour:"2-digit", minute:"2-digit"})}` : "Nenhum backup exportado"}</span></div><div class="user-chip"><span class="avatar professor-avatar" aria-label="Felipe Figueroa"></span><div><strong>Felipe Figueroa</strong><span>Professor · Administrador</span></div><button class="icon-btn logout-button" data-action="logout-professor" title="Sair" aria-label="Sair da área do professor">${icons.arrow}</button></div></div>
  </aside>`;
}

function appShell(active, title, content) {
  return `<div class="app-shell">${sidebar(active)}<main class="app-main"><header class="app-topbar"><div style="display:flex;align-items:center;gap:12px"><button class="icon-btn mobile-menu" data-action="toggle-sidebar" aria-label="Menu">${icons.menu}</button><h1>${title}</h1></div><div class="top-actions"><button class="btn btn-ghost" data-action="export">${icons.download}<span>Backup</span></button><button class="btn btn-primary" data-action="new-lesson">${icons.plus}<span>Nova aula</span></button></div></header><div class="app-content">${content}</div></main></div>`;
}

function dashboardPage() {
  const upcoming = [...db.lessons].filter(l => l.status === "scheduled" && new Date(l.date) >= new Date(new Date().setHours(0,0,0,0))).sort((a,b) => new Date(a.date)-new Date(b.date));
  const today = upcoming.filter(l => new Date(l.date).toDateString() === new Date().toDateString());
  const paid = db.students.filter(s => s.payment === "paid").length;
  const revenue = paid * 320;
  const agenda = (today.length ? today : upcoming.slice(0,4));
  return appShell("dashboard", "Visão geral", `
    <div class="greeting"><div><span class="eyebrow">${todayLong()}</span><h2>Olá, Felipe.</h2><p>${today.length ? `Você tem ${today.length} ${today.length === 1 ? "aula" : "aulas"} hoje. Bom trabalho!` : "Hoje está livre. Aproveite para organizar os próximos encontros."}</p></div><span class="date-chip">Dados salvos localmente</span></div>
    <section class="metrics">
      <div class="metric"><div class="metric-top">${icons.users}<span class="trend">+${db.students.length}</span></div><strong>${db.students.length}</strong><span>alunos ativos</span></div>
      <div class="metric"><div class="metric-top">${icons.calendar}<span>7 dias</span></div><strong>${upcoming.filter(l => (new Date(l.date)-Date.now()) < 7*864e5).length}</strong><span>próximas aulas</span></div>
      <div class="metric"><div class="metric-top">${icons.money}<span class="trend">previsto</span></div><strong>${money(revenue)}</strong><span>receita mensal</span></div>
      <div class="metric"><div class="metric-top">${icons.clock}<span>alertas</span></div><strong>${db.students.filter(s=>s.payment !== "paid").length}</strong><span>pagamentos pendentes</span></div>
    </section>
    <div class="dashboard-grid"><div>
      <section class="panel"><div class="panel-head"><div><h3>${today.length ? "Agenda de hoje" : "Próximas aulas"}</h3><p>Acesse a sala ou envie um lembrete em um clique.</p></div><button class="btn btn-ghost" data-route="agenda">Ver agenda ${icons.arrow}</button></div><div class="agenda-list">${agenda.length ? agenda.map(agendaRow).join("") : `<div class="empty">Nenhuma aula agendada.</div>`}</div></section>
    </div><aside>
      <section class="panel"><div class="panel-head"><div><h3>Saúde da turma</h3><p>Visão dos pagamentos</p></div><span class="tag lime">${db.students.length} ativos</span></div><div class="progress-list"><div class="progress-row"><div><strong>Em dia</strong><span>${paid}/${db.students.length}</span></div><div class="progress-bar"><i style="width:${db.students.length ? paid/db.students.length*100 : 0}%"></i></div></div><div class="progress-row"><div><strong>Pendentes</strong><span>${db.students.length-paid}/${db.students.length}</span></div><div class="progress-bar"><i style="width:${db.students.length ? (db.students.length-paid)/db.students.length*100 : 0}%;background:#ff9a62"></i></div></div></div></section>
      <section class="panel backup-card"><span class="tag" style="border-color:rgba(0,0,0,.22);color:#0b0b0b">Proteja seus dados</span><h3>Fim do expediente?</h3><p>Exporte uma cópia completa dos alunos, aulas, pagamentos e anotações.</p><div class="backup-actions"><button class="btn" data-action="export">${icons.download} Exportar</button><button class="btn" data-action="import">${icons.upload} Importar</button></div></section>
    </aside></div>`);
}

function agendaRow(lesson) {
  const s = studentById(lesson.studentId) || { name: "Aluno removido" };
  const d = new Date(lesson.date);
  return `<article class="agenda-item"><div class="agenda-time">${fmtDate(d,{hour:"2-digit",minute:"2-digit"})}<small>${fmtDate(d,{weekday:"short",day:"2-digit",month:"short"})}</small></div><div class="agenda-person"><span class="mini-avatar">${initials(s.name)}</span><div><strong>${esc(s.name)}</strong><span>${esc(lesson.mode)} · ${lesson.duration} min · ${esc(lesson.topic || "Aula")}</span><span class="agenda-next"><b>Próxima matéria:</b> ${esc(s.next || "A definir")}</span></div></div><div class="agenda-actions">${lesson.status === "completed" ? `<span class="tag success">${icons.check} Concluída</span>` : `${lesson.link ? `<a class="btn btn-outline" href="${esc(lesson.link)}" target="_blank" rel="noopener">Entrar ${icons.external}</a>` : ""}<a class="btn btn-primary" href="#atualizar/${s.id}/${lesson.id}">${icons.check} Finalizar aula</a><button class="btn btn-ghost" title="Enviar lembrete" data-action="remind" data-lesson="${lesson.id}">${icons.bell}</button>`}</div></article>`;
}

function agendaPage() {
  const lessons = [...db.lessons].sort((a,b)=>new Date(a.date)-new Date(b.date));
  return appShell("agenda", "Agenda", `<div class="greeting"><div><span class="eyebrow">Organização</span><h2>Próximas aulas</h2><p>Agenda completa com links, modalidade e lembretes.</p></div></div><section class="panel"><div class="panel-head"><div><h3>${lessons.length} aulas cadastradas</h3><p>Horários exibidos no fuso deste dispositivo.</p></div><button class="btn btn-primary" data-action="new-lesson">${icons.plus} Agendar aula</button></div><div class="agenda-list">${lessons.length ? lessons.map(agendaRow).join("") : `<div class="empty">Sua agenda está livre.</div>`}</div></section>`);
}

function studentsPage(filter = "") {
  const list = db.students.filter(s => [s.name,s.email,s.instrument,s.studentNumber].join(" ").toLowerCase().includes(filter.toLowerCase()));
  const rows = list.map(s => `<tr><td><div class="student-name"><span class="mini-avatar">${initials(s.name)}</span><div><strong>${esc(s.name)}</strong><span>Matrícula ${esc(s.studentNumber)} · ${esc(s.email)}</span></div></div></td><td>${esc(s.instrument)} · ${esc(s.level)}</td><td>${esc(s.plan)}</td><td>${paymentTag(s.payment)}</td><td><div class="row-actions"><a class="btn btn-ghost update-student-btn" title="Atualizar conteúdo, exercícios e materiais" href="#atualizar/${s.id}">${icons.book} Atualizar página</a><a class="icon-btn" title="Ver portal do aluno" href="#aluno/${s.id}">${icons.external}</a><button class="icon-btn" title="Editar cadastro" data-action="edit-student" data-student="${s.id}">${icons.more}</button><button class="icon-btn row-delete-button" title="Excluir aluno" aria-label="Excluir ${esc(s.name)}" data-action="delete-student" data-student="${s.id}">${icons.trash}</button></div></td></tr>`).join("");
  return appShell("alunos", "Alunos", `<div class="greeting"><div><span class="eyebrow">Sua turma</span><h2>${db.students.length} alunos ativos</h2><p>Cadastro, acompanhamento pedagógico e situação financeira.</p></div></div><div class="toolbar"><label class="search-box">${icons.search}<input id="student-search" value="${esc(filter)}" placeholder="Buscar por nome, e-mail ou instrumento..." /></label><button class="btn btn-primary" data-action="new-student">${icons.plus} Novo aluno</button></div><section class="panel"><div style="overflow-x:auto"><table class="data-table"><thead><tr><th>Aluno</th><th>Nível</th><th>Plano</th><th>Pagamento</th><th></th></tr></thead><tbody>${rows || `<tr><td colspan="5" class="empty">Nenhum aluno encontrado.</td></tr>`}</tbody></table></div></section>`);
}

function paymentTag(status) {
  const map = { paid: ["success","Em dia"], pending: ["warning","Pendente"], late: ["danger","Atrasado"] };
  const [cls,label] = map[status] || map.pending;
  return `<span class="tag ${cls}"><i class="dot"></i>${label}</span>`;
}

function paymentsPage() {
  const rows = db.students.map(s => `<tr><td><div class="student-name"><span class="mini-avatar">${initials(s.name)}</span><div><strong>${esc(s.name)}</strong><span>${esc(s.plan)}</span></div></div></td><td>${money(s.plan === "Avulso" ? 120 : 320)}</td><td>${paymentTag(s.payment)}</td><td><div class="row-actions"><button class="btn btn-ghost" data-action="toggle-payment" data-student="${s.id}">${s.payment === "paid" ? "Marcar pendente" : "Marcar como pago"}</button></div></td></tr>`).join("");
  return appShell("pagamentos", "Pagamentos", `<div class="greeting"><div><span class="eyebrow">Financeiro local</span><h2>Controle mensal</h2><p>Acompanhe os recebimentos. Valores são demonstrativos e podem ser ajustados.</p></div></div><section class="panel"><div class="panel-head"><div><h3>Mensalidades</h3><p>${db.students.filter(s=>s.payment === "paid").length} pagamentos confirmados</p></div><span class="tag lime">${money(db.students.filter(s=>s.payment === "paid").length*320)} recebido</span></div><div style="overflow-x:auto"><table class="data-table"><thead><tr><th>Aluno / Plano</th><th>Valor</th><th>Status</th><th></th></tr></thead><tbody>${rows}</tbody></table></div></section>`);
}

function materialsPage() {
  return appShell("materiais", "Materiais", `
    <div class="greeting"><div><span class="eyebrow">Biblioteca didática</span><h2>Facilitando o violão</h2><p>Sua apostila organizada como apoio para aulas de violão e guitarra.</p></div><span class="date-chip">195 páginas · 9 módulos</span></div>
    <section class="material-feature">
      <div class="material-cover"><span>Workbook completo</span><strong>FV</strong><small>Felipe Figueroa</small></div>
      <div class="material-copy"><span class="tag lime">Material autoral</span><h3>Uma trilha para acompanhar a evolução de cada aluno.</h3><p>A base teórica e técnica da apostila serve aos dois instrumentos. Use os módulos para planejar a próxima matéria, indicar revisões e transformar exercícios em tarefas semanais.</p><div class="material-actions"><a class="btn btn-primary" href="${WORKBOOK_URL}" target="_blank" rel="noopener">Abrir apostila ${icons.external}</a><a class="btn btn-outline" href="${WORKBOOK_URL}" download>Baixar PDF ${icons.download}</a></div></div>
      <div class="material-facts"><div><strong>195</strong><span>páginas</span></div><div><strong>9</strong><span>módulos</span></div><div><strong>2</strong><span>instrumentos</span></div></div>
    </section>
    <div class="panel-head material-section-head"><div><h3>Mapa de conteúdos</h3><p>Abra a apostila diretamente no início de cada módulo.</p></div><span class="tag">Violão + guitarra</span></div>
    <section class="module-grid">${WORKBOOK_MODULES.map(module => `<a class="module-card" href="${WORKBOOK_URL}#page=${module.page}" target="_blank" rel="noopener"><span>${module.number} / p. ${module.page}</span><strong>${module.title}</strong><p>${module.topics}</p>${icons.arrow}</a>`).join("")}</section>
  `);
}

function exerciseEditorRow(exercise = {}) {
  return `<div class="editor-row" data-exercise-row>
    <input type="hidden" data-field="id" value="${esc(exercise.id || "")}">
    <div class="editor-row-number">${icons.music}</div>
    <div class="editor-row-fields"><input class="field" data-field="title" value="${esc(exercise.title || "")}" placeholder="Ex.: Escala pentatônica — posição 1"><input class="field" data-field="detail" value="${esc(exercise.detail || "")}" placeholder="Orientação: 10 min · 70 BPM · tocar 3x"></div>
    <button class="icon-btn editor-remove" type="button" data-action="remove-editor-row" aria-label="Remover exercício" title="Remover">${icons.close}</button>
  </div>`;
}

function materialEditorRow(material = {}) {
  return `<div class="editor-row material-editor-row" data-material-row>
    <input type="hidden" data-field="id" value="${esc(material.id || "")}">
    <div class="editor-row-number">${icons.book}</div>
    <div class="editor-row-fields"><input class="field" data-field="title" value="${esc(material.title || "")}" placeholder="Nome do material"><input class="field" type="text" inputmode="url" data-field="url" value="${esc(material.url || "")}" placeholder="https://..."><input class="field" data-field="detail" value="${esc(material.detail || "")}" placeholder="O que o aluno deve revisar neste material"></div>
    <button class="icon-btn editor-remove" type="button" data-action="remove-editor-row" aria-label="Remover material" title="Remover">${icons.close}</button>
  </div>`;
}

function updateStudentPage(id, lessonId = "") {
  const s = studentById(id);
  if (!s) return studentsPage();
  const lesson = db.lessons.find(item => item.id === lessonId && item.studentId === id);
  const exercises = db.exercises[id] || [];
  const materials = studentMaterials(id);
  const nextLesson = [...db.lessons].filter(item => item.studentId === id && item.status === "scheduled" && item.id !== lessonId && new Date(item.date) >= new Date()).sort((a,b)=>new Date(a.date)-new Date(b.date))[0];
  const lastUpdated = s.lastUpdatedAt ? fmtDate(s.lastUpdatedAt, { day:"2-digit", month:"long", hour:"2-digit", minute:"2-digit" }) : "Ainda não publicado";
  return appShell("alunos", `Atualizar · ${esc(s.name.split(" ")[0])}`, `
    <a class="back-link update-back" href="#alunos">${icons.arrow} Voltar para alunos</a>
    <div class="update-heading"><div class="update-student"><span class="avatar update-avatar">${initials(s.name)}</span><div><span class="eyebrow">Página do aluno</span><h2>${esc(s.name)}</h2><p>${esc(s.instrument)} · ${esc(s.level)} · última atualização: ${lastUpdated}</p></div></div><a class="btn btn-outline" href="#aluno/${s.id}" target="_blank">Ver como aluno ${icons.external}</a></div>
    ${lesson ? `<div class="lesson-finish-banner"><div>${icons.check}<span><strong>Finalizando a aula de ${fmtDate(lesson.date,{day:"2-digit",month:"long"})}</strong><small>${esc(lesson.topic || "Aula")} · ao publicar, ela será marcada como concluída</small></span></div><span class="tag warning">Em andamento</span></div>` : ""}
    <form id="update-student-form" data-student="${s.id}" data-lesson="${lesson?.id || ""}">
      <div class="update-layout"><div class="update-main">
        <section class="panel update-section"><div class="panel-head"><div><span class="update-step">01</span><h3>Resumo da aula</h3><p>Estas informações aparecem no topo da página do aluno.</p></div><span class="tag lime">Visível ao aluno</span></div><div class="update-fields">
          <label class="form-group"><span>O que vimos hoje</span><input class="field" required name="current" value="${esc(s.current || lesson?.topic || "")}" placeholder="Ex.: Inversões de acordes no campo harmônico"></label>
          <label class="form-group"><span>Orientações e pontos de atenção</span><textarea class="field" name="notes" placeholder="Resumo, feedback e como estudar durante a semana...">${esc(s.notes || "")}</textarea></label>
          <label class="form-group"><span>Foco da próxima aula</span><input class="field" name="next" value="${esc(s.next || "")}" placeholder="Ex.: Condução de vozes em DADGAD"></label>
        </div></section>
        <section class="panel update-section"><div class="panel-head"><div><span class="update-step">02</span><h3>Exercícios da semana</h3><p>Adicione tarefas claras com tempo, andamento ou repetição.</p></div><button class="btn btn-ghost" type="button" data-action="add-exercise">${icons.plus} Adicionar</button></div><div class="editor-list" id="exercise-editor">${exercises.length ? exercises.map(exerciseEditorRow).join("") : exerciseEditorRow()}</div><div class="editor-footer"><label class="check-option"><input type="checkbox" name="resetProgress"><span>${icons.check}</span><div><strong>Reiniciar progresso</strong><small>Marca todos os exercícios publicados como pendentes.</small></div></label></div></section>
        <section class="panel update-section"><div class="panel-head"><div><span class="update-step">03</span><h3>Material de apoio</h3><p>Links, vídeos, PDFs ou páginas específicas da apostila.</p></div><button class="btn btn-ghost" type="button" data-action="add-material">${icons.plus} Adicionar</button></div><div class="material-shortcut"><div>${icons.book}<span><strong>Apostila Facilitando o Violão</strong><small>Insira rapidamente o workbook completo na lista do aluno.</small></span></div><button type="button" class="btn btn-ghost" data-action="add-workbook">Usar apostila</button></div><div class="editor-list" id="material-editor">${materials.map(materialEditorRow).join("")}</div><div class="empty-editor ${materials.length ? "hidden" : ""}" id="material-empty">Nenhum material extra. A apostila geral continua disponível no portal.</div></section>
      </div><aside class="update-side">
        <section class="panel publish-card"><span class="eyebrow">Antes de publicar</span><h3>Tudo pronto?</h3><p>A atualização fica salva neste dispositivo e aparece imediatamente na página de ${esc(s.name.split(" ")[0])}.</p><div class="publish-summary"><div><span>Próxima aula</span><strong>${nextLesson ? `${fmtDate(nextLesson.date,{day:"2-digit",month:"short"})} · ${fmtDate(nextLesson.date,{hour:"2-digit",minute:"2-digit"})}` : "Não agendada"}</strong></div><div><span>Exercícios atuais</span><strong>${exercises.length}</strong></div><div><span>Materiais extras</span><strong>${materials.length}</strong></div></div><button class="btn btn-primary publish-button" type="submit">${icons.check} Publicar atualização</button><a class="btn btn-ghost" href="#alunos">Cancelar</a></section>
        <section class="panel internal-card"><div class="panel-head"><div><h3>Nota interna</h3><p>Só aparece para você.</p></div>${icons.book}</div><div class="update-fields"><label class="form-group"><span>Acompanhamento particular</span><textarea class="field" name="teacherNotes" placeholder="Percepções, dificuldades, repertório futuro...">${esc(s.teacherNotes || "")}</textarea></label></div></section>
      </aside></div>
    </form>`);
}

function studentPortal(id) {
  const s = studentById(id);
  if (!s) return loginPage("aluno", "Aluno não encontrado. Faça o login novamente.");
  const professorView = isProfessorAuthenticated();
  const lessons = db.lessons.filter(l=>l.studentId===s.id && l.status === "scheduled" && new Date(l.date)>=new Date()).sort((a,b)=>new Date(a.date)-new Date(b.date));
  const exercises = db.exercises[s.id] || [
    {id:"x1",title:"Revisar conteúdo da última aula",detail:"15 min · estudo consciente",done:false},
    {id:"x2",title:"Praticar com metrônomo",detail:"Subir de 60 a 76 BPM",done:false}
  ];
  const materials = studentMaterials(s.id);
  return `<div class="student-shell"><header class="student-nav"><div class="container"><a class="brand" href="#home"><span class="brand-mark" aria-label="Felipe Figueroa"></span><strong>Felipe Figueroa</strong><span>/ sala do aluno</span></a><div class="student-nav-actions"><span class="tag" style="color:#555;border-color:rgba(0,0,0,.16)"><i class="dot" style="color:#6ca11f"></i>${professorView ? "Visualização do professor" : paymentTagText(s.payment)}</span>${professorView ? `<a class="btn btn-outline" href="#atualizar/${s.id}">${icons.book}<span>Editar</span></a><a class="btn btn-outline" href="#alunos"><span>Voltar</span>${icons.arrow}</a>` : `<a class="btn btn-outline" href="#home">${icons.external}<span>Site</span></a><button class="btn btn-outline" data-action="logout-student"><span>Sair</span>${icons.arrow}</button>`}</div></div></header>
    <main><section class="student-hero"><div class="container student-hero-row"><div><span class="eyebrow" style="color:#3d5bb8">Sua jornada musical</span><h1>Olá, ${esc(s.name.split(" ")[0])}.<br><span>Vamos tocar?</span></h1></div><div class="practice-pill"><strong>${s.streak || 0} dias</strong><span>de sequência de prática</span></div></div></section>
    <div class="container student-grid"><div>
      <section class="light-card"><div class="light-card-head"><h2>Foco atual</h2><span class="tag" style="color:#555;border-color:rgba(0,0,0,.16)">Última aula</span></div><div class="lesson-focus"><span class="eyebrow" style="color:#4d64b8">Matéria que vimos</span><h3>${esc(s.current || "Conteúdo em construção")}</h3><p>${esc(s.notes || "Continue revisando devagar e com atenção ao som de cada nota.")}</p></div><div class="next-focus"><small>Na próxima aula</small><strong>${esc(s.next || "Revisão e aplicação musical")}</strong></div></section>
      <section class="light-card"><div class="light-card-head"><h2>Exercícios da semana</h2><span class="tag" style="color:#555;border-color:rgba(0,0,0,.16)">${exercises.filter(e=>e.done).length}/${exercises.length} feitos</span></div><div class="exercise-list">${exercises.map(e=>`<div class="exercise-item"><button class="check ${e.done ? "done" : ""}" aria-label="Marcar exercício" data-action="toggle-exercise" data-student="${s.id}" data-exercise="${e.id}">${icons.check}</button><div><strong>${esc(e.title)}</strong><span>${esc(e.detail)}</span></div><time>${e.done ? "feito" : "pendente"}</time></div>`).join("")}</div></section>
    </div><aside>
      <section class="light-card"><div class="light-card-head"><h2>Próximas aulas</h2>${icons.calendar}</div><div class="student-schedule">${lessons.length ? lessons.slice(0,4).map(l=>{const d=new Date(l.date); return `<div class="student-class"><div class="date-box"><strong>${fmtDate(d,{day:"2-digit"})}</strong><span>${fmtDate(d,{month:"short"})}</span></div><div class="student-class-info"><strong>${fmtDate(d,{weekday:"long"})} · ${fmtDate(d,{hour:"2-digit",minute:"2-digit"})}</strong><span>${esc(l.mode)} · ${l.duration} min</span></div>${l.link ? `<a class="join-btn" href="${esc(l.link)}" target="_blank">Entrar</a>` : ""}</div>`}).join("") : `<div class="empty">Nenhuma aula agendada.</div>`}</div></section>
      <section class="light-card"><div class="light-card-head"><h2>Ferramentas</h2></div><div class="quick-tools"><a class="quick-tool" target="_blank" href="https://www.google.com/search?q=metr%C3%B4nomo">${icons.timer}<strong>Metrônomo</strong><span>Pratique no tempo</span></a><a class="quick-tool" target="_blank" href="https://www.google.com/search?q=afinador+online">${icons.music}<strong>Afinador</strong><span>Afinação precisa</span></a></div></section>
      <section class="light-card student-workbook"><div class="light-card-head"><h2>Material de apoio</h2><span class="tag" style="color:#555;border-color:rgba(0,0,0,.16)">${materials.length ? `${materials.length} indicado${materials.length === 1 ? "" : "s"}` : "Biblioteca"}</span></div>${materials.length ? `<div class="assigned-materials">${materials.map(material => `<a class="assigned-material" href="${safeHref(material.url)}" target="_blank" rel="noopener"><span>${icons.external}</span><div><strong>${esc(material.title)}</strong><small>${esc(material.detail || "Abrir material de apoio")}</small></div>${icons.arrow}</a>`).join("")}</div>` : ""}<div class="student-workbook-body"><span class="eyebrow" style="color:#3d5bb8">Workbook base · 195 páginas</span><h3>Facilitando o violão</h3><p>Fundamentos, teoria e técnica que você também pode aplicar na guitarra.</p><div><a class="btn btn-primary" href="${WORKBOOK_URL}" target="_blank" rel="noopener">Abrir ${icons.external}</a><a class="btn btn-outline" href="${WORKBOOK_URL}" download>Baixar ${icons.download}</a></div></div></section>
      <section class="light-card"><div class="light-card-head"><h2>Meu caderno</h2><span class="tag" style="color:#555;border-color:rgba(0,0,0,.16)">privado</span></div><div class="note-area"><textarea class="field" data-student-note="${s.id}" placeholder="Anote dúvidas, ideias de repertório e metas...">${esc(db.notes[s.id] || "")}</textarea></div></section>
    </aside></div></main></div>`;
}

function paymentTagText(p) { return p === "paid" ? "Mensalidade em dia" : p === "late" ? "Pagamento atrasado" : "Pagamento pendente"; }

function loginPage(kind, error = "") {
  const isStudent = kind === "aluno";
  return `<main class="login-shell">
    <a class="brand login-brand" href="#home"><span class="brand-mark" aria-label="Felipe Figueroa"></span><strong>Felipe Figueroa</strong><span>/ acesso</span></a>
    <section class="login-visual" aria-hidden="true"><div class="login-visual-copy"><span class="eyebrow">Palco · Estúdio · Sala de aula</span><strong>Som, estudo<br>e evolução.</strong></div></section>
    <section class="login-panel"><div class="login-card">
      <a class="back-link" href="#home">${icons.arrow} Voltar ao site</a>
      <span class="eyebrow">Área restrita</span>
      <h1>${isStudent ? "Acesso do aluno" : "Acesso do professor"}</h1>
      <p>${isStudent ? "Entre com seu nome completo e sua data de aniversário." : "Entre para gerenciar alunos, agenda, aulas e pagamentos."}</p>
      ${error ? `<div class="login-error" role="alert">${esc(error)}</div>` : ""}
      <form id="${isStudent ? "student-login-form" : "professor-login-form"}" class="login-form">
        ${isStudent ? `<label><span>Nome do aluno</span><input class="field" name="studentName" autocomplete="username" required placeholder="Ex.: Ana Souza"></label>` : ""}
        <label><span>${isStudent ? "Senha · aniversário DDMM" : "Senha"}</span><input class="field" type="password" name="password" inputmode="numeric" maxlength="4" autocomplete="current-password" required placeholder="••••"></label>
        <button class="btn btn-primary" type="submit">Entrar ${icons.arrow}</button>
      </form>
      <div class="login-switch"><span>${isStudent ? "Você é o professor?" : "Você é aluno?"}</span><a href="#login/${isStudent ? "professor" : "aluno"}">Acessar outra área ${icons.arrow}</a></div>
      <small class="login-security">A sessão permanece ativa somente nesta janela do navegador.</small>
    </div></section>
  </main>`;
}

function render() {
  const hash = location.hash.replace(/^#/, "") || "home";
  const [route, id, detailId] = hash.split("/");
  const app = document.querySelector("#app");
  const professorRoute = ["admin", "dashboard", "agenda", "alunos", "atualizar", "materiais", "pagamentos"].includes(route);
  if (route === "login") app.innerHTML = loginPage(id === "professor" ? "professor" : "aluno");
  else if (professorRoute && !isProfessorAuthenticated()) app.innerHTML = loginPage("professor");
  else if (route === "admin" || route === "dashboard") app.innerHTML = dashboardPage();
  else if (route === "agenda") app.innerHTML = agendaPage();
  else if (route === "alunos") app.innerHTML = studentsPage();
  else if (route === "atualizar") app.innerHTML = updateStudentPage(id, detailId);
  else if (route === "materiais") app.innerHTML = materialsPage();
  else if (route === "pagamentos") app.innerHTML = paymentsPage();
  else if (route === "aluno" && (isProfessorAuthenticated() || authenticatedStudentId() === id)) app.innerHTML = studentPortal(id);
  else if (route === "aluno") app.innerHTML = loginPage("aluno");
  else app.innerHTML = publicPage();
  window.scrollTo(0, 0);
}

function openModal(title, body, footer = "") {
  document.body.insertAdjacentHTML("beforeend", `<div class="modal-backdrop" id="modal-backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><header class="modal-head"><h2 id="modal-title">${title}</h2><button class="icon-btn" data-action="close-modal" aria-label="Fechar">${icons.close}</button></header><div class="modal-body">${body}</div>${footer ? `<footer class="modal-foot">${footer}</footer>` : ""}</section></div>`);
}
function closeModal() { document.querySelector("#modal-backdrop")?.remove(); }

function studentModal(id) {
  const s = studentById(id) || {};
  const suggestedNumber = String(Math.max(1000, ...db.students.map(student => Number(student.studentNumber) || 0)) + 1);
  openModal(s.id ? "Editar aluno" : "Novo aluno", `<form id="student-form" class="form-grid">
    <input type="hidden" name="id" value="${esc(s.id || "")}"><div class="form-group full"><label>Nome completo</label><input class="field" required name="name" value="${esc(s.name || "")}" placeholder="Nome do aluno"></div>
    <div class="form-group"><label>Número do aluno</label><input class="field" required name="studentNumber" inputmode="numeric" value="${esc(s.studentNumber || suggestedNumber)}" placeholder="Ex.: 1005"></div><div class="form-group"><label>Data de nascimento</label><input class="field" required type="date" name="birthday" value="${esc(s.birthday || "")}"></div>
    <div class="form-group"><label>E-mail</label><input class="field" type="email" name="email" value="${esc(s.email || "")}" placeholder="aluno@email.com"></div><div class="form-group"><label>WhatsApp</label><input class="field" name="phone" value="${esc(s.phone || "")}" placeholder="5511999999999"></div>
    <div class="form-group"><label>Instrumento</label><select class="field" name="instrument"><option ${s.instrument==="Guitarra"?"selected":""}>Guitarra</option><option ${s.instrument==="Violão"?"selected":""}>Violão</option></select></div><div class="form-group"><label>Nível</label><select class="field" name="level">${["Iniciante","Intermediário","Avançado"].map(x=>`<option ${s.level===x?"selected":""}>${x}</option>`).join("")}</select></div>
    <div class="form-group"><label>Plano</label><select class="field" name="plan">${["Mensal","Trimestral","Avulso"].map(x=>`<option ${s.plan===x?"selected":""}>${x}</option>`).join("")}</select></div><div class="form-group"><label>Pagamento</label><select class="field" name="payment"><option value="paid" ${s.payment==="paid"?"selected":""}>Em dia</option><option value="pending" ${s.payment==="pending"?"selected":""}>Pendente</option><option value="late" ${s.payment==="late"?"selected":""}>Atrasado</option></select></div>
    <div class="form-group full"><label>Matéria atual</label><input class="field" name="current" value="${esc(s.current || "")}"></div><div class="form-group full"><label>Próxima matéria</label><input class="field" name="next" value="${esc(s.next || "")}"></div><div class="form-group full"><label>Observações</label><textarea class="field" name="notes">${esc(s.notes || "")}</textarea></div>
  </form>`, `${s.id ? `<button class="btn btn-danger modal-delete-button" data-action="delete-student" data-student="${s.id}">${icons.trash} Excluir aluno</button>` : ""}<button class="btn btn-ghost" data-action="close-modal">Cancelar</button><button class="btn btn-primary" type="submit" form="student-form">Salvar aluno</button>`);
}

function deleteStudentModal(id) {
  const student = studentById(id);
  if (!student) { toast("Aluno não encontrado"); return; }
  const lessonCount = db.lessons.filter(lesson => lesson.studentId === id).length;
  closeModal();
  openModal("Excluir aluno", `<div class="delete-warning">${icons.trash}<div><strong>Excluir ${esc(student.name)} permanentemente?</strong><p>O cadastro e ${lessonCount} ${lessonCount === 1 ? "aula relacionada" : "aulas relacionadas"}, além de exercícios, materiais e anotações, serão removidos deste dispositivo.</p><small>Essa ação só poderá ser desfeita restaurando um backup exportado anteriormente.</small></div></div>`, `<button class="btn btn-ghost" data-action="close-modal">Cancelar</button><button class="btn btn-danger" data-action="confirm-delete-student" data-student="${student.id}">${icons.trash} Sim, excluir aluno</button>`);
}

function deleteStudent(id) {
  const student = studentById(id);
  if (!student) { closeModal(); toast("Aluno não encontrado"); return; }
  db.students = db.students.filter(item => item.id !== id);
  db.lessons = db.lessons.filter(lesson => lesson.studentId !== id);
  ["exercises", "supportMaterials", "updates", "notes"].forEach(key => {
    if (db[key]) delete db[key][id];
  });
  if (authenticatedStudentId() === id) sessionStorage.removeItem(STUDENT_AUTH_KEY);
  saveData(`${student.name} foi excluído`);
  closeModal();
  location.hash = "alunos";
  render();
}

function lessonModal() {
  openModal("Agendar aula", `<form id="lesson-form" class="form-grid"><div class="form-group full"><label>Aluno</label><select required class="field" name="studentId"><option value="">Selecione...</option>${db.students.map(s=>`<option value="${s.id}">${esc(s.name)}</option>`).join("")}</select></div><div class="form-group"><label>Data e hora</label><input required class="field" type="datetime-local" name="date"></div><div class="form-group"><label>Duração</label><select class="field" name="duration"><option value="50">50 minutos</option><option value="60" selected>60 minutos</option><option value="90">90 minutos</option></select></div><div class="form-group"><label>Modalidade</label><select class="field" name="mode"><option>Online</option><option>Presencial</option></select></div><div class="form-group"><label>Link da aula</label><input class="field" type="url" name="link" placeholder="https://meet.google.com/..."></div><div class="form-group full"><label>Conteúdo / foco</label><input class="field" name="topic" placeholder="Ex.: improvisação, repertório..."></div></form>`, `<button class="btn btn-ghost" data-action="close-modal">Cancelar</button><button class="btn btn-primary" type="submit" form="lesson-form">Agendar</button>`);
}

function reminderModal(lessonId) {
  const lesson = db.lessons.find(l=>l.id===lessonId); const s = lesson && studentById(lesson.studentId); if (!lesson || !s) return;
  const when = `${fmtDate(lesson.date,{weekday:"long",day:"2-digit",month:"long"})} às ${fmtDate(lesson.date,{hour:"2-digit",minute:"2-digit"})}`;
  const message = `Oi, ${s.name.split(" ")[0]}! Passando para lembrar da nossa aula de guitarra ${when}.${lesson.link ? ` Link: ${lesson.link}` : ""} Até lá!`;
  openModal("Enviar lembrete", `<div class="choice-list"><a class="choice-btn" target="_blank" href="https://wa.me/${s.phone.replace(/\D/g,"")}?text=${encodeURIComponent(message)}" data-action="mark-reminded">${icons.whatsapp}<div><strong>Enviar por WhatsApp</strong><span>Abre a conversa com a mensagem pronta</span></div>${icons.arrow}</a><a class="choice-btn" href="mailto:${encodeURIComponent(s.email)}?subject=${encodeURIComponent("Lembrete da nossa aula")}&body=${encodeURIComponent(message)}" data-action="mark-reminded">${icons.mail}<div><strong>Enviar por e-mail</strong><span>Abre seu aplicativo de e-mail</span></div>${icons.arrow}</a></div>`);
}

function exportData() {
  db.lastBackup = new Date().toISOString(); localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  const blob = new Blob([JSON.stringify(db, null, 2)], {type:"application/json"}); const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = `felipe-studio-backup-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(url);
  toast("Backup exportado com sucesso"); render();
}

function importData() {
  const input = document.createElement("input"); input.type = "file"; input.accept = ".json,application/json";
  input.onchange = () => { const file = input.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { try { const parsed = JSON.parse(reader.result); if (!Array.isArray(parsed.students) || !Array.isArray(parsed.lessons)) throw new Error(); db = parsed; saveData(null); toast("Backup importado. Seus dados foram restaurados."); render(); } catch (_) { toast("Arquivo inválido. Escolha um backup deste sistema."); } }; reader.readAsText(file); }; input.click();
}

document.addEventListener("click", e => {
  const route = e.target.closest("[data-route]"); if (route) { location.hash = route.dataset.route; return; }
  const target = e.target.closest("[data-action]"); if (!target) return;
  const action = target.dataset.action;
  if (action === "print-kit") window.print();
  else if (action === "toggle-sidebar") document.querySelector("#sidebar")?.classList.toggle("open");
  else if (action === "logout-professor") { sessionStorage.removeItem(PROFESSOR_AUTH_KEY); location.hash = "home"; toast("Sessão do professor encerrada"); }
  else if (action === "logout-student") { sessionStorage.removeItem(STUDENT_AUTH_KEY); location.hash = "home"; toast("Sessão do aluno encerrada"); }
  else if (action === "close-modal") closeModal();
  else if (action === "new-student") studentModal();
  else if (action === "edit-student") studentModal(target.dataset.student);
  else if (action === "delete-student") deleteStudentModal(target.dataset.student);
  else if (action === "confirm-delete-student") deleteStudent(target.dataset.student);
  else if (action === "add-exercise") document.querySelector("#exercise-editor")?.insertAdjacentHTML("beforeend", exerciseEditorRow());
  else if (action === "add-material") { document.querySelector("#material-editor")?.insertAdjacentHTML("beforeend", materialEditorRow()); document.querySelector("#material-empty")?.classList.add("hidden"); }
  else if (action === "add-workbook") { document.querySelector("#material-editor")?.insertAdjacentHTML("beforeend", materialEditorRow({ title:"Apostila Facilitando o Violão", detail:"Revisar o conteúdo indicado para a próxima aula.", url:WORKBOOK_URL })); document.querySelector("#material-empty")?.classList.add("hidden"); }
  else if (action === "remove-editor-row") { target.closest("[data-exercise-row], [data-material-row]")?.remove(); if (!document.querySelector("[data-material-row]")) document.querySelector("#material-empty")?.classList.remove("hidden"); }
  else if (action === "new-lesson") lessonModal();
  else if (action === "remind") reminderModal(target.dataset.lesson);
  else if (action === "mark-reminded") { toast("Lembrete preparado para envio"); setTimeout(closeModal,300); }
  else if (action === "export") exportData();
  else if (action === "import") importData();
  else if (action === "toggle-payment") { const s=studentById(target.dataset.student); if(s){s.payment=s.payment==="paid"?"pending":"paid";saveData("Status de pagamento atualizado");render();} }
  else if (action === "toggle-exercise") { const list=db.exercises[target.dataset.student] || []; const ex=list.find(x=>x.id===target.dataset.exercise); if(ex){ex.done=!ex.done;saveData("Progresso atualizado");render();} }
});

document.addEventListener("submit", e => {
  if (e.target.id === "professor-login-form") {
    e.preventDefault();
    const { password } = Object.fromEntries(new FormData(e.target));
    if (password === "1508") { sessionStorage.setItem(PROFESSOR_AUTH_KEY, "true"); location.hash = "admin"; toast("Bem-vindo, Felipe"); render(); }
    else document.querySelector("#app").innerHTML = loginPage("professor", "Senha incorreta. Tente novamente.");
  }
  if (e.target.id === "student-login-form") {
    e.preventDefault();
    const { studentName, password } = Object.fromEntries(new FormData(e.target));
    const normalizedName = slugify(String(studentName).trim());
    const isMasterPassword = String(password).trim() === "1508";
    if (normalizedName === "felipe-figueroa" && isMasterPassword) {
      sessionStorage.setItem(PROFESSOR_AUTH_KEY, "true");
      location.hash = "alunos";
      toast("Acesso de professor liberado");
      render();
      return;
    }
    const student = db.students.find(item => slugify(item.name) === normalizedName);
    if (student && (birthdayPassword(student.birthday) === String(password).trim() || isMasterPassword)) {
      if (isMasterPassword) sessionStorage.setItem(PROFESSOR_AUTH_KEY, "true");
      sessionStorage.setItem(STUDENT_AUTH_KEY, student.id);
      location.hash = `aluno/${student.id}`;
      toast(isMasterPassword ? `Visualizando a área de ${student.name}` : `Bem-vindo, ${student.name.split(" ")[0]}`);
      render();
    }
    else document.querySelector("#app").innerHTML = loginPage("aluno", "Nome do aluno ou aniversário incorreto.");
  }
  if (e.target.id === "student-form") { e.preventDefault(); const values=Object.fromEntries(new FormData(e.target)); const duplicate=db.students.find(student=>student.studentNumber===values.studentNumber && student.id!==values.id); if(duplicate){toast("Este número de aluno já está em uso");return;} const existing=studentById(values.id); if(existing) Object.assign(existing,values); else { values.id=slugify(values.name)+"-"+Date.now().toString(36); values.streak=0; db.students.push(values); db.exercises[values.id]=[]; } saveData("Aluno salvo com sucesso"); closeModal(); location.hash="alunos"; render(); }
  if (e.target.id === "lesson-form") { e.preventDefault(); const values=Object.fromEntries(new FormData(e.target)); values.id="l"+Date.now().toString(36); values.date=new Date(values.date).toISOString(); values.duration=Number(values.duration); values.status="scheduled"; db.lessons.push(values); saveData("Aula agendada com sucesso"); closeModal(); location.hash="agenda"; render(); }
  if (e.target.id === "update-student-form") {
    e.preventDefault();
    const form = e.target;
    const student = studentById(form.dataset.student);
    if (!student) { toast("Aluno não encontrado"); return; }
    const values = Object.fromEntries(new FormData(form));
    db.exercises ||= {};
    const previousExercises = db.exercises[student.id] || [];
    const exercises = [...form.querySelectorAll("[data-exercise-row]")].map(row => {
      const id = row.querySelector('[data-field="id"]').value || `e${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`;
      const old = previousExercises.find(item => item.id === id);
      return { id, title:row.querySelector('[data-field="title"]').value.trim(), detail:row.querySelector('[data-field="detail"]').value.trim(), done:values.resetProgress === "on" ? false : Boolean(old?.done) };
    }).filter(item => item.title);
    const materialRows = [...form.querySelectorAll("[data-material-row]")];
    const incompleteMaterial = materialRows.find(row => {
      const title = row.querySelector('[data-field="title"]').value.trim();
      const url = row.querySelector('[data-field="url"]').value.trim();
      return (title || url) && !(title && url);
    });
    if (incompleteMaterial) { toast("Preencha o nome e o link do material"); incompleteMaterial.querySelector(".field:placeholder-shown")?.focus(); return; }
    const materials = materialRows.map(row => ({
      id:row.querySelector('[data-field="id"]').value || `m${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
      title:row.querySelector('[data-field="title"]').value.trim(),
      url:row.querySelector('[data-field="url"]').value.trim(),
      detail:row.querySelector('[data-field="detail"]').value.trim(),
    })).filter(item => item.title && item.url);
    student.current = String(values.current || "").trim();
    student.notes = String(values.notes || "").trim();
    student.next = String(values.next || "").trim();
    student.teacherNotes = String(values.teacherNotes || "").trim();
    student.lastUpdatedAt = new Date().toISOString();
    db.exercises[student.id] = exercises;
    db.supportMaterials ||= {};
    db.supportMaterials[student.id] = materials;
    db.updates ||= {};
    db.updates[student.id] ||= [];
    db.updates[student.id].unshift({ id:`u${Date.now().toString(36)}`, date:student.lastUpdatedAt, lessonId:form.dataset.lesson || null, current:student.current, exerciseCount:exercises.length, materialCount:materials.length });
    db.updates[student.id] = db.updates[student.id].slice(0, 20);
    const lesson = db.lessons.find(item => item.id === form.dataset.lesson && item.studentId === student.id);
    if (lesson) lesson.status = "completed";
    saveData(`Página de ${student.name.split(" ")[0]} atualizada`);
    location.hash = `aluno/${student.id}`;
    render();
  }
});

document.addEventListener("input", e => {
  if (e.target.id === "student-search") { const value=e.target.value; document.querySelector("#app").innerHTML=studentsPage(value); const input=document.querySelector("#student-search"); input.focus(); input.setSelectionRange(value.length,value.length); }
  if (e.target.matches("[data-student-note]")) { const id=e.target.dataset.studentNote; db.notes[id]=e.target.value; localStorage.setItem(STORAGE_KEY,JSON.stringify(db)); }
});
window.addEventListener("hashchange", render);
render();
