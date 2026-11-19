// 14 vansh (shaakha). Har vyakti ke `vansh` field me inme se ek code hota hai.
//   name    : panel, search aur Vansh-menu me dikhne wala naam
//   fill    : node box ka rang (dono theme me same)
//   dark    : dark theme me rekha / chip / badge ka rang (node ki border bhi yahi)
//   light   : light theme me rekha / chip / badge ka rang (parchment par padhne layak)
//   sources : jab kisi vyakti ka apna source na ho, tab shaakha ke yeh source dikhte hain
//
// Naya vansh jodna ho: yahan ek naya code jodein aur VANSH_ORDER me rakhein.
// Light rang ka contrast #FFFAF0 par kam se kam 4.5:1 rakhein, taaki padha ja sake.

export const VANSH = {
  R: { name: "Adi srishti / Rishi",       fill: "#4f2f06", dark: "#F5C451", light: "#8a630c", sources: ["Bhagavata Purana 3.12, 4.1", "Vishnu Purana I"] },
  S: { name: "Suryavansh",                fill: "#6e2a08", dark: "#FF9933", light: "#b04e0c", sources: ["Vishnu Purana IV", "Valmiki Ramayana, Bala Kanda 70-71"] },
  C: { name: "Chandravansh",              fill: "#1d2a56", dark: "#BFD0F5", light: "#1f4596", sources: ["Bhagavata Purana 9.14-15", "Vishnu Purana IV"] },
  Y: { name: "Yaduvansh",                 fill: "#0e4a45", dark: "#4FD1C5", light: "#16706a", sources: ["Vishnu Purana IV-V", "Bhagavata Purana 9.23-24"] },
  K: { name: "Kuru-Puruvansh",            fill: "#5a1622", dark: "#E8606D", light: "#a01724", sources: ["Mahabharata, Adi Parva 89-95", "Bhagavata Purana 9.20-22"] },
  A: { name: "Asura / Daitya",            fill: "#3d0e0e", dark: "#D64545", light: "#962121", sources: ["Bhagavata Purana 3, 6-8"] },
  N: { name: "Naga",                      fill: "#17402f", dark: "#7BD389", light: "#25723a" },
  G: { name: "Garuda / Pakshi",           fill: "#5c3d0a", dark: "#FFD166", light: "#8f6100" },
  B: { name: "Bhrigu vansh",              fill: "#2c2459", dark: "#A78BFA", light: "#4a2aa8" },
  X: { name: "Rakshasa (Pulastya vansh)", fill: "#2b2a2e", dark: "#A3A3AD", light: "#55555f", sources: ["Valmiki Ramayana, Uttara Kanda", "Bhagavata Purana 4.1"] },
  V: { name: "Videha / Mithila",          fill: "#5a1a4b", dark: "#F0A6D8", light: "#951a6c", sources: ["Valmiki Ramayana, Bala Kanda 71"] },
  M: { name: "Vanar (Kishkindha)",        fill: "#3e4a12", dark: "#C5E063", light: "#5b7313", sources: ["Valmiki Ramayana, Kishkindha Kanda"] },
  P: { name: "Panchala",                  fill: "#124047", dark: "#6ED3D8", light: "#16707a", sources: ["Bhagavata Purana 9.21-22", "Mahabharata, Adi Parva"] },
  Z: { name: "Yaksha",                    fill: "#4a3510", dark: "#F4D35E", light: "#806610" },
};

// "Vansh" menu me isi kram me dikhte hain
export const VANSH_ORDER = ["S", "C", "Y", "K", "V", "P", "R", "B", "M", "X", "A", "N", "G", "Z"];
