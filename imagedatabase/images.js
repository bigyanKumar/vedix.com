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

let hair = [{
    src:"https://cdn.shopify.com/s/files/1/0037/7690/5283/files/collections-full-regimen-hair.png?v=1616498725",
    name:"",
    price:"",
    rating:"",
    dis:"",
    cat:"",
},{
    src:"",
    name:"",
    price:"",
    rating:"",
    dis:"",
}]
let skin=[{
    src:"",
    name:"",
    price:"",
    rating:"",
    dis:"",
    cat:"",
}]