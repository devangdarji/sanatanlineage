// Screen ke saare hisse: details panel, search, Vansh menu, About card, theme button.
// Har hissa ek create...() function hai jo main.js se juda hai.

import { VANSH, VANSH_ORDER } from "../data/vansh.js";
import { vanshOf, isGap, kindOf, yugaOf, spouses, cardLine, sourcesOf } from "./rules.js";

// ---------------------------------------------------------------- chhote helpers

export const $ = (sel) => document.querySelector(sel);

export function esc(t) {
  return String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

export function cut(t, n) {
  return t.length > n ? t.slice(0, n - 1) + "…" : t;
}

// Vansh ke rang CSS variables (--br-S ...) se aate hain, taaki theme badalte hi sab rang badal jaayein
export const accent = (code) => `var(--br-${VANSH[code] ? code : "R"})`;
const accentA = (code, pct) => `color-mix(in srgb, ${accent(code)} ${pct}%, transparent)`;

export function injectVanshColors() {
  const dark = [];
  const light = [];
  for (const [k, v] of Object.entries(VANSH)) {
    dark.push(`--br-${k}:${v.dark}`);
    light.push(`--br-${k}:${v.light}`);
  }
  const el = document.createElement("style");
  el.textContent = `:root{${dark.join(";")}}:root[data-theme="light"]{${light.join(";")}}`;
  document.head.appendChild(el);
}

// ---------------------------------------------------------------- theme (light / dark)

export function initTheme(btn, storageKey) {
  const root = document.documentElement;
  const meta = document.querySelector('meta[name="theme-color"]');
  const current = () => (root.dataset.theme === "light" ? "light" : "dark");

  function apply(theme, save) {
    root.dataset.theme = theme;
    const label = theme === "light" ? "Dark mode chalu karein" : "Light mode chalu karein";
    btn.title = label;
    btn.setAttribute("aria-label", label);
    if (meta) meta.content = getComputedStyle(root).getPropertyValue("--canvas").trim();
    if (save) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (e) {
        /* private mode: sirf is session ke liye */
      }
    }
  }

  apply(current(), false);
  btn.addEventListener("click", () => apply(current() === "light" ? "dark" : "light", true));
}

// ---------------------------------------------------------------- details panel

