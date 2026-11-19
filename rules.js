/* Sanatan Vanshavali: saari styling isi ek file me.
   Kram: 1. theme ke rang  2. buniyadi  3. header  4. vriksh  5. cards.
   Mobile ke niyam har hisse ke aakhir me "@media (max-width: 700px)" me hain. */


/* ========================================================================
   1. THEME KE RANG  (dark upar, light neeche). Rang badalne ho to sirf yahan.
   ======================================================================== */

:root {
  --ui: "Plus Jakarta Sans", "Noto Sans Devanagari", "Nirmala UI", "Kohinoor Devanagari", system-ui, -apple-system, "Segoe UI", sans-serif;
  --display: "Tiro Devanagari Hindi", "Noto Serif Devanagari", Georgia, serif;

  --gold: #F5C451;
  --saf: #FF9933;

  --canvas: #0B100E;
  --canvas-glow: #1B2F2A;

  --text: #f6eddc;
  --text-strong: #fff;
  --soft: #cdbf9f;
  --muted: #a99a7c;

  --surface: #12181cf2;
  --pop: #10161a;
  --bar: #0e1411d9;
  --bar-solid: #0e1411f2;
  --line: #F5C45133;
  --line-strong: #F5C45155;

  --field: #0a0f0dcc;
  --field-text: #fff3da;
  --field-line: #F5C45188;
  --field-icon: var(--gold);

  --heading: #FFA94D;
  --subhead: #F7CE6B;
  --label: #c9a66b;
  --link: #FFD98A;
  --kind: #9ca3af;
  --yuga: #bef264;
  --close: #b9986a;
  --clear: #e8b07a;

  --hover: #F5C45126;
  --active: #F5C45133;
  --stat-bg: #ffffff0d;
  --stat-num: var(--gold);
  --warn-bg: #7a2e0e55;
  --up: #7bd389;
  --dn: #f28b82;

  /* vansh-marg / chuna hua node */
  --hl: #FFD166;
  --hl-glow: #FFD166aa;
  --sel-edge: #fff;

  --shadow: #000a;
  --shadow-soft: #0009;
  --node-text-edge: #000b;

  /* heading "सनातन वंशावली" aur uske peeche ka glow */
  --title-a: #F5C451;
  --title-b: #FF9933;
  --halo: rgba(6, 10, 8, 0.6);
  --halo-edge: rgba(0, 0, 0, 0.85);

  color-scheme: dark;
}

:root[data-theme="light"] {
  --canvas: #EADCBE;
  --canvas-glow: #F8F0DE;

  --text: #2B1D0E;
  --text-strong: #1E1408;
  --soft: #6B5A3E;
  --muted: #6B5A3E;

  --surface: #FFFAF0f2;
  --pop: #FFFAF0;
  --bar: #FFF8EAe0;
  --bar-solid: #FFF8EAf5;
  --line: #9A5B1A33;
  --line-strong: #9A5B1A55;

  --field: #FFFDF8;
  --field-text: #2B1D0E;
  --field-line: #9A5B1A66;
  --field-icon: #B4450F;

  --heading: #B4450F;
  --subhead: #8A5A0B;
  --label: #8A6A35;
  --link: #9A3412;
  --kind: #6B6B6B;
  --yuga: #4d7c0f;
  --close: #8A6A35;
  --clear: #9A3412;

  --hover: #B4450F14;
  --active: #B4450F24;
  --stat-bg: #9A5B1A0d;
  --stat-num: #B4450F;
  --warn-bg: #FF99332a;
  --up: #15803d;
  --dn: #b91c1c;

  --hl: #C2410C;
  --hl-glow: #C2410C88;
  --sel-edge: #fff;

  --shadow: #5a3b1040;
  --shadow-soft: #3b25084d;
  --node-text-edge: #000b;

  --title-a: #7A2E0E;
  --title-b: #C2410C;
  --halo: rgba(250, 243, 228, 0.55);
  --halo-edge: rgba(255, 248, 234, 0.9);

  color-scheme: light;
}


