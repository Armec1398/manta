const productsData = [
    {
        category:1,
        id:1,
        src: "/images/placeholder.png",
        title: "نیمرو",
        description:"",
        price:80,
        count:0,
    },
    {
        category:1,
        id:2,
        src: "/images/placeholder.png",
        title: "عدسی",
        description:"",
        price:90,
        count:0,
    },
    {
        category:1,
        id:3,
        src: "/images/placeholder.png",
        title: "سوسیس تخم مرغ",
        description:"",
        price:120,
        count:0,
    },
    {
        category:1,
        id:4,
        src: "/images/placeholder.png",
        title: "پلیت انگلیسی",
        description:"",
        price:160,
        count:0,
    },
    {
        category:1,
        id:5,
        src: "/images/placeholder.png",
        title: "املت",
        description:"",
        price:100,
        count:0,
    },
    {
        category:1,
        id:6,
        src: "/images/placeholder.png",
        title: "املت هالوپینو",
        description:"",
        price:110,
        count:0,
    },
    {
        category:1,
        id:7,
        src: "/images/placeholder.png",
        title: "پرشین پلیت",
        description:"",
        price:122,
        count:0,
    },
    {
        category:1,
        id:8,
        src: "/images/placeholder.png",
        title: "فرنچ تست میوه ای مانتا",
        description:"",
        price:230,
        count:0,
    },
    {
        category:2,
        id:9,
        src: "/images/placeholder.png",
        title: "پاستا آلفردو",
        description:"( پنیر ، قارچ ، فیله مرغ ، سس آلفردو )",
        price:335,
        count:0,
    },
    {
        category:2,
        id:10,
        src: "/images/placeholder.png",
        title: "پاستا پستو",
        description:"( پنیر ، قارچ ، فیله مرغ ، سس پستو )",
        price:355,
        count:0,
    },
    {
        category:2,
        id:11,
        src: "/images/placeholder.png",
        title: "پنینی بیکن",
        description:"",
        price:242,
        count:0,
    },
    {
        category:2,
        id:12,
        src: "/images/placeholder.png",
        title: "سیب زمینی ساده",
        description:"",
        price:110,
        count:0,
    },
    {
        category:2,
        id:13,
        src: "/images/placeholder.png",
        title: "استیک سینه مرغ",
        description:"",
        price:387,
        count:0,
    },
    {
        category:2,
        id:14,
        src: "/images/placeholder.png",
        title: "پنینی بوقلمون",
        description:"",
        price:235,
        count:0,
    },
    {
        category:2,
        id:15,
        src: "/images/placeholder.png",
        title: "سیب زمینی ویژه مانتا",
        description:"",
        price:180,
        count:0,
    },
    {
        category:3,
        id:16,
        src: "/images/placeholder.png",
        title: "هات چاکلت",
        description:"",
        price:105,
        count:0,
    },
    {
        category:3,
        id:17,
        src: "/images/placeholder.png",
        title: "شیر کاکائو",
        description:"",
        price:95,
        count:0,
    },
    {
        category:3,
        id:18,
        src: "/images/placeholder.png",
        title: "چای ماسالا",
        description:"",
        price:88,
        count:0,
    },
    {
        category:3,
        id:19,
        src: "/images/placeholder.png",
        title: "چای کرک",
        description:"",
        price:90,
        count:0,
    },
    {
        category:3,
        id:20,
        src: "/images/placeholder.png",
        title: "سیب دارچین",
        description:"",
        price:89,
        count:0,
    },
    {
        category:4,
        id:21,
        src: "/images/placeholder.png",
        title: "اسپرسو",
        description:"70/20 روبوستا",
        price:75,
        count:0,
    },
    {
        category:4,
        id:22,
        src: "/images/placeholder.png",
        title: "اسپرسو",
        description:"100 عربیکا",
        price:85,
        count:0,
    },
    {
        category:4,
        id:23,
        src: "/images/placeholder.png",
        title: "آمریکانو",
        description:"70/20 روبوستا",
        price:90,
        count:0,
    },
    {
        category:4,
        id:24,
        src: "/images/placeholder.png",
        title: "آمریکانو",
        description:"100 عربیکا",
        price:99,
        count:0,
    },
    {
        category:4,
        id:25,
        src: "/images/placeholder.png",
        title: "کاپوچینو",
        description:"70/20 روبوستا",
        price:96,
        count:0,
    },
    {
        category:4,
        id:26,
        src: "/images/placeholder.png",
        title: "کاپوچینو",
        description:"100 عربیکا",
        price:108,
        count:0,
    },
    {
        category:4,
        id:27,
        src: "/images/placeholder.png",
        title: "لاته",
        description:"70/20 روبوستا",
        price:115,
        count:0,
    },
    {
        category:4,
        id:28,
        src: "/images/placeholder.png",
        title: "لاته",
        description:"100 عربیکا",
        price:125,
        count:0,
    },
    {
        category:4,
        id:29,
        src: "/images/placeholder.png",
        title: "موکا",
        description:"70/20 روبوستا",
        price:130,
        count:0,
    },
    {
        category:4,
        id:30,
        src: "/images/placeholder.png",
        title: "موکا",
        description:"100 عربیکا",
        price:148,
        count:0,
    },
    {
        category:4,
        id:31,
        src: "/images/placeholder.png",
        title: "کارامل ماکیاتو",
        description:"70/20 روبوستا",
        price:145,
        count:0,
    },
    {
        category:4,
        id:32,
        src: "/images/placeholder.png",
        title: "کارامل ماکیاتو",
        description:"100 عربیکا",
        price:160,
        count:0,
    },
    {
        category:4,
        id:33,
        src: "/images/placeholder.png",
        title: "کن پانا",
        description:"70/20 روبوستا",
        price:100,
        count:0,
    },
    {
        category:4,
        id:34,
        src: "/images/placeholder.png",
        title: "کن پانا",
        description:"100 عربیکا",
        price:118,
        count:0,
    },
    {
        category:4,
        id:35,
        src: "/images/placeholder.png",
        title: "آفوگاتو",
        description:"70/20 روبوستا",
        price:125,
        count:0,
    },
    {
        category:4,
        id:36,
        src: "/images/placeholder.png",
        title: "آفوگاتو",
        description:"100 عربیکا",
        price:149,
        count:0,
    },
    {
        category:4,
        id:37,
        src: "/images/placeholder.png",
        title: "آیس آمریکانو",
        description:"70/20 روبوستا",
        price:98,
        count:0,
    },
    {
        category:4,
        id:38,
        src: "/images/placeholder.png",
        title: "آیس آمریکانو",
        description:"100 عربیکا",
        price:113,
        count:0,
    },
    {
        category:4,
        id:39,
        src: "/images/placeholder.png",
        title: "آیس لاته",
        description:"70/20 روبوستا",
        price:123,
        count:0,
    },
    {
        category:4,
        id:40,
        src: "/images/placeholder.png",
        title: "آیس لاته",
        description:"100 عربیکا",
        price:143,
        count:0,
    },
    {
        category:4,
        id:41,
        src: "/images/placeholder.png",
        title: "آیس موکا",
        description:"70/20 روبوستا",
        price:138,
        count:0,
    },
    {
        category:4,
        id:42,
        src: "/images/placeholder.png",
        title: "آیس موکا",
        description:"100 عربیکا",
        price:152,
        count:0,
    },
    {
        category:4,
        id:43,
        src: "/images/placeholder.png",
        title: "آیس کارامل ماکیاتو",
        description:"70/20 روبوستا",
        price:153,
        count:0,
    },
    {
        category:4,
        id:44,
        src: "/images/placeholder.png",
        title: "آیس کارامل ماکیاتو",
        description:"100 عربیکا",
        price:170,
        count:0,
    },
    {
        category:5,
        id:45,
        src: "/images/placeholder.png",
        title: "قهوه ترک",
        description:"",
        price:91,
        count:0,
    },
    {
        category:5,
        id:46,
        src: "/images/placeholder.png",
        title: "قهوه فرانسه",
        description:"",
        price:145,
        count:0,
    },
    {
        category:5,
        id:47,
        src: "/images/placeholder.png",
        title: "قهوه V60",
        description:"",
        price:140,
        count:0,
    },
    {
        category:5,
        id:48,
        src: "/images/placeholder.png",
        title: "قهوه کِمکس",
        description:"",
        price:155,
        count:0,
    },
    {
        category:6,
        id:49,
        src: "/images/placeholder.png",
        title: "دمنوش میوه",
        description:"( سیب، به و ... )",
        price:120,
        count:0,
    },
    {
        category:6,
        id:50,
        src: "/images/placeholder.png",
        title: "دمنوش آرامش",
        description:"( گل گاو زبان، بابونه، ... )",
        price:120,
        count:0,
    },
    {
        category:6,
        id:51,
        src: "/images/placeholder.png",
        title: "دمنوش زعفران",
        description:"( زعفران، گلاب، پرتقال، عسل و ... )",
        price:135,
        count:0,
    },
    {
        category:6,
        id:52,
        src: "/images/placeholder.png",
        title: "دمنوش سیب و زنجبیل",
        description:"",
        price:115,
        count:0,
    },
    {
        category:6,
        id:53,
        src: "/images/placeholder.png",
        title: "چای سبز و لیمو",
        description:"",
        price:115,
        count:0,
    },
    {
        category:6,
        id:54,
        src: "/images/placeholder.png",
        title: "چای سیاه",
        description:"",
        price:70,
        count:0,
    },
    {
        category:7,
        id:55,
        src: "/images/placeholder.png",
        title: "سرد نوش ویژه مانتا",
        description:"( خاکشیر، کاسنی، شاطره، لیمو )",
        price:135,
        count:0,
    },
    {
        category:7,
        id:56,
        src: "/images/placeholder.png",
        title: "خیار سکنجبین",
        description:"",
        price:115,
        count:0,
    },
    {
        category:8,
        id:57,
        src: "/images/placeholder.png",
        title: "اوشن",
        description:"( آلوئورا، بلوکاراسائو، لیمو و ... )",
        price:155,
        count:0,
    },
    {
        category:8,
        id:58,
        src: "/images/placeholder.png",
        title: "پارادایس",
        description:"( انار، سودا و ... )",
        price:156,
        count:0,
    },
    {
        category:8,
        id:59,
        src: "/images/placeholder.png",
        title: "پیناکولادا",
        description:"( آناناس ، نارگیل و ... )",
        price:170,
        count:0,
    },
    {
        category:8,
        id:60,
        src: "/images/placeholder.png",
        title: "منگو چری",
        description:"( انبه، آلبالو، نعنا و ... )",
        price:170,
        count:0,
    },
    {
        category:8,
        id:61,
        src: "/images/placeholder.png",
        title: "جینجر لایم",
        description:"( زنجبیل تازه، لیمو و سودا )",
        price:150,
        count:0,
    },
    {
        category:8,
        id:62,
        src: "/images/placeholder.png",
        title: "رِد موهیتو",
        description:"( توت فرنگی، لیمو، نعنا و ... )",
        price:145,
        count:0,
    },
    {
        category:8,
        id:63,
        src: "/images/placeholder.png",
        title: "موهیتو کوبایی",
        description:"( لیمو، نعنا، سودا و ... )",
        price:120,
        count:0,
    },
    {
        category:8,
        id:64,
        src: "/images/placeholder.png",
        title: "تروپیکال مینت",
        description:"( پشن فروت، لیمو، آناناس، نعنا و ... )",
        price:130,
        count:0,
    },
    {
        category:8,
        id:65,
        src: "/images/placeholder.png",
        title: "لیموناد",
        description:"( لیمو، سودا و ... )",
        price:115,
        count:0,
    },
    {
        category:8,
        id:66,
        src: "/images/placeholder.png",
        title: "آب هندوانه",
        description:"",
        price:115,
        count:0,
    },
    {
        category:9,
        id:67,
        src: "/images/placeholder.png",
        title: "ویژه مانتا",
        description:"",
        price:225,
        count:0,
    },
    {
        category:9,
        id:68,
        src: "/images/placeholder.png",
        title: "لوتوس فندق",
        description:"",
        price:175,
        count:0,
    },
    {
        category:9,
        id:69,
        src: "/images/placeholder.png",
        title: "شیک نوتلا",
        description:"",
        price:185,
        count:0,
    },
    {
        category:9,
        id:70,
        src: "/images/placeholder.png",
        title: "بادام زمینی و پنیر",
        description:"",
        price:170,
        count:0,
    },
    {
        category:9,
        id:71,
        src: "/images/placeholder.png",
        title: "شیک توت فرنگی",
        description:"",
        price:165,
        count:0,
    },
    {
        category:9,
        id:72,
        src: "/images/placeholder.png",
        title: "شیک کرک",
        description:"",
        price:125,
        count:0,
    },
    {
        category:10,
        id:73,
        src: "/images/placeholder.png",
        title: "کیک شکلاتی",
        description:"",
        price:0,
        count:0,
    },
    {
        category:10,
        id:74,
        src: "/images/placeholder.png",
        title: "کیک خامه شکلاتی",
        description:"",
        price:0,
        count:0,
    },
    {
        category:10,
        id:75,
        src: "/images/placeholder.png",
        title: "کیک نسکافه",
        description:"",
        price:0,
        count:0,
    },
    {
        category:10,
        id:76,
        src: "/images/placeholder.png",
        title: "کیک سر شیر",
        description:"",
        price:0,
        count:0,
    },
    {
        category:10,
        id:77,
        src: "/images/placeholder.png",
        title: "چیز کیک",
        description:"",
        price:0,
        count:0,
    },
    {
        category:10,
        id:78,
        src: "/images/placeholder.png",
        title: "حلوا عربی",
        description:"",
        price:0,
        count:0,
    },

]
export default productsData