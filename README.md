# सनातन वंशावली · Sanatan Vanshavali

Brahma ji se Mahabharata tak ki Puranic vansh-parampara ka interactive vriksh. Har vyakti ke saath sankshipt jaankari, vansh-marg, mata-pita, patni/pati, santan aur **source (praman)** milta hai. Jahan granthon me matbhed hai, woh bhi saaf likha hai.

Yeh project open-source hai. Naya vyakti jodne ya galti sudharne ke liye [CONTRIBUTING.md](CONTRIBUTING.md) dekhein.

## Chalane ka tareeka

Kuch install nahi karna. Bas ek local server chahiye, kyunki browser `file://` (double-click) par JS modules nahi chalata.

**VS Code:** "Live Server" extension install karein → `index.html` par right-click → **Open with Live Server**.

**Ya terminal se** (Python ho to): `python -m http.server`, phir browser me `http://localhost:8000`.

## Folder

```
├── index.html          page ka dhaancha
├── data/
│   ├── log.js          ← saare vyakti (yahin 90% kaam hota hai)
│   └── vansh.js        14 vansh: naam, rang, default source
├── css/style.css       saari styling; sabse upar dono theme ke rang
├── js/
│   ├── main.js         sab jodta hai; version aur changelog bhi yahin
│   ├── tree.js         D3 vriksh: layout, zoom, highlight
│   ├── ui.js           details panel, search, Vansh menu, About, theme
│   └── rules.js        data ke niyam aur jaanch (patni, mata, yuga, source)
├── scripts/validate.js GitHub par data ki jaanch
└── .github/            apne aap jaanch, PR aur issue ke form
```

## Data ki jaanch

Data me koi galti ho (galat parent, ek id do baar, field ki spelling) to page khulte hi browser console (F12 → Console) me `[data]` ke saath dikhegi. GitHub par har pull request me yahi jaanch apne aap chalti hai. Node.js ho to local par: `node scripts/validate.js`.

## Deploy

Koi build nahi. Poora folder jaisa hai waisa kisi static hosting par daal dein: GitHub Pages (Settings → Pages → branch `main`, folder `/`), Netlify ya Cloudflare Pages.

## Sources aur seema

Vishnu, Bhagavata, Agni aur Garuda Purana, Mahabharata (Adi Parva 89-95) aur Valmiki Ramayana se milaan kiya gaya hai. Sab Puranic/Itihasik manyata hai; kaal-nirdharan pramanit nahi hai.

## License

Code [MIT](LICENSE) ke tahat.