/* ========================================================================
   2. BUNIYADI: page, buttons, kone ke gol buttons ("i" aur theme)
   ======================================================================== */

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

[hidden] {
  display: none !important;
}

html {
  background: var(--canvas);
}

html,
body {
  margin: 0;
  height: 100%;
  color: var(--text);
  font-family: var(--ui);
  overflow: hidden;
  overscroll-behavior: none; /* phone par pull-to-refresh na ho */
}

body {
  background: radial-gradient(circle at center, var(--canvas-glow), var(--canvas));
}

button {
  margin: 0;
  padding: 7px 15px;
  border-radius: 999px;
  border: 1px solid #F5C45177;
  background: linear-gradient(#7a2e0e, #4a1a08);
  color: #ffe9c2;
  cursor: pointer;
  font: 600 12.5px var(--ui);
  -webkit-tap-highlight-color: transparent;
}

@media (hover: hover) {
  button:hover {
    border-color: var(--saf);
    background: linear-gradient(#963a10, #5c200a);
  }
}

:focus-visible {
  outline: 2px solid var(--saf);
  outline-offset: 2px;
}

/* Kone ke gol buttons: baayin taraf "i", daayin taraf theme */
.corner {
  position: fixed;
  top: calc(20px + env(safe-area-inset-top));
  z-index: 7;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  padding: 0;
  border-radius: 50%;
  border: 1.5px solid var(--gold);
  background: radial-gradient(circle at 30% 30%, #d2561c, #5c200a);
  color: #fff3d6;
  box-shadow: 0 8px 22px var(--shadow), 0 0 14px #FF993355;
}

#ib {
  left: calc(20px + env(safe-area-inset-left));
  font: italic 700 22px Georgia, serif;
}

#tb {
  right: calc(20px + env(safe-area-inset-right));
}

#tb svg {
  width: 20px;
  height: 20px;
}

/* dark me suraj (light par jaane ke liye), light me chaand */
#tb .i-moon,
:root[data-theme="light"] #tb .i-sun {
  display: none;
}

:root[data-theme="light"] #tb .i-moon {
  display: block;
}

@media (max-width: 700px) {
  .corner {
    top: calc(10px + env(safe-area-inset-top));
    width: 40px;
    height: 40px;
  }
  #ib {
    left: calc(10px + env(safe-area-inset-left));
    font-size: 21px;
  }
  #tb {
    right: calc(10px + env(safe-area-inset-right));
  }
}


/* ========================================================================
   3. HEADER: heading, control bar, search, Vansh menu
   ======================================================================== */

#hdr {
  position: absolute;
  top: calc(14px + env(safe-area-inset-top));
  left: 0;
  right: 0;
  z-index: 3;
  text-align: center;
  pointer-events: none;
}

/* Search ya Vansh menu khula ho to header details panel ke upar aaye */
#hdr:has(#sres.open, #vpop.open) {
  z-index: 8;
}

/* ---- heading: peeche halka sa dark glow, taaki node ke upar bhi padhi jaaye */
#hdr h1 {
  position: relative;
  isolation: isolate;
  width: fit-content;
  margin: 0 auto;
  padding: 0 0.5em;
  font-family: var(--display);
  font-weight: 400;
  font-size: 32px;
  line-height: 1.35;
  letter-spacing: 1px;
}

/* naram gol chhaya, text ke theek peeche */
#hdr h1::before {
  content: "";
  position: absolute;
  inset: -18% -6%;
  z-index: -1;
  border-radius: 50%;
  background: radial-gradient(closest-side, var(--halo) 35%, transparent);
}

/* gradient text + har akshar ke aas-paas patla glow */
#hdr h1 span {
  padding: 0.2em 0; /* Devanagari matra upar se na kate */
  background: linear-gradient(90deg, var(--title-a), var(--title-b) 50%, var(--title-a));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 0 1.5px var(--halo-edge)) drop-shadow(0 2px 6px var(--halo-edge));
}

