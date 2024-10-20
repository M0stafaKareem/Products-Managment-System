// seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const productsData = [
  {
    id: 5,
    name: "Classic Black Hooded Sweatshirt",
    price: 79,
    description:
      "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.",
    images: [
      "https://i.imgur.com/cSytoSD.jpeg",
      "https://i.imgur.com/WwKucXb.jpeg",
      "https://i.imgur.com/cE2Dxh9.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "kids",
  },
  {
    id: 6,
    name: "Classic Comfort Fit Joggers",
    price: 25,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    images: [
      "https://i.imgur.com/ZKGofuB.jpeg",
      "https://i.imgur.com/GJi73H0.jpeg",
      "https://i.imgur.com/633Fqrz.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T04:01:07.000Z",
    category: "kids",
  },
  {
    id: 7,
    name: "Classic Comfort Drawstring Joggers",
    price: 79,
    description:
      "Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.",
    images: [
      "https://i.imgur.com/mp3rUty.jpeg",
      "https://i.imgur.com/JQRGIc2.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "kids",
  },
  {
    id: 8,
    name: "Classic Red Jogger Sweatpants",
    price: 98,
    description:
      "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
    images: [
      "https://i.imgur.com/9LFjwpI.jpeg",
      "https://i.imgur.com/vzrTgUR.jpeg",
      "https://i.imgur.com/p5NdI6n.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "kids",
  },
  {
    id: 9,
    name: "Classic Navy Blue Baseball Cap",
    price: 61,
    description:
      "Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.",
    images: [
      "https://i.imgur.com/R3iobJA.jpeg",
      "https://i.imgur.com/Wv2KTsf.jpeg",
      "https://i.imgur.com/76HAxcA.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "kids",
  },
  {
    id: 11,
    name: "Classic Red Baseball Cap",
    price: 35,
    description:
      "Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.",
    images: [
      "https://i.imgur.com/cBuLvBi.jpeg",
      "https://i.imgur.com/N1GkCIR.jpeg",
      "https://i.imgur.com/kKc9A5p.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "kids",
  },
  {
    id: 12,
    name: "Classic Black Baseball Cap",
    price: 58,
    description:
      "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.",
    images: [
      "https://i.imgur.com/KeqG6r4.jpeg",
      "https://i.imgur.com/xGQOw3p.jpeg",
      "https://i.imgur.com/oO5OUjb.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "kids",
  },
  {
    id: 13,
    name: "Classic Olive Chino Shorts",
    price: 84,
    description:
      "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.",
    images: [
      '["https://i.imgur.com/UsFIvYs.jpeg"',
      '"https://i.imgur.com/YIq57b6.jpeg"]',
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T06:27:01.000Z",
    category: "kids",
  },
  {
    id: 14,
    name: "Classic High-Waisted Athletic Shorts",
    price: 43,
    description:
      "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.",
    images: [
      "https://i.imgur.com/eGOUveI.jpeg",
      "https://i.imgur.com/UcsGO7E.jpeg",
      "https://i.imgur.com/NLn4e7S.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "kids",
  },
  {
    id: 15,
    name: "Classic White Crew Neck T-Shirt",
    price: 39,
    description:
      "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
    images: [
      "https://i.imgur.com/axsyGpD.jpeg",
      "https://i.imgur.com/T8oq9X2.jpeg",
      "https://i.imgur.com/J6MinJn.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "kids",
  },
  {
    id: 16,
    name: "Classic White Tee - Timeless Style and Comfort",
    price: 73,
    description:
      "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
    images: [
      "https://i.imgur.com/Y54Bt8J.jpeg",
      "https://i.imgur.com/SZPDSgy.jpeg",
      "https://i.imgur.com/sJv4Xx0.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "kids",
  },
  {
    id: 17,
    name: "Classic Black T-Shirt",
    price: 35,
    description:
      "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
    images: [
      "https://i.imgur.com/9DqEOV5.jpeg",
      "https://i.imgur.com/ae0AEYn.jpeg",
      "https://i.imgur.com/mZ4rUjj.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "kids",
  },
  {
    id: 18,
    name: "Sleek White & Orange Wireless Gaming Controller",
    price: 69,
    description:
      "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
    images: [
      "https://i.imgur.com/ZANVnHE.jpeg",
      "https://i.imgur.com/Ro5z6Tn.jpeg",
      "https://i.imgur.com/woA93Li.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Outdoors",
  },
  {
    id: 19,
    name: "Sleek Wireless Headphone & Inked Earbud Set",
    price: 44,
    description:
      "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
    images: [
      "https://i.imgur.com/yVeIeDa.jpeg",
      "https://i.imgur.com/jByJ4ih.jpeg",
      "https://i.imgur.com/KXj6Tpb.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Outdoors",
  },
  {
    id: 20,
    name: "Sleek Comfort-Fit Over-Ear Headphones",
    price: 28,
    description:
      "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
    images: [
      "https://i.imgur.com/SolkFEB.jpeg",
      "https://i.imgur.com/KIGW49u.jpeg",
      "https://i.imgur.com/mWwek7p.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Outdoors",
  },
  {
    id: 21,
    name: "Efficient 2-Slice Toaster",
    price: 48,
    description:
      "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.",
    images: [
      "https://i.imgur.com/keVCVIa.jpeg",
      "https://i.imgur.com/afHY7v2.jpeg",
      "https://i.imgur.com/yAOihUe.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Outdoors",
  },
  {
    id: 22,
    name: "Sleek Wireless Computer Mouse",
    price: 10,
    description:
      "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
    images: [
      "https://i.imgur.com/w3Y8NwQ.jpeg",
      "https://i.imgur.com/WJFOGIC.jpeg",
      "https://i.imgur.com/dV4Nklf.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Outdoors",
  },
  {
    id: 23,
    name: "Sleek Modern Laptop with Ambient Lighting",
    price: 43,
    description:
      "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
    images: [
      "https://i.imgur.com/OKn1KFI.jpeg",
      "https://i.imgur.com/G4f21Ai.jpeg",
      "https://i.imgur.com/Z9oKRVJ.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Outdoors",
  },
  {
    id: 24,
    name: "Sleek Modern Laptop for Professionals",
    price: 97,
    description:
      "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
    images: [
      "https://i.imgur.com/ItHcq7o.jpeg",
      "https://i.imgur.com/55GM3XZ.jpeg",
      "https://i.imgur.com/tcNJxoW.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Outdoors",
  },
  {
    id: 25,
    name: "Stylish Red & Silver Over-Ear Headphones",
    price: 39,
    description:
      "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
    images: [
      "https://i.imgur.com/YaSqa06.jpeg",
      "https://i.imgur.com/isQAliJ.jpeg",
      "https://i.imgur.com/5B8UQfh.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Outdoors",
  },
  {
    id: 27,
    name: "Sleek Smartwatch with Vibrant Display",
    price: 16,
    description:
      "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
    images: [
      "https://i.imgur.com/LGk9Jn2.jpeg",
      "https://i.imgur.com/1ttYWaI.jpeg",
      "https://i.imgur.com/sPRWnJH.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Outdoors",
  },
  {
    id: 28,
    name: "Sleek Modern Leather Sofa",
    price: 53,
    description:
      "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
    images: [
      "https://i.imgur.com/Qphac99.jpeg",
      "https://i.imgur.com/dJjpEgG.jpeg",
      "https://i.imgur.com/MxJyADq.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "furniture",
  },
  {
    id: 29,
    name: "Mid-Century Modern Wooden Dining Table",
    price: 24,
    description:
      "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
    images: [
      "https://i.imgur.com/DMQHGA0.jpeg",
      "https://i.imgur.com/qrs9QBg.jpeg",
      "https://i.imgur.com/XVp8T1I.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "furniture",
  },
  {
    id: 30,
    name: "Elegant Golden-Base Stone Top Dining Table",
    price: 66,
    description:
      "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
    images: [
      "https://i.imgur.com/NWIJKUj.jpeg",
      "https://i.imgur.com/Jn1YSLk.jpeg",
      "https://i.imgur.com/VNZRvx5.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "furniture",
  },
  {
    id: 31,
    name: "Modern Elegance Teal Armchair",
    price: 25,
    description:
      "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
    images: [
      "https://i.imgur.com/6wkyyIN.jpeg",
      "https://i.imgur.com/Ald3Rec.jpeg",
      "https://i.imgur.com/dIqo03c.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "furniture",
  },
  {
    id: 32,
    name: "Elegant Solid Wood Dining Table",
    price: 67,
    description:
      "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
    images: [
      "https://i.imgur.com/4lTaHfF.jpeg",
      "https://i.imgur.com/JktHE1C.jpeg",
      "https://i.imgur.com/cQeXQMi.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "furniture",
  },
  {
    id: 33,
    name: "Modern Minimalist Workstation Setup",
    price: 49,
    description:
      "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
    images: [
      "https://i.imgur.com/3oXNBst.jpeg",
      "https://i.imgur.com/ErYYZnT.jpeg",
      "https://i.imgur.com/boBPwYW.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "furniture",
  },
  {
    id: 34,
    name: "Modern Ergonomic Office Chair",
    price: 71,
    description:
      "Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.",
    images: [
      "https://i.imgur.com/3dU0m72.jpeg",
      "https://i.imgur.com/zPU3EVa.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "furniture",
  },
  {
    id: 35,
    name: "Futuristic Holographic Soccer Cleats",
    price: 39,
    description:
      "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
    images: [
      "https://i.imgur.com/qNOjJje.jpeg",
      "https://i.imgur.com/NjfCFnu.jpeg",
      "https://i.imgur.com/eYtvXS1.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Books",
  },
  {
    id: 36,
    name: "Rainbow Glitter High Heels",
    price: 39,
    description:
      "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
    images: [
      "https://i.imgur.com/62gGzeF.jpeg",
      "https://i.imgur.com/5MoPuFM.jpeg",
      "https://i.imgur.com/sUVj7pK.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Books",
  },
  {
    id: 37,
    name: "Chic Summer Denim Espadrille Sandals",
    price: 33,
    description:
      "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
    images: [
      "https://i.imgur.com/9qrmE1b.jpeg",
      "https://i.imgur.com/wqKxBVH.jpeg",
      "https://i.imgur.com/sWSV6DK.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Books",
  },
  {
    id: 38,
    name: "Vibrant Runners: Bold Orange & Blue Sneakers",
    price: 27,
    description:
      "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
    images: [
      "https://i.imgur.com/hKcMNJs.jpeg",
      "https://i.imgur.com/NYToymX.jpeg",
      "https://i.imgur.com/HiiapCt.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Books",
  },
  {
    id: 39,
    name: "Vibrant Pink Classic Sneakers",
    price: 84,
    description:
      "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
    images: [
      "https://i.imgur.com/mcW42Gi.jpeg",
      "https://i.imgur.com/mhn7qsF.jpeg",
      "https://i.imgur.com/F8vhnFJ.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Books",
  },
  {
    id: 40,
    name: "Futuristic Silver and Gold High-Top Sneaker",
    price: 68,
    description:
      "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
    images: [
      "https://i.imgur.com/npLfCGq.jpeg",
      "https://i.imgur.com/vYim3gj.jpeg",
      "https://i.imgur.com/HxuHwBO.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Books",
  },
  {
    id: 41,
    name: "Futuristic Chic High-Heel Boots",
    price: 36,
    description:
      "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
    images: [
      "https://i.imgur.com/HqYqLnW.jpeg",
      "https://i.imgur.com/RlDGnZw.jpeg",
      "https://i.imgur.com/qa0O6fg.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Books",
  },
  {
    id: 42,
    name: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    price: 53,
    description:
      "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
    images: [
      "https://i.imgur.com/AzAY4Ed.jpeg",
      "https://i.imgur.com/umfnS9P.jpeg",
      "https://i.imgur.com/uFyuvLg.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Books",
  },
  {
    id: 43,
    name: "Elegant Purple Leather Loafers",
    price: 17,
    description:
      "Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.",
    images: [
      "https://i.imgur.com/Au8J9sX.jpeg",
      "https://i.imgur.com/gdr8BW2.jpeg",
      "https://i.imgur.com/KDCZxnJ.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Books",
  },
  {
    id: 44,
    name: "Classic Blue Suede Casual Shoes",
    price: 39,
    description:
      "Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
    images: [
      "https://i.imgur.com/sC0ztOB.jpeg",
      "https://i.imgur.com/Jf9DL9R.jpeg",
      "https://i.imgur.com/R1IN95T.jpeg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Books",
  },
  {
    id: 45,
    name: "Sleek Futuristic Electric Bicycle",
    price: 22,
    description:
      "This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, it's perfect for the eco-conscious commuter looking to navigate the city with ease.",
    images: [
      "https://i.imgur.com/BG8J0Fj.jpg",
      "https://i.imgur.com/ujHBpCX.jpg",
      "https://i.imgur.com/WHeVL9H.jpg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Garden",
  },
  {
    id: 46,
    name: "Sleek All-Terrain Go-Kart",
    price: 37,
    description:
      "Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.",
    images: [
      "https://i.imgur.com/Ex5x3IU.jpg",
      "https://i.imgur.com/z7wAQwe.jpg",
      "https://i.imgur.com/kc0Dj9S.jpg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Garden",
  },
  {
    id: 47,
    name: "Radiant Citrus Eau de Parfum",
    price: 73,
    description:
      "Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance. Perfect for daily wear, it's an olfactory delight that leaves a lasting, zesty impression.",
    images: [
      "https://i.imgur.com/xPDwUb3.jpg",
      "https://i.imgur.com/3rfp691.jpg",
      "https://i.imgur.com/kG05a29.jpg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Garden",
  },
  {
    id: 48,
    name: "Sleek Olive Green Hardshell Carry-On Luggage",
    price: 48,
    description:
      "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
    images: [
      "https://i.imgur.com/jVfoZnP.jpg",
      "https://i.imgur.com/Tnl15XK.jpg",
      "https://i.imgur.com/7OqTPO6.jpg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Garden",
  },
  {
    id: 49,
    name: "Chic Transparent Fashion Handbag",
    price: 61,
    description:
      "Elevate your style with our Chic Transparent Fashion Handbag, perfect for showcasing your essentials with a clear, modern edge. This trendy accessory features durable acrylic construction, luxe gold-tone hardware, and an elegant chain strap. Its compact size ensures you can carry your day-to-day items with ease and sophistication.",
    images: [
      "https://i.imgur.com/Lqaqz59.jpg",
      "https://i.imgur.com/uSqWK0m.jpg",
      "https://i.imgur.com/atWACf1.jpg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Garden",
  },
  {
    id: 50,
    name: "Trendy Pink-Tinted Sunglasses",
    price: 38,
    description:
      "Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.",
    images: [
      "https://i.imgur.com/0qQBkxX.jpg",
      "https://i.imgur.com/I5g1DoE.jpg",
      "https://i.imgur.com/myfFQBW.jpg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Garden",
  },
  {
    id: 51,
    name: "Elegant Glass Tumbler Set",
    price: 50,
    description:
      "Enhance your drinkware collection with our sophisticated set of glass tumblers, perfect for serving your favorite beverages. This versatile set includes both clear and subtly tinted glasses, lending a modern touch to any table setting. Crafted with quality materials, these durable tumblers are designed to withstand daily use while maintaining their elegant appeal.",
    images: [
      "https://i.imgur.com/TF0pXdL.jpg",
      "https://i.imgur.com/BLDByXP.jpg",
      "https://i.imgur.com/b7trwCv.jpg",
    ],
    createdAt: "2024-10-20T00:42:32.000Z",
    updatedAt: "2024-10-20T00:42:32.000Z",
    category: "Garden",
  },
  {
    id: 52,
    name: "Camisas Columbia",
    price: 200,
    description: "Camisa con proteccion solar e impermiable",
    images: [
      '["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ULgwOHQRZZdpvO-ueD3KVQHaHa%26pid%3DApi&f=1&ipt=0dd2f1400f4db872059a67b98e6b17460fce7b6a4d67c1d85253805aaef2ba9f&ipo=images"]',
    ],
    createdAt: "2024-10-20T01:13:19.000Z",
    updatedAt: "2024-10-20T01:13:19.000Z",
    category: "kids",
  },
  {
    id: 53,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T01:37:05.000Z",
    updatedAt: "2024-10-20T01:37:05.000Z",
    category: "kids",
  },
  {
    id: 54,
    name: "New Product Course",
    price: 9999,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T02:01:31.000Z",
    updatedAt: "2024-10-20T02:01:31.000Z",
    category: "kids",
  },
  {
    id: 55,
    name: "212",
    price: 212,
    description: "A description",
    images: [
      '["https://api.escuelajs.co/api/v1/files/cfcf.jpg"',
      '"https://api.escuelajs.co/api/v1/files/5242.jpg"',
      '"https://api.escuelajs.co/api/v1/files/9683.jpg"]',
    ],
    createdAt: "2024-10-20T02:09:01.000Z",
    updatedAt: "2024-10-20T03:41:26.000Z",
    category: "kids",
  },
  {
    id: 56,
    name: "212",
    price: 212,
    description: "A description",
    images: ['["https://api.escuelajs.co/api/v1/files/35b4.svg"]'],
    createdAt: "2024-10-20T02:10:32.000Z",
    updatedAt: "2024-10-20T03:38:49.000Z",
    category: "kids",
  },
  {
    id: 58,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://api.escuelajs.co/api/v1/files/e1610.svg"]'],
    createdAt: "2024-10-20T02:47:11.000Z",
    updatedAt: "2024-10-20T03:39:45.000Z",
    category: "kids",
  },
  {
    id: 59,
    name: "Acer",
    price: 10,
    description: "A description",
    images: ['["https://api.escuelajs.co/api/v1/files/a9ab.jpg"]'],
    createdAt: "2024-10-20T03:17:25.000Z",
    updatedAt: "2024-10-20T03:40:28.000Z",
    category: "kids",
  },
  {
    id: 60,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://api.escuelajs.co/api/v1/files/9a7c.svg"]'],
    createdAt: "2024-10-20T03:40:36.000Z",
    updatedAt: "2024-10-20T04:03:18.000Z",
    category: "kids",
  },
  {
    id: 63,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://api.escuelajs.co/api/v1/files/bf11.svg"]'],
    createdAt: "2024-10-20T03:56:44.000Z",
    updatedAt: "2024-10-20T04:02:47.000Z",
    category: "kids",
  },
  {
    id: 64,
    name: "Gorgeous Plastic Tuna",
    price: 35343,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    images: [
      '["https://loremflickr.com/640/480?lock=5367969559347200"',
      '"https://loremflickr.com/640/480?lock=3897349940183040"',
      '"https://picsum.photos/seed/eHvHZhdb/640/480"]',
    ],
    createdAt: "2024-10-20T03:58:00.000Z",
    updatedAt: "2024-10-20T03:58:00.000Z",
    category: "furniture",
  },
  {
    id: 66,
    name: "Unbranded Fresh Ball",
    price: 32059,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    images: [
      '["https://picsum.photos/seed/AS17byf/640/480"',
      '"https://picsum.photos/seed/1u48N/640/480"',
      '"https://picsum.photos/seed/Y039VaZFKG/640/480"]',
    ],
    createdAt: "2024-10-20T03:58:48.000Z",
    updatedAt: "2024-10-20T04:26:18.000Z",
    category: "furniture",
  },
  {
    id: 67,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://api.escuelajs.co/api/v1/files/892c.svg"]'],
    createdAt: "2024-10-20T04:14:40.000Z",
    updatedAt: "2024-10-20T04:26:50.000Z",
    category: "kids",
  },
  {
    id: 79,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://api.escuelajs.co/api/v1/files/2428.jpg"]'],
    createdAt: "2024-10-20T06:19:08.000Z",
    updatedAt: "2024-10-20T06:51:10.000Z",
    category: "kids",
  },
  {
    id: 84,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://api.escuelajs.co/api/v1/files/892c.svg"]'],
    createdAt: "2024-10-20T07:23:13.000Z",
    updatedAt: "2024-10-20T07:23:39.000Z",
    category: "kids",
  },
  {
    id: 85,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://api.escuelajs.co/api/v1/files/892c.svg"]'],
    createdAt: "2024-10-20T07:31:50.000Z",
    updatedAt: "2024-10-20T07:53:08.000Z",
    category: "kids",
  },
  {
    id: 86,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://api.escuelajs.co/api/v1/files/892c.svg"]'],
    createdAt: "2024-10-20T07:39:12.000Z",
    updatedAt: "2024-10-20T07:53:14.000Z",
    category: "kids",
  },
  {
    id: 87,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://api.escuelajs.co/api/v1/files/892c.svg"]'],
    createdAt: "2024-10-20T07:45:45.000Z",
    updatedAt: "2024-10-20T07:53:19.000Z",
    category: "kids",
  },
  {
    id: 89,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T07:59:01.000Z",
    updatedAt: "2024-10-20T07:59:01.000Z",
    category: "kids",
  },
  {
    id: 90,
    name: "ConfirmDialog",
    price: 11,
    description:
      "ConfirmDialog is backed by a service utilizing Observables to display confirmation windows easily that can be shared by multiple actions on the same component.",
    images: ['["https://api.escuelajs.co/api/v1/files/ca10c.svg"]'],
    createdAt: "2024-10-20T08:01:30.000Z",
    updatedAt: "2024-10-20T08:03:20.000Z",
    category: "Outdoors",
  },
  {
    id: 91,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T08:22:12.000Z",
    updatedAt: "2024-10-20T08:22:12.000Z",
    category: "kids",
  },
  {
    id: 92,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T08:38:47.000Z",
    updatedAt: "2024-10-20T08:38:47.000Z",
    category: "kids",
  },
  {
    id: 93,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T08:47:46.000Z",
    updatedAt: "2024-10-20T08:47:46.000Z",
    category: "kids",
  },
  {
    id: 94,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T08:47:47.000Z",
    updatedAt: "2024-10-20T08:47:47.000Z",
    category: "kids",
  },
  {
    id: 95,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T08:54:10.000Z",
    updatedAt: "2024-10-20T08:54:10.000Z",
    category: "kids",
  },
  {
    id: 96,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T09:01:19.000Z",
    updatedAt: "2024-10-20T09:01:19.000Z",
    category: "kids",
  },
  {
    id: 97,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T09:20:48.000Z",
    updatedAt: "2024-10-20T09:20:48.000Z",
    category: "kids",
  },
  {
    id: 98,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T09:30:36.000Z",
    updatedAt: "2024-10-20T09:30:36.000Z",
    category: "kids",
  },
  {
    id: 99,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T09:38:22.000Z",
    updatedAt: "2024-10-20T09:38:22.000Z",
    category: "kids",
  },
  {
    id: 100,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T09:44:54.000Z",
    updatedAt: "2024-10-20T09:44:54.000Z",
    category: "kids",
  },
  {
    id: 101,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T09:51:42.000Z",
    updatedAt: "2024-10-20T09:51:42.000Z",
    category: "kids",
  },
  {
    id: 102,
    name: "New Product",
    price: 10,
    description: "A description",
    images: ['["https://placeimg.com/640/480/any"]'],
    createdAt: "2024-10-20T09:58:10.000Z",
    updatedAt: "2024-10-20T09:58:10.000Z",
    category: "kids",
  },
];

async function main() {
  await prisma.products.createMany({
    data: productsData,
  });

  const allProducts = await prisma.products.findMany();

  await Promise.all(
    allProducts.map(async (product, index) => {
      const reviews = [
        {
          reviewerName: `Reviewer ${index * 3 + 1}`,
          rating: Math.floor(Math.random() * 5) + 1,
          comment: `This is a comment for Product ${product.id} from Reviewer ${
            index * 3 + 1
          }.`,
          productId: product.id,
        },
        {
          reviewerName: `Reviewer ${index * 3 + 2}`,
          rating: Math.floor(Math.random() * 5) + 1,
          comment: `This is a comment for Product ${product.id} from Reviewer ${
            index * 3 + 2
          }.`,
          productId: product.id,
        },
        {
          reviewerName: `Reviewer ${index * 3 + 3}`,
          rating: Math.floor(Math.random() * 5) + 1,
          comment: `This is a comment for Product ${product.id} from Reviewer ${
            index * 3 + 3
          }.`,
          productId: product.id,
        },
      ];

      await prisma.review.createMany({
        data: reviews,
      });
    })
  );

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
