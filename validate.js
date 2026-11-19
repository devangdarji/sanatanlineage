// SAARE VYAKTI: har vyakti ek { ... } block hai. Naya vyakti jodna ho to uske pita/mool
// ke block ke paas ek naya block jodein. Poora tareeka: CONTRIBUTING.md
//
// Zaroori fields
//   id        chhota, unique, sirf a-z 0-9 _  (jaise "ram", "dil2"). Ek baar bana to mat badlein.
//   parent    pita / mool vyakti ka id. Sirf Brahma ji ka parent nahi hai.
//   vansh     vansh ka code, data/vansh.js se (S = Suryavansh, C = Chandravansh ...)
//   name      node par dikhne wala naam
//
// Optional fields
//   type       "gap" = beech ki kai pidhiyon ka box, "group" = ek box me kai log
//   yuga       "treta", "dvapara" ya "sandhi"
//   subtitle   card ki doosri line me chhota parichay ("Devraj", "Raghu ke putra")
//   wives      ["Sita"] ya ["Kaushalya", "Kaikeyi"]       } card par apne aap
//   husbands   ["Shiva"]                                   } "Wife: ..." / "(Mata: ...)"
//   mother     "Kaushalya"                                 } ban jaata hai
//   parents    mata-pita ki line khud likhni ho to (warna parent + mother se banti hai)
//   note       sankshipt jaankari
//   knownFor   kis liye jaane jaate hain
//   deeds      kya kiya
//   abilities  kshamta / vardan
//   sources    ["Granth adhyay.shlok", ...]  ← jaankari ke saath source zaroor dein
//   variations granthon me matbhed
//
// Kisi text me [[id]] likhne se us vyakti ka link banta hai, jaise "Pita: [[kesari]]".
// Ek parent ke bachche isi file ke kram me dikhte hain.

