/* ==========================================
   SOULJA DATABASE
   Version 1.0
========================================== */

const DATABASE = {

    /* ======================================
       APP
    ====================================== */

    app:{
        name:"SOULJA Coffee",
        version:"1.0.0",
        offline:true,
        currency:"IDR"
    },

    /* ======================================
       CONFIG
    ====================================== */

    config:{
        imagePath:"assets/",
        defaultImage:"default.png"
    },

    /* ======================================
       AI
    ====================================== */

    ai:{

        weight:{
            type:40,
            mood:25,
            taste:20,
            rating:5,
            featured:5,
            bestSeller:5
        }

    },

    /* ======================================
       MENU
    ====================================== */

    menu:[

        {
    id: 1,
    name: "Espresso",
    type: "drink",
    category: {
      id: "black-coffee",
      name: "Black Coffee"
    },
    price: 15000,
    image: {
      folder: "minuman",
      file: "Espresso.png",
      alt: "Espresso"
    },
    description: "Kopi murni dengan rasa paling kuat, pekat, dan tanpa tambahan susu.",
    taste: {
      bold: 5,
      sweet: 0,
      creamy: 0,
      sour: 3,
      salty: 0,
      earthy: 1,
      fresh: 0
    },
    slug: "espresso",
    aiVector: [
      5,
      0,
      0,
      3,
      0,
      1,
      0
    ],
    badges: [],
    mood: {
      id: "focused",
      name: "fokus",
      score: 3
    },
    
    recommendation: {
      crossSell: [10],
      similarMenu: [2, 6]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "black-coffee",
      "bold",
      "drink"
    ]
  },
  {
    id: 2,
    name: "Long Black",
    type: "drink",
    category: {
      id: "black-coffee",
      name: "Black Coffee"
    },
    price: 20000,
    image: {
      folder: "minuman",
      file: "LongBlack.png",
      alt: "Long Black"
    },
    description: "Espresso yang dipadukan dengan air panas sehingga lebih ringan namun tetap bold.",
    taste: {
      bold: 5,
      sweet: 0,
      creamy: 0,
      sour: 3,
      salty: 0,
      earthy: 1,
      fresh: 0
    },
    slug: "long-black",
    aiVector: [
      5,
      0,
      0,
      3,
      0,
      1,
      0
    ],
    badges: [],
    mood: {
      id: "focused",
      name: "fokus",
      score: 3
    },
    
    recommendation: {
      crossSell: [10],
      similarMenu: [1, 6]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "black-coffee",
      "bold",
      "drink"
    ]
  },
  {
    id: 3,
    name: "Coffee Lemon",
    type: "drink",
    category: {
      id: "black-coffee",
      name: "Black Coffee"
    },
    price: 24000,
    image: {
      folder: "minuman",
      file: "CoffeLemon.png",
      alt: "Coffee Lemon"
    },
    description: "Perpaduan kopi dan lemon yang memberikan sensasi segar, asam, dan unik.",
    taste: {
      bold: 3,
      sweet: 2,
      creamy: 0,
      sour: 5,
      salty: 0,
      earthy: 1,
      fresh: 5
    },
    slug: "coffee-lemon",
    aiVector: [
      3,
      2,
      0,
      5,
      0,
      1,
      5
    ],
    badges: [],
    mood: {
      id: "energetic",
      name: "bersemangat",
      score: 4
    },
    
    recommendation: {
      crossSell: [12],
      similarMenu: [20, 2]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "black-coffee",
      "bold",
      "drink",
      "sour"
    ]
  },
  {
    id: 4,
    name: "Mistic Jasmine",
    type: "drink",
    category: {
      id: "black-coffee",
      name: "Black Coffee"
    },
    price: 24000,
    image: {
      folder: "minuman",
      file: "MisticJasmine.png",
      alt: "Mistic Jasmine"
    },
    description: "Long black ice dengan sentuhan aroma jasmine yang ringan dan menyegarkan.",
    taste: {
      bold: 2,
      sweet: 2,
      creamy: 0,
      sour: 1,
      salty: 0,
      earthy: 5,
      fresh: 4
    },
    slug: "mistic-jasmine",
    aiVector: [
      2,
      2,
      0,
      1,
      0,
      5,
      4
    ],
    badges: [],
    mood: {
      id: "relaxed",
      name: "relaks",
      score: 1
    },
    
    recommendation: {
      crossSell: [12],
      similarMenu: [16, 3]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "black-coffee",
      "drink",
      "sour"
    ]
  },
   {
    id: 5,
    name: "Cappuccino",
    type: "drink",
    category: {
      id: "milk-based-coffee",
      name: "Milk Based Coffee"
    },
    price: 22000,
    image: {
      folder: "minuman",
      file: "Cappucino.png",
      alt: "Cappuccino"
    },
    description: "Kopi susu klasik dengan foam lembut dan rasa kopi yang masih cukup terasa.",
    taste: {
      bold: 4,
      sweet: 1,
      creamy: 4,
      sour: 2,
      salty: 0,
      earthy: 0,
      fresh: 0
    },
    slug: "cappuccino",
    aiVector: [
      4,
      1,
      4,
      2,
      0,
      0,
      0
    ],
    badges: [],
    mood: {
      id: "relaxed-social",
      name: "santai",
      score: 2
    },
    
    recommendation: {
      crossSell: [22],
      similarMenu: [7, 6]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "bold",
      "creamy",
      "drink",
      "milk-based-coffee"
    ]
  },
  {
    id: 6,
    name: "Piccolo",
    type: "drink",
    category: {
      id: "milk-based-coffee",
      name: "Milk Based Coffee"
    },
    price: 22000,
    image: {
      folder: "minuman",
      file: "Picollo.png",
      alt: "Piccolo"
    },
    description: "Kopi susu dengan porsi kecil, lebih kuat dibanding latte namun tetap creamy.",
    taste: {
      bold: 5,
      sweet: 1,
      creamy: 3,
      sour: 2,
      salty: 0,
      earthy: 0,
      fresh: 0
    },
    slug: "piccolo",
    aiVector: [
      5,
      1,
      3,
      2,
      0,
      0,
      0
    ],
    badges: [],
    mood: {
      id: "focused",
      name: "fokus",
      score: 3
    },
    
    recommendation: {
      crossSell: [5],
      similarMenu: [7, 5]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "bold",
      "drink",
      "milk-based-coffee"
    ]
  },
  {
    id: 7,
    name: "Magic",
    type: "drink",
    category: {
      id: "milk-based-coffee",
      name: "Milk Based Coffee"
    },
    price: 24000,
    image: {
      folder: "minuman",
      file: "Magic.png",
      alt: "Magic"
    },
    description: "Kopi susu creamy dengan keseimbangan rasa kopi dan susu yang pas.",
    taste: {
      bold: 4,
      sweet: 1,
      creamy: 4,
      sour: 2,
      salty: 0,
      earthy: 0,
      fresh: 0
    },
    slug: "magic",
    aiVector: [
      4,
      1,
      4,
      2,
      0,
      0,
      0
    ],
    badges: [],
    mood: {
      id: "focused",
      name: "fokus",
      score: 3
    },
    
    recommendation: {
      crossSell: [10],
      similarMenu: [5, 9]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "bold",
      "creamy",
      "drink",
      "milk-based-coffee"
    ]
  },
  {
    id: 8,
    name: "Cafe Latte",
    type: "drink",
    category: {
      id: "milk-based-coffee",
      name: "Milk Based Coffee"
    },
    price: 24000,
    image: {
      folder: "minuman",
      file: "CafeLatte.png",
      alt: "Cafe Latte"
    },
    description: "Kopi susu lembut dengan karakter creamy yang cocok untuk dinikmati santai.",
    taste: {
      bold: 3,
      sweet: 2,
      creamy: 5,
      sour: 1,
      salty: 0,
      earthy: 0,
      fresh: 0
    },
    slug: "cafe-latte",
    aiVector: [
      3,
      2,
      5,
      1,
      0,
      0,
      0
    ],
    badges: [],
    mood: {
      id: "relaxed-social",
      name: "santai",
      score: 2
    },
    
    recommendation: {
      crossSell: [10],
      similarMenu: [10, 5]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "creamy",
      "drink",
      "milk-based-coffee"
    ]
  },
   {
    id: 9,
    name: "Dirty Latte",
    type: "drink",
    category: {
      id: "milk-based-coffee",
      name: "Milk Based Coffee"
    },
    price: 30000,
    image: {
      folder: "minuman",
      file: "DirtyLatte.png",
      alt: "Dirty Latte"
    },
    description: "Perpaduan susu dingin dengan espresso yang kuat, memberikan rasa kopi yang lebih pekat dan tegas.",
    taste: {
      bold: 4,
      sweet: 2,
      creamy: 4,
      sour: 2,
      salty: 0,
      earthy: 0,
      fresh: 0
    },
    slug: "dirty-latte",
    aiVector: [
      4,
      2,
      4,
      2,
      0,
      0,
      0
    ],
    badges: [],
    mood: {
      id: "energetic",
      name: "bersemangat",
      score: 4
    },
    
    recommendation: {
      crossSell: [11],
      similarMenu: [7, 6]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "creamy",
      "drink",
      "milk-based-coffee"
    ]
  },
  {
    id: 10,
    name: "Soulful",
    type: "drink",
    category: {
      id: "es-kopi-susu",
      name: "Es Kopi Susu"
    },
    price: 22000,
    image: {
      folder: "minuman",
      file: "Soulful.png",
      alt: "Soulful"
    },
    description: "Signature es kopi susu Soulja dengan rasa manis, creamy, dan mudah dinikmati semua kalangan.",
    taste: {
      bold: 3,
      sweet: 3,
      creamy: 4,
      sour: 1,
      salty: 0,
      earthy: 0,
      fresh: 0
    },
    slug: "soulful",
    aiVector: [
      3,
      3,
      4,
      1,
      0,
      0,
      0
    ],
    badges: [],
    mood: {
      id: "relaxed-social",
      name: "santai",
      score: 2
    },
    
    recommendation: {
      crossSell: [12],
      similarMenu: [8, 11]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "creamy",
      "drink",
      "es-kopi-susu",
      "sweet"
    ]
  },
  {
    id: 11,
    name: "Butterscotch",
    type: "drink",
    category: {
      id: "es-kopi-susu",
      name: "Es Kopi Susu"
    },
    price: 24000,
    image: {
      folder: "minuman",
      file: "Butterscotch.png",
      alt: "Butterscotch"
    },
    description: "Es kopi susu dengan rasa karamel butterscotch yang manis dan creamy.",
    taste: {
      bold: 3,
      sweet: 4,
      creamy: 4,
      sour: 1,
      salty: 1,
      earthy: 0,
      fresh: 0
    },
    slug: "butterscotch",
    aiVector: [
      3,
      4,
      4,
      1,
      1,
      0,
      0
    ],
    badges: [],
    mood: {
      id: "relaxed",
      name: "relaks",
      score: 1
    },
    
    recommendation: {
      crossSell: [12],
      similarMenu: [10, 13]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "creamy",
      "drink",
      "es-kopi-susu",
      "sweet"
    ]
  },
  {
    id: 12,
    name: "Sea Salted",
    type: "drink",
    category: {
      id: "es-kopi-susu",
      name: "Es Kopi Susu"
    },
    price: 25000,
    image: {
      folder: "minuman",
      file: "SeaSalted.png",
      alt: "Sea Salted"
    },
    description: "Es kopi susu creamy dengan sentuhan rasa asin gurih yang unik.",
    taste: {
      bold: 3,
      sweet: 3,
      creamy: 4,
      sour: 1,
      salty: 4,
      earthy: 0,
      fresh: 0
    },
    slug: "sea-salted",
    aiVector: [
      3,
      3,
      4,
      1,
      4,
      0,
      0
    ],
    badges: [],
    mood: {
      id: "relaxed-social",
      name: "santai",
      score: 2
    },
    
    recommendation: {
      crossSell: [10],
      similarMenu: [11, 10]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "creamy",
      "drink",
      "es-kopi-susu",
      "salty",
      "sweet"
    ]
  },
  {
    id: 13,
    name: "Sweet Poppin Crunch",
    type: "drink",
    category: {
      id: "es-kopi-susu",
      name: "Es Kopi Susu"
    },
    price: 25000,
    image: {
      folder: "minuman",
      file: "SweetPoppinCrunch.png",
      alt: "Sweet Poppin Crunch"
    },
    description: "Es kopi susu manis dengan sensasi rasa yang fun dan cocok untuk pencinta minuman dessert.",
    taste: {
      bold: 3,
      sweet: 5,
      creamy: 4,
      sour: 1,
      salty: 0,
      earthy: 0,
      fresh: 0
    },
    slug: "sweet-poppin-crunch",
    aiVector: [
      3,
      5,
      4,
      1,
      0,
      0,
      0
    ],
    badges: [],
    mood: {
      id: "energetic",
      name: "bersemangat",
      score: 4
    },
    
    recommendation: {
      crossSell: [12],
      similarMenu: [15, 11]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "creamy",
      "drink",
      "es-kopi-susu",
      "sweet"
    ]
  },
  {
    id: 14,
    name: "Aromatic",
    type: "drink",
    category: {
      id: "es-kopi-susu",
      name: "Es Kopi Susu"
    },
    price: 25000,
    image: {
      folder: "minuman",
      file: "Aromatic.png",
      alt: "Aromatic"
    },
    description: "Es kopi susu dengan aroma khas yang lebih kompleks dan elegan.",
    taste: {
      bold: 3,
      sweet: 3,
      creamy: 4,
      sour: 1,
      salty: 0,
      earthy: 4,
      fresh: 0
    },
    slug: "aromatic",
    aiVector: [
      3,
      3,
      4,
      1,
      0,
      4,
      0
    ],
    badges: [],
    mood: {
      id: "relaxed",
      name: "relaks",
      score: 1
    },
    
    recommendation: {
      crossSell: [11],
      similarMenu: [16, 11]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "creamy",
      "drink",
      "es-kopi-susu"
    ]
  },
  {
    id: 15,
    name: "Candy Rush",
    type: "drink",
    category: {
      id: "es-kopi-susu",
      name: "Es Kopi Susu"
    },
    price: 25000,
    image: {
      folder: "minuman",
      file: "CandyRush.png",
      alt: "Candy Rush"
    },
    description: "Minuman manis dengan cita rasa candy yang playful dan menyegarkan.",
    taste: {
      bold: 3,
      sweet: 5,
      creamy: 4,
      sour: 3,
      salty: 0,
      earthy: 0,
      fresh: 2
    },
    slug: "candy-rush",
    aiVector: [
      3,
      5,
      4,
      3,
      0,
      0,
      2
    ],
    badges: [],
    mood: {
      id: "energetic",
      name: "bersemangat",
      score: 4
    },
    
    recommendation: {
      crossSell: [10],
      similarMenu: [13, 10]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "creamy",
      "drink",
      "es-kopi-susu",
      "sweet"
    ]
  },
  {
    id: 16,
    name: "Matcha",
    type: "drink",
    category: {
      id: "non-coffee",
      name: "Non Coffee"
    },
    price: 24000,
    image: {
      folder: "minuman",
      file: "Matcha.png",
      alt: "Matcha"
    },
    description: "Minuman teh hijau Jepang dengan rasa earthy, creamy, dan menenangkan.",
    taste: {
      bold: 0,
      sweet: 3,
      creamy: 4,
      sour: 0,
      salty: 0,
      earthy: 5,
      fresh: 1
    },
    slug: "matcha",
    aiVector: [
      0,
      3,
      4,
      0,
      0,
      5,
      1
    ],
    badges: [],
    mood: {
      id: "relaxed",
      name: "relaks",
      score: 1
    },
    
    recommendation: {
      crossSell: [10],
      similarMenu: [14, 17]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "creamy",
      "drink",
      "non-coffee"
    ]
  },
  {
    id: 17,
    name: "chocolate",
    type: "drink",
    category: {
      id: "non-coffee",
      name: "Non Coffee"
    },
    price: 24000,
    image: {
      folder: "minuman",
      file: "Chocolate.png",
      alt: "chocolate"
    },
    description: "Minuman cokelat creamy yang manis dan cocok sebagai comfort drink.",
    taste: {
      bold: 0,
      sweet: 4,
      creamy: 5,
      sour: 0,
      salty: 0,
      earthy: 2,
      fresh: 0
    },
    slug: "chocolate",
    aiVector: [
      0,
      4,
      5,
      0,
      0,
      2,
      0
    ],
    badges: [],
    mood: {
      id: "sad",
      name: "sedih",
      score: 5
    },
    
    recommendation: {
      crossSell: [10],
      similarMenu: [13, 15]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "creamy",
      "drink",
      "non-coffee",
      "sweet"
    ]
  },
  {
    id: 18,
    name: "Red Velvet",
    type: "drink",
    category: {
      id: "non-coffee",
      name: "Non Coffee"
    },
    price: 24000,
    image: {
      folder: "minuman",
      file: "RedVelvet.png",
      alt: "Red Velvet"
    },
    description: "Minuman creamy dengan rasa khas red velvet yang manis dan lembut.",
    taste: {
      bold: 0,
      sweet: 4,
      creamy: 4,
      sour: 0,
      salty: 0,
      earthy: 1,
      fresh: 0
    },
    slug: "red-velvet",
    aiVector: [
      0,
      4,
      4,
      0,
      0,
      1,
      0
    ],
    badges: [],
    mood: {
      id: "relaxed-social",
      name: "santai",
      score: 2
    },
    
    recommendation: {
      crossSell: [10],
      similarMenu: [17, 8]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "creamy",
      "drink",
      "non-coffee",
      "sweet"
    ]
  },
  {
    id: 19,
    name: "Candy Berry",
    type: "drink",
    category: {
      id: "non-coffee",
      name: "Non Coffee"
    },
    price: 25000,
    image: {
      folder: "minuman",
      file: "CandyBerry.png",
      alt: "Candy Berry"
    },
    description: "Minuman manis dengan sentuhan rasa buah berry yang segar.",
    taste: {
      bold: 0,
      sweet: 4,
      creamy: 3,
      sour: 2,
      salty: 0,
      earthy: 0,
      fresh: 3
    },
    slug: "candy-berry",
    aiVector: [
      0,
      4,
      3,
      2,
      0,
      0,
      3
    ],
    badges: [],
    mood: {
      id: "energetic",
      name: "bersemangat",
      score: 4
    },
    
    recommendation: {
      crossSell: [10],
      similarMenu: [21, 20]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "drink",
      "non-coffee",
      "sweet"
    ]
  },
  {
    id: 20,
    name: "Malibu Climate",
    type: "drink",
    category: {
      id: "mocktail-refreshment",
      name: "Mocktail Refreshment"
    },
    price: 22000,
    image: {
      folder: "minuman",
      file: "MalibuClimate.png",
      alt: "Malibu Climate"
    },
    description: "Mocktail menyegarkan dengan karakter citrus yang ringan dan cocok untuk cuaca panas.",
    taste: {
      bold: 0,
      sweet: 3,
      creamy: 0,
      sour: 3,
      salty: 0,
      earthy: 0,
      fresh: 5
    },
    slug: "malibu-climate",
    aiVector: [
      0,
      3,
      0,
      3,
      0,
      0,
      5
    ],
    badges: [],
    mood: {
      id: "energetic",
      name: "bersemangat",
      score: 4
    },
    
    recommendation: {
      crossSell: [21],
      similarMenu: [21, 3]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "drink",
      "mocktail-refreshment",
      "sour"
    ]
  },
  {
    id: 21,
    name: "Melo Reverse",
    type: "drink",
    category: {
      id: "mocktail-refreshment",
      name: "Mocktail Refreshment"
    },
    price: 22000,
    image: {
      folder: "minuman",
      file: "MeloRiverse.png",
      alt: "Melo Reverse"
    },
    description: "Mocktail dengan rasa fruity yang segar dan mudah dinikmati.",
    taste: {
      bold: 0,
      sweet: 3,
      creamy: 0,
      sour: 2,
      salty: 0,
      earthy: 0,
      fresh: 5
    },
    slug: "melo-reverse",
    aiVector: [
      0,
      3,
      0,
      2,
      0,
      0,
      5
    ],
    badges: [],
    mood: {
      id: "energetic",
      name: "bersemangat",
      score: 4
    },
    
    recommendation: {
      crossSell: [20],
      similarMenu: [19, 20]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "drink",
      "mocktail-refreshment"
    ]
  },
  {
    id: 22,
    name: "Cranberry Cream Cheese",
    type: "food",
    category: {
      id: "soft-sourdough",
      name: "Soft Sourdough"
    },
    price: 28000,
    image: {
      folder: "makanan",
      file: "CranberryCreamCheese.png",
      alt: "Cranberry Cream Cheese"
    },
    description: "Soft sourdough dengan isian cream cheese dan sentuhan cranberry yang sedikit asam.",
    taste: {
      sweet: 3,
      sour: 4,
      creamy: 4,
      nutty: 0,
      soft: 3,
      chocolate: 0
    },
    slug: "cranberry-cream-cheese",
    aiVector: [
      3,
      4,
      4,
      0,
      3,
      0
    ],
    badges: [],
    mood: {
      id: "relaxed-social",
      name: "santai",
      score: 2
    },
    
    recommendation: {
      crossSell: [10],
      similarMenu: [23, 24]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "food",
      "soft",
      "soft-sourdough"
    ]
  },
  {
    id: 23,
    name: "Original Cheesecake",
    type: "food",
    category: {
      id: "dessert",
      name: "Dessert"
    },
    price: 30000,
    image: {
      folder: "makanan",
      file: "CheesecakeOriginal.png",
      alt: "Original Cheesecake"
    },
    description: "Cheesecake lembut dengan rasa keju yang creamy dan autentik.",
    taste: {
      sweet: 3,
      sour: 3,
      creamy: 5,
      nutty: 0,
      soft: 4,
      chocolate: 0
    },
    slug: "original-cheesecake",
    aiVector: [
      3,
      3,
      5,
      0,
      4,
      0
    ],
    badges: [],
    mood: {
      id: "relaxed",
      name: "relaks",
      score: 1
    },
    
    recommendation: {
      crossSell: [16],
      similarMenu: [24, 22]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "dessert",
      "food",
      "soft",
      "sweet"
    ]
  },
  {
    id: 24,
    name: "Original Matcha Cheesecake",
    type: "food",
    category: {
      id: "dessert",
      name: "Dessert"
    },
    price: 32000,
    image: {
      folder: "makanan",
      file: "CheesecakeMatcha.png",
      alt: "Original Matcha Cheesecake"
    },
    description: "Cheesecake creamy dengan sentuhan matcha yang lembut dan menenangkan.",
    taste: {
      sweet: 3,
      sour: 2,
      creamy: 5,
      nutty: 1,
      soft: 4,
      chocolate: 0
    },
    slug: "original-matcha-cheesecake",
    aiVector: [
      3,
      2,
      5,
      1,
      4,
      0
    ],
    badges: [],
    mood: {
      id: "relaxed",
      name: "relaks",
      score: 1
    },
    
    recommendation: {
      crossSell: [16],
      similarMenu: [23, 29]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "dessert",
      "food",
      "soft"
    ]
  },
  {
    id: 25,
    name: "Brownies",
    type: "food",
    category: {
      id: "dessert",
      name: "Dessert"
    },
    price: 12000,
    image: {
      folder: "makanan",
      file: "Brownies.png",
      alt: "Brownies"
    },
    description: "Kue cokelat padat dengan rasa manis dan cokelat yang kaya.",
    taste: {
      sweet: 4,
      sour: 0,
      creamy: 1,
      nutty: 1,
      soft: 4,
      chocolate: 5
    },
    slug: "brownies",
    aiVector: [
      4,
      0,
      1,
      1,
      4,
      5
    ],
    badges: [],
    mood: {
      id: "sad",
      name: "sedih",
      score: 5
    },
    
    recommendation: {
      crossSell: [10],
      similarMenu: [31, 28]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "chocolate",
      "dessert",
      "food",
      "soft",
      "sweet"
    ]
  },
  {
    id: 26,
    name: "Classic Soft Cookies",
    type: "food",
    category: {
      id: "cookies",
      name: "Cookies"
    },
    price: 15000,
    image: {
      folder: "makanan",
      file: "Classic.png",
      alt: "Classic Soft Cookies"
    },
    description: "Soft cookies klasik dengan tekstur lembut dan rasa manis yang pas.",
    taste: {
      sweet: 4,
      sour: 0,
      creamy: 1,
      nutty: 1,
      soft: 5,
      chocolate: 3
    },
    slug: "classic-soft-cookies",
    aiVector: [
      4,
      0,
      1,
      1,
      5,
      3
    ],
    badges: [],
    mood: {
      id: "relaxed-social",
      name: "santai",
      score: 2
    },
    
    recommendation: {
      crossSell: [10],
      similarMenu: [30, 29]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "cookies",
      "food",
      "sweet"
    ]
  },
  {
    id: 27,
    name: "Red Velvet Soft Cookies",
    type: "food",
    category: {
      id: "cookies",
      name: "Cookies"
    },
    price: 15000,
    image: {
      folder: "makanan",
      file: "RedVelvetCookies.png",
      alt: "Red Velvet Soft Cookies"
    },
    description: "Soft cookies red velvet dengan rasa manis dan tekstur chewy.",
    taste: {
      sweet: 4,
      sour: 1,
      creamy: 3,
      nutty: 0,
      soft: 5,
      chocolate: 2
    },
    slug: "red-velvet-soft-cookies",
    aiVector: [
      4,
      1,
      3,
      0,
      5,
      2
    ],
    badges: [],
    mood: {
      id: "energetic",
      name: "bersemangat",
      score: 4
    },
    
    recommendation: {
      crossSell: [18],
      similarMenu: [28, 31]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "cookies",
      "food",
      "sweet"
    ]
  },
  {
    id: 28,
    name: "Monster Soft Cookies",
    type: "food",
    category: {
      id: "cookies",
      name: "Cookies"
    },
    price: 15000,
    image: {
      folder: "makanan",
      file: "Monster.png",
      alt: "Monster Soft Cookies"
    },
    description: "Soft cookies berwarna biru menyerupai karakter Cookie Monster.",
    taste: {
      sweet: 4,
      sour: 0,
      creamy: 1,
      nutty: 2,
      soft: 5,
      chocolate: 4
    },
    slug: "monster-soft-cookies",
    aiVector: [
      4,
      0,
      1,
      2,
      5,
      4
    ],
    badges: [],
    mood: {
      id: "energetic",
      name: "bersemangat",
      score: 4
    },
    
    recommendation: {
      crossSell: [17],
      similarMenu: [31, 27]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "cookies",
      "food",
      "sweet"
    ]
  },
  {
    id: 29,
    name: "Matchamond Soft Cookies",
    type: "food",
    category: {
      id: "cookies",
      name: "Cookies"
    },
    price: 15000,
    image: {
      folder: "makanan",
      file: "Matchamond.png",
      alt: "Matchamond Soft Cookies"
    },
    description: "Soft cookies matcha dengan tambahan almond dan aroma khas teh hijau.",
    taste: {
      sweet: 3,
      sour: 0,
      creamy: 2,
      nutty: 4,
      soft: 5,
      chocolate: 1
    },
    slug: "matchamond-soft-cookies",
    aiVector: [
      3,
      0,
      2,
      4,
      5,
      1
    ],
    badges: [],
    mood: {
      id: "focused",
      name: "fokus",
      score: 3
    },
    
    recommendation: {
      crossSell: [16],
      similarMenu: [24 ,26]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "cookies",
      "food"
    ]
  },
  {
    id: 30,
    name: "Biscoff Soft Cookies",
    type: "food",
    category: {
      id: "cookies",
      name: "Cookies"
    },
    price: 15000,
    image: {
      folder: "makanan",
      file: "Biscoff.png",
      alt: "Biscoff Soft Cookies"
    },
    description: "Soft cookies dengan rasa khas biskuit karamel Biscoff yang manis.",
    taste: {
      sweet: 5,
      sour: 0,
      creamy: 2,
      nutty: 3,
      soft: 5,
      chocolate: 0
    },
    slug: "biscoff-soft-cookies",
    aiVector: [
      5,
      0,
      2,
      3,
      5,
      0
    ],
    badges: [],
    mood: {
      id: "relaxed-social",
      name: "santai",
      score: 2
    },
    
    recommendation: {
      crossSell: [12],
      similarMenu: [26, 29]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "cookies",
      "food",
      "sweet"
    ]
  },
  {
    id: 31,
    name: "Double Choco Soft Cookies",
    type: "food",
    category: {
      id: "cookies",
      name: "Cookies"
    },
    price: 15000,
    image: {
      folder: "makanan",
      file: "DoubleChoco.png",
      alt: "Double Choco Soft Cookies"
    },
    description: "Soft cookies dengan sensasi cokelat ganda yang kaya dan lumer.",
    taste: {
      sweet: 4,
      sour: 0,
      creamy: 1,
      nutty: 0,
      soft: 5,
      chocolate: 5
    },
    slug: "double-choco-soft-cookies",
    aiVector: [
      4,
      0,
      1,
      0,
      5,
      5
    ],
    badges: [],
    mood: {
      id: "sad",
      name: "sedih",
      score: 5
    },
    
    recommendation: {
      crossSell: [17],
      similarMenu: [25, 28]
    },
    rating: {
      score: 4.5,
      reviewCount: 0
    },
    status: {
      available: true,
      featured: false,
      bestSeller: false,
      newMenu: false
    },
    tags: [
      "chocolate",
      "cookies",
      "food",
      "sweet"
    ]
  } 

        /* ==============================
           MENU 2

           MENU 3

           MENU 4

           ...

           MENU 46
        ============================== */

    ]

};