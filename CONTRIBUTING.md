# Contribute kaise karein

Dhanyavaad! Is project ki sabse badi taakat iska **sourced data** hai, isliye ek hi pakka niyam hai:

> **Bina source ke koi entry nahi li jayegi.** Granth ka naam aur jahan ho sake adhyay/shlok likhein, jaise `Bhagavata Purana 9.10` ya `Valmiki Ramayana, Bala Kanda 71`.

Code nahi aata? Koi baat nahi: GitHub par **Issues → New issue → "Naya vyakti sujhayein"** form bharein. Hum use data me jod denge.

## Naya vyakti jodna

`data/log.js` kholein, uske pita (ya mool) ka block dhoondhein (Ctrl+F se id ya naam), aur uske bachchon ke saath ek naya block jodein. Format aisa hai:

```js
  {
    id: "naya_id", parent: "pita_ka_id", vansh: "S",
    name: "Naam",
    wives: ["Patni ka naam"], mother: "Mata ka naam",
    note: "Sankshipt jaankari.",
    sources: ["Granth ka naam adhyay.shlok"],
  },
```

Asli udaharan dekhna ho to `log.js` me `id: "ram"` dhoondhein.

Bas itna. Vriksh me node, rekha, vansh-marg, search, pita ke panel me "Santan", sab apne aap ban jaate hain.

### Fields

| Field | Zaroori? | Kya likhein |
|---|---|---|
| `id` | haan | Chhota, unique; sirf `a-z`, `0-9`, `_`. Ek baar bana to mat badlein. |
| `parent` | haan | Pita / mool vyakti ka `id` |
| `vansh` | haan | `data/vansh.js` ka code: S Suryavansh, C Chandravansh, Y Yaduvansh, K Kuru-Puru ... |
| `name` | haan | Node par dikhne wala naam |
| `type` | | `"gap"` = beech ki kai pidhiyon ka box, `"group"` = ek box me kai log |
| `yuga` | | `"treta"`, `"dvapara"` ya `"sandhi"` |
| `subtitle` | | Card ki doosri line me chhota parichay: `"Raghu ke putra"` |
| `wives` / `husbands` | | List: `["Sita"]`, `["Kunti", "Madri"]` |
| `mother` | | `"Kaushalya"` |
| `parents` | | Mata-pita ki line khud likhni ho tab hi (warna `parent` + `mother` se banti hai) |
| `note` | | Sankshipt jaankari |
| `knownFor` | | Kis liye jaane jaate hain |
| `deeds` | | Kya kiya |
| `abilities` | | Kshamta / vardan |
| `sources` | jaankari ho to haan | `["Granth adhyay.shlok", ...]` |
| `variations` | | Granthon me matbhed |

Card ki doosri line (`Wife: Sita (Mata: Kaushalya)`) `subtitle`, `wives`/`husbands` aur `mother` se apne aap banti hai. Use alag se mat likhein.

**Link banana:** kisi bhi text me `[[id]]` likhein, jaise `parents: "Pita: [[kesari]] · Mata: [[anjana]]"`. Woh clickable naam ban jayega.

**Kram:** ek parent ke bachche file ke kram me dikhte hain. Jise pehle dikhana ho, use pehle likhein.

## Bhejne se pehle check karein

1. Page Live Server se kholein, naya vyakti dikh raha hai?
2. F12 → Console me laal `[data]` galti to nahi? Usme vyakti ka id aur galti ka kaaran likha hota hai.
3. Har block ke baad comma `,` hai?

PR kholte hi ek chhota form aayega: kya joda, source kya hai, matbhed ho to kaun sa paath chuna. Wahi bhar dein.

## Code ya design badalna

- Rang: `css/style.css` ke sabse upar (dono theme). Naya rang seedha kahin aur na likhein, wahan variable banayein.
- Naya vansh: `data/vansh.js` me code, naam, dono theme ke rang.
- Mobile (700px se chhoti screen) aur light/dark dono me check karein.