/* ---- control bar */
#ctl {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  max-width: calc(100vw - 24px);
  margin-top: 4px;
  padding: 7px 9px;
  border-radius: 999px;
  background: var(--bar);
  border: 1px solid var(--line);
  box-shadow: 0 10px 30px var(--shadow);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  pointer-events: auto;
}

/* Desktop par #tools ka apna dabba nahi: buttons seedhe control bar me,
   kram: Expand, Collapse, Search, Vansh */
#tools {
  display: contents;
}

#ex {
  order: -2;
}

#co {
  order: -1;
}

.vwrap {
  order: 1;
}

/* ---- search */
.sbox {
  position: relative;
  z-index: 2; /* suggestions ki list Vansh button ke upar rahe */
  display: flex;
  align-items: center;
}

.sbox svg {
  position: absolute;
  left: 12px;
  width: 16px;
  height: 16px;
  color: var(--field-icon);
  pointer-events: none;
}

#q {
  width: 260px;
  padding: 8px 32px 8px 36px;
  border-radius: 999px;
  border: 1px solid var(--field-line);
  background: var(--field);
  color: var(--field-text);
  font: 500 13.5px var(--ui);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

#q::-webkit-search-cancel-button {
  display: none;
}

#q::placeholder {
  color: var(--muted);
}

#q:focus {
  border-color: var(--saf);
  box-shadow: 0 0 0 3px #FF993333;
}

#qx {
  position: absolute;
  right: 6px;
  display: none;
  padding: 2px 8px;
  background: none;
  border: 0;
  color: var(--close);
  font-size: 15px;
}

#sres,
#vpop {
  position: absolute;
  display: none;
  text-align: left;
  background: var(--pop);
  border: 1px solid var(--line-strong);
  box-shadow: 0 18px 50px var(--shadow);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--line-strong) transparent;
}

#sres.open,
#vpop.open {
  display: block;
}

#sres {
  top: calc(100% + 10px);
  left: 0;
  width: 380px;
  max-width: calc(100vw - 30px);
  max-height: 340px;
  padding: 6px;
  border-radius: 16px;
}

.si {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 11px;
  cursor: pointer;
}

.si.act,
.si:hover {
  background: var(--hover);
}

.sn1 {
  font-weight: 700;
  font-size: 14.5px;
  color: var(--text-strong);
}

.sn2 {
  margin-top: 1px;
  font-size: 12.5px;
  color: var(--soft);
}

.sb {
  flex: none;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid;
  font-size: 11px;
  font-weight: 600;
}

.sn {
  padding: 14px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
}

/* ---- Vansh menu */
.vwrap {
  position: relative;
}

#vb {
  display: flex;
  align-items: center;
  gap: 7px;
}

#vb i,
.vp i {
  flex: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

#vb.on {
  border-color: var(--gold);
  background: linear-gradient(#a24112, #5c200a);
}

#vpop {
  top: calc(100% + 12px);
  right: 0;
  width: 290px;
  max-height: calc(100vh - 150px);
  max-height: calc(100dvh - 150px);
  padding: 8px;
  border-radius: 18px;
}

#vpop .vh {
  padding: 6px 10px 8px;
  font-size: 12.5px;
  color: var(--muted);
}

.vp {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0;
  padding: 9px 11px;
  border-radius: 11px;
  border: 0;
  background: none;
  color: var(--text);
  font: 600 14px var(--ui);
  text-align: left;
}

.vp:hover {
  background: var(--hover);
}

.vp.act {
  background: var(--active);
}

.vp.clr {
  margin-top: 4px;
  border-top: 1px solid var(--line);
  border-radius: 0 0 11px 11px;
  color: var(--clear);
  font-weight: 500;
}