export function createPanel({ byId, onLink, isMobile }) {
  const panel = $("#panel");
  const body = $("#pbody");
  const openBtn = $("#popen");

  const link = (id) => `<a data-id="${id}" href="#">${esc(byId[id].data.name)}</a>`;

  // Text ko safe banata hai aur [[id]] ko link me badalta hai
  const rich = (t) => esc(t).replace(/\[\[([a-z0-9_]+)\]\]/g, (m, id) => (byId[id] ? link(id) : m));

  function render(id) {
    const n = byId[id];
    const P = n.data;
    const parent = n.parent;
    const kids = n.children || n._children || [];
    const yuga = yugaOf(P);
    const sp = spouses(P);
    let h = "";

    h += `<h2>${esc(P.name)}</h2><div class="sub">${rich(cardLine(P))}</div>`;
    h += `<span class="chip" style="color:${accent(P.vansh)}">${esc(vanshOf(P.vansh).name)}</span>`;
    h += `<span class="chip kind">${kindOf(P)}</span>`;
    if (yuga) h += `<span class="chip yuga">${yuga}</span>`;

    const trail = [];
    for (let a = parent; a; a = a.parent) trail.unshift(a);
    if (trail.length) {
      h +=
        '<div class="dim marg">Vansh-marg: ' +
        (trail.length > 6 ? "&hellip; &rsaquo; " : "") +
        trail
          .slice(-6)
          .map((a) => (isGap(a.data) ? "&hellip;" : link(a.data.id)))
          .join(" &rsaquo; ") +
        "</div>";
    }

    h += "<h4>Sankshipt jaankari</h4>" + (P.note ? rich(P.note) : "—");
    if (P.knownFor) h += "<h4>Kis liye jaane jaate hain</h4>" + rich(P.knownFor);
    if (P.deeds) h += "<h4>Kya kiya (deeds)</h4>" + rich(P.deeds);
    if (P.abilities) h += "<h4>Kshamta / vardan</h4>" + rich(P.abilities);
    if (!P.deeds && !P.knownFor) h += '<p class="dim">Deeds aur abilities abhi sourced roop me nahi jodi gayi hain; contribute karein.</p>';

    h +=
      "<h4>Kaal</h4>" +
      (yuga ? esc(yuga) + " - parampara/Itihasa ke anusar. Aitihasik tithi pramanit nahi." : "Puranic parampara; koi pramanit tithi nahi.");

    let parents;
    const mother = P.mother ? "Mata: " + rich(P.mother) : "";
    if (P.parents) parents = rich(P.parents);
    else if (parent) {
      const father = isGap(parent.data) ? esc(parent.data.name) + " - " + esc(cardLine(parent.data)) : link(parent.data.id);
      parents = father + (mother ? " &middot; " + mother : "");
    } else parents = mother || "Swayambhu / Vishnu ki nabhi-kamal se (Bhagavata)";
    h += "<h4>Mata-pita</h4>" + parents;

    if (sp) h += `<h4>${sp.label}</h4>` + sp.list.map(rich).join(", ");

    h +=
      `<h4>Santan / agli shaakha (${kids.length})</h4>` +
      (kids.length ? kids.map((c) => link(c.data.id)).join(", ") : '<span class="dim">Is vriksh me koi nahi jodi gayi</span>');

    const src = sourcesOf(P);
    h +=
      "<h4>Source (praman)</h4>" +
      src.list.map((x) => `<div class="src">&bull; ${esc(x)}</div>`).join("") +
      (src.auto ? '<div class="dim">Shaakha ke hisaab se; is vyakti ka exact verse abhi nahi joda gaya.</div>' : "");

    if (P.variations) h += `<div class="warn"><b>Granthon me matbhed:</b> ${rich(P.variations)}</div>`;
    return h;
  }

  const open = () => panel.classList.remove("closed");
  const close = () => panel.classList.add("closed");

  function show(id) {
    body.innerHTML = render(id);
    openBtn.hidden = false;
    open();
    body.scrollTop = 0;
  }

  panel.addEventListener("click", (e) => {
    const t = e.target.closest("a[data-id]");
    if (t) {
      e.preventDefault();
      onLink(t.getAttribute("data-id"));
    }
  });
  $("#pclose").addEventListener("click", close);
  openBtn.addEventListener("click", open);

  // Mobile: sheet ko neeche kheench kar band karein
  let y0 = null;
  let dy = 0;
  panel.addEventListener(
    "touchstart",
    (e) => {
      if (!isMobile()) return;
      if (body.scrollTop > 0 && !e.target.closest(".grab")) return;
      y0 = e.touches[0].clientY;
      dy = 0;
    },
    { passive: true }
  );
  panel.addEventListener(
    "touchmove",
    (e) => {
      if (y0 == null) return;
      dy = e.touches[0].clientY - y0;
      if (dy > 0) {
        panel.style.transition = "none";
        panel.style.transform = `translateY(${dy}px)`;
      }
    },
    { passive: true }
  );
  panel.addEventListener("touchend", () => {
    if (y0 == null) return;
    panel.style.transition = "";
    panel.style.transform = "";
    if (dy > 80) close();
    y0 = null;
  });

  return { show, close, isOpen: () => !panel.classList.contains("closed") };
}

// ---------------------------------------------------------------- search

