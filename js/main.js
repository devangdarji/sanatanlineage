// Entry point: data padhta hai aur sab hisson ko jodta hai.

import { PEOPLE } from "../data/log.js";
import { validate, analyze } from "./rules.js";
import { createTree } from "./tree.js";
import { $, injectVanshColors, initTheme, createPanel, createSearch, createVanshMenu, createAbout } from "./ui.js";

// ---------------------------------------------------------------- settings
// Naya version banate samay sirf yahan badlav karein.

const VERSION = "v8";

// Pichhle version ke aankde: About panel me "(+3 vs v7)" jaisa farq dikhane ke liye
const PREV = { v: "v7", nodes: 216, persons: 197, spouses: 19 };

// GitHub repo ka link daalein, About panel ka "contribute" button apne aap ban jayega
const REPO_URL = "https://github.com/devangdarji/sanatanlineage";

const CHANGELOG = [
  "v8: naya data format (ek vyakti = ek block), bina build ke chalta hai, adhoore source theek, ek patni wale logon ki 'Patni' ab dikhti hai",
  "v7: mobile ke liye naya layout, light/dark theme, heading ke peeche halka glow",
  "v6: saaf heading, search aur Vansh-menu ke naye shabd",
  "v5: padhne layak bade fonts, search suggestions, vansh-highlight, bahar click par band, floating cards",
  "v4: naya theme, floating cards, blink-highlight, about-panel",
  "v3: detail card, search, stats; Kesari, Anjana, Riksharaja, Kartikeya, Ganesha, 27 Nakshatra",
  "v2: Kardama-Kapila, Rishabha-Bharata, Dattatreya, Durvasa, Agastya, Magadha (Jarasandha) shaakha",
];

// Isse chhoti (ya barabar) screen par mobile layout. css/style.css me bhi 700px hai.
const MOBILE_MAX = 700;

// ---------------------------------------------------------------- shuruaat

// Data me galti ho to console me saaf dikhe (F12 → Console)
const errors = validate(PEOPLE);
if (errors.length) console.error(`[data] ${errors.length} galti:\n  ` + errors.join("\n  "));

injectVanshColors();
initTheme($("#tb"), "vanshavali-theme"); // yahi naam index.html ki chhoti script me bhi hai

const isMobile = () => innerWidth <= MOBILE_MAX;

// Abhi kya highlight hai
let selId = null; // chuna hua vyakti
let activeBr = null; // chuna hua vansh

// Screen ka woh hissa jo header aur details panel se dhaka nahi hai
function visibleArea() {
  const a = { left: 0, top: $("#ctl").getBoundingClientRect().bottom, right: innerWidth, bottom: innerHeight };
  if (panel.isOpen()) {
    const r = $("#panel").getBoundingClientRect();
    if (isMobile()) a.bottom = Math.max(a.top + 120, r.top);
    else a.right = Math.max(200, r.left);
  }
  return a;
}

const tree = createTree($("#tree"), PEOPLE, {
  onNodeClick: select,
  getHighlight: () => ({ selId, activeBr }),
  visibleArea,
  isMobile,
});

const panel = createPanel({ byId: tree.byId, onLink: focusNode, isMobile });

function select(id) {
  panel.show(id);
  selId = id;
  tree.refreshHighlight();
}

// Vyakti tak le jaana: shaakha kholo, details dikhao, camera le jao
function focusNode(id) {
  tree.reveal(id);
  tree.update();
  select(id);
  tree.centerOn(id);
}

const vanshMenu = createVanshMenu({ onSelect: setVansh });

function setVansh(code) {
  if (!code && !activeBr) return;
  activeBr = code && activeBr !== code ? code : null;
  selId = null;
  panel.close();
  if (activeBr) {
    tree.revealBranch(activeBr);
    tree.update();
    setTimeout(() => tree.fitBranch(activeBr), 520);
  } else tree.update();
  vanshMenu.sync(activeBr);
}

function clearVansh() {
  if (activeBr) {
    activeBr = null;
    vanshMenu.sync(null);
  }
}

const search = createSearch({
  people: PEOPLE,
  onPick: (id) => {
    clearVansh();
    focusNode(id);
  },
});

const stats = analyze(PEOPLE);
const about = createAbout({ stats, version: VERSION, prev: PREV, repoUrl: REPO_URL, changelog: CHANGELOG });
console.log("Vanshavali " + VERSION, stats);

$("#ex").addEventListener("click", () => {
  clearVansh();
  tree.expandAll();
  tree.update();
});
$("#co").addEventListener("click", () => {
  clearVansh();
  tree.collapseAll();
  tree.update();
});

// Esc se sab band
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  panel.close();
  about.close();
  search.close();
  vanshMenu.close();
});

// Bahar click karne par khule menu/card band
document.addEventListener("click", (e) => {
  const path = e.composedPath ? e.composedPath() : [];
  const inside = (sel) => path.some((n) => n.matches && n.matches(sel));
  if (!inside(".sbox")) search.close();
  if (!inside(".vwrap")) vanshMenu.close();
  if (!inside("#about,#ib")) about.close();
  if (!inside("#panel,#popen,.node,#ctl,#about,#ib,#tb")) panel.close();
});

tree.update();
tree.home();
vanshMenu.sync(null);