/* ---- mobile: upar sirf heading + patla search, Expand/Collapse/Vansh neeche ki patti me */
@media (max-width: 700px) {
  :root {
    --dock-h: 50px; /* neeche wali patti ki oonchai (Details button isi ke upar rehta hai) */
  }

  #hdr {
    top: calc(10px + env(safe-area-inset-top));
    padding: 0 10px;
  }

  #hdr h1 {
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.5px;
  }

  /* search ka alag card nahi, sirf ek line */
  #ctl {
    display: block;
    width: 100%;
    max-width: 520px;
    margin: 6px auto 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: none;
    box-shadow: none;
    backdrop-filter: none; /* zaroori: iske bina neeche ki patti aur Vansh-sheet screen se nahi judte */
    -webkit-backdrop-filter: none;
  }

  #q {
    width: 100%;
    padding: 9px 40px 9px 38px;
    font-size: 16px; /* 16px se kam par iPhone page zoom kar deta hai */
    background: var(--bar-solid);
    box-shadow: 0 6px 18px var(--shadow);
  }

  #qx {
    right: 4px;
    padding: 6px 12px;
    font-size: 16px;
  }

  #sres {
    width: 100%;
    max-width: none;
    max-height: min(340px, 50dvh);
  }

  .si {
    padding: 11px 12px;
  }

  /* neeche ki patti: angoothe ki pahunch me */
  #tools {
    position: fixed;
    left: calc(8px + env(safe-area-inset-left));
    right: calc(8px + env(safe-area-inset-right));
    bottom: calc(8px + env(safe-area-inset-bottom));
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
    padding: 6px;
    border-radius: 18px;
    background: var(--bar-solid);
    border: 1px solid var(--line);
    box-shadow: 0 -4px 24px var(--shadow);
  }

  #tools > button,
  #vb {
    width: 100%;
    min-height: 36px;
    justify-content: center;
    padding: 7px 6px;
    font-size: 13px;
  }

  .vwrap {
    min-width: 0;
  }

  /* lamba vansh naam ("Kuru-Puruvansh") ek hi line me, zaroorat ho to ... */
  #vb .vb-t {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Vansh menu neeche se sheet ban kar khulta hai (patti ke upar) */
  #vpop {
    position: fixed;
    top: auto;
    left: calc(8px + env(safe-area-inset-left));
    right: calc(8px + env(safe-area-inset-right));
    bottom: calc(8px + env(safe-area-inset-bottom));
    width: auto;
    max-height: 65dvh;
    border-radius: 20px;
  }

  .vp {
    padding: 12px;
    font-size: 15px;
  }
}

@media (max-width: 340px) {
  #hdr h1 {
    font-size: 21px;
  }
  #tools > button,
  #vb {
    font-size: 12px;
  }
}


/* ========================================================================
   4. VANSH-VRIKSH (D3 nodes aur rekhayein)
   ======================================================================== */

#tree {
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  cursor: grab;
}

.link {
  fill: none;
  stroke-width: 2.4px;
  opacity: 0.6;
  transition: opacity 0.3s;
}

:root[data-theme="light"] .link {
  opacity: 0.75;
}

.node {
  cursor: pointer;
  transition: opacity 0.3s;
}

.node rect {
  filter: drop-shadow(0 3px 6px var(--shadow-soft));
}

@media (hover: hover) {
  .node:hover rect {
    filter: brightness(1.25);
  }
}

.node text {
  font-family: var(--ui);
  paint-order: stroke;
  stroke: var(--node-text-edge);
  stroke-width: 2.6px;
  stroke-linejoin: round;
}

.node .n-name {
  fill: #fff;
  font-size: 15.5px;
  font-weight: 700;
}

.node .n-sub {
  fill: #EADFC6;
  font-size: 12.5px;
  font-weight: 500;
}

.node.node-dim {
  opacity: 0.15;
}

.link.link-dim {
  opacity: 0.06;
}

.link.lin {
  stroke: var(--hl) !important;
  stroke-width: 3.6px;
  opacity: 1 !important;
  filter: drop-shadow(0 0 5px var(--hl-glow));
}

.node.in-lin rect {
  stroke: var(--hl) !important;
}

.node.sel rect {
  stroke: var(--sel-edge) !important;
  stroke-width: 3.5px !important;
  filter: drop-shadow(0 0 10px var(--hl-glow));
}

@keyframes blink {
  0%,
  100% {
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    filter: drop-shadow(0 0 20px var(--hl));
  }
}