export function createSearch({ people, onPick }) {
  const input = $("#q");
  const clearBtn = $("#qx");
  const list = $("#sres");
  let matches = [];
  let active = -1;

  // Pehle naam ki shuruaat, phir kisi shabd ki shuruaat, phir kahin bhi (naam, card line, vansh)
  function find(v) {
    const a = [], b = [], c = [];
    people.forEach((p) => {
      if (isGap(p)) return;
      const nm = p.name.toLowerCase();
      if (nm.startsWith(v)) a.push(p);
      else if ((" " + nm).includes(" " + v)) b.push(p);
      else if (v.length > 1 && (nm.includes(v) || cardLine(p).toLowerCase().includes(v) || vanshOf(p.vansh).name.toLowerCase().includes(v))) c.push(p);
    });
    return a.concat(b, c).slice(0, 40);
  }

  function render(raw) {
    const v = raw.trim().toLowerCase();
    clearBtn.style.display = v ? "block" : "none";
    if (!v) {
      close();
      matches = [];
      return;
    }
    matches = find(v);
    active = matches.length ? 0 : -1;
    list.innerHTML = matches.length
      ? matches
          .map(
            (p, k) =>
              `<div class="si${k === 0 ? " act" : ""}" data-id="${p.id}" role="option">` +
              `<div><div class="sn1">${esc(p.name)}</div><div class="sn2">${esc(cardLine(p))}</div></div>` +
              `<span class="sb" style="color:${accent(p.vansh)};border-color:${accentA(p.vansh, 47)};background:${accentA(p.vansh, 11)}">${esc(vanshOf(p.vansh).name)}</span></div>`
          )
          .join("")
      : '<div class="sn">Koi parinam nahi mila</div>';
    list.classList.add("open");
  }

  function mark() {
    list.querySelectorAll(".si").forEach((el, k) => {
      el.classList.toggle("act", k === active);
      if (k === active) el.scrollIntoView({ block: "nearest" });
    });
  }

  function pick(id) {
    input.value = people.find((p) => p.id === id).name;
    close();
    if (matchMedia("(pointer: coarse)").matches) input.blur(); // phone ka keyboard band
    onPick(id);
  }

  function close() {
    list.classList.remove("open");
  }

  input.addEventListener("input", () => render(input.value));
  input.addEventListener("focus", () => input.value.trim() && render(input.value));
  input.addEventListener("keydown", (e) => {
    if (!matches.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      active = (active + 1) % matches.length;
      mark();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      active = (active - 1 + matches.length) % matches.length;
      mark();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (active >= 0) pick(matches[active].id);
    }
  });
  list.addEventListener("click", (e) => {
    const t = e.target.closest(".si");
    if (t) pick(t.getAttribute("data-id"));
  });
  clearBtn.addEventListener("click", () => {
    input.value = "";
    render("");
    input.focus();
  });

  return { close };
}

// ---------------------------------------------------------------- Vansh menu

export function createVanshMenu({ onSelect }) {
  const btn = $("#vb");
  const menu = $("#vpop");

  menu.innerHTML =
    '<div class="vh" lang="hi">इतिहास के कुछ प्रसिद्ध वंश</div>' +
    VANSH_ORDER.map(
      (b) => `<button class="vp" data-br="${b}"><i style="background:${accent(b)};box-shadow:0 0 7px ${accent(b)}"></i>${esc(VANSH[b].name)}</button>`
    ).join("") +
    '<button class="vp clr" data-br="">Sab dikhayein (Show All Lineage)</button>';

  // active = abhi chuna hua vansh code, ya null
  function sync(active) {
    btn.classList.toggle("on", !!active);
    btn.innerHTML = active ? `<i style="background:${accent(active)}"></i>${esc(VANSH[active].name)} &#9662;` : "Vansh &#9662;";
    menu.querySelectorAll(".vp[data-br]").forEach((el) => el.classList.toggle("act", !!active && el.getAttribute("data-br") === active));
  }

  function setOpen(on) {
    menu.classList.toggle("open", on);
    btn.setAttribute("aria-expanded", String(on));
  }

  btn.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
  menu.addEventListener("click", (e) => {
    const t = e.target.closest(".vp");
    if (!t) return;
    onSelect(t.getAttribute("data-br") || null);
    setOpen(false);
  });

  return { sync, close: () => setOpen(false) };
}

