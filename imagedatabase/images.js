//let imgages = JSON.parse(localStorage.getItem("images"))||[]


let images = [{
    img:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/shivaprasad.jpg?v=1605863916",
    str:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/rating-star.svg?v=1589803849",
    con:"Concern: Acne",
    Ele:"Elevated Doshas:  Pitta & Kapha",
    dsc:"I liked using products that are customised for me and totally natural! Vedix customised Ayurvedic skin care regimen has helped me get clear skin. Trust me, Vedix works better than any other skin care products out there. My skin feels so healthy and refreshed throughout the day. I highly recommend Vedix! ",
    name:"Shiva Prasad",
    post:"Software Engineer"
},
{
    img:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/meenachowdari.jpg?v=1605863916",
    str:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/rating-star.svg?v=1589803849",
    con:"Concern: Tan & Acne",
    Ele:"Elevated Doshas: Pitta and Vata",
    dsc:"I was breaking out so much and I didn't even know why. So I tried to go to one of those skin clinics and they suggested really expensive treatments. I found Vedix while searching for clear skin solutions online. Vedix is natural and is literally made for your unique skin. My vedix skin care regimen has helped me get my clear skin back!",
    name:"Meena Chowdari",
    post:"Interior Designer"
},{
    img:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/ravivarma.png?v=1595576336",
    str:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/rating-star.svg?v=1589803849",
    con:"Concern: AcneConcern: Hair fall",
    Ele:"Elevated Doshas: Pitta and Vata",
    dsc:"“I tried so hard for so long to fix my hair fall. But whatever I tried not only didn't work but also made it worse. When I heard about ayurvedic customised regimen, I could only think of two things, 1. It’s Ayurvedic so it has to be safe and 2. It is specifically made for my needs. So, I figured I’d give Vedix a try and I’m really glad that I did, I got my hair back and I see an evident difference from before!",
    name:"Ravi Varma",
    post:"Accountant"
},{
    img:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/lata_krishna.png?v=1595576328",
    str:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/rating-star.svg?v=1589803849",
    con:"Concern: Detox and Hair Health",
    Ele:"Elevated Doshas: Pitta and Vata",
    dsc:"“My family has dealt with some of the serious heart conditions out there and I always wanted to protect myself from it. When I came across Vedix Heart health capsule (Vidhura Prolive Reboot) I saw that it's made with all-natural elements so it's safe and honestly I didn't see any reason as to why I shouldn't try it. So, I went ahead and placed an order and now, I feel much better and less worried.”",
    name:"Lata Krishna",
    post:"It Professional"
},{
    img:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/sukumar.png?v=1595576320",
    str:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/rating-star.svg?v=1589803849",
    con:"Concern: Detox and Heart Health",
    Ele:"Elevated Doshas: Pitta and Vata",
    dsc:"“I travel a lot for my work, but only recently I noticed that I was falling sick often and I started to get breakouts on my skin. I never had this problem before, so I went online to see what was going on and found Vedix’s Health Quiz. I placed an order of the recommended wellness supplement to balance my elevated doshas and their Ultra Replenish Supplement for radiant skin. I could see results within a few weeks. I highly recommend it!”",
    name:"Sukumar Choudhary",
    post:"Sales Manager"
},{
    img:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/prithi.png?v=1595576311",
    str:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/rating-star.svg?v=1589803849",
    con:"Concern: Detox and Skin Health",
    Ele:"Elevated Doshas: Pitta and Vata",
    dsc:"“I tried so hard for so long to fix my hair fall. But whatever I tried not only didn't work but also made it worse. When I heard about ayurvedic customised regimen, I could only think of two things, 1. It’s Ayurvedic so it has to be safe and 2. It is specifically made for my needs. So, I figured I’d give Vedix a try and I’m really glad that I did, I got my hair back and I see an evident difference from before!",
    name:"Prithi Patel",
    post:"Radio Sales"
}]

localStorage.setItem("images",JSON.stringify(images))

// PRODUCT DATABASE