.node.blink rect {
  animation: blink 0.9s ease-in-out 4;
  stroke: var(--sel-edge) !important;
  stroke-width: 4px !important;
}

@media (prefers-reduced-motion: reduce) {
  .corner.pulse,
  #ihint {
    animation: none;
  }
  .node.blink rect {
    animation: none;
    filter: drop-shadow(0 0 12px var(--hl));
  }
}


/* ========================================================================
   5. CARDS: About aur Details panel
   ======================================================================== */

.card {
  position: fixed;
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: 0 18px 50px var(--shadow);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-size: 14.5px;
  line-height: 1.62;
  transition: transform 0.3s, opacity 0.3s;
}

#abody,
#pbody {
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 18px 20px 22px;
  scrollbar-width: thin;
  scrollbar-color: var(--line-strong) transparent;
}

/* ---- About */
#about {
  left: calc(20px + env(safe-area-inset-left));
  top: calc(74px + env(safe-area-inset-top));
  z-index: 6;
  width: 380px;
  max-width: calc(100vw - 40px);
}

#abody {
  max-height: calc(100vh - 114px);
  max-height: calc(100dvh - 114px);
}

#about.closed {
  opacity: 0;
  transform: translateY(-10px) scale(0.96);
  pointer-events: none;
}

/* Pehli baar aane par "i" ke paas chhota sandesh */
#ihint {
  position: fixed;
  top: calc(28px + env(safe-area-inset-top));
  left: calc(72px + env(safe-area-inset-left));
  z-index: 7;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--pop);
  color: var(--text);
  border: 1px solid var(--line-strong);
  box-shadow: 0 8px 22px var(--shadow);
  font: 600 12.5px var(--ui);
  pointer-events: none;
  animation: hint-in 0.3s ease-out;
}

@keyframes hint-in {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
}

@keyframes ring {
  from {
    box-shadow: 0 0 0 0 #FF9933aa;
  }
  to {
    box-shadow: 0 0 0 14px #FF993300;
  }
}

.corner.pulse {
  animation: ring 1.2s ease-out 3;
}

/* ---- Details panel */
#panel {
  top: calc(84px + env(safe-area-inset-top));
  right: calc(20px + env(safe-area-inset-right));
  z-index: 5;
  width: 390px;
  max-width: calc(100vw - 40px);
}

#pbody {
  max-height: calc(100vh - 112px);
  max-height: calc(100dvh - 112px);
}

#panel.closed {
  transform: translateX(125%);
  opacity: 0;
  pointer-events: none;
}

.grab {
  display: none;
}

#pclose,
#aclose {
  position: absolute;
  top: 12px;
  right: 14px;
  z-index: 2;
  margin: 0;
  padding: 2px 8px;
  background: none;
  border: 0;
  color: var(--close);
  font-size: 18px;
}

#popen {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 4;
  margin: 0;
  padding: 12px 7px;
  background: #4a1a08;
  border: 1px solid var(--gold);
  border-right: 0;
  border-radius: 12px 0 0 12px;
  writing-mode: vertical-rl;
}

#popen::before {
  content: "\25C0\00a0";
}

/* panel khula ho to "Details" tab chhupa rahe */
#panel:not(.closed) + #popen {
  display: none;
}

/* ---- card ke andar ka text */
.card h2,
.card h3 {
  margin: 0 28px 3px 0;
  font-family: var(--ui);
  font-weight: 800;
  color: var(--heading);
}

.card h2 {
  font-size: 24px;
}

.card h3 {
  font-size: 20px;
}

.card .sub {
  margin-bottom: 9px;
  color: var(--subhead);
  font-size: 14px;
}

.card .chip {
  display: inline-block;
  margin: 0 5px 6px 0;
  padding: 2px 11px;
  border-radius: 99px;
  border: 1px solid;
  font-size: 12px;
  font-weight: 600;
}

.card .chip.kind {
  color: var(--kind);
}

.card .chip.yuga {
  color: var(--yuga);
}

.card .marg {
  margin: 0 0 4px;
}