// ---------------------------------------------------------------- About card ("i" button)

export function createAbout({ stats, version, prev, repoUrl, changelog }) {
  const card = $("#about");
  const btn = $("#ib");
  let touched = false;

  const delta = (a, b) => {
    const d = a - b;
    return d === 0 ? "" : ` <small class="${d > 0 ? "up" : "dn"}">(${d > 0 ? "+" : ""}${d} vs ${prev.v})</small>`;
  };
  const gh = repoUrl
    ? `<a class="gh" href="${esc(repoUrl)}" target="_blank" rel="noopener">GitHub par contribute karein</a>`
    : '<span class="gh off">GitHub repo link jald yahan</span>';
  const A = stats;

  $("#abody").innerHTML =
    `<h3>Is vanshavali ke baare me</h3><div class="sub">Sanatan Vanshavali &middot; ${version}</div>` +
    "<h4>Hamara uddeshya</h4>Brahma ji se Mahabharata tak ki Puranic vansh-parampara ek hi jagah, saaf aur sourced tareeke se, taaki har Bharatiya apni jadon (roots) se jud sake. Yeh open-source hai: sab milkar ise sudharein aur bachaye rakhein." +
    '<div class="sg">' +
    `<div><b>${A.nodes}</b>Nodes${delta(A.nodes, prev.nodes)}</div>` +
    `<div><b>${A.persons}</b>Persons${delta(A.persons, prev.persons)}</div>` +
    `<div><b>${A.gaps + A.groups}</b>Group / gap boxes</div>` +
    `<div><b>~${A.spouses}</b>Spouses (sirf text me)${delta(A.spouses, prev.spouses)}</div>` +
    `<div><b>${Object.keys(VANSH).length}</b>Shaakhayein</div>` +
    `<div><b>${version}</b>Version</div>` +
    "</div>" +
    "<h4>Kya jodaa gaya</h4><ul>" + changelog.map((c) => `<li>${esc(c)}</li>`).join("") + "</ul>" +
    "<h4>Har node me kya milta hai</h4><ul><li>Sankshipt jaankari aur vansh-marg</li><li>Deeds, kshamta, kaal (jahan praman ho)</li><li>Mata-pita, patni/pati, santan (clickable)</li><li>Source aur granthon ke matbhed</li></ul>" +
    "<h4>Contribute karein</h4>Galti mile ya naya vyakti jodna ho to granth aur adhyay/shlok ke source ke saath issue ya pull request bhejein. Bina source ke entry nahi li jayegi.<br>" + gh +
    '<h4>Source aur seema</h4><span class="dim">Vishnu/Bhagavata/Agni/Garuda Purana, Mahabharata (Adi Parva 89-95), Valmiki Ramayana (Bala Kanda 71) aur Wikipedia ki suchiyon se milaan kiya; Eternal Raga, YugaTree, Ramayana Family Tree, Sutra aur Atha se sirf cross-check kiya. "... (kai pidhiyan)" wale boxes me Puranon ki naam-suchi alag-alag hai, isliye seedha pita-putra nahi dikhaya. Sab Puranic/Itihasik manyata hai; kaal-nirdharan pramanit nahi; Puranon me kai jagah matbhed hain.</span>' +
    '<h4>Kaise use karein</h4><span class="dim">Drag = pan &middot; Scroll ya do ungliyon se pinch = zoom &middot; Node par click = shaakha khule/band aur details khule &middot; Vansh button se poori shaakha highlight &middot; Upar daayin taraf ke button se light/dark theme.</span>';

  btn.addEventListener("click", () => {
    touched = true;
    card.classList.toggle("closed");
  });
  card.addEventListener("mouseenter", () => (touched = true));
  card.addEventListener("touchstart", () => (touched = true), { passive: true });

  // Pehli baar 3 second dikhe, phir apne aap band (agar user ne chhua nahi)
  setTimeout(() => {
    if (!touched) card.classList.add("closed");
  }, 3000);

  return { close: () => card.classList.add("closed") };
}
