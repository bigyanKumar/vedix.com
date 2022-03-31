console.log("hey")

let data = {
    imgurl:["https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vaimal-One-Step-Clarifying-Facial-Toner-For-Acne-Prone-Skin_400x400.jpg?v=1640281184","https://cdn.shopify.com/s/files/1/0037/7690/5283/products/2_6d36dbd5-ebfc-4b2d-86d6-85b208a223cd_400x400.jpg?v=1640281184","https://cdn.shopify.com/s/files/1/0037/7690/5283/products/3_9f277982-c2de-4a01-a2c1-7be2c6c45537_400x400.jpg?v=1640281184","https://cdn.shopify.com/s/files/1/0037/7690/5283/products/4_89a81160-7742-4f53-9b5d-8f6340e0becf_400x400.jpg?v=1640281184"],
    name : "Vaimal One Step Clarifying Facial Toner For Acne Prone Skin 100ml",
    review : 5,
    priceS : 500,
    price : 359,
    category : "skin"
   
}

let desSkin = {
    productDes1 : "This product is made with Tea Tree, Salicylic Acid, Witch Hazel and more than 12 herbs that work together to reduce acne and redness caused by it. ",
    productsDes2 : "It helps unclog pores and purify skin. The herbs increase hydration and keep skin moisturized"
}



let page = document.getElementById("page");
page.innerHTML = `<h4><a href=""#>Home</a> > <a href=""#>All</a> > <a href=""#>Products</a> > ${data.name} </h4>`;

let img = document.getElementById("prodImg");
let prodimg = document.createElement("img");
prodimg.src=data.imgurl[0];
img.append(prodimg);
var imglist1 = document.getElementById("imglist");
let x= data.imgurl;
console.log(x)
for(let i =0;i<x.length;i++){
    let img = document.createElement("img");
    img.src=x[i];
    console.log(x[i])
    imglist1.append(img);
}


let prodinfo =document.getElementById("prod1_info");

let h2 = document.createElement("h2");
h2.innerText=data.name;

let p = document.createElement("p");
p.innerText = "⭐"+ data.review ;
p.setAttribute("id", "review");
let h3 = document.createElement("h3");
h3.innerHTML=`RS. ${data.price} <s>${data.priceS}</s>`
prodinfo.append(h2,p,h3);








if(data.category=='skin')
{

}