.card h4 {
  margin: 15px 0 4px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: var(--label);
  text-transform: uppercase;
}

.card a {
  color: var(--link);
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
}

.card a:hover {
  text-decoration: underline;
}

.card .src {
  padding-left: 14px;
  text-indent: -14px;
  font-size: 13.5px;
  color: var(--text);
}

.card .warn {
  margin-top: 10px;
  padding: 8px 11px;
  border-left: 3px solid var(--saf);
  border-radius: 0 10px 10px 0;
  background: var(--warn-bg);
  font-size: 13.5px;
}

.card .dim {
  color: var(--muted);
  font-size: 13.5px;
}

.card ul {
  margin: 5px 0;
  padding-left: 20px;
}

.sg {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 10px 0;
}

.sg div {
  padding: 8px 4px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--stat-bg);
  text-align: center;
  font-size: 12px;
  color: var(--soft);
}

.sg b {
  display: block;
  font-size: 22px;
  color: var(--stat-num);
}

.up {
  color: var(--up);
}

.dn {
  color: var(--dn);
}

.gh {
  display: inline-block;
  margin-top: 8px;
  padding: 8px 18px;
  border-radius: 99px;
  background: linear-gradient(#d2561c, #8a3410);
  color: #fff3d6 !important;
  font-weight: 700;
  text-decoration: none !important;
}

.gh.off {
  background: var(--stat-bg);
  color: var(--close) !important;
  font-weight: 500;
}

/* ---- mobile: About upar poori chaudai, Details neeche se sheet */
@media (max-width: 700px) {
  .card {
    border-radius: 20px;
  }

  /* About bhi Details ki tarah neeche se sheet; upar vriksh dikhta rahe */
  #about {
    top: auto;
    left: calc(8px + env(safe-area-inset-left));
    right: calc(8px + env(safe-area-inset-right));
    bottom: calc(8px + env(safe-area-inset-bottom));
    width: auto;
    max-width: none;
  }

  #about.closed {
    transform: translateY(calc(100% + 24px));
  }

  #abody {
    max-height: 75vh;
    max-height: 75dvh;
    padding: 16px 16px 20px;
  }

  #aclose {
    top: 8px;
    right: 8px;
    padding: 6px 12px;
    font-size: 20px;
  }

  /* mobile par "i" ke theek neeche, chhoti nok ke saath */
  #ihint {
    top: calc(58px + env(safe-area-inset-top));
    left: calc(10px + env(safe-area-inset-left));
  }

  #ihint::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 14px;
    width: 10px;
    height: 10px;
    background: var(--pop);
    border-left: 1px solid var(--line-strong);
    border-top: 1px solid var(--line-strong);
    transform: rotate(45deg);
  }

  #panel {
    top: auto;
    left: calc(8px + env(safe-area-inset-left));
    right: calc(8px + env(safe-area-inset-right));
    bottom: calc(8px + env(safe-area-inset-bottom));
    width: auto;
    max-width: none;
  }

  #panel.closed {
    transform: translateY(calc(100% + 24px));
  }

  /* kheenchne wali patti */
  .grab {
    display: block;
    width: 40px;
    height: 5px;
    margin: 8px auto 0;
    border-radius: 3px;
    background: var(--line-strong);
  }

  #pbody {
    max-height: 56vh;
    max-height: 56dvh;
    padding: 6px 16px 20px;
  }

  #pclose {
    top: 8px;
    right: 8px;
    padding: 6px 12px;
    font-size: 20px;
  }

  .card h2 {
    font-size: 21px;
  }

  #popen {
    top: auto;
    right: calc(12px + env(safe-area-inset-right));
    bottom: calc(18px + var(--dock-h) + env(safe-area-inset-bottom)); /* neeche ki patti ke upar */
    padding: 10px 18px;
    border-right: 1px solid var(--gold);
    border-radius: 999px;
    writing-mode: horizontal-tb;
    box-shadow: 0 8px 22px var(--shadow);
  }

  #popen::before {
    content: "\25B2\00a0";
  }
}