let hair = [{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/collections-full-regimen-hair.png?v=1616498725",
    name:"Ahuta Root Stimulating Hair Oil For Women",
    price:699,
    rating:5,
    dis:5,
    cat:"Hair-Oil",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Ahuta--Root-Stimulating-Hair-oil-Men_e0088b8f-a778-403e-81e9-9700bf8427c1_400x400.jpg?v=1640273367",
    name:"Jeevath Root Stimulating Hair Oil For Women 100ml",
    price:699,
    rating:5,
    dis:10,
    cat:"Hair-Oil",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Niryath-Root-Stimulating-Hair-oil_400x400.jpg?v=1640273571",
    name:"Niryath Root Stimulating Hair Oil For Women",
    price:699,
    rating:5,
    dis:10,
    cat:"Hair-Oil",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/vapra-Root-Stimulating-Hair-oil_400x400.jpg?v=1640273051",
    name:"Vapra Root Stimulating Hair Oil For Women",
    price:699,
    rating:4.5,
    dis:10,
    cat:"Hair-Oil",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/vanya-Root-Stimulating-Hair-oil_400x400.jpg?v=1640273757",
    name:"Vanya Root Stimulating Hair Oil For Women",
    price:699,
    rating:4,
    dis:10,
    cat:"Hair-Oil",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Praya-Root-Stimulating-Hair-oil_400x400.jpg?v=1640273247",
    name:"Praya Root Stimulating Hair Oil For Women",
    price:699,
    rating:4.3,
    dis:10,
    cat:"Hair-Oil",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Ahuta--Root-Stimulating-Hair-oil-Men_e0088b8f-a778-403e-81e9-9700bf8427c1_400x400.jpg?v=1640273367",
    name:"Ahuta Root Stimulating Hair Oil For Men",
    price:699,
    rating:3,
    dis:10,
    cat:"Hair-Oil",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Dhavath-hairfall-shampoo_e40d3747-7c10-4fdb-9cff-cb536e5a6502_400x400.jpg?v=1640274128",
    name:"Dhavath Hairfall Shampoo For Women",
    price:449,
    rating:5,
    dis:5,
    cat:"Shampoo",  
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vikleda-hairfall-shampoo_400x400.jpg?v=1640274071",
    name:"Vardara Deep Conditioning Shampoo with Dandruff Care For Dry Hair For Women",
    price:449,
    rating:4.8,
    dis:5,
    cat:"Shampoo", 
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vardara-hairfall-shampoo-Men_400x400.jpg?v=1640274205",
    name:"Taritha Hairfall Shampoo with Dandruff Care For Women",
    price:449,
    rating:5,
    dis:10,
    cat:"Shampoo", 
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Taritha-hairfall-shampoo_af15d9af-9eb4-44f4-b321-3a9e0e81ac96_400x400.jpg?v=1640274308",
    name:"Dhavath Hairfall Shampoo For Men",
    price:449,
    rating:4,
    dis:10,
    cat:"Shampoo", 
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Taritha-hairfall-shampoo-Men_400x400.jpg?v=1640274585",
    name:"Taritha Hairfall Shampoo with Dandruff Care For Men",
    price:449,
    rating:4.6,
    dis:10,
    cat:"Shampoo", 
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Dhavath-hairfall-shampoo-Men_400x400.jpg?v=1640274483",
    name:"Vikleda Deep Conditioning Shampoo For Dry Hair For Men",
    price:449,
    rating:5,
    dis:10,
    cat:"Shampoo", 
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vardara-hairfall-shampoo-Men_4a107429-94ef-4a72-91ae-64e4e0a850d6_400x400.jpg?v=1640274539",
    name:"Vardara Deep Conditioning Shampoo with Dandruff Care For Dry Hair For Men",
    price:449,
    rating:4,
    dis:5,
    cat:"Shampoo", 
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/nibidha-serum-women_400x400.jpg?v=1640277298",
    name:"Vithan Pro Hair Growth Serum For Women",
    price:799,
    rating:5,
    dis:15,
    cat:"Hair-Serum",   
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Samroha-Pro-hair-growth-Serum_4e0e3553-b442-40c0-b733-6f40fa6eb3ff_400x400.jpg?v=1640277721",
    name:"Nuyantra Pro Hair Growth Serum x Dandruff Care For Women",
    price:799,
    rating:5,
    dis:15,
    cat:"Hair-Serum",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Nuyantra-Pro-hair-growth-Serum-Men_a79f662b-6071-40d9-93f9-94eb533787f4_400x400.jpg?v=1640278488",
    name:"Nibhida Advanced Hair Growth Serum x Dandruff Care For Women",
    price:799,
    rating:5,
    dis:15,
    cat:"Hair-Serum",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vithan-Pro-hair-growth-Serum-Men_440e23c2-78a7-4df4-b5ab-e2060bacbe10_400x400.jpg?v=1640279329",
    name:"Samroha Advanced Hair Growth Serum For Women",
    price:799,
    rating:4,
    dis:15,
    cat:"Hair-Serum",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Samroha-Pro-hair-growth-Serum-Men_3728a681-ffea-40a8-96b3-9246de4380f1_400x400.jpg?v=1640278558",
    name:"Nuyantra Pro Hair Growth Serum x Dandruff Care For Men",
    price:799,
    rating:5,
    dis:15,
    cat:"Hair-Serum",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_f32a62d5-1fb1-4b3f-b926-1ce9f606fdd8_400x400.jpg?v=1640162613",
    name:"Vithan Pro Hair Growth Serum For Men",
    price:799,
    rating:5,
    dis:15,
    cat:"Hair-Serum",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_5ab3d140-c5e5-465f-8748-22923c6f215f_400x400.jpg?v=1640162485",
    name:"Samroha Advanced Hair Growth Serum For Men",
    price:799,
    rating:5,
    dis:15,
    cat:"Hair-Serum",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_011c2c69-dde5-4bfd-9a92-d5c02f301e85_400x400.jpg?v=1640162442",
    name:"Nibhida Advanced Hair Growth Serum x Dandruff Care For Men",
    price:799,
    rating:5,
    dis:15,
    cat:"Hair-Serum", 
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_1cc940d1-ba96-458d-aa84-547234080827_400x400.jpg?v=1640162546",
    name:"Prachay Serum For Mild Hair Fall",
    price:799,
    rating:5,
    dis:15,
    cat:"Hair-Serum",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vartha-Hydrating-No-Frizz-Hair-Conditioner_400x400.jpg?v=1640279423",
    name:"Rachan Intense Damage Restore Leave-In Conditioner For Hair",
    price:449,
    rating:5,
    dis:20,
    cat:"Conditioner",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Leave-In-Conditioning-Hair-Mist_400x400.jpg?v=1640278995",
    name:"Vartha Hydrating No-Frizz Hair Conditioner",
    price:449,
    rating:5,
    dis:20,
    cat:"Conditioner",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Rachan-intense-leave-in-conditioner-newheroimage_400x400.jpg?v=1640279242",
    name:"Leave-In Conditioning Hair Mist",
    price:449,
    rating:5,
    dis:20,
    cat:"Conditioner",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Sushath-no-Frizz-Moisture--leave-in-conditioner_400x400.jpg?v=1640279039",
    name:"Rachan Intense Damage Restore Leave-In Conditioner For Hair",
    price:449,
    rating:5,
    dis:20,
    cat:"Conditioner",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Sushath-no-Frizz-Moisture--leave-in-conditioner_400x400.jpg?v=1640279039",
    name:"Sushath No-Frizz Intense Moisture Solution Leave-In Conditioner For Hair",
    price:449,
    rating:4.7,
    dis:20,
    cat:"Conditioner",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Parfstar-super-shleid-sun-block-intense-leave-in-conditioner_400x400.jpg?v=1640279191",
    name:"Paristar Super Shield Sun Block Leave-In Conditioner For Hair",
    price:449,
    rating:4,
    dis:20,
    cat:"Conditioner",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hair-Pack-Onion-_-Fenugreek-_500px_400x400.jpg?v=1641879148",
    name:"Druti SheaCare Deep Nourish Hair Mask For Dry Hair",
    price:499,
    rating:4.3,
    dis:20,
    cat:"Hair-Pack",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_06d87d40-9829-4d6e-8881-5f3a69c95791_400x400.jpg?v=1640158048",
    name:"Root Strengthening Hair Pack",
    price:499,
    rating:5,
    dis:20,
    cat:"Hair-Pack",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/HeroImage_400x400.jpg?v=1640158049",
    name:"Pratida Shine Rebound Hydrating Hair Mask For Coloured & Chemically Treated Hair",
    price:499,
    rating:5,
    dis:20,
    cat:"Hair-Pack",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_ab6cc254-c65b-4d2b-8822-dd3f2741e00b_400x400.jpg?v=1640158037",
    name:"Niktha VitC Oil Balance Hair Mask For Greasy Hair",
    price:499,
    rating:5,
    dis:20,
    cat:"Hair-Pack",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/customized-hair-growth-booster-hibiscus-combo_480x480.png?v=1634639909",
    name:"Customized Hair Growth Booster Hibiscus Combo",
    price:718,
    rating:5,
    dis:20,
    cat:"Hair-Pack-COMBO",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/customized-hair-growth-booster-onion-combo_480x480.png?v=1634639635",
    name:"Customized Hair Growth Booster Onion Combo",
    price:718,
    rating:4.3,
    dis:20,
    cat:"Hair-Pack-COMBO",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/greasy-scalp-hydration-kit_480x480.jpg?v=1634638194",
    name:"Greasy Scalp Hydration Kit",
    price:720,
    rating:5,
    dis:4,
    cat:"Hair-Pack-COMBO",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/advanced-dandruff-care-duo_480x480.png?v=1634639192",
    name:"Customized Hair Growth Booster Onion Combo",
    price:763,
    rating:4,
    dis:6,
    cat:"Hair-Pack-COMBO",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/dandruff-care-duo_480x480.png?v=1634639091",
    name:"Dandruff Care Duo",
    price:845,
    rating:3.4,
    dis:6,
    cat:"Hair-Pack-COMBO",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/basic-hair-growth-essentials-for-normal-oily-scalp_480x480.png?v=1634639445",
    name:"Basic Hair Growth Essentials For Normal-Oily Scalp",
    price:868,
    rating:4.5,
    dis:12,
    cat:"Hair-Pack-COMBO",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/customized-hair-growth-booster-tea-tree-combo_480x480.png?v=1634639995",
    name:"Customized Hair Growth Booster Tea Tree Combo",
    price:863,
    rating:4.2,
    dis:14,
    cat:"Hair-Pack-COMBO",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/customized-hair-growth-booster-lotus-combo_480x480.png?v=1634639724",
    name:"Customized Hair Growth Booster Lotus Combo",
    price:753,
    rating:4.5,
    dis:17,
    cat:"Hair-Pack-COMBO",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/basic-hair-growth-essentials-for-oily-scalp_480x480.png?v=1634639299",
    name:"Basic Hair Growth Essentials For Oily Scalp",
    price:757,
    rating:4.2,
    dis:11,
    cat:"Hair-Pack-COMBO",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Antara-ClearMatte-Pore-Refining-Facial-Toner-For-Oily-Acne-Prone-Skin_400x400.jpg?v=1640281242",
    name:"Antara ClearMatte Pore Refining Facial Toner For Oily Acne Prone Skin",
    price:761,
    rating:3.1,
    dis:15,
    cat:"Hair-Pack-COMBO",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vaimal-One-Step-Clarifying-Facial-Toner-For-Acne-Prone-Skin_400x400.jpg?v=1640281184",
    name:"Vaimal One Step Clarifying Facial Toner For Acne Prone Skin",
    price:993,
    rating:4.1,
    dis:18,
    cat:"Hair-Pack-COMBO",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Nishith-Hero-Image_400x400.jpg?v=1640157749",
    name:"Nishith Pro Moisture Hair Mask",
    price:821,
    rating:3.2,
    dis:12,
    cat:"Hair-Pack-COMBO",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vilith-Hero-Image_400x400.jpg?v=1640158435",
    name:"Vilith Bounce Enhance Hair Mask",
    price:546,
    rating:5,
    dis:4,
    cat:"Hair-Pack-COMBO",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Satmay-Hero-Image_400x400.jpg?v=1640157762",
    name:"Satmay Deep Hydration Hair Mask",
    price:757,
    rating:3.2,
    dis:5,
    cat:"ONION-Hair-MASK",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/collections-full-regimen-skin.png?v=1616498725",
    name:"Hair Care Regimen",
    price:343,
    rating:4.2,
    dis:14,
    cat:"Hair-CARE-REGIMEN",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/collections-full-regimen-hair.png?v=1616498725",
    name:"Skin Care Regimen",
    price:454,
    rating:4.8,
    dis:13,
    cat:"Hair-CARE-REGIMEN" ,
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Varta-Oil-Pulling-Oral-Care-Oil_df7bee29-9a4b-4b8d-a924-019c17472fe0_400x400.jpg?v=1640281288",
    name:"Varta Oil Pulling Oral Care Oil",
    price:976,
    rating:4.2,
    dis:19,
    cat:"Hair-Pack-OILS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Shuchit-Oil-Pulling-Oral-Care-Oil_e320edbd-c8f8-4cde-af2e-ca2e55baaac7_400x400.jpg?v=1640281359",
    name:"Shuchit Oil Pulling Oral Care Oil",
    price:758,
    rating:3.8,
    dis:11,
    cat:"Hair-Pack-OILS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Shatra-Oil-Pulling-Oral-Care-Oil_f40f650b-1c78-4f8e-8e6f-e35de6bc6ea4_400x400.jpg?v=1640281336",
    name:"Shatra Oil Pulling Oral Care Oil",
    price:432,
    rating:3.2,
    dis:12,
    cat:"ORAL-CARE-OILS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Anuva-01_400x400.jpg?v=1641988328",
    name:"Anaha Deep Cleansing Face Wash For Women",
    price:499,
    rating:3.1,
    dis:12,
    cat:"CLEANSERS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Anaha-01_400x400.jpg?v=1641988492",
    name:"Medhur Moisturizing Face Wash For Men",
    price:397,
    rating:4.9,
    dis:14,
    cat:"CLEANSERS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Medhur-01_400x400.jpg?v=1641993798",
    name:"Anaha Deep Cleansing Face Wash For Women",
    price:432,
    rating:4.2,
    dis:12,
    cat:"CLEANSERS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vilaksh-01_400x400.jpg?v=1641994061",
    name:"Prahas Deep Cleansing Face Wash For Men",
    price:453,
    rating:4.1,
    dis:10,
    cat:"CLEANSERS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Prahas-01_400x400.jpg?v=1641993846",
    name:"Vilaksh Ultra Gentle Face Wash For Men",
    price:543,
    rating:4.2,
    dis:16,
    cat:"CLEANSERS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Sthavi-HydroPlenish-Moisturizing-Facial-Cream-For-Women_400x400.jpg?v=1640279900",
    name:"Sthavi HydroPlenish Moisturizing Facial Cream For Women",
    price:878,
    rating:5,
    dis:15,
    cat:"MOISTURISERS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Anudha-Glow-Restore-Moisturizing-Face-Lotion-For-Women_400x400.jpg?v=1640280130",
    name:"Niraj HydroMatte Oil Free Face Gel For Women",
    price:678,
    rating:4.3,
    dis:16,
    cat:"MOISTURISERS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Niraj-HydroMatte-Oil-Free-Face-Gel-For-Women_400x400.jpg?v=1640280069",
    name:"Siddh HydraPlenish Moisturizing Facial Lotion For Men",
    price:765,
    rating:5,
    dis:14,
    cat:"MOISTURISERS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Siddh-HydraPlenish-Moisturizing-Facial-Lotion-For-Men_400x400.jpg?v=1640280255",
    name:"Niraj HydroMatte Oil Free Face Gel For Women",
    price:565,
    rating:3.2,
    dis:14,
    cat:"MOISTURISERS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Ekansh-HydroTonic-Moisturizing-Facial-Cream-For-Men_400x400.jpg?v=1640280170",
    name:"Ekansh HydroTonic Moisturizing Facial Cream For Men",
    price:434,
    rating:1.2,
    dis:12,
    cat:"MOISTURISERS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Kavan-HydraLite-Moisturizing-Facial-Gel-For-Men_400x400.jpg?v=1640280211",
    name:"Ekansh HydroTonic Moisturizing Facial Cream For Men",
    price:437,
    rating:3.8,
    dis:13,
    cat:"MOISTURISERS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Kavan-HydraLite-Moisturizing-Facial-Gel-For-Men_400x400.jpg?v=1640280211",
    name:"Anudha Glow Restore Moisturizing Face Lotion For Women",
    price:453,
    rating:3.2,
    dis:14,
    cat:"MOISTURISERS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Avas-Spot-Correcting-Face-Serum-For-Women_400x400.jpg?v=1640280314",
    name:"Avas Spot Correcting Face Serum For Women",
    price:654,
    rating:4.1,
    dis:12,
    cat:"FACE-SERUMS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Prakhya-Acne-Rescue-Face-Serum-For-Women_400x400.jpg?v=1640280352",
    name:"Aloka VC Brightening Face Serum For Women",
    price:543,
    rating:3.1,
    dis:14,
    cat:"FACE-SERUMS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Aloka-VC-Brightening-Face-Serum-For-Women_400x400.jpg?v=1640280398",
    name:"Prakhya Acne Rescue Face Serum For Women",
    price:567,
    rating:2.1,
    dis:17,
    cat:"FACE-SERUMS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Prastha-FirmRestore-Face-Serum-For-Women-NewHeroImage_400x400.jpg?v=1640280613",
    name:"Avas Spot Correcting Face Serum For Women",
    price:676,
    rating:2.1,
    dis:3,
    cat:"FACE-SERUMS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Irya-Spot-Correcting-Face-Serum-For-Men_400x400.jpg?v=1640280660",
    name:"Shresht Acne Control Face Serum For Men",
    price:235,
    rating:3,
    dis:4,
    cat:"FACE-SERUMS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Shresht-Acne-Control-Face-Serum-For-Men_400x400.jpg?v=1640280835",
    name:"Avi PureGlow Antioxidant Face Serum For Men",
    price:345,
    rating:4,
    dis:7,
    cat:"FACE-SERUMS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Arin-Collagen-Revival-Anti-Ageing-Face-Serum-For-Men_400x400.jpg?v=1640280801",
    name:"Arin Collagen Revival Anti Ageing Face Serum For Men",
    price:545,
    rating:4,
    dis:4,
    cat:"FACE-SERUMS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Anagh-Face-Oil-For-Pigmented-Skin_400x400.jpg?v=1640280920",
    name:"Anagh Face Oil For Pigmented Skin",
    price:434,
    rating:3.4,
    dis:3,
    cat:"FACE-OILS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vita-Face-Oil-For-Ageing-Skin_400x400.jpg?v=1640280950",
    name:"Vita Face Oil For Ageing Skin",
    price:535,
    rating:2.1,
    dis:4,
    cat:"FACE-OILS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Abhyud-Face-Oil-For-Acne-Prone-Skin_400x400.jpg?v=1640280891",
    name:"Abhyud Face Oil For Acne Prone Skin",
    price:565,
    rating:5,
    dis:5,
    cat:"FACE-OILS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Saday-Gentle-Glow-Hydrating-Face-Toner-For-Normal-Skin_400x400.jpg?v=1640281151",
    name:"Saday Gentle Glow Hydrating Face Toner For Normal Skin",
    price:445,
    rating:3,
    dis:12,
    cat:"FACE-TONER",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Antara-ClearMatte-Pore-Refining-Facial-Toner-For-Oily-Acne-Prone-Skin_400x400.jpg?v=1640281242",
    name:"Antara ClearMatte Pore Refining Facial Toner For Oily Acne Prone Skin",
    price:554,
    rating:4,
    dis:15,
    cat:"FACE-TONER",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vaimal-One-Step-Clarifying-Facial-Toner-For-Acne-Prone-Skin_400x400.jpg?v=1640281184",
    name:"Vaimal One Step Clarifying Facial Toner For Acne Prone Skin",
    price:545,
    rating:3,
    dis:14,
    cat:"FACE-TONER",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Dyuth-Sebum-Balancing-Facial-Toner-For-Oily-Skin_400x400.jpg?v=1640281212",
    name:"Dyuth Sebum Balancing Facial Toner For Oily Skin",
    price:745,
    rating:3,
    dis:16,
    cat:"FACE-TONER",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Shatra-Oil-Pulling-Oral-Care-Oil_f40f650b-1c78-4f8e-8e6f-e35de6bc6ea4_400x400.jpg?v=1640281336",
    name:"Shatra Oil Pulling Oral Care Oil",
    price:13,
    rating:5,
    dis:18,
    cat:"PULLING-OILS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Shuchit-Oil-Pulling-Oral-Care-Oil_e320edbd-c8f8-4cde-af2e-ca2e55baaac7_400x400.jpg?v=1640281359",
    name:"Shuchit Oil Pulling Oral Care Oil",
    price:342,
    rating:4,
    dis:6,
    cat:"PULLING-OILS",
},{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Varta-Oil-Pulling-Oral-Care-Oil_df7bee29-9a4b-4b8d-a924-019c17472fe0_400x400.jpg?v=1640281288",
    name:"Varta Oil Pulling Oral Care Oil",
    price:423,
    rating:2,
    dis:3,
    cat:"PULLING-OILS",
}
];

localStorage.setItem("products",JSON.stringify(hair));


// let skin=[
// ];

// localStorage.setItem("face-product",JSON.stringify(skin));