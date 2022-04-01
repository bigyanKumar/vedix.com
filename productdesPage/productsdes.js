console.log("hey")
let data=JSON.parse(localStorage.getItem('BuynowPage'));
// let data=data1[0];
console.log("data1",data);

// cat: "Hair-Oil"
// dis: 10
// name: "Praya Root Stimulating Hair Oil For Women"
// price: 699
// qnt: 1
// rating: 4.3
// src: "https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Praya-Root-Stimulating-Hair-oil_400x400.jpg?v=1640273247"



let data2 = {
    imgurl:["https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vaimal-One-Step-Clarifying-Facial-Toner-For-Acne-Prone-Skin_400x400.jpg?v=1640281184","https://cdn.shopify.com/s/files/1/0037/7690/5283/products/2_6d36dbd5-ebfc-4b2d-86d6-85b208a223cd_400x400.jpg?v=1640281184","https://cdn.shopify.com/s/files/1/0037/7690/5283/products/3_9f277982-c2de-4a01-a2c1-7be2c6c45537_400x400.jpg?v=1640281184","https://cdn.shopify.com/s/files/1/0037/7690/5283/products/4_89a81160-7742-4f53-9b5d-8f6340e0becf_400x400.jpg?v=1640281184"],
//     name : "Vaimal One Step Clarifying Facial Toner For Acne Prone Skin 100ml",
//     review : 5,
//     priceS : 500,
//     price : 359,
//     category : "skin"
   
}
data2.imgurl[0] = data.src;





let page = document.getElementById("page");
page.innerHTML = `<h4><a href=""#>Home</a> > <a href=""#>All</a> > <a href=""#>Products</a> > ${data.name} </h4>`;

let img = document.getElementById("prodImg");
let prodimg = document.createElement("img");
prodimg.src=data.src;
img.append(prodimg);
var imglist1 = document.getElementById("imglist");
let x= data2.imgurl;
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
p.innerText = "⭐"+ data.rating ;
p.setAttribute("id", "review");
let h3 = document.createElement("h3");
let Oprice= data.price-(data.dis/100)*data.price ;
h3.innerHTML=`RS. ${Oprice} <s>${data.price}</s>`
prodinfo.append(h2,p,h3);

var  y = document.getElementById("mydiv2");
document.querySelector("#sec2").addEventListener("click",()=>{
  if (y.style.display == "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
});

document.querySelector("#sec1").addEventListener("click",()=>{
  let  y = document.getElementById("mydiv1");
  if (y.style.display == "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
});
document.querySelector("#sec3").addEventListener("click",()=>{
  let  y = document.getElementById("mydiv3");
  if (y.style.display == "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
});
// function show1() {
//   console.log("working")
//     var x = document.querySelector(".mydiv");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
 
  // function show() {
   
  //   if (y.style.display == "none") {
  //     y.style.display = "block";
  //   } else {
  //     y.style.display = "none";
  //   }
  // }
  // function show3() {
  //   var x = document.querySelector(".mydiv3");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }


  let registerForm = document.getElementById("main")

  registerForm.addEventListener("submit", (event) => {
      event.preventDefault()
      
      const formData = new FormData(registerForm);
      let name = formData.get("name_input")
      let email = formData.get("email_input")
      let rating = formData.get("password_input")
      let reviewTitle = formData.get("review_Title")
      let review = formData.get("review_")
      let img = formData.get("img_input")

      let obj = {
          name,
          email,
          rating,
          reviewTitle,
         review,
         img
      }

      let form = localStorage.setItem(JSON.stringify(obj))
    //   register(data)
  });


  let s = document.getElementById("suggest");
  console.log(s);
  
  let pr = JSON.parse(localStorage.getItem('products'))
  console.log(pr);
  s.innerHTML=null;
  let addcart = JSON.parse(localStorage.getItem('cart'))
  let count=0;
  for(let k=0;k<pr.length;k++)
  {
    console.log("hhhhhhhhhhhhhh",data.cat,pr[k].cat)
    
    if(pr[k].cat==data.cat)
    {
      count++;
      let div = document.createElement("div");
      div.addEventListener("click",()=>{
        data = pr[k];
      //   console.log(data);
        //  data.push(pr[k]);
        localStorage.setItem('BuynowPage',JSON.stringify(data));
        window.location.href="produsDescription.html"
       })
      let img = document.createElement("img");
      img.src=pr[k].src;
      let h4= document.createElement("h4");
      h4.innerText=pr[k].name
      let review=document.createElement("p")
      review.innerText="⭐⭐⭐⭐⭐";
      let p = document.createElement("p")
      p.innerText=`Rs.${pr[k].price}`
      let button = document.createElement("button");
      button.innerText="ADD TO CART";
      button.addEventListener("click",() => {
        console.log("abc");
        console.log(data);
        addcart.push(data);
        localStorage.setItem('cart', JSON.stringify(addcart));
        
      });
      div.append(img,h4,review,p,button);
       s.append(div)
      console.log(div);

    }
    if(count==4){
      break;
    }
  }

  
  

  let addbtn = document.querySelector("#add");
  addbtn.addEventListener("click", () => {
    console.log("abc");
    console.log(data);
    addcart.push(data);
    localStorage.setItem('cart', JSON.stringify(addcart));
    
  });
  
 

