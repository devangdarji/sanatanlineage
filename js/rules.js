// Data ke niyam: card ki doosri line, patni/pati, kaal, source, aur data ki jaanch.
// Isme koi DOM ya D3 nahi hai, isliye yahi file browser aur GitHub ki jaanch (Node) dono me chalti hai.

import { VANSH } from "../data/vansh.js";

export const YUGA = {
  treta: "Treta Yuga",
  dvapara: "Dvapara Yuga (ant)",
  sandhi: "Dvapara-Kali sandhi",
};

export const TYPE = {
  person: "Vyakti",
  gap: "Beech ki pidhiyon ka box",
  group: "Samuh (group) box",
};

// Vyakti ke block me sirf yahi fields chalte hain (spelling ki galti pakadne ke liye)
const FIELDS = [
  "id", "parent", "vansh", "type", "yuga", "name", "subtitle", "wives", "husbands", "mother",
  "parents", "note", "knownFor", "deeds", "abilities", "sources", "variations",
];
// In fields me [[id]] likhne se link banta hai
export const TEXT_FIELDS = ["subtitle", "mother", "parents", "note", "knownFor", "deeds", "abilities", "variations"];

export const vanshOf = (code) => VANSH[code] || VANSH.R;
export const isGap = (p) => p.type === "gap";
export const kindOf = (p) => TYPE[p.type || "person"];
export const yugaOf = (p) => YUGA[p.yuga] || null;

// { label: "Patni" | "Pati", list: [...] } ya null
export function spouses(p) {
  if (p.wives && p.wives.length) return { label: "Patni", list: p.wives };
  if (p.husbands && p.husbands.length) return { label: "Pati", list: p.husbands };
  return null;
}

// Node ke card ki doosri line: subtitle; "Wife: ..." (Mata: ...)
export function cardLine(p) {
  const parts = [];
  if (p.subtitle) parts.push(p.subtitle);
  const sp = spouses(p);
  if (sp) {
    const one = sp.list.length === 1;
    const label = p.wives ? (one ? "Wife" : "Wives") : one ? "Husband" : "Husbands";
    parts.push(`${label}: ${sp.list.join(", ")}`);
  }
  const line = parts.join("; ");
  if (!p.mother) return line;
  return line ? `${line} (Mata: ${p.mother})` : `Mata: ${p.mother}`;
}

// Apna source na ho to vansh ka default source dikhta hai (auto = true)
export function sourcesOf(p) {
  if (p.sources && p.sources.length) return { list: p.sources, auto: false };
  return { list: vanshOf(p.vansh).sources || ["Puranic parampara"], auto: true };
}

// About panel ke aankde
export function analyze(people) {
  const names = people.map((p) => p.name.toLowerCase()).join(" ");
  const gaps = people.filter((p) => p.type === "gap").length;
  const groups = people.filter((p) => p.type === "group").length;
  const outside = new Set(); // aise patni/pati jinka apna node nahi hai
  people.forEach((p) =>
    (spouses(p)?.list || []).forEach((n) => {
      const first = n.split(/[ /(]/)[0].toLowerCase();
      if (first && !names.includes(first)) outside.add(first);
    })
  );
  return { nodes: people.length, gaps, groups, persons: people.length - gaps - groups, spouses: outside.size };
}

// Galtiyon ki list lautata hai (khaali list = sab theek). Har galti ke aage vyakti ka id.
export function validate(people) {
  const errors = [];
  const ids = new Set();
  const roots = [];
  const err = (p, msg) => errors.push(`${p.id || "?"}: ${msg}`);

  people.forEach((p) => {
    if (!p.id) err(p, "id khaali hai");
    else if (!/^[a-z0-9_]+$/.test(p.id)) err(p, "id me sirf a-z, 0-9 aur _ chalenge");
    if (ids.has(p.id)) err(p, "yeh id do baar aaya hai");
    ids.add(p.id);
    if (!p.parent) roots.push(p.id);
    if (!p.name || !String(p.name).trim()) err(p, "name khaali hai");
    if (!VANSH[p.vansh]) err(p, `vansh "${p.vansh}" data/vansh.js me nahi hai`);
    if (p.type && !TYPE[p.type]) err(p, `type "${p.type}" galat hai (gap ya group)`);
    if (p.yuga && !YUGA[p.yuga]) err(p, `yuga "${p.yuga}" galat hai (${Object.keys(YUGA).join(", ")})`);
    if (p.wives && p.husbands) err(p, "wives aur husbands dono ek saath nahi");
    ["wives", "husbands", "sources"].forEach((f) => {
      if (p[f] !== undefined && !(Array.isArray(p[f]) && p[f].every((x) => typeof x === "string")))
        err(p, `${f} ek list honi chahiye, jaise ["A", "B"]`);
    });
    Object.keys(p).forEach((k) => {
      if (!FIELDS.includes(k)) err(p, `"${k}" field pehchana nahi gaya (spelling check karein)`);
    });
  });

  people.forEach((p) => {
    if (p.parent && !ids.has(p.parent)) err(p, `parent "${p.parent}" nahi mila`);
    TEXT_FIELDS.forEach((f) => {
      for (const m of String(p[f] || "").matchAll(/\[\[([^\]]+)\]\]/g)) {
        if (!ids.has(m[1])) err(p, `${f} me [[${m[1]}]] naam ka koi id nahi hai`);
      }
    });
  });
  if (roots.length !== 1) errors.push(`Sirf ek vyakti bina parent ke hona chahiye, mile: ${roots.join(", ") || "koi nahi"}`);

  return errors;
}