export const PEOPLE = [
  {
    id: "brahma", vansh: "R",
    name: "Brahma Ji",
    subtitle: "Srishtikarta",
    note: "Bhagavata Purana: Vishnu ki nabhi-kamal se prakat. Manasputra: Marichi, Atri, Angiras, Pulastya, Pulaha, Kratu, Bhrigu, Vashistha, Daksha, Narada (Bhagavata 3.12).",
    knownFor: "Srishtikarta",
    deeds: "Manasputron aur Prajapatiyon ki rachna se srishti ka vistar.",
    sources: ["Bhagavata Purana 3.12"],
  },

  {
    id: "kumar", parent: "brahma", vansh: "R", type: "group",
    name: "Char Kumar",
    subtitle: "Sanaka, Sanandana, Sanatana, Sanatkumara",
    note: "Brahma ke manasputra; brahmachari rahe, srishti-vistar se mana kiya (Bhagavata 3.12).",
    sources: ["Bhagavata Purana 3.12"],
  },

  {
    id: "narada", parent: "brahma", vansh: "R",
    name: "Narada Muni",
    subtitle: "Brahma ke manasputra",
    note: "Bhagavata 3.12: Brahma ki god se prakat.",
    sources: ["Bhagavata Purana 3.12"],
  },

  {
    id: "chitragupta", parent: "brahma", vansh: "R",
    name: "Chitragupta",
    subtitle: "Brahma ji ki kaya se prakat",
    note: "Brahma ji ke dhyan karte samay unke shareer (kaya) se kalam aur davaat liye prakat hue; isliye 'Kayastha' kehlaye. Yamaraj ke saath sabke karmon ka lekha rakhte hain. Kayastha samaj inhe apna mool purvaj maanta hai.",
    knownFor: "Yamalok me har jeev ke karmon ka hisaab rakhne wale; Kayastha samaj ke mool purush",
    sources: ["Garuda Purana", "Padma Purana, Srishti Khanda", "Bhavishya Purana", "Mahabharata, Anushasana Parva 130"],
    variations: "Utpatti ki katha granthon me alag hai: adhiktar me Brahma ji ke shareer se, kuch me unke mann (chitta) se. Patniyon aur 12 putron ke naam alag-alag suchiyon me alag milte hain, isliye abhi nahi jode.",
  },

  {
    id: "rudra", parent: "brahma", vansh: "R",
    name: "Rudra (Shiva)",
    subtitle: "Brahma ke krodh se prakat",
    wives: ["Sati", "Parvati"],
    note: "Vishnu Purana: Kumaron ke inkar par Brahma ke krodh se Rudra prakat. Sati ke baad Uma/Parvati (Himavan-Mena ki putri) unki patni.",
    sources: ["Vishnu Purana"],
  },

  {
    id: "skanda", parent: "rudra", vansh: "R",
    name: "Kartikeya (Skanda)",
    subtitle: "Shiva-Parvati ke putra",
    wives: ["Devasena", "Valli"],
    note: "Shiva Purana, Rudra Samhita. Janm-kathayen alag-alag Puranon me alag hain.",
    sources: ["Shiva Purana, Rudra Samhita"],
    variations: "Shiva Purana (Kumara Khanda) ke anusar Kartikeya avivahit rahe. Mahabharata aur Skanda Purana me Indra ki putri Devasena se vivah; Valli se vivah dakshin (Tamil) parampara me prasiddh hai.",
  },

  {
    id: "gan", parent: "rudra", vansh: "R",
    name: "Ganesha",
    subtitle: "Shiva-Parvati ke putra",
    wives: ["Siddhi", "Buddhi"],
    note: "Shiva Purana, Rudra Samhita. Janm-kathayen alag-alag Puranon me alag hain.",
    sources: ["Shiva Purana, Rudra Samhita"],
  },

  {
    id: "kshema", parent: "gan", vansh: "R",
    name: "Kshema (Shubh)",
    subtitle: "Ganesha ke putra",
    mother: "Siddhi",
    note: "Shiva Purana ke anusar Ganesha aur Siddhi ke putra. Uttar Bharat me 'Shubh' naam se pooje jaate hain.",
    sources: ["Shiva Purana, Rudra Samhita, Kumara Khanda 20"],
    variations: "Shiva Purana me patniyan Siddhi-Buddhi (Prajapati Vishwarupa ki putriyan) aur putra Kshema-Labha hain; lok-parampara me Riddhi-Siddhi aur Shubh-Labh.",
  },

  {
    id: "labha", parent: "gan", vansh: "R",
    name: "Labha (Labh)",
    subtitle: "Ganesha ke putra",
    mother: "Buddhi",
    note: "Shiva Purana ke anusar Ganesha aur Buddhi ke putra.",
    sources: ["Shiva Purana, Rudra Samhita, Kumara Khanda 20"],
    variations: "Lok-parampara me mata ka naam Riddhi bhi milta hai.",
  },

  {
    id: "dharma", parent: "brahma", vansh: "R",
    name: "Dharma Dev",
    wives: ["Murti"],
    note: "Bhagavata 3.12 / 4.1: Brahma ke dahine vaksh se; Murti Daksha ki putri.",
    sources: ["Bhagavata Purana 3.12, 4.1"],
  },

  {
    id: "nara", parent: "dharma", vansh: "R",
    name: "Nara-Narayana",
    subtitle: "Dharma-Murti ke putra",
    note: "Bhagavata 4.1.",
    sources: ["Bhagavata Purana 4.1"],
  },

  {
    id: "smanu", parent: "brahma", vansh: "R",
    name: "Swayambhuva Manu",
    wives: ["Shatarupa"],
    note: "Pehle Manu (Bhagavata 3.12).",
    sources: ["Bhagavata Purana 3.12"],
  },

  {
    id: "priya", parent: "smanu", vansh: "R",
    name: "Priyavrata",
    wives: ["Barhishmati"],
    note: "Bhagavata 5.",
    sources: ["Bhagavata Purana 5"],
  },

  {
    id: "agni", parent: "priya", vansh: "R",
    name: "Agnidhra",
    subtitle: "Priyavrata ke putra",
    note: "Bhagavata 5.2: Jambudvipa ke raja.",
    sources: ["Bhagavata Purana 5.2"],
  },

  {
    id: "nabhi", parent: "agni", vansh: "R",
    name: "Nabhi",
    wives: ["Meru (Merudevi)"],
    note: "Bhagavata 5.3, Vishnu Purana: Himahva (Bharatvarsh) ka bhaag.",
    sources: ["Bhagavata Purana 5.3", "Vishnu Purana"],
  },

  {
    id: "rish", parent: "nabhi", vansh: "R",
    name: "Rishabhadeva",
    subtitle: "Nabhi-Meru ke putra",
    note: "Bhagavata 1.3 me Vishnu ke 8th avatar; sau putra; raj Bharata ko saunpkar vanvas.",
    knownFor: "Vishnu ke 8th avatar (Bhagavata)",
    deeds: "Putra Bharata ko raj saunpkar vanvas.",
    sources: ["Bhagavata Purana 1.3, 5.3-5", "Vishnu Purana II"],
  },

  {
    id: "bhar2", parent: "rish", vansh: "R",
    name: "Raja Bharata (Rishabha putra)",
    subtitle: "Rishabha ke jyeshtha putra",
    note: "Bhagavata 5 / Vishnu Purana: ek parampara me Bharatvarsh inhi ke naam par. Ye Dushyanta-Shakuntala ke putra Samrat Bharata se alag vyakti hain.",
    sources: ["Bhagavata Purana 5", "Vishnu Purana"],
  },

  {
    id: "urjasvati", parent: "priya", vansh: "R",
    name: "Urjasvati",
    subtitle: "Priyavrata ki putri",
    husbands: ["Shukracharya"],
    note: "Shukracharya se vivah; unki putri Devayani.",
    sources: ["Bhagavata Purana 5.1.34"],
  },

  {
    id: "utta", parent: "smanu", vansh: "R",
    name: "Uttanapada",
    wives: ["Suniti", "Suruchi"],
    note: "Bhagavata 4.8.",
    sources: ["Bhagavata Purana 4.8"],
  },

  {
    id: "dhruva", parent: "utta", vansh: "R",
    name: "Bhakt Dhruva",
    subtitle: "Suniti ke putra",
    note: "Dhruva Loka (Dhruva tara) ki prapti, Bhagavata 4.",
    sources: ["Bhagavata Purana 4"],
  },

  {
    id: "g9", parent: "dhruva", vansh: "R", type: "gap",
    name: "... (kai pidhiyan)",
    subtitle: "Vatsara, Pushparna ... Ulmuka",
    note: "Dhruva se Anga tak ki pidhiyan.",
    sources: ["Bhagavata Purana 4.13"],
  },

  {
    id: "anga_r", parent: "g9", vansh: "R",
    name: "Raja Anga",
    subtitle: "Ulmuka ke putra",
    wives: ["Sunitha"],
    note: "Dharmatma raja; putra Vena ke durachar se dukhi hokar vann chale gaye.",
    sources: ["Bhagavata Purana 4.13"],
  },

  {
    id: "vena", parent: "anga_r", vansh: "R",
    name: "Vena",
    subtitle: "Anga ke putra",
    mother: "Sunitha",
    note: "Adharmi raja; rishiyon ne hunkar se unka ant kiya.",
    sources: ["Bhagavata Purana 4.14"],
  },

  {
    id: "prithu", parent: "vena", vansh: "R",
    name: "Maharaja Prithu",
    subtitle: "Pratham abhishikt samrat",
    wives: ["Archi"],
    note: "Rishiyon ne Vena ki bhuja ke manthan se prakat kiya; Vishnu ke ansh-avatar.",
    knownFor: "Prithvi ka naam inhi par pada",
    deeds: "Prithvi ka dohan karke anna aur aushadhiyan prakat kin; bhoomi ko samtal karke gaon-nagar basaye.",
    sources: ["Bhagavata Purana 4.15-23", "Vishnu Purana I.13"],
  },

  {
    id: "uttama", parent: "utta", vansh: "R",
    name: "Uttama",
    subtitle: "Dhruva ke sautele bhai",
    mother: "Suruchi",
    note: "Shikar me Yakshon dwara maare gaye; badle me Dhruva ne Yakshon se yuddh kiya.",
    sources: ["Bhagavata Purana 4.8, 4.10"],
  },

  {
    id: "devahuti", parent: "smanu", vansh: "R",
    name: "Devahuti",
    husbands: ["Kardama"],
    note: "Swayambhuva Manu ki putri; Kapila ki mata (Bhagavata 3).",
    sources: ["Bhagavata Purana 3"],
  },

  {
    id: "akuti", parent: "smanu", vansh: "R",
    name: "Akuti",
    husbands: ["Ruchi Prajapati"],
    note: "Swayambhuva Manu ki putri.",
  },

  {
    id: "yajna", parent: "akuti", vansh: "R",
    name: "Yajna",
    subtitle: "Vishnu ke ansh-avatar",
    note: "Akuti-Ruchi ke putra (Devi Bhagavata, Puranic Encyclopedia).",
    sources: ["Devi Bhagavata", "Puranic Encyclopedia"],
  },

  {
    id: "daksha", parent: "brahma", vansh: "R",
    name: "Daksha Prajapati",
    wives: ["Prasuti"],
    note: "Brahma ke angoothe se prakat (Bhagavata 3.12). Prasuti Swayambhuva Manu ki putri.",
    sources: ["Bhagavata Purana 3.12"],
  },

  {
    id: "sati", parent: "daksha", vansh: "R",
    name: "Mata Sati",
    husbands: ["Shiva"],
    note: "Daksha-yagya me deha-tyag.",
  },

  {
    id: "marichi", parent: "brahma", vansh: "S",
    name: "Maharishi Marichi",
    wives: ["Kala"],
    note: "Brahma ke man se prakat. Putra Kashyapa.",
    knownFor: "Brahma ke manasputra; Kashyapa ke pita",
    sources: ["Bhagavata Purana 3.12"],
    variations: "Patni: Kala (Bhagavata 3.24, Kardama ki putri). Anya paathon me Sambhuti / Sannati ke naam bhi milte hain.",
  },

  {
    id: "kash", parent: "marichi", vansh: "S",
    name: "Maharishi Kashyapa",
    wives: ["Aditi", "Diti", "Kadru", "Vinata", "Danu"],
    note: "Devon, asuron, nagon, pakshiyon ke janak (Mahabharata Adi Parva, Bhagavata 6.6).",
    sources: ["Mahabharata, Adi Parva", "Bhagavata Purana 6.6"],
  },

  {
    id: "aditi", parent: "kash", vansh: "S",
    name: "Aditi (Devamata)",
    subtitle: "Adityas ki mata",
    note: "Indra, Varuna, Mitra, Pusha, Bhaga, Vivasvan, Vamana aadi.",
  },

  {
    id: "indra", parent: "aditi", vansh: "S",
    name: "Indra",
    subtitle: "Devraj",
    wives: ["Shachi (Indrani)"],
    note: "Aditya. Vali (Ramayana) aur Arjuna (Mahabharata) ke daivi pita.",
    sources: ["Ramayana", "Mahabharata"],
  },

  {
    id: "jayanta", parent: "indra", vansh: "S",
    name: "Jayanta",
    subtitle: "Indra ke putra",
    mother: "Shachi",
    note: "Ramayana me kauve ke roop me Sita ko chot pahunchane wala prasang inse juda hai.",
    sources: ["Bhagavata Purana 6.18.7", "Valmiki Ramayana, Sundara Kanda 38"],
  },

  {
    id: "viv", parent: "aditi", vansh: "S",
    name: "Vivasvan (Surya)",
    wives: ["Sanjna", "Chhaya"],
    note: "Bhagavata 6.6 / 8.13.",
    sources: ["Bhagavata Purana 6.6, 8.13"],
  },

  {
    id: "yama", parent: "viv", vansh: "S",
    name: "Yamraj & Yami",
    subtitle: "Sanjna ke santan",
    note: "Bhagavata 6.6.",
    sources: ["Bhagavata Purana 6.6"],
  },

  {
    id: "tapati", parent: "viv", vansh: "S",
    name: "Tapati",
    husbands: ["Samvarana"],
    note: "Surya ki putri; Kuru ki mata (Adi Parva 94).",
    sources: ["Mahabharata, Adi Parva 94"],
  },

  {
    id: "vm", parent: "viv", vansh: "S",
    name: "Vaivasvata Manu",
    wives: ["Shraddha"],
    note: "Vartaman (7th) Manu; manav jati ke pita.",
  },

  {
    id: "iksh", parent: "vm", vansh: "S",
    name: "Ikshvaku",
    subtitle: "Suryavansh ke sansthapak",
    note: "Ayodhya-Kosala. Ramayana me Nimi, Vikukshi aadi putra.",
    sources: ["Ramayana"],
  },

  {
    id: "nimi", parent: "iksh", vansh: "V",
    name: "Nimi",
    subtitle: "Videha vansh ke sansthapak",
    note: "Ikshvaku ke putra (Ramayana Bala Kanda 71).",
    sources: ["Ramayana, Bala Kanda 71"],
  },

  {
    id: "mithi", parent: "nimi", vansh: "V",
    name: "Mithi",
    subtitle: "Mithila ke nirmata",
    note: "Pehle 'Janaka'. Tab se Videha ke sab raja Janaka kahlaye.",
  },

  {
    id: "vg", parent: "mithi", vansh: "V", type: "gap",
    name: "... (kai pidhiyan)",
    subtitle: "Udavasu se Svarnaroma tak",
    note: "Ramayana suchi: Udavasu, Nandivardhana, Suketu, Devarata, Brihadratha ... Svarnaroma.",
    sources: ["Ramayana"],
  },

  {
    id: "hras", parent: "vg", vansh: "V", yuga: "treta",
    name: "Hrasvaroma",
    subtitle: "Putra: Siradhvaja, Kushadhvaja",
    note: "Valmiki Ramayana Bala Kanda 71.",
    sources: ["Valmiki Ramayana, Bala Kanda 71"],
  },

  {
    id: "sira", parent: "hras", vansh: "V", yuga: "treta",
    name: "Siradhvaja Janaka",
    wives: ["Sunayana"],
    note: "Sita-Urmila ke pita. Sita yagya-bhumi ki jotai me mili (Ramayana).",
    sources: ["Ramayana"],
  },

  {
    id: "sita", parent: "sira", vansh: "V", yuga: "treta",
    name: "Mata Sita",
    husbands: ["Shri Ram"],
    note: "Lakshmi ka roop mani jaati hain.",
    knownFor: "Janaka ki putri; Ram ki patni",
    deeds: "Ram ke saath vanvas; Lanka me Ravana ke bandi-grih me.",
    sources: ["Valmiki Ramayana, Bala Kanda 71"],
  },

  {
    id: "urm", parent: "sira", vansh: "V", yuga: "treta",
    name: "Mata Urmila",
    husbands: ["Lakshmana"],
    note: "Siradhvaja ki putri.",
  },

  {
    id: "kusha", parent: "hras", vansh: "V", yuga: "treta",
    name: "Kushadhvaja",
    subtitle: "Siradhvaja ke chhote bhai",
    note: "Sankashya ke raja.",
  },

  {
    id: "mand", parent: "kusha", vansh: "V", yuga: "treta",
    name: "Mandavi",
    husbands: ["Bharata"],
    note: "Kushadhvaja ki putri.",
  },

  {
    id: "shrk", parent: "kusha", vansh: "V", yuga: "treta",
    name: "Shrutakirti",
    husbands: ["Shatrughna"],
    note: "Kushadhvaja ki putri.",
  },

  {
    id: "vik", parent: "iksh", vansh: "S",
    name: "Vikukshi (Shashada)",
    subtitle: "Ikshvaku ke putra",
    note: "Ayodhya ki gaddi ke uttaradhikari.",
  },

  {
    id: "kak", parent: "vik", vansh: "S",
    name: "Kakutstha (Puranjaya)",
    subtitle: "Raja",
    note: "Isi se 'Kakutstha' naam; Shri Ram ko bhi Kakutstha kaha jaata hai.",
  },

  {
    id: "g1", parent: "kak", vansh: "S", type: "gap",
    name: "... (kai pidhiyan)",
    subtitle: "Mandhata, Muchukunda aadi",
    note: "Prasiddh raja: Mandhata, Muchukunda, Ambarisha.",
  },

  {
    id: "trish", parent: "g1", vansh: "S",
    name: "Trishanku",
    subtitle: "Raja",
    note: "Vishwamitra ne sashareer swarg bhejne ka prayas kiya.",
  },

  {
    id: "harish", parent: "trish", vansh: "S",
    name: "Harishchandra",
    wives: ["Shaibya (Taramati)"],
    note: "Satyavadi raja ke roop me prasiddh.",
    knownFor: "Satyavadi raja",
    sources: ["Markandeya Purana"],
  },

  {
    id: "rohit", parent: "harish", vansh: "S",
    name: "Rohitashva",
    subtitle: "Putra",
    note: "Harishchandra ke putra.",
  },

  {
    id: "g2", parent: "rohit", vansh: "S", type: "gap",
    name: "... (kai pidhiyan)",
    subtitle: "Harita, Champa ... Bahuka",
    note: "Puranon me alag suchiyan.",
  },

  {
    id: "sagara", parent: "g2", vansh: "S",
    name: "Sagara",
    wives: ["Keshini", "Sumati"],
    note: "Keshini se Asamanja; Sumati se 60,000 putra (Ramayana).",
    sources: ["Ramayana"],
  },

  {
    id: "asam", parent: "sagara", vansh: "S",
    name: "Asamanja",
    subtitle: "Putra",
    note: "Keshini ke putra.",
  },

  {
    id: "ansh", parent: "asam", vansh: "S",
    name: "Anshuman",
    subtitle: "Putra",
  },

  {
    id: "dil1", parent: "ansh", vansh: "S",
    name: "Dilipa I",
    subtitle: "Putra",
  },

  {
    id: "bhag", parent: "dil1", vansh: "S",
    name: "Bhagiratha",
    subtitle: "Ganga ko dharti par laye",
    note: "Tapasya se Ganga-avataran; Sagara ke 60,000 putron ka uddhar.",
    knownFor: "Ganga-avataran",
    deeds: "Sagara ke 60,000 putron ke uddhar hetu tapasya se Ganga ko prithvi par laye.",
    sources: ["Valmiki Ramayana, Bala Kanda"],
  },

  {
    id: "g3", parent: "bhag", vansh: "S", type: "gap",
    name: "... (kai pidhiyan)",
    subtitle: "Shruta, Nabhaga, Ambarisha II, Sindhudvipa, Ayutayu, Saudasa ...",
    note: "Raghu seedha Bhagiratha ke putra nahi hain; beech me kai pidhiyan (Ikshvaku suchi).",
  },

  {
    id: "dil2", parent: "g3", vansh: "S",
    name: "Dilipa II (Khatvanga)",
    subtitle: "Raja",
    note: "Raghu ke dada.",
  },

  {
    id: "dirg", parent: "dil2", vansh: "S",
    name: "Dirghabahu",
    subtitle: "Dilipa II ke putra",
  },

  {
    id: "raghu", parent: "dirg", vansh: "S",
    name: "Raghu",
    subtitle: "Raghuvansh ke naamdata",
    note: "Isi se vansh 'Raghuvansh'; Ram 'Raghava'.",
  },

  {
    id: "aja", parent: "raghu", vansh: "S",
    name: "Aja",
    wives: ["Indumati"],
    note: "Dasharatha ke pita.",
  },

  {
    id: "dash", parent: "aja", vansh: "S", yuga: "treta",
    name: "Dasharatha",
    wives: ["Kaushalya", "Kaikeyi", "Sumitra"],
    note: "Ayodhya ke raja.",
  },

  {
    id: "ram", parent: "dash", vansh: "S", yuga: "treta",
    name: "Shri Ram",
    wives: ["Sita"], mother: "Kaushalya",
    note: "Vishnu ke avatar (Ramayana).",
    knownFor: "Raghukul ke raja; Vishnu ke 7th avatar",
    deeds: "Vanvas; Sita-haran ke baad Lanka-yuddh me Ravana ka vadh; Ayodhya me rajya.",
    sources: ["Valmiki Ramayana"],
  },

  {
    id: "luv", parent: "ram", vansh: "S", yuga: "treta",
    name: "Luv",
    subtitle: "Shri Ram ke putra",
    mother: "Sita",
  },

  {
    id: "kush", parent: "ram", vansh: "S", yuga: "treta",
    name: "Kush",
    subtitle: "Shri Ram ke putra",
    mother: "Sita",
  },

  {
    id: "ath", parent: "kush", vansh: "S",
    name: "Atithi",
    subtitle: "Kush ke putra",
    note: "Kalidasa Raghuvansham ke anusar.",
    sources: ["Raghuvansham (Kalidasa)"],
  },

  {
    id: "g4", parent: "ath", vansh: "S", type: "gap",
    name: "... (kai pidhiyan)",
    subtitle: "Nishadha, Nala, Nabhas ... Brihadbala",
    note: "Raghuvansham aur Puranon ki suchi.",
    sources: ["Raghuvansham (Kalidasa)"],
  },

  {
    id: "bbala", parent: "g4", vansh: "S",
    name: "Brihadbala",
    subtitle: "Kosala ke raja",
    note: "Mahabharata: Kurukshetra me Abhimanyu ne vadh kiya.",
    sources: ["Mahabharata"],
  },

  {
    id: "sum", parent: "bbala", vansh: "S",
    name: "Sumitra",
    subtitle: "Is vansh ke antim raja",
    note: "Puranon ke anusar; beech me kai pidhiyan.",
  },

  {
    id: "bhar", parent: "dash", vansh: "S", yuga: "treta",
    name: "Bharata",
    wives: ["Mandavi"], mother: "Kaikeyi",
    note: "Ram ke bhai.",
  },

  {
    id: "taksha", parent: "bhar", vansh: "S", yuga: "treta",
    name: "Taksha",
    subtitle: "Bharata ke putra",
    mother: "Mandavi",
    note: "Takshashila nagar basaya.",
    sources: ["Valmiki Ramayana, Uttara Kanda"],
  },

  {
    id: "pushkala", parent: "bhar", vansh: "S", yuga: "treta",
    name: "Pushkala",
    subtitle: "Bharata ke putra",
    mother: "Mandavi",
    note: "Pushkalavati nagar basaya.",
    sources: ["Valmiki Ramayana, Uttara Kanda"],
  },

  {
    id: "lak", parent: "dash", vansh: "S", yuga: "treta",
    name: "Lakshmana",
    wives: ["Urmila"], mother: "Sumitra",
    note: "Ram ke bhai.",
  },

  {
    id: "angada_l", parent: "lak", vansh: "S", yuga: "treta",
    name: "Angada (Lakshmana-putra)",
    subtitle: "Lakshmana ke putra",
    mother: "Urmila",
    note: "Karupatha desh me Angadiya nagar ke raja.",
    sources: ["Valmiki Ramayana, Uttara Kanda"],
  },

  {
    id: "chandraketu", parent: "lak", vansh: "S", yuga: "treta",
    name: "Chandraketu",
    subtitle: "Lakshmana ke putra",
    mother: "Urmila",
    note: "Malla desh me Chandrakanta nagar ke raja.",
    sources: ["Valmiki Ramayana, Uttara Kanda"],
  },

  {
    id: "sha", parent: "dash", vansh: "S", yuga: "treta",
    name: "Shatrughna",
    wives: ["Shrutakirti"], mother: "Sumitra",
    note: "Ram ke bhai.",
  },

  {
    id: "subahu_s", parent: "sha", vansh: "S", yuga: "treta",
    name: "Subahu",
    subtitle: "Shatrughna ke putra",
    mother: "Shrutakirti",
    note: "Mathura ke raja bane.",
    sources: ["Valmiki Ramayana, Uttara Kanda"],
  },

  {
    id: "shatrughati", parent: "sha", vansh: "S", yuga: "treta",
    name: "Shatrughati",
    subtitle: "Shatrughna ke putra",
    mother: "Shrutakirti",
    note: "Vidisha ke raja bane.",
    sources: ["Valmiki Ramayana, Uttara Kanda"],
  },

  {
    id: "ila", parent: "vm", vansh: "C",
    name: "Ila",
    subtitle: "Vaivasvata Manu ki santan",
    husbands: ["Budha"],
    note: "Kabhi purush (Sudyumna) aur kabhi stri roop; Budha se Pururavas ki mata.",
    sources: ["Bhagavata Purana 9.1"],
  },

  {
    id: "sharyati", parent: "vm", vansh: "S",
    name: "Raja Sharyati",
    subtitle: "Vaivasvata Manu ke putra",
    note: "Anarta desh ke raja.",
    sources: ["Bhagavata Purana 9.3"],
  },

  {
    id: "sukanya", parent: "sharyati", vansh: "S",
    name: "Sukanya",
    subtitle: "Sharyati ki putri",
    husbands: ["Chyavana"],
    note: "Anjaane me Chyavana rishi ki aankhen phod din; prayashchit me unse vivah kiya. Ashwini Kumaron ne Chyavana ko yuva banaya.",
    sources: ["Bhagavata Purana 9.3", "Mahabharata, Vana Parva 122-125"],
  },

  {
    id: "g11", parent: "sharyati", vansh: "S", type: "gap",
    name: "... (beech ki pidhiyan)",
    subtitle: "Anarta, Revata",
    note: "Sharyati ke putra Anarta, unke putra Revata (Kushasthali/Dvaraka ke sansthapak).",
    sources: ["Bhagavata Purana 9.3"],
  },

  {
    id: "kakudmi", parent: "g11", vansh: "S",
    name: "Kakudmi (Raivata)",
    subtitle: "Revata ke putra",
    note: "Revati ke liye var poochne Brahmalok gaye; laut kar yugon ka antar paaya.",
    sources: ["Bhagavata Purana 9.3"],
  },

  {
    id: "revati", parent: "kakudmi", vansh: "S",
    name: "Revati",
    subtitle: "Kakudmi ki putri",
    husbands: ["Balarama"],
    note: "Brahma ji ki salah par Balarama se vivah.",
    sources: ["Bhagavata Purana 9.3"],
  },

  {
    id: "shani", parent: "viv", vansh: "S",
    name: "Shani (Shanaishchara)",
    subtitle: "Navagraha",
    mother: "Chhaya",
    note: "Surya aur Chhaya ke putra.",
    sources: ["Bhagavata Purana 6.6.41"],
  },

  {
    id: "ashwini", parent: "viv", vansh: "S", type: "group",
    name: "Ashwini Kumar",
    subtitle: "Nasatya aur Dasra; devon ke vaidya",
    mother: "Sanjna",
    note: "Sanjna ke ashwa (ghodi) roop me Surya ke judwa putra. Nakula-Sahadeva inke ansh se.",
    sources: ["Bhagavata Purana 6.6.40", "Mahabharata, Adi Parva"],
  },

  {
    id: "vamana", parent: "aditi", vansh: "S",
    name: "Bhagwan Vamana",
    subtitle: "Vishnu ke 5th avatar (Upendra)",
    note: "Kashyapa-Aditi ke putra; Indra ke chhote bhai.",
    deeds: "Teen pag me teeno lok naap kar Maharaja Bali se swarg wapas liya.",
    sources: ["Bhagavata Purana 8.17-23"],
  },

  {
    id: "diti", parent: "kash", vansh: "A",
    name: "Diti (Daitya mata)",
    subtitle: "Hiranyakashipu ki mata",
    note: "Bhagavata 3.14, 7.",
    sources: ["Bhagavata Purana 3.14, 7"],
  },

  {
    id: "hira", parent: "diti", vansh: "A",
    name: "Hiranyakashipu",
    wives: ["Kayadhu"],
    note: "Narasimha avatar ne vadh kiya (Bhagavata 7).",
    sources: ["Bhagavata Purana 7"],
  },

  {
    id: "prah", parent: "hira", vansh: "A",
    name: "Bhakt Prahlada",
    subtitle: "Vishnu bhakt",
    note: "Bhagavata 7.",
    sources: ["Bhagavata Purana 7"],
  },

  {
    id: "viro", parent: "prah", vansh: "A",
    name: "Virochana",
    subtitle: "Prahlada ke putra",
    note: "Bhagavata 6.18, 8.",
    sources: ["Bhagavata Purana 6.18, 8"],
  },

  {
    id: "bali", parent: "viro", vansh: "A",
    name: "Maharaja Bali",
    wives: ["Vindhyavali"],
    note: "Vamana avatar ki katha (Bhagavata 8).",
    sources: ["Bhagavata Purana 8"],
  },

  {
    id: "bana", parent: "bali", vansh: "A",
    name: "Banasura",
    subtitle: "Bali ke jyeshtha putra",
    note: "Bhagavata 10.",
    sources: ["Bhagavata Purana 10"],
  },

  {
    id: "usha", parent: "bana", vansh: "A",
    name: "Usha",
    husbands: ["Aniruddha"],
    note: "Vishnu Purana.",
    sources: ["Vishnu Purana"],
  },

  {
    id: "hiranyaksha", parent: "diti", vansh: "A",
    name: "Hiranyaksha",
    subtitle: "Hiranyakashipu ke bhai",
    note: "Prithvi ko rasatal le gaya; Varaha avatar ne vadh kiya. Vishnu ke dwarpal Jaya ka pehla janm.",
    sources: ["Bhagavata Purana 3.17-19"],
  },

  {
    id: "maruts", parent: "diti", vansh: "A", type: "group",
    name: "49 Marut",
    subtitle: "Diti ke putra, Indra ke saathi",
    note: "Indra ne garbh ke 49 tukde kiye, jo devta bane.",
    sources: ["Bhagavata Purana 6.18"],
  },

  {
    id: "kadru", parent: "kash", vansh: "N",
    name: "Kadru (Naag mata)",
    subtitle: "Nagon ki mata",
    note: "Mahabharata Adi Parva.",
    sources: ["Mahabharata, Adi Parva"],
  },

  {
    id: "shesh", parent: "kadru", vansh: "N",
    name: "Sheshnag",
    subtitle: "Kadru ke putra",
  },

  {
    id: "vas", parent: "kadru", vansh: "N",
    name: "Vasuki",
    subtitle: "Kadru ke putra",
  },

  {
    id: "tak", parent: "kadru", vansh: "N",
    name: "Takshak",
    subtitle: "Kadru ke putra",
  },

  {
    id: "jaratkaru_n", parent: "kadru", vansh: "N",
    name: "Jaratkaru (Manasa)",
    subtitle: "Vasuki ki bahan",
    husbands: ["Rishi Jaratkaru"],
    note: "Naag-kul ko Janamejaya ke sarpa-satra se bachane ke liye Rishi Jaratkaru se vivah.",
    sources: ["Mahabharata, Adi Parva 13-15, 47-48"],
    variations: "Bangal aur purvi parampara me inhe Manasa Devi ke roop me pooja jaata hai.",
  },

  {
    id: "astika", parent: "jaratkaru_n", vansh: "N",
    name: "Astika",
    subtitle: "Rishi Jaratkaru ke putra",
    deeds: "Janamejaya ka sarpa-satra rukwakar Takshak aur naagon ki raksha ki.",
    sources: ["Mahabharata, Adi Parva 48-58"],
  },

  {
    id: "vin", parent: "kash", vansh: "G",
    name: "Vinata",
    subtitle: "Garuda-Aruna ki mata",
    note: "Mahabharata Adi Parva.",
    sources: ["Mahabharata, Adi Parva"],
  },

  {
    id: "gar", parent: "vin", vansh: "G",
    name: "Garuda",
    subtitle: "Vishnu ke vahan",
  },

  {
    id: "aru", parent: "vin", vansh: "G",
    name: "Aruna",
    subtitle: "Surya ke sarathi",
  },

  {
    id: "samp", parent: "aru", vansh: "G", yuga: "treta",
    name: "Sampati",
    subtitle: "Aruna ke putra",
    note: "Ramayana.",
    sources: ["Ramayana"],
  },

  {
    id: "jat", parent: "aru", vansh: "G", yuga: "treta",
    name: "Jatayu",
    subtitle: "Aruna ke putra",
    note: "Ramayana: Sita-haran me Ravana se yuddh.",
    sources: ["Ramayana"],
  },

  {
    id: "danu", parent: "kash", vansh: "A",
    name: "Danu (Danav mata)",
    subtitle: "Danavon ki mata",
  },

  {
    id: "vrishaparva", parent: "danu", vansh: "A",
    name: "Vrishaparva",
    subtitle: "Danav raja",
    note: "Shukracharya inke guru the.",
    sources: ["Bhagavata Purana 6.6.30", "Mahabharata, Adi Parva 78"],
  },

  {
    id: "sharmishtha", parent: "vrishaparva", vansh: "A",
    name: "Sharmishtha",
    subtitle: "Vrishaparva ki putri",
    husbands: ["Yayati"],
    note: "Devayani ki dasi bankar gayi; Yayati se Druhyu, Anu aur Puru ki mata.",
    sources: ["Mahabharata, Adi Parva 78-83", "Bhagavata Purana 9.18"],
  },

  {
    id: "puloma", parent: "danu", vansh: "A",
    name: "Puloma",
    subtitle: "Danav",
    note: "Indrani Shachi ke pita.",
    sources: ["Bhagavata Purana 6.6.31", "Mahabharata, Adi Parva"],
  },

  {
    id: "shachi", parent: "puloma", vansh: "A",
    name: "Shachi (Indrani)",
    subtitle: "Puloma ki putri",
    husbands: ["Indra"],
    note: "Indra ki patni, isliye 'Paulomi' bhi kehlati hain.",
    sources: ["Mahabharata, Udyoga Parva 11-17", "Bhagavata Purana 6.18.7"],
  },

  {
    id: "shambara", parent: "danu", vansh: "A",
    name: "Shambarasura",
    subtitle: "Danav",
    note: "Navjaat Pradyumna ko utha le gaya; bade hokar Pradyumna ne iska vadh kiya.",
    sources: ["Bhagavata Purana 6.6.30", "Bhagavata Purana 10.55"],
  },

  {
    id: "rahu", parent: "danu", vansh: "A",
    name: "Svarbhanu (Rahu-Ketu)",
    subtitle: "Navagraha",
    note: "Samudra-manthan me devon ki pankti me baithkar amrit piya; Sudarshan se sir kata, sir Rahu aur dhad Ketu bana.",
    sources: ["Bhagavata Purana 6.6.30", "Bhagavata Purana 8.9"],
  },

  {
    id: "atri", parent: "brahma", vansh: "C",
    name: "Maharishi Atri",
    wives: ["Anasuya"],
    note: "Bhagavata 3.12 / 4.1.",
    sources: ["Bhagavata Purana 3.12, 4.1"],
  },

  {
    id: "chan", parent: "atri", vansh: "C",
    name: "Chandra (Soma)",
    subtitle: "Chandravansh ke mool",
    knownFor: "Chandravansh ke mool",
    sources: ["Bhagavata Purana 4.1, 9.14"],
    variations: "Janm: Atri-Anasuya ke putra (Bhagavata); Brahmanda Purana me Atri ki aankh se.",
  },

  {
    id: "bud", parent: "chan", vansh: "C",
    name: "Budha",
    wives: ["Ila"], mother: "Tara",
    note: "Chandra aur Brihaspati ki patni Tara ke putra; Budha graha.",
    sources: ["Bhagavata Purana 9.14"],
  },

  {
    id: "puru_r", parent: "bud", vansh: "C",
    name: "Pururavas",
    wives: ["Urvashi"],
    note: "Chandravansh (Aila) ke raja.",
  },

  {
    id: "amav", parent: "puru_r", vansh: "C",
    name: "Amavasu",
    subtitle: "Pururavas ke putra",
    note: "Bhagavata 9.15: Vishwamitra ki parampara.",
    sources: ["Bhagavata Purana 9.15"],
  },

  {
    id: "g5", parent: "amav", vansh: "C", type: "gap",
    name: "... (kai pidhiyan)",
    subtitle: "Jahnu ... Kushika",
    note: "Bhagavata 9.15.",
    sources: ["Bhagavata Purana 9.15"],
  },

  {
    id: "gadhi", parent: "g5", vansh: "C",
    name: "Raja Gadhi",
    subtitle: "Kushika ke putra",
    note: "Putri Satyavati ka vivah Richika (Bhrigu vansh) se.",
  },

  {
    id: "vish", parent: "gadhi", vansh: "C",
    name: "Maharishi Vishwamitra",
    subtitle: "Rajarshi se Brahmarshi",
    note: "Menaka se Shakuntala (Mahabharata Adi Parva).",
    sources: ["Mahabharata, Adi Parva"],
  },

  {
    id: "shak", parent: "vish", vansh: "C",
    name: "Shakuntala",
    husbands: ["Dushyanta"],
    note: "Bharata ki mata.",
  },

  {
    id: "ayu", parent: "puru_r", vansh: "C",
    name: "Ayu",
    subtitle: "Pururavas ke putra",
  },

  {
    id: "nah", parent: "ayu", vansh: "C",
    name: "Nahusha",
    subtitle: "Raja",
  },

  {
    id: "yay", parent: "nah", vansh: "C",
    name: "Yayati",
    wives: ["Devayani", "Sharmishtha"],
    note: "Devayani: Yadu, Turvasu; Sharmishtha: Druhyu, Anu, Puru.",
  },

  {
    id: "yadu", parent: "yay", vansh: "Y",
    name: "Yadu",
    mother: "Devayani",
    note: "Yadu vansh (Yadava) ke mool.",
  },

  {
    id: "sahas", parent: "yadu", vansh: "Y",
    name: "Sahasrajit",
    subtitle: "Yadu ke putra",
    note: "Vishnu Purana IV.",
    sources: ["Vishnu Purana IV"],
  },

  {
    id: "g15", parent: "sahas", vansh: "Y", type: "gap",
    name: "... (kai pidhiyan)",
    subtitle: "Shatajit, Haihaya ... Kritavirya",
    note: "Sahasrajit se Kartavirya Arjuna tak ki Haihaya pidhiyan.",
    sources: ["Bhagavata Purana 9.23"],
  },

  {
    id: "kart", parent: "g15", vansh: "Y",
    name: "Kartavirya Arjuna",
    subtitle: "Haihaya vansh, Chakravarti",
    note: "Sahasrajit ke vansh me (beech me Haihaya aadi). Hazaar bhujaon wale 'Sahasrabahu'.",
    deeds: "Jamadagni ki Kamadhenu le gaye; Parashurama ne inka vadh kiya.",
    sources: ["Bhagavata Purana 9.15"],
  },

  {
    id: "kro", parent: "yadu", vansh: "Y",
    name: "Kroshtu",
    subtitle: "Yadu ke putra",
    note: "Vrishni, Andhaka, Bhoja, Kukura, Shurasena inhi ke vansh me.",
  },

  {
    id: "g6", parent: "kro", vansh: "Y", type: "gap",
    name: "... (kai pidhiyan)",
    subtitle: "Vrishni tak",
  },

  {
    id: "vrish", parent: "g6", vansh: "Y",
    name: "Vrishni",
    subtitle: "Vrishni vansh ke mool",
    note: "Putra: Anamitra, Yudhajit, Devamidhusha.",
  },

  {
    id: "devm", parent: "vrish", vansh: "Y",
    name: "Devamidhusha",
    subtitle: "Vrishni ke putra",
  },

  {
    id: "shu", parent: "devm", vansh: "Y",
    name: "Shurasena (Shura)",
    wives: ["Marisha"],
    note: "Vasudeva aur Kunti ke pita.",
  },

  {
    id: "vasu", parent: "shu", vansh: "Y", yuga: "dvapara",
    name: "Vasudeva",
    wives: ["Rohini", "Devaki"],
    note: "Krishna-Balarama ke pita.",
  },

  {
    id: "krish", parent: "vasu", vansh: "Y", yuga: "dvapara",
    name: "Shri Krishna",
    wives: ["Rukmini", "Satyabhama", "Jambavati", "Kalindi", "Mitravinda", "Nagnajiti", "Bhadra", "Lakshmana"], mother: "Devaki",
    note: "Vishnu ke avatar.",
    knownFor: "Vishnu ke avatar; Yadava nayak",
    deeds: "Kamsa-vadh; Dvaraka; Mahabharata me Arjuna ke sarathi, Bhagavad Gita ka upadesh.",
    sources: ["Bhagavata Purana, Canto 10", "Vishnu Purana V", "Mahabharata, Bhishma Parva"],
    variations: "Ashta-patraniyon ki suchi Bhagavata 10.58 aur 10.83 me hai; anya granthon me naamon me thoda antar milta hai.",
  },

  {
    id: "pra", parent: "krish", vansh: "Y",
    name: "Pradyumna",
    subtitle: "Krishna ke putra",
    mother: "Rukmini",
    note: "Kamadeva ke avatar; janm ke baad Shambarasura le gaya, jise unhone mara.",
    sources: ["Bhagavata Purana 10.55"],
  },

  {
    id: "ani", parent: "pra", vansh: "Y",
    name: "Aniruddha",
    wives: ["Usha / Subhadra"],
    note: "Vishnu Purana: IV.15 me Subhadra, V.32 me Usha.",
    sources: ["Vishnu Purana IV.15, V.32"],
  },

  {
    id: "vaj", parent: "ani", vansh: "Y",
    name: "Vajra",
    subtitle: "Mathura ke raja",
    note: "Pandavon ne Vajra ko Mathura ka raja banaya.",
  },

  {
    id: "samba", parent: "krish", vansh: "Y", yuga: "dvapara",
    name: "Samba",
    subtitle: "Krishna ke putra",
    mother: "Jambavati",
    note: "Inke prasang se Yadu-kul ke vinash ka shaap laga (mausala prasang).",
    sources: ["Bhagavata Purana 10.61", "Bhagavata Purana 11.1", "Mahabharata, Mausala Parva"],
  },

  {
    id: "bal", parent: "vasu", vansh: "Y", yuga: "dvapara",
    name: "Balarama",
    wives: ["Revati"], mother: "Rohini",
    note: "Sheshnag ke ansh.",
  },

  {
    id: "subh", parent: "vasu", vansh: "Y", yuga: "dvapara",
    name: "Subhadra",
    husbands: ["Arjuna"],
    note: "Mata: Rohini.",
  },

  {
    id: "kunt", parent: "shu", vansh: "Y", yuga: "dvapara",
    name: "Kunti (Pritha)",
    husbands: ["Pandu"],
    note: "Shurasena ki putri, Kuntibhoja ne god li (Bhagavata 9.24).",
    sources: ["Bhagavata Purana 9.24"],
  },

  {
    id: "karna", parent: "kunt", vansh: "S", yuga: "dvapara",
    name: "Karna",
    subtitle: "Kunti-Surya ke putra",
    note: "Vivah se pehle Kunti ko Surya se prapt; Adhiratha-Radha ne pala. Pandu ke putra nahi.",
  },

  {
    id: "shrutadeva", parent: "shu", vansh: "Y",
    name: "Shrutadeva",
    subtitle: "Shura ki putri; Vasudeva ki bahan",
    husbands: ["Vriddhasharma (Karusha)"],
    note: "Dantavakra ki mata.",
    sources: ["Bhagavata Purana 9.24.37"],
  },

  {
    id: "dantavakra", parent: "shrutadeva", vansh: "Y", yuga: "dvapara",
    name: "Dantavakra",
    subtitle: "Karusha ke raja",
    note: "Krishna ne vadh kiya. Vishnu ke dwarpal Vijaya ka teesra janm.",
    sources: ["Bhagavata Purana 9.24.37", "Bhagavata Purana 10.78"],
  },

  {
    id: "shrutashrava_c", parent: "shu", vansh: "Y",
    name: "Shrutashrava (Chedi rani)",
    subtitle: "Shura ki putri; Vasudeva ki bahan",
    husbands: ["Damaghosha (Chedi)"],
    note: "Shishupala ki mata.",
    sources: ["Bhagavata Purana 9.24.40"],
  },

  {
    id: "shishupala", parent: "shrutashrava_c", vansh: "Y", yuga: "dvapara",
    name: "Shishupala",
    subtitle: "Chedi ke raja",
    note: "Yudhishthira ke Rajasuya yagya me Krishna ka apmaan kiya; Krishna ne Sudarshan se vadh kiya. Vishnu ke dwarpal Jaya ka teesra janm.",
    sources: ["Bhagavata Purana 9.24.40", "Mahabharata, Sabha Parva 37-42"],
  },

  {
    id: "g12", parent: "vrish", vansh: "Y", type: "gap",
    name: "... (Shini shaakha)",
    subtitle: "Yudhajit, Shini, Satyaka",
    note: "Vrishni se Satyaki tak.",
    sources: ["Bhagavata Purana 9.24"],
  },

  {
    id: "satyaki", parent: "g12", vansh: "Y", yuga: "dvapara",
    name: "Satyaki (Yuyudhana)",
    subtitle: "Satyaka ke putra",
    note: "Arjuna ke shishya; Kurukshetra me Pandav paksh ke maharathi.",
    sources: ["Bhagavata Purana 9.24", "Mahabharata, Drona Parva"],
  },

  {
    id: "g13", parent: "vrish", vansh: "Y", type: "gap",
    name: "... (Shvaphalka shaakha)",
    subtitle: "Anamitra, Prishni, Shvaphalka",
    note: "Vrishni se Akrura tak.",
    sources: ["Bhagavata Purana 9.24"],
  },

  {
    id: "akrura", parent: "g13", vansh: "Y", yuga: "dvapara",
    name: "Akrura",
    subtitle: "Shvaphalka-Gandini ke putra",
    note: "Kamsa ke kehne par Krishna-Balarama ko Vrindavan se Mathura laye; Syamantaka mani ke prasang me bhi.",
    sources: ["Bhagavata Purana 9.24", "Bhagavata Purana 10.38-39"],
  },

  {
    id: "ahu", parent: "g6", vansh: "Y", yuga: "dvapara",
    name: "Ahuka (Andhaka-Kukura)",
    subtitle: "Ugrasena-Devaka ke pita",
    note: "Bhagavata 9.24.",
    sources: ["Bhagavata Purana 9.24"],
  },

  {
    id: "ugra", parent: "ahu", vansh: "Y", yuga: "dvapara",
    name: "Ugrasena",
    subtitle: "Mathura ke raja",
  },

  {
    id: "kam", parent: "ugra", vansh: "Y", yuga: "dvapara",
    name: "Kamsa",
    subtitle: "Krishna ne vadh kiya",
  },

  {
    id: "deva", parent: "ahu", vansh: "Y", yuga: "dvapara",
    name: "Devaka",
    subtitle: "Ahuka ke putra",
  },

  {
    id: "devk", parent: "deva", vansh: "Y", yuga: "dvapara",
    name: "Devaki",
    husbands: ["Vasudeva"],
    note: "Kamsa ki chachere bahan.",
  },

  {
    id: "turvasu", parent: "yay", vansh: "C",
    name: "Turvasu",
    subtitle: "Yayati ke putra",
    mother: "Devayani",
    note: "Yayati ka buddhapa lene se mana kiya; dakshin-poorv ke rajyon ke mool.",
    sources: ["Bhagavata Purana 9.18-19, 9.23", "Mahabharata, Adi Parva 84"],
  },

  {
    id: "druhyu", parent: "yay", vansh: "C",
    name: "Druhyu",
    subtitle: "Yayati ke putra",
    mother: "Sharmishtha",
    note: "Inke vansh me Gandhara (desh ka naamdata) hue.",
    sources: ["Bhagavata Purana 9.18-19, 9.23"],
  },

  {
    id: "anu", parent: "yay", vansh: "C",
    name: "Anu",
    subtitle: "Yayati ke putra",
    mother: "Sharmishtha",
    note: "Inke vansh me Anga, Vanga, Kalinga aadi rajya.",
    sources: ["Bhagavata Purana 9.18-19, 9.23"],
  },

  {
    id: "puru", parent: "yay", vansh: "K",
    name: "Puru",
    mother: "Sharmishtha",
    note: "Puru vansh; yahi Kuru/Pandava-Kaurava vansh.",
  },

  {
    id: "g7", parent: "puru", vansh: "K", type: "gap",
    name: "... (kai pidhiyan)",
    subtitle: "Pravira, Raudrashva ... Ilina",
    note: "Adi Parva 94.",
    sources: ["Mahabharata, Adi Parva 94"],
  },

  {
    id: "dush", parent: "g7", vansh: "K",
    name: "Dushyanta",
    wives: ["Shakuntala"],
  },

  {
    id: "bhrt", parent: "dush", vansh: "K",
    name: "Samrat Bharata",
    wives: ["Sunanda"],
    note: "'Bharatvarsh' naam inhi se. Bharadvaja ki kripa se Bhumanyu ko putra roop me paya.",
  },

  {
    id: "bhum", parent: "bhrt", vansh: "K",
    name: "Bhumanyu",
    subtitle: "Bharata ke putra",
  },

  {
    id: "suh", parent: "bhum", vansh: "K",
    name: "Suhotra",
    subtitle: "Bhumanyu ke putra",
  },

  {
    id: "hast", parent: "suh", vansh: "K",
    name: "Hastin",
    subtitle: "Hastinapur ke sansthapak",
    note: "Mahabharata aur Bhagavata ki suchi me beech ki pidhiyan alag.",
    sources: ["Mahabharata", "Bhagavata Purana"],
  },

  {
    id: "ajam", parent: "hast", vansh: "K",
    name: "Ajamidha",
    subtitle: "Kuru-Panchala vanshon ke mool",
    note: "Adi Parva: chaar patniyan.",
    sources: ["Mahabharata, Adi Parva"],
  },

  {
    id: "rik", parent: "ajam", vansh: "K",
    name: "Riksha",
    subtitle: "Ajamidha ke putra",
  },

  {
    id: "samv", parent: "rik", vansh: "K",
    name: "Samvarana",
    wives: ["Tapati"],
    note: "Surya ki putri Tapati.",
  },

  {
    id: "kuru", parent: "samv", vansh: "K",
    name: "Maharaja Kuru",
    wives: ["Vahini"],
    note: "Kurukshetra aur Kuru vansh.",
  },

  {
    id: "g8", parent: "kuru", vansh: "K", type: "gap",
    name: "... (kai pidhiyan)",
    subtitle: "Abhishyanta, Parikshit, Janamejaya ...",
    note: "Adi Parva 94.",
    sources: ["Mahabharata, Adi Parva 94"],
  },

  {
    id: "prat", parent: "g8", vansh: "K",
    name: "Pratipa",
    subtitle: "Putra: Devapi, Shantanu, Bahlika",
  },

  {
    id: "shan", parent: "prat", vansh: "K",
    name: "Shantanu",
    wives: ["Ganga", "Satyavati"],
  },

  {
    id: "bhi", parent: "shan", vansh: "K", yuga: "dvapara",
    name: "Bhishma (Devavrata)",
    mother: "Ganga",
    note: "Ashtavasu me Dyau ke avatar; ichha-mrityu ka vardan.",
    knownFor: "Shantanu-Ganga ke putra; Ashta-Vasu me Dyau ke avatar",
    deeds: "Aajeevan brahmacharya ki pratigya; Kuru vansh ke sanrakshak.",
    abilities: "Ichha-mrityu ka vardan.",
    sources: ["Mahabharata, Adi Parva"],
  },

  {
    id: "chit", parent: "shan", vansh: "K",
    name: "Chitrangada",
    subtitle: "Satyavati ke putra",
    note: "Kam umra me mare.",
  },

  {
    id: "vic", parent: "shan", vansh: "K", yuga: "dvapara",
    name: "Vichitravirya",
    wives: ["Ambika", "Ambalika"],
    note: "Satyavati ke putra.",
  },

  {
    id: "dhri", parent: "vic", vansh: "K", yuga: "dvapara",
    name: "Dhritarashtra",
    wives: ["Gandhari"],
    note: "Vyasa ke niyoga se Ambika ke putra.",
  },

  {
    id: "duryodhana", parent: "dhri", vansh: "K", yuga: "dvapara",
    name: "Duryodhana",
    subtitle: "Kauravon me jyeshtha",
    wives: ["Bhanumati"], mother: "Gandhari",
    note: "Kurukshetra yuddh me Kaurav paksh ke pramukh; Bhima ne gada-yuddh me jaangh todkar haraya.",
    sources: ["Mahabharata, Adi Parva 115", "Mahabharata, Shalya Parva"],
  },

  {
    id: "dushasana", parent: "dhri", vansh: "K", yuga: "dvapara",
    name: "Dushasana",
    subtitle: "Duryodhana ke chhote bhai",
    mother: "Gandhari",
    note: "Dyut-sabha me Draupadi ka cheer-haran ka prayas kiya; Bhima ne vadh kiya.",
    sources: ["Mahabharata, Sabha Parva 61", "Mahabharata, Karna Parva"],
  },

  {
    id: "duhshala", parent: "dhri", vansh: "K", yuga: "dvapara",
    name: "Duhshala",
    subtitle: "100 Kauravon ki ekmatra bahan",
    husbands: ["Jayadratha"], mother: "Gandhari",
    note: "Sindhu-raj Jayadratha se vivah.",
    sources: ["Mahabharata, Adi Parva 115-116"],
  },

  {
    id: "yuyutsu", parent: "dhri", vansh: "K", yuga: "dvapara",
    name: "Yuyutsu",
    subtitle: "Dhritarashtra ke putra (vaishya dasi se)",
    note: "Yuddh se pehle Pandav paksh me chale gaye; yuddh ke baad jeevit bache Kaurav.",
    sources: ["Mahabharata, Adi Parva 115", "Mahabharata, Bhishma Parva 43"],
  },

  {
    id: "kau", parent: "dhri", vansh: "K", type: "group", yuga: "dvapara",
    name: "100 Kaurav",
    subtitle: "Baaki Kaurav bhai (kul 100)",
  },

  {
    id: "pan", parent: "vic", vansh: "K", yuga: "dvapara",
    name: "Pandu",
    wives: ["Kunti", "Madri"],
    note: "Vyasa ke niyoga se Ambalika ke putra.",
  },

  {
    id: "yud", parent: "pan", vansh: "K", yuga: "dvapara",
    name: "Yudhishthira",
    wives: ["Draupadi"],
    note: "Dharma ke ansh.",
  },

  {
    id: "prv", parent: "yud", vansh: "K", yuga: "dvapara",
    name: "Prativindhya",
    subtitle: "Draupadi-Yudhishthira ke putra",
    note: "Upapandava.",
  },

  {
    id: "bhm", parent: "pan", vansh: "K", yuga: "dvapara",
    name: "Bhima",
    wives: ["Draupadi", "Hidimba"],
    note: "Vayu ke ansh.",
  },

  {
    id: "sut", parent: "bhm", vansh: "K", yuga: "dvapara",
    name: "Sutasoma",
    subtitle: "Draupadi-Bhima ke putra",
    note: "Upapandava.",
  },

  {
    id: "gha", parent: "bhm", vansh: "K", yuga: "dvapara",
    name: "Ghatotkacha",
    wives: ["Kamakantakata (Maurvi)"], mother: "Hidimba",
    note: "Kurukshetra ke veer.",
  },

  {
    id: "barbarika", parent: "gha", vansh: "K", yuga: "dvapara",
    name: "Barbarika (Khatu Shyam)",
    subtitle: "Ghatotkacha ke putra",
    mother: "Kamakantakata (Maurvi)",
    note: "Teen baan dhaari; haarne wale paksh ka saath dene ka vachan. Krishna ke maangne par sheesh daan kiya; Rajasthan me Khatu Shyam ji ke roop me pooje jaate hain.",
    sources: ["Skanda Purana, Maheshvara Khanda, Kaumarika Khanda 59-66"],
    variations: "Vyasa ke Mahabharata me inka ullekh nahi hai; katha Skanda Purana aur lok-parampara se hai. Mata ka naam Maurvi, Ahilavati ya Kamakantakata milta hai.",
  },

  {
    id: "arj", parent: "pan", vansh: "K", yuga: "dvapara",
    name: "Arjuna",
    wives: ["Draupadi", "Subhadra", "Ulupi", "Chitrangada"],
    note: "Indra ke ansh.",
    knownFor: "Pandu-Kunti ke putra (Indra ke ansh)",
    deeds: "Kurukshetra me Pandava-paksh ke pramukh yoddha.",
    sources: ["Mahabharata"],
  },

  {
    id: "srk", parent: "arj", vansh: "K", yuga: "dvapara",
    name: "Shrutakarma",
    subtitle: "Draupadi-Arjuna ke putra",
    note: "Upapandava.",
  },

  {
    id: "abh", parent: "arj", vansh: "K", yuga: "dvapara",
    name: "Abhimanyu",
    wives: ["Uttara"], mother: "Subhadra",
    note: "Kurukshetra me chakravyuh me veergati.",
  },

  {
    id: "par", parent: "abh", vansh: "K", yuga: "sandhi",
    name: "Parikshit",
    wives: ["Madravati"],
    note: "Mahabharata ke baad Hastinapur ke raja.",
    knownFor: "Kaliyug ke pratham raja (parampara)",
    deeds: "Arjuna ke pautra; Shukadeva se Bhagavata shravan.",
    sources: ["Bhagavata Purana", "Mahabharata"],
  },

  {
    id: "jan", parent: "par", vansh: "K",
    name: "Janamejaya",
    wives: ["Vapushtama"],
    note: "Sarpa-satra aur Mahabharata-shravan.",
  },

  {
    id: "iravan", parent: "arj", vansh: "K", yuga: "dvapara",
    name: "Iravan",
    subtitle: "Arjuna ke putra",
    mother: "Ulupi",
    note: "Kurukshetra ke aathve din veergati.",
    sources: ["Mahabharata, Bhishma Parva 90-91"],
    variations: "Tamil parampara (Koothandavar) me yuddh se pehle bali ki katha prasiddh hai, jo Vyasa Mahabharata me nahi hai.",
  },

  {
    id: "babruvahana", parent: "arj", vansh: "K", yuga: "dvapara",
    name: "Babruvahana",
    subtitle: "Manipur ke raja",
    mother: "Chitrangada",
    note: "Ashvamedh yagya ke ghode ke prasang me pita Arjuna se yuddh kiya.",
    sources: ["Mahabharata, Adi Parva 216", "Mahabharata, Ashvamedhika Parva 79-82"],
  },

  {
    id: "nak", parent: "pan", vansh: "K", yuga: "dvapara",
    name: "Nakula",
    mother: "Madri",
    note: "Ashvini Kumaron ke ansh.",
  },

  {
    id: "shat", parent: "nak", vansh: "K", yuga: "dvapara",
    name: "Shatanika",
    subtitle: "Draupadi-Nakula ke putra",
    note: "Upapandava.",
  },

  {
    id: "sah", parent: "pan", vansh: "K", yuga: "dvapara",
    name: "Sahadeva",
    mother: "Madri",
    note: "Ashvini Kumaron ke ansh.",
  },

  {
    id: "srs", parent: "sah", vansh: "K", yuga: "dvapara",
    name: "Shrutasena",
    subtitle: "Draupadi-Sahadeva ke putra",
    note: "Upapandava.",
  },

  {
    id: "sudh", parent: "kuru", vansh: "K",
    name: "Sudhanva",
    subtitle: "Kuru ke putra",
    note: "Bhagavata 9.22: Kuru ke putra Parikshit, Sudhanva, Jahnu, Nishadhashva.",
    sources: ["Bhagavata Purana 9.22"],
  },

  {
    id: "gm", parent: "sudh", vansh: "K", type: "gap",
    name: "... (kai pidhiyan)",
    subtitle: "Suhotra, Chyavana, Kriti",
    note: "Bhagavata ki Magadha suchi.",
    sources: ["Bhagavata Purana"],
  },

  {
    id: "upar", parent: "gm", vansh: "K",
    name: "Uparichara Vasu",
    subtitle: "Chedi ke raja",
    note: "Magadha-Chedi vanshon ke purvaj (Mahabharata/Bhagavata).",
    sources: ["Mahabharata", "Bhagavata Purana"],
  },

  {
    id: "brih", parent: "upar", vansh: "K",
    name: "Brihadratha",
    subtitle: "Magadha, Barhadratha vansh ke mool",
    note: "Kashi ki do jumwa rajkumariyan unki patniyan.",
  },

  {
    id: "jara", parent: "brih", vansh: "K", yuga: "dvapara",
    name: "Jarasandha",
    subtitle: "Magadha samrat, Girivraja",
    note: "Bhima ne Krishna aur Arjuna ki sahayata se vadh kiya (Mahabharata Sabha Parva).",
    knownFor: "Magadha samrat (Girivraja)",
    deeds: "Kamsa ko damad banaya; Mathura par 17 baar aakraman; Bhima ne Krishna-Arjuna ki sahayata se vadh kiya.",
    sources: ["Mahabharata, Sabha Parva", "Vishnu Purana IV"],
  },

  {
    id: "asti", parent: "jara", vansh: "K", type: "group",
    name: "Asti aur Prapti",
    husbands: ["Kamsa"],
    note: "Jarasandha ki putriyan; Kamsa-vadh ke baad Jarasandha ne Mathura par aakraman kiye.",
  },

  {
    id: "sahm", parent: "jara", vansh: "K", yuga: "dvapara",
    name: "Sahadeva (Magadha)",
    subtitle: "Jarasandha ke putra",
    note: "Pandavon ne Jarasandha ke baad Magadha ki gaddi par bithaya.",
  },

  {
    id: "somapi", parent: "sahm", vansh: "K",
    name: "Somapi (Somadhi)",
    subtitle: "Sahadeva ke putra",
    note: "Puranon ke anusar Girivraja par 58 varsh raj.",
  },

  {
    id: "srut", parent: "somapi", vansh: "K",
    name: "Shrutashrava",
    subtitle: "Somapi ke putra",
    note: "Bhagavata 9.22.",
    sources: ["Bhagavata Purana 9.22"],
  },

  {
    id: "satyavati", parent: "upar", vansh: "K",
    name: "Satyavati (Matsyagandha)",
    subtitle: "Uparichara Vasu ki putri",
    husbands: ["Shantanu"],
    note: "Apsara Adrika (machhli roop) ke garbh se janmi; nishad-raj Dasharaja ne pala. Parashara se Ved Vyasa, aur Shantanu se Chitrangada aur Vichitravirya ki mata. Judwa bhai Matsya ne Matsya rajya basaya.",
    sources: ["Mahabharata, Adi Parva 63", "Mahabharata, Adi Parva 100"],
  },

  {
    id: "pg", parent: "ajam", vansh: "P", type: "gap",
    name: "... (Panchala shakha)",
    subtitle: "Kai pidhiyan (Bhagavata 9.21-22)",
    sources: ["Bhagavata Purana 9.21-22"],
  },

  {
    id: "pri", parent: "pg", vansh: "P",
    name: "Prishata",
    subtitle: "Panchala ke raja",
    note: "Bhagavata 9.22.",
    sources: ["Bhagavata Purana 9.22"],
  },

  {
    id: "dru", parent: "pri", vansh: "P", yuga: "dvapara",
    name: "Raja Drupada",
    wives: ["Prishati"],
    note: "Panchala naresh; Drona ke purane mitra, phir shatru.",
  },

  {
    id: "dhd", parent: "dru", vansh: "P", yuga: "dvapara",
    name: "Dhrishtadyumna",
    subtitle: "Yagya-agni se prakat",
    note: "Drona-vadh ki bhavishyavani.",
  },

  {
    id: "shi", parent: "dru", vansh: "P", yuga: "dvapara",
    name: "Shikhandi",
    subtitle: "Pehle Shikhandini",
    note: "Yaksha Sthuna se purushatva (Mahabharata).",
    sources: ["Mahabharata"],
  },

  {
    id: "drp", parent: "dru", vansh: "P", yuga: "dvapara",
    name: "Draupadi",
    husbands: ["Yudhishthira", "Bhima", "Arjuna", "Nakula", "Sahadeva"],
    note: "Yagya-agni se; paanch Upapandava putra.",
  },

  {
    id: "ahalya", parent: "pg", vansh: "P",
    name: "Ahalya",
    subtitle: "Mudgala ki putri",
    husbands: ["Maharishi Gautama"],
    note: "Indra ke chhal ke kaaran Gautama ka shaap; Shri Ram ke charan-sparsh se uddhar.",
    sources: ["Bhagavata Purana 9.21.34", "Valmiki Ramayana, Bala Kanda 48-49"],
  },

  {
    id: "shatananda", parent: "ahalya", vansh: "P",
    name: "Shatananda",
    subtitle: "Gautama-Ahalya ke putra",
    note: "Raja Janaka ke kulguru; Ram ko Vishwamitra ki katha sunayi.",
    sources: ["Valmiki Ramayana, Bala Kanda 51", "Bhagavata Purana 9.21.35"],
  },

  {
    id: "g14", parent: "shatananda", vansh: "P", type: "gap",
    name: "... (beech ki pidhiyan)",
    subtitle: "Satyadhriti, Sharadvan",
    note: "Shatananda ke putra Satyadhriti, unke putra Sharadvan.",
    sources: ["Bhagavata Purana 9.21.35-36"],
  },

  {
    id: "kripa", parent: "g14", vansh: "P", yuga: "dvapara",
    name: "Kripacharya",
    subtitle: "Sharadvan ke putra",
    note: "Kuru rajkumaron ke pehle guru; chiranjeevi maane jaate hain.",
    sources: ["Bhagavata Purana 9.21.36", "Mahabharata, Adi Parva 129"],
    variations: "Mahabharata me inke pita Sharadvan ko Gautama ke putra kaha gaya hai; Bhagavata me Sharadvan Shatananda ke pautra hain.",
  },

  {
    id: "kripi", parent: "g14", vansh: "P", yuga: "dvapara",
    name: "Kripi",
    subtitle: "Kripacharya ki judwa bahan",
    husbands: ["Dronacharya"],
    note: "Ashwatthama ki mata.",
    sources: ["Bhagavata Purana 9.21.36", "Mahabharata, Adi Parva 129-130"],
  },

  {
    id: "nakh", parent: "chan", vansh: "C", type: "group",
    name: "27 Nakshatra",
    subtitle: "Daksha ki kanyayen",
    husbands: ["Chandra"],
    note: "Chandra ka Daksha ki 27 kanyaon (Nakshatra) se vivah. Tara (Brihaspati ki patni) se Budha ka janm.",
  },

  {
    id: "datt", parent: "atri", vansh: "C",
    name: "Bhagwan Dattatreya",
    subtitle: "Atri-Anasuya ke putra",
    note: "Vishnu ke ansh (Bhagavata 4.1, Vishnu Purana 1.10).",
    knownFor: "Vishnu ke ansh; kai paramparaon me Trimurti-swaroop",
    sources: ["Bhagavata Purana 4.1", "Vishnu Purana 1.10"],
  },

  {
    id: "durv", parent: "atri", vansh: "C",
    name: "Maharishi Durvasa",
    subtitle: "Atri-Anasuya ke putra",
    note: "Shiva ke ansh (Bhagavata 4.1). Chandra Brahma ke ansh.",
    sources: ["Bhagavata Purana 4.1"],
  },

  {
    id: "pul", parent: "brahma", vansh: "X",
    name: "Maharishi Pulastya",
    wives: ["Havirbhu"],
    note: "Bhagavata 4.1.",
    sources: ["Bhagavata Purana 4.1"],
  },

  {
    id: "vishr", parent: "pul", vansh: "X",
    name: "Vishrava",
    wives: ["Ilavida", "Kaikasi"],
  },

  {
    id: "kub", parent: "vishr", vansh: "Z",
    name: "Kubera",
    mother: "Ilavida",
    note: "Dhanapati; Yaksha.",
  },

  {
    id: "rav", parent: "vishr", vansh: "X", yuga: "treta",
    name: "Ravana",
    wives: ["Mandodari"], mother: "Kaikasi",
    note: "Lanka ke raja (Ramayana).",
    knownFor: "Lanka ke raja",
    deeds: "Sita-haran; Lanka-yuddh me Ram ke haath vadh.",
    sources: ["Valmiki Ramayana", "Bhagavata Purana 4.1"],
    variations: "Pita Brahmin (Vishrava), mata rakshasi (Kaikasi).",
  },

  {
    id: "ind", parent: "rav", vansh: "X", yuga: "treta",
    name: "Indrajit (Meghnad)",
    wives: ["Sulochana"],
    note: "Ramayana.",
    sources: ["Ramayana"],
  },

  {
    id: "aks", parent: "rav", vansh: "X", yuga: "treta",
    name: "Akshayakumara",
    subtitle: "Ravana-Mandodari ke putra",
    note: "Ashoka-vatika me Hanuman ne vadh kiya.",
  },

  {
    id: "kum", parent: "vishr", vansh: "X", yuga: "treta",
    name: "Kumbhakarna",
    subtitle: "Ravana ke bhai",
  },

  {
    id: "vib", parent: "vishr", vansh: "X", yuga: "treta",
    name: "Vibhishana",
    wives: ["Sarama"],
    note: "Ram ke bhakt; Lanka ke raja.",
  },

  {
    id: "sur", parent: "vishr", vansh: "X", yuga: "treta",
    name: "Shurpanakha",
    subtitle: "Ravana ki bahan",
  },

  {
    id: "agas", parent: "pul", vansh: "R",
    name: "Maharishi Agastya",
    subtitle: "Vishrava ke bhai",
    wives: ["Lopamudra"],
    note: "Bhagavata 4.1.36: Pulastya-Havirbhu ke putra; pichle janm me Dahragni. Vishnu Purana ke anusar Swayambhuva manvantara me Dattoli.",
    sources: ["Bhagavata Purana 4.1.36", "Vishnu Purana"],
  },

  {
    id: "bhr", parent: "brahma", vansh: "B",
    name: "Maharishi Bhrigu",
    wives: ["Khyati"],
    note: "Khyati se Lakshmi (Vishnu Purana).",
    sources: ["Vishnu Purana"],
  },

  {
    id: "shk", parent: "bhr", vansh: "B",
    name: "Shukracharya",
    subtitle: "Asuron ke guru",
  },

  {
    id: "dvy", parent: "shk", vansh: "B",
    name: "Devayani",
    husbands: ["Yayati"], mother: "Urjasvati",
  },

  {
    id: "chy", parent: "bhr", vansh: "B",
    name: "Maharishi Chyavana",
    wives: ["Sukanya"],
  },

  {
    id: "aur", parent: "chy", vansh: "B",
    name: "Aurva",
    subtitle: "Chyavana ke putra",
  },

  {
    id: "ric", parent: "aur", vansh: "B",
    name: "Richika",
    wives: ["Satyavati (Gadhi ki putri)"],
  },

  {
    id: "jam", parent: "ric", vansh: "B",
    name: "Maharishi Jamadagni",
    wives: ["Renuka"],
  },

  {
    id: "par_r", parent: "jam", vansh: "B",
    name: "Bhagwan Parashurama",
    subtitle: "Vishnu ke 6th avatar",
  },

  {
    id: "lakshmi", parent: "bhr", vansh: "B",
    name: "Lakshmi (Shri)",
    subtitle: "Bhrigu-Khyati ki putri",
    husbands: ["Vishnu"],
    note: "Vishnu Purana ke anusar Bhrigu aur Khyati ki putri, Vishnu ki patni. Isliye 'Bhargavi' bhi kehlati hain.",
    sources: ["Vishnu Purana I.8", "Vishnu Purana I.9"],
    variations: "Doosri prasiddh katha me Lakshmi samudra-manthan se prakat hoti hain (Vishnu Purana I.9, Bhagavata 8.8).",
  },

  {
    id: "g10", parent: "bhr", vansh: "B", type: "gap",
    name: "... (beech ki pidhiyan)",
    subtitle: "Vidhata, Mrikandu",
    note: "Bhrigu ke putra Vidhata, unke putra Mrikandu.",
    sources: ["Vishnu Purana I.10"],
  },

  {
    id: "markandeya", parent: "g10", vansh: "B",
    name: "Maharishi Markandeya",
    subtitle: "Mrikandu ke putra",
    note: "Shiva-bhakti se Yama par vijay paakar chiranjeevi hue.",
    knownFor: "Markandeya Purana ke vakta; Mahamrityunjaya katha",
    sources: ["Vishnu Purana I.10", "Markandeya Purana", "Mahabharata, Vana Parva"],
  },

  {
    id: "vas_r", parent: "brahma", vansh: "R",
    name: "Maharishi Vashistha",
    wives: ["Arundhati"],
    note: "Suryavansh ke kulguru. Bhagavata 3.12: Brahma ke prana se.",
    sources: ["Bhagavata Purana 3.12"],
  },

  {
    id: "shkt", parent: "vas_r", vansh: "R",
    name: "Shakti",
    wives: ["Adrishyanti"],
  },

  {
    id: "pra_r", parent: "shkt", vansh: "R",
    name: "Maharishi Parashara",
    wives: ["Satyavati"],
  },

  {
    id: "vya", parent: "pra_r", vansh: "R", yuga: "dvapara",
    name: "Ved Vyas",
    mother: "Satyavati",
    note: "Ved-vibhajan, Mahabharata-rachna. Dhritarashtra, Pandu, Vidura ke pita.",
    knownFor: "Ved-vibhajan aur Mahabharata ke rachayita",
    deeds: "Dhritarashtra, Pandu aur Vidura ke janak (niyoga se).",
    sources: ["Mahabharata, Adi Parva", "Bhagavata Purana"],
  },

  {
    id: "shu_r", parent: "vya", vansh: "R", yuga: "dvapara",
    name: "Shukadeva",
    subtitle: "Vyasa ke putra",
    note: "Parikshit ko Bhagavata sunai.",
    knownFor: "Bhagavata ke vakta",
    deeds: "Parikshit ko aakhri 7 dinon me Bhagavata sunai.",
    sources: ["Bhagavata Purana"],
  },

  {
    id: "vid", parent: "vya", vansh: "K", yuga: "dvapara",
    name: "Vidura",
    mother: "Parishrami (dasi)",
    note: "Dhritarashtra-Pandu ke bhai; dharma-gyani.",
  },

  {
    id: "ang", parent: "brahma", vansh: "R",
    name: "Maharishi Angiras",
    wives: ["Surupa"],
    knownFor: "Brahma ke manasputra; Brihaspati ke pita",
    sources: ["Bhagavata Purana 3.12"],
    variations: "Patni: is vriksh me Surupa; Bhagavata 3.24 me Shraddha; Vishnu Purana me Smriti; anya path me Priti.",
  },

  {
    id: "bri", parent: "ang", vansh: "R",
    name: "Brihaspati",
    wives: ["Tara"],
    note: "Devaguru.",
  },

  {
    id: "bha", parent: "bri", vansh: "R",
    name: "Maharishi Bharadvaja",
    subtitle: "Brihaspati ke putra",
  },

  {
    id: "dro", parent: "bha", vansh: "R", yuga: "dvapara",
    name: "Dronacharya",
    wives: ["Kripi"],
    note: "Kaurava-Pandava ke guru.",
  },

  {
    id: "ash", parent: "dro", vansh: "R", yuga: "dvapara",
    name: "Ashwatthama",
    subtitle: "Drona-Kripi ke putra",
  },

  {
    id: "kacha", parent: "bri", vansh: "R",
    name: "Kacha",
    subtitle: "Brihaspati ke putra",
    note: "Shukracharya se Mritasanjivani vidya seekhi; Devayani ka prem-prastav thukraya.",
    sources: ["Mahabharata, Adi Parva 76-77"],
  },

  {
    id: "vn", parent: "brahma", vansh: "M", type: "group",
    name: "Vanar Kul (Kishkindha)",
    subtitle: "Brahma ke aadesh par devon ke ansh",
    note: "Valmiki Ramayana Bala Kanda: Brahma ke kehne par devtaon ne vanar putra utpann kiye.",
    sources: ["Valmiki Ramayana, Bala Kanda"],
  },

  {
    id: "jmb", parent: "vn", vansh: "M", yuga: "treta",
    name: "Jambavan",
    subtitle: "Riksho ke raja",
    note: "Brahma dwara rachit (Ramayana). Dvapara me bhi upasthit: Syamantaka mani ke prasang me Krishna se yuddh ke baad apni putri Jambavati ka vivah unse kiya.",
    sources: ["Valmiki Ramayana", "Bhagavata Purana 10.56"],
  },

  {
    id: "jambavati", parent: "jmb", vansh: "M", yuga: "dvapara",
    name: "Jambavati",
    subtitle: "Jambavan ki putri",
    husbands: ["Shri Krishna"],
    note: "Syamantaka mani ke prasang ke baad Krishna se vivah; Samba ki mata.",
    sources: ["Bhagavata Purana 10.56"],
  },

  {
    id: "nal", parent: "vn", vansh: "M", yuga: "treta",
    name: "Nala",
    subtitle: "Vishwakarma ke putra",
    note: "Ram-setu ke nirmata.",
  },

  {
    id: "nil", parent: "vn", vansh: "M", yuga: "treta",
    name: "Nila",
    subtitle: "Agni ke putra",
    note: "Vanar senapati.",
  },

  {
    id: "kesari", parent: "vn", vansh: "M", yuga: "treta",
    name: "Kesari",
    subtitle: "Hanuman ke pita",
    wives: ["Anjana"],
    note: "Valmiki Ramayana (Kishkindha Kanda 66): Hanuman Kesari aur Anjana ke putra. Kesari ke apne vansh ke baare me granthon me matbhed hai.",
    sources: ["Valmiki Ramayana, Kishkindha Kanda 66"],
  },

  {
    id: "han", parent: "kesari", vansh: "M", yuga: "treta",
    name: "Hanuman",
    subtitle: "Kesari-Anjana ke putra; Vayu ke ansh",
    parents: "Pita: [[kesari]] · Mata: [[anjana]] · Daivi pita: Vayu",
    note: "Shaiva parampara me Shiva ke ansh.",
    knownFor: "Ram-bhakt; Sugriva ke mantri",
    deeds: "Samudra langhkar Lanka me Sita ko khoja, Lanka jalayi, yuddh me aushadhi-parvat laye.",
    abilities: "Pavan-putra: apar bal aur samudra-langhan ki shakti.",
    sources: ["Valmiki Ramayana, Kishkindha Kanda 66; Sundara Kanda; Yuddha Kanda 74, 101"],
    variations: "Shaiva parampara me Shiva ke ansh. Kesari ke vansh par granthon me matbhed.",
  },

  {
    id: "anjana", parent: "vn", vansh: "M", yuga: "treta",
    name: "Anjana",
    subtitle: "Kesari ki patni; Hanuman ki mata",
    note: "Valmiki Ramayana. Kuch paramparaon me Apsara roop me bhi varnit.",
    sources: ["Valmiki Ramayana"],
  },

  {
    id: "riks", parent: "vn", vansh: "M", yuga: "treta",
    name: "Riksharaja",
    subtitle: "Kishkindha ke vanar raja; Vali-Sugriva ke pita",
    note: "Valmiki Ramayana (Kishkindha Kanda); Vali-Sugriva ke sandarbh me aate hain.",
    sources: ["Valmiki Ramayana, Kishkindha Kanda"],
  },

  {
    id: "vali", parent: "riks", vansh: "M", yuga: "treta",
    name: "Vali",
    subtitle: "Indra ke putra",
    wives: ["Tara"],
    note: "Kishkindha ke raja; Indra ke ansh se Riksharaja ke putra.",
    sources: ["Valmiki Ramayana, Kishkindha Kanda 11", "Valmiki Ramayana, Uttara Kanda (sarga 37 ke baad ka prakshipta ansh)"],
    variations: "Uttara Kanda ke ek ansh me Riksharaja stri-roop me Vali (Indra se) aur Sugriva (Surya se) ko janm dete hain; kuch kathaon me yeh Surya ke sarathi Aruna (Aruni roop) ke saath judi hai, aur Riksharaja palak pita hain.",
  },

  {
    id: "ang_v", parent: "vali", vansh: "M", yuga: "treta",
    name: "Angada",
    subtitle: "Vali-Tara ke putra",
    note: "Ram ke doot, Sugriva ke uttaradhikari.",
  },

  {
    id: "sug", parent: "riks", vansh: "M", yuga: "treta",
    name: "Sugriva",
    subtitle: "Surya ke putra",
    wives: ["Ruma"],
    note: "Vali ke chhote bhai; Surya ke ansh se Riksharaja ke putra. Ram ki sahayata se Kishkindha ke raja bane.",
    sources: ["Valmiki Ramayana, Kishkindha Kanda", "Valmiki Ramayana, Uttara Kanda (prakshipta ansh)"],
    variations: "Janm ki katha par vahi matbhed jo Vali ke saath hai (Riksharaja ya Aruni).",
  },

  {
    id: "kard", parent: "brahma", vansh: "R",
    name: "Prajapati Kardama",
    wives: ["Devahuti"],
    note: "Bhagavata Purana (Canto 3): Brahma ke aadesh par santan-utpatti; Devahuti Swayambhuva Manu ki putri.",
    sources: ["Bhagavata Purana, Canto 3"],
  },

  {
    id: "kapila", parent: "kard", vansh: "R",
    name: "Bhagwan Kapila",
    subtitle: "Kardama-Devahuti ke putra",
    note: "Sankhya darshan ke pravartak; Bhagavata aadi Puranon me Vishnu ke avatar.",
    knownFor: "Sankhya darshan ke pravartak",
    deeds: "Mata Devahuti ko Sankhya aur bhakti-yoga ka upadesh.",
    sources: ["Bhagavata Purana, Canto 3"],
  },

  {
    id: "kdau", parent: "kard", vansh: "R", type: "group",
    name: "Kardama ki 9 putriyan",
    subtitle: "Kala, Anasuya, Shraddha, Havirbhu, Gati, Kriya, Khyati, Arundhati, Shanti",
    note: "Bhagavata 3.24: Marichi, Atri, Angiras, Pulastya, Pulaha, Kratu, Bhrigu, Vashistha, Atharvan se vivah. (Kuch Puranon me Angiras ki patni Smriti ya Surupa bhi batai gayi hai.)",
    sources: ["Bhagavata Purana 3.24"],
  },

  {
    id: "manus", parent: "brahma", vansh: "R", type: "group",
    name: "14 Manvantara ke Manu",
    subtitle: "Vartaman: 7th - Vaivasvata",
    note: "Swayambhuva, Svarochisha, Uttama, Tamasa, Raivata, Chakshusha, Vaivasvata (vartaman), phir Savarni aadi (Bhagavata, Brahma Purana, Padma Purana). Aage ke Manuon ki suchi Puranon me alag-alag hai.",
    sources: ["Bhagavata Purana", "Brahma Purana", "Padma Purana"],
  },

  {
    id: "saptr", parent: "brahma", vansh: "R", type: "group",
    name: "Vartaman Saptarishi",
    subtitle: "Atri, Vashistha, Kashyapa, Gautama, Bharadvaja, Vishwamitra, Jamadagni",
    note: "Vaivasvata manvantara ke Saptarishi (Padma Purana suchi). Alag-alag granthon me suchi thodi alag hai.",
    sources: ["Padma Purana"],
  },
];
