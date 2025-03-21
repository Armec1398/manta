const productsData = [
    {
        category:1,
        id:1,
        src: "/images/fried-eggs.webp",
        title: "تست نیمرو با نان",
        description:"نان خمیر ترش، نیمرو، سالاد میکس",
        price:485,
        count:0,
    },
    {
        category:1,
        id:2,
        src: "/images/benedict.webp",
        title: "اگ بندیکت | Eggs Benedict",
        description:"نان مافین، بیکن، پوچد اگ، هالندیز، سالاد میکس",
        price:524,
        count:0,
    },
    {
        category:1,
        id:3,
        src: "/images/beef.webp",
        title: "بیف بينی | Pulled Beef Benny",
        description:"نان مافین، گوشت مزه‌دار شده، دیپ آووکادو، سس هالندیز، پوچد اگ، بیکن، سالاد میکس",
        price:412,
        count:0,
    },
    {
        category:2,
        id:4,
        src: "/images/steak-tandoori.webp",
        title: "استيك چیکن تندوری |steak Tandoori Chicken",
        description:"400 گرم مرغ گریل شده در مرینیت با ادویه تندوری و ماست، اسکوپ برنج بریانی، سس شوید و کاری 400gr Grilled Chicken Seasoned With Tandoori And Yogurt Beriani Rice, Dill And Curry Sauce",
        price:595,
        count:0,
    },
    {
        category:2,
        id:5,
        src: "/images/fish-steak.webp",
        title: "استیک ماهی قزل آلا سرخ شده/Fried trout steak",
        description:"۳۵۰گرم استیک فیله قزل آلا سرخ شده ،سیب زمینی زعتر،سس تارتار",
        price:575,
        count:0,
    },
    {
        category:2,
        id:6,
        src: "/images/ribeye.webp",
        title: "ریب آی استیک | Ribeye",
        description:"600 الى ٧٠٠ گرم استیک راسته استخوانی، سیب‌زمینی تنوری، گوجه گیلاسی، 2 نوع سس 500gr Ribeye Steak, Roast Potato, Tomato Cherry, 2 Kinds Of Sauce",
        price:952,
        count:0,
    },
    {
        category:3,
        id:7,
        src: "/images/margarita.webp",
        title: "مارگریتا | Margarita",
        description:"گوجه، ریحان، پنیر موزارلا تازه، سس مارینارا Tomato, Basil, Fresh Mozzarella Cheese, Marinara Sauce",
        price:389,
        count:0,
    },
    {
        category:3,
        id:8,
        src: "/images/beef-and-garlic.webp",
        title: "سیر و استیک | Beef And Garlic",
        description:"استیک راسته اسلایسی، سیر، قارچ، پنیر دانمارکی Sliced Beef, Garlic, Mushroom, ,Mozzarella Cheese,rucola",
        price:545,
        count:0,
    },
    {
        category:3,
        id:9,
        src: "/images/chicken-bbq.webp",
        title: "چیکن باربیکیو | Chicken BBQ",
        description:"فیله مرغ گریل شده، ذرت، فلفل دلمه‌ای کبابی، سس باربیکیو Mix Of Cows Jambon With Bacon, Sausage, Salami, Bell Pepper",
        price:465,
        count:0,
    },
    {
        category:4,
        id:10,
        src: "/images/special-burger.webp",
        title: "اسپشیال برگر | Special Burger",
        description:"300 گرم برگر آمریکایی، پنیر گودا، بیکن، سس قارچ، پیاز كاراملی، بان برگر، سیب‌زمینی سرخ شده، سس گرین 300gr Minced Veal Meat, Gouda Cheese, Bacon, Mushroom sauce, Fried Onion, bun Bread, French Fries, Green Sauce",
        price:565,
        count:0,
    },
    {
        category:4,
        id:11,
        src: "/images/short.webp",
        title: "شرت‌ریب برگر | Short Rib Burger",
        description:"۴۰۰ گرم دنده گوساله آهسته پز شده با مرینید مخصوص، به همراه سیب زمینی تنوری، با سس گوشت و سس سبز",
        price:890,
        count:0,
    },
    {
        category:5,
        id:12,
        src: "/images/hotdog-sandwich.webp",
        title: "هات داگ مجارستانی | Majarestani",
        description:"هات داگ مجارستانی90% آرمن ، گوجه ، خیارشور ، پیاز ، سس مخصوص",
        price:549,
        count:0,
    },
    {
        category:6,
        id:13,
        src: "/images/calzone-normal.webp",
        title: "کلزونه | Calzone",
        description:"ژامبون بوقلمون دودی، قارچ، اسفناج، دلمه سبز، ذرت Smoked Turkey, Mushroom, Spinach, Green Bell Pepper, Corn",
        price:489,
        count:0,
    },
    {
        category:6,
        id:14,
        src: "/images/calzone.webp",
        title: "کلزونه گوشت سرخ‌شده | Fried Beef Calzone",
        description:"سس خامه، گوشت چرخ شده، سس پستو، سس مارینارا",
        price:529,
        count:0,
    },
    {
        category:6,
        id:15,
        src: "/images/esfenaj.webp",
        title: "کلزونه پنیر و اسفناج سرخ‌شده | Fried cheese spinach Calzone",
        description:"سس خامه، اسفناج مزه‌دار شده، پنیر پارمسان، سس پستو، روکولا، پنیر پیتزا، سس مارینارا، گوجه گیلاسی",
        price:435,
        count:0,
    },
    {
        category:7,
        id:16,
        src: "/images/chicken-alfredo-normal.webp",
        title: "چیکن آلفردو | Chicken Alfredo",
        description:"پاستا پنه، مرغ، قارچ، پارمزان، سس آلفردو, پيازچه Penne, Chicken, Mushroom, Parmesan, Alfredo Sauce",
        price:459,
        count:0,
    },
    {
        category:7,
        id:17,
        src: "/images/beef-alfredo-normal.webp",
        title: "بیف آلفردو | Beef Alfredo",
        description:"پاستا پنه، بیف، قارچ، پارمزان، سس آلفردو پيازچه Penne, Beef, Mushroom, Parmesan, Alfredo Sauce",
        price:539,
        count:0,
    },
    {
        category:7,
        id:18,
        src: "/images/spaghetti-normal.webp",
        title: "اسپاگتی اسکمپی | Scampi Spaghetti",
        description:"پاستا اسپاگتی، سیر، اسفناج، کاری، میگو، کره، لیمو، خامه Spaghetti, Garlic, Spinach, Curry, Shrimp, Butter, Lemon, Cream",
        price:620,
        count:0,
    },

]
export default productsData