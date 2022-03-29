let div = document.createElement("div");
  
  let head2 = document.createElement("h2");
  head2.innerText="Choose A Plan That's Right For You";
  div.append(head2);
//   console.log(div)

let para = document.createElement("p");
let bdata= document.createElement("b");
bdata.innerText="Extra 20% OFF With Vedix Insider Membership";

para.append(bdata);
// console.log(para);


let div2 = document.createElement("div");
let img = document.createElement("img");
img.setAttribute("src","https://cdn.shopify.com/s/files/1/0037/7690/5283/files/3-step-final.png?v=1638599036");
img.setAttribute("id","newprod");

function hairFun()
{
img.setAttribute("src","https://cdn.shopify.com/s/files/1/0037/7690/5283/files/3-step-final.png?v=1638599036");
img.setAttribute("id","newprod");
document.querySelector("#skin").style.color="grey";
document.querySelector("#hair").style.color="black";
}

function skinFun()
{
img.setAttribute("src","https://cdn.shopify.com/s/files/1/0037/7690/5283/files/3-product-skin.png?v=1638528100");
img.setAttribute("id","newprod");
document.querySelector("#hair").style.color="grey";
document.querySelector("#skin").style.color="black";
}




div2.append(img);

let maindiv = document.querySelector("#pricenav");
maindiv.append(div,para,div2)




//readmore1 
let readMoreOne = document.querySelector("#readMoreOne")
readMoreOne.addEventListener("click",function(){
    // console.log("yes");
    let i = document.createElement("img");
    i.setAttribute("src","https://cdn.shopify.com/s/files/1/0037/7690/5283/files/vx_brand_tick.svg?v=1637826925");
    i.setAttribute("id","side1")
    let l1 = document.createElement("div");
    l1.innerText="Includes Customised Oil, Shampoo, Serum & Conditioner = Rs. 1399/- ";
    let d = document.createElement("div");
    d.setAttribute("id","set")
     
    d.append(i,l1);
    // console.log(d)


    let i1= document.createElement("img");
    i1.setAttribute("src","https://cdn.shopify.com/s/files/1/0037/7690/5283/files/vx_brand_tick.svg?v=1637826925");
    i1.setAttribute("id","side2")
    let l2 = document.createElement("div");
    l2.innerText="Includes No-Frizz Hair Conditioner worth at ₹399 ";
    let d2 = document.createElement("div");
    d2.setAttribute("id","set")
    
    d2.append(i1,l2);
    // console.log(d2)

    
    let i2 = document.createElement("img");
    i2.setAttribute("src","https://cdn.shopify.com/s/files/1/0037/7690/5283/files/vx_brand_tick.svg?v=1637826925");
    i2.setAttribute("id","side3")
    let l3 = document.createElement("div");
    l3.innerText="No Frizz Hair Conditioner Formulated with natural ingredients like Shea  Butter, Aloe Vera & Cocoa Butter to deeply hydrate and condition the scalp & make hair smooth & silky.";
    let d3 = document.createElement("div");
    d3.setAttribute("id","set")
   
    d3.append(i2,l3);
    // console.log(d3)
   
   
    readMoreOne.innerHTML=null;
    let tag=document.querySelector("#tag");
            tag.style.display="none";

            let imghr=document.querySelector("#readimg");
            imghr.style.display="none";
     readMoreOne.append(d,d2,d3)
})


// readmore2 
let readMoretwo = document.querySelector("#readMoretwo")
readMoretwo.addEventListener("click",function(){
    // console.log("yes");
    let i = document.createElement("img");
    i.setAttribute("src","https://cdn.shopify.com/s/files/1/0037/7690/5283/files/vx_brand_tick.svg?v=1637826925");
    i.setAttribute("id","side4")
    let l1 = document.createElement("div");
    l1.innerText="Includes Customised Oil, Shampoo, Serum, Conditioner & Hair Pack = Rs. 1499/- ";
    let d = document.createElement("div");
    d.setAttribute("id","set")
     
    d.append(i,l1);
    console.log(d)


    let i1= document.createElement("img");
    i1.setAttribute("src","https://cdn.shopify.com/s/files/1/0037/7690/5283/files/vx_brand_tick.svg?v=1637826925");
    i1.setAttribute("id","side5")
    let l2 = document.createElement("div");
    l2.innerText="Includes No-Frizz Hair Conditioner & Root Strengthening Hair Pack worth at ₹499";
    let d2 = document.createElement("div");
    d2.setAttribute("id","set")
    
    d2.append(i1,l2);
    console.log(d2)

    
    let i2 = document.createElement("img");
    i2.setAttribute("src","https://cdn.shopify.com/s/files/1/0037/7690/5283/files/vx_brand_tick.svg?v=1637826925");
    i2.setAttribute("id","side6")
    let l3 = document.createElement("div");
    l3.innerText="No Frizz Hair Conditioner - Formulated with natural ingredients like Shea Butter, Aloe Vera & Cocoa Butter to deeply hydrate and condition the scalp & make hair smooth & silky..";
    let d3 = document.createElement("div");
    d3.setAttribute("id","set")
   
    d3.append(i2,l3);
    console.log(d3)
   

    let i3 = document.createElement("img");
    i3.setAttribute("src","https://cdn.shopify.com/s/files/1/0037/7690/5283/files/vx_brand_tick.svg?v=1637826925");
    i3.setAttribute("id","side7")
    let l4 = document.createElement("div");
    l4.innerText="No Frizz Hair Conditioner - Formulated with natural ingredients like Shea Butter, Aloe Vera & Cocoa Butter to deeply hydrate and condition the scalp & make hair smooth & silky..";
    let d4 = document.createElement("div");
    d4.setAttribute("id","set")
   
    d4.append(i3,l4);
    console.log(d4)
   
    readMoretwo.innerHTML=null;
    let tag1=document.querySelector("#tag1");
            tag1.style.display="none";

            let imghr1=document.querySelector("#readimg1");
            imghr1.style.display="none";
            readMoretwo.append(d,d2,d3,d4)
})


import {navBar,footer,contain} from "../module/module.js"
console.log(navBar(),footer(),contain());

let x= document.getElementById("container");
x.innerHTML=contain();

let y= document.getElementById("footer");
y.innerHTML=footer();
//  let headOrd = document.getElementById("orderHead")
let z = document.getElementById("nav")
z.innerHTML = navBar()
 
//  headOrd.innerHTML = headOrder()
//  let navbar = document.getElementById("nav")
// //console.log(navBar)
//  navbar.innerHTML = navBar()
//  let Footer = document.getElementById("footer")
// Footer.innerHTML = footer()
// let Container = document.getElementById("container")
// Container.innerHTML = contain()