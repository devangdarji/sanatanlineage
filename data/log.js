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
    id: "rudra", parent: "brahma", vansh: "R",
    name: "Rudra (Shiva)",
    subtitle: "Brahma ke krodh se prakat",
    note: "Vishnu Purana: Kumaron ke inkar par Brahma ke krodh se Rudra prakat. Sati ke baad Uma/Parvati (Himavan-Mena ki putri) unki patni.",
    sources: ["Vishnu Purana"],
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
    note: "Aditya. Vali (Ramayana) aur Arjuna (Mahabharata) ke daivi pita.",
    sources: ["Ramayana", "Mahabharata"],
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
  },

  {
    id: "kush", parent: "ram", vansh: "S", yuga: "treta",
    name: "Kush",
    subtitle: "Shri Ram ke putra",
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
    id: "lak", parent: "dash", vansh: "S", yuga: "treta",
    name: "Lakshmana",
    wives: ["Urmila"], mother: "Sumitra",
    note: "Ram ke bhai.",
  },

  {
    id: "sha", parent: "dash", vansh: "S", yuga: "treta",
    name: "Shatrughna",
    wives: ["Shrutakirti"], mother: "Sumitra",
    note: "Ram ke bhai.",
  },

  {
    id: "karna", parent: "kunt", vansh: "S", yuga: "dvapara",
    name: "Karna",
    subtitle: "Kunti-Surya ke putra",
    note: "Vivah se pehle Kunti ko Surya se prapt; Adhiratha-Radha ne pala. Pandu ke putra nahi.",
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
    wives: ["Ila (Vaivasvata Manu ki putri)"],
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
    id: "puru", parent: "yay", vansh: "K",
    name: "Puru",
    mother: "Sharmishtha",
    note: "Puru vansh; yahi Kuru/Pandava-Kaurava vansh.",
  },

  {
    id: "sahas", parent: "yadu", vansh: "Y",
    name: "Sahasrajit",
    subtitle: "Yadu ke putra",
    note: "Vishnu Purana IV.",
    sources: ["Vishnu Purana IV"],
  },

  {
    id: "kart", parent: "sahas", vansh: "Y",
    name: "Kartavirya Arjuna",
    subtitle: "Haihaya vansh, Chakravarti",
    note: "Sahasrajit ke vansh me (beech me Haihaya aadi).",
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
    mother: "Devaki",
    note: "Vishnu ke avatar.",
    knownFor: "Vishnu ke avatar; Yadava nayak",
    deeds: "Kamsa-vadh; Dvaraka; Mahabharata me Arjuna ke sarathi, Bhagavad Gita ka upadesh.",
    sources: ["Bhagavata Purana, Canto 10", "Vishnu Purana V", "Mahabharata, Bhishma Parva"],
  },

  {
    id: "pra", parent: "krish", vansh: "Y",
    name: "Pradyumna",
    subtitle: "Krishna ke putra",
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
    id: "kau", parent: "dhri", vansh: "K", type: "group", yuga: "dvapara",
    name: "100 Kaurav",
    subtitle: "Duryodhana, Dushasana aadi",
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
    id: "bhm", parent: "pan", vansh: "K", yuga: "dvapara",
    name: "Bhima",
    wives: ["Draupadi", "Hidimba"],
    note: "Vayu ke ansh.",
  },

  {
    id: "arj", parent: "pan", vansh: "K", yuga: "dvapara",
    name: "Arjuna",
    wives: ["Draupadi", "Subhadra"],
    note: "Indra ke ansh.",
    knownFor: "Pandu-Kunti ke putra (Indra ke ansh)",
    deeds: "Kurukshetra me Pandava-paksh ke pramukh yoddha.",
    sources: ["Mahabharata"],
  },

  {
    id: "nak", parent: "pan", vansh: "K", yuga: "dvapara",
    name: "Nakula",
    mother: "Madri",
    note: "Ashvini Kumaron ke ansh.",
  },

  {
    id: "sah", parent: "pan", vansh: "K", yuga: "dvapara",
    name: "Sahadeva",
    mother: "Madri",
    note: "Ashvini Kumaron ke ansh.",
  },

  {
    id: "prv", parent: "yud", vansh: "K", yuga: "dvapara",
    name: "Prativindhya",
    subtitle: "Draupadi-Yudhishthira ke putra",
    note: "Upapandava.",
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
    mother: "Hidimba",
    note: "Kurukshetra ke veer.",
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
    id: "shat", parent: "nak", vansh: "K", yuga: "dvapara",
    name: "Shatanika",
    subtitle: "Draupadi-Nakula ke putra",
    note: "Upapandava.",
  },

  {
    id: "srs", parent: "sah", vansh: "K", yuga: "dvapara",
    name: "Shrutasena",
    subtitle: "Draupadi-Sahadeva ke putra",
    note: "Upapandava.",
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
    husbands: ["Yayati"],
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
    id: "vn", parent: "brahma", vansh: "M", type: "group",
    name: "Vanar Kul (Kishkindha)",
    subtitle: "Brahma ke aadesh par devon ke ansh",
    note: "Valmiki Ramayana Bala Kanda: Brahma ke kehne par devtaon ne vanar putra utpann kiye.",
    sources: ["Valmiki Ramayana, Bala Kanda"],
  },

  {
    id: "vali", parent: "vn", vansh: "M", yuga: "treta",
    name: "Vali",
    subtitle: "Indra ke putra",
    note: "Kishkindha ke raja; Riksharaja ke putra. Wife Tara.",
  },

  {
    id: "ang_v", parent: "vali", vansh: "M", yuga: "treta",
    name: "Angada",
    subtitle: "Vali-Tara ke putra",
    note: "Ram ke doot, Sugriva ke uttaradhikari.",
  },

  {
    id: "sug", parent: "vn", vansh: "M", yuga: "treta",
    name: "Sugriva",
    subtitle: "Surya ke putra",
    wives: ["Ruma"],
    note: "Vali ke chhote bhai; Kishkindha ke raja.",
  },

  {
    id: "han", parent: "vn", vansh: "M", yuga: "treta",
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
    id: "jmb", parent: "vn", vansh: "M", yuga: "treta",
    name: "Jambavan",
    subtitle: "Riksho ke raja",
    note: "Brahma dwara rachit (Ramayana).",
    sources: ["Ramayana"],
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
    id: "agas", parent: "pul", vansh: "R",
    name: "Maharishi Agastya",
    subtitle: "Vishrava ke bhai",
    note: "Bhagavata 4.1.36: Pulastya-Havirbhu ke putra; pichle janm me Dahragni. Vishnu Purana ke anusar Swayambhuva manvantara me Dattoli.",
    sources: ["Bhagavata Purana 4.1.36", "Vishnu Purana"],
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
    id: "kesari", parent: "vn", vansh: "M", yuga: "treta",
    name: "Kesari",
    subtitle: "Anjana ke pati; Hanuman ke pita",
    note: "Valmiki Ramayana (Kishkindha Kanda 66): Hanuman Kesari aur Anjana ke putra. Kesari ke apne vansh ke baare me granthon me matbhed hai.",
    sources: ["Valmiki Ramayana, Kishkindha Kanda 66"],
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
    subtitle: "Kishkindha ke vanar raja",
    note: "Valmiki Ramayana (Kishkindha Kanda); Vali-Sugriva ke sandarbh me aate hain.",
    sources: ["Valmiki Ramayana, Kishkindha Kanda"],
  },

  {
    id: "skanda", parent: "rudra", vansh: "R",
    name: "Kartikeya (Skanda)",
    subtitle: "Shiva-Parvati ke putra",
    note: "Shiva Purana, Rudra Samhita. Janm-kathayen alag-alag Puranon me alag hain.",
    sources: ["Shiva Purana, Rudra Samhita"],
  },

  {
    id: "gan", parent: "rudra", vansh: "R",
    name: "Ganesha",
    subtitle: "Shiva-Parvati ke putra",
    note: "Shiva Purana, Rudra Samhita. Janm-kathayen alag-alag Puranon me alag hain.",
    sources: ["Shiva Purana, Rudra Samhita"],
  },

  {
    id: "nakh", parent: "chan", vansh: "C", type: "group",
    name: "27 Nakshatra",
    subtitle: "Daksha ki kanyayen",
    husbands: ["Chandra"],
    note: "Chandra ka Daksha ki 27 kanyaon (Nakshatra) se vivah. Tara (Brihaspati ki patni) se Budha ka janm.",
  },
];
