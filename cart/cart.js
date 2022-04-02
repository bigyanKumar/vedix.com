 import { navBar } from "../module/module.js";
 let Nav = document.getElementById("nav")
 //console.log(navBar())
 Nav.innerHTML = navBar()
 document.querySelector("#cart_page").addEventListener("click",()=>{
    console.log("Hello")
    window.location.href = "../cart.html"
})
document.querySelector("#login_page").addEventListener("click",()=>{
    console.log("Hello2")
    window.location.href = "../account/accounts.html"
})


let Cart  = JSON.parse(localStorage.getItem("cart"))||[]
let dis1 = document.getElementById("CartD")
console.log(Cart)
if(Cart.length===0){
    dis1.style.display = "none"
}else{
const cartPop = ()=>{
    // Cart.push(ele)
    // localStorage.setItem("cart",JSON.stringify(Cart))
    // let Deta = JSON.parse(localStorage.getItem("cart"))
   // console.log(ele)
   //console.log(Cart)
    dis1.innerHTML = ""
    // <div><h3><i id="disp1" class="fa-solid fa-angle-left"></i>Filter</h3></div>
    let divhead = document.createElement("div")
    divhead.style.paddingTop = "30px"
    let h1tag = document.createElement("h3")
    let i1 = document.createElement("i")
    i1.setAttribute("id","disp1")
    h1tag.append(i1)
    divhead.append(h1tag,h1tag)
    let div2 = document.createElement("div")
    let h2tag = document.createElement("h2")
    h2tag.innerText ="Your Cart"
    h2tag.style.textAlign = "center"
    div2.append(h2tag)
    let div3 = document.createElement("div")
    let h3tag = document.createElement("h5")
    h3tag.innerText = "Add 2 Singal Product To Get Them @ Rs. 999"
    h3tag.style.textAlign = "center"
    div3.append(h3tag)
    // cart Item 
    let div4 = document.createElement("div")
    let indiv = document.createElement("div")
    indiv.setAttribute("id","cartDiv")
    let Total = cartAppdend(Cart,indiv)
    div4.append(indiv)
    // end
     // <div class="btn" ><a href="#"><h4>Your Analys<i style="color: white;font-size: 15px; margin-left: 5px;" class="fa-solid fa-angle-right"></i></h4></a></div>
    let div5 = document.createElement("div")
    let inndiv1 = document.createElement("div")
    inndiv1.style.display = "flex"
    inndiv1.style.justifyContent = "space-between"
    let h4tag = document.createElement("h3")
    h4tag.setAttribute("id","total")
    h4tag.innerText = Total.toFixed(2)
    let inndiv2 = document.createElement("div")
    inndiv2.setAttribute("class","btn")
    let a1 = document.createElement("a")
    a1.setAttribute("href","../information.html")
    let h5tag = document.createElement("h4")
    h5tag.innerText = "CHECKOUT"
    a1.append(h5tag)
    inndiv2.append(a1)
    inndiv1.append(h4tag,inndiv2)
    let h6tag = document.createElement("h3")
    let a2 = document.createElement("a")
    a2.setAttribute("href","./product.html")
    a2.innerText = "Continue Shopping >>"
    a2.style.color = "black"
    h6tag.append(a2)
    h6tag.style.textAlign = "center"
    div5.append(inndiv1,h6tag)
    //
    dis1.append(divhead,div2,div3,div4,div5)
    // window.addEventListener("click",()=>{
    //     dis1.style.display = "none"
    // })
}
// const BuyNowPage = (ele)=>{
//     console.log(ele)
// }
const cartAppdend = (Deta,div)=>{
    let Total = 0
    div.innerHTML = ""
    // console.log(deta,div,Total)
    Deta.map((ele,ind)=>{
        // div1
        let div1 =document.createElement("div")
        div1.style.display = "flex"
        div1.style.justifyContent = "space-between"
        div1.setAttribute("id","div1")
        let img = document.createElement("img")
        img.src = ele.src
        let h4 = document.createElement("h5")
        h4.innerText = ele.name
        h4.style.paddingLeft = "8px"
        let i = document.createElement("i")
        i.setAttribute("class","fa-solid fa-xmark")
        i.style.paddingRight = "10px"
        i.style.cursor = "Pointer"
        i.addEventListener("click",()=>{
            removeDeta(ele,ind)
        })
        div1.append(img,h4,i)
        //end
        //div2
        let div2 = document.createElement("div")
        div2.style.display = "flex"
        div2.style.justifyContent = "space-between"
        div2.setAttribute("id","div1")
        let divsum = document.createElement("div")
        divsum.style.display = "flex"
        divsum.style.alignItems = "center"
        divsum.style.gap = "10px"
        divsum.setAttribute("id","inc")
        let h1 = document.createElement("h3")
        h1.style.cursor = "pointer"
        h1.addEventListener("click",()=>{
            min(ele,ind)
        })
        let i1 = document.createElement("i")
        i1.setAttribute("class","fa-solid fa-minus")
        h1.append(i1)
        let h2 = document.createElement("h3")
        h2.innerText = ele.qnt
        let h3 =document.createElement("h3")
        h3.style.cursor = "pointer"
        h3.addEventListener("click",()=>{
            max(ele,ind)
        })
        let i2 = document.createElement("i")
        i2.setAttribute("class","fa-solid fa-plus")
        h3.append(i2)
         divsum.append(h1,h2,h3)
        let divprice= document.createElement("div")
        divprice.style.display = "flex"
        divprice.style.alignItems = "center"
        divprice.style.gap = "5px"
        let Aprice = document.createElement("p")
        Aprice.innerText = "Rs. "+ele.price
        Aprice.style.textDecoration = "line-through"
        let Dtext = document.createElement("p")
        Dtext.innerText = "( Bundle Discount ) "
        let Dprice = document.createElement("h4")
        Dprice.innerText = "Rs." + (ele.price - (ele.dis*ele.price/100)).toFixed(2)
        divprice.style.paddingRight = "13px"
        divprice.append(Aprice,Dtext,Dprice)
        div2.append(divsum,divprice)
        //end
       // console.log(div1,div2)
        div.append(div1,div2)
        Total+=ele.qnt*(ele.price - (ele.dis*ele.price/100)).toFixed(2)
    })
    return Total;
}
const min = (ele,ind)=>{
    // if(ele.qnt>0){
    //   let minVal =  --ele.qnt 
    //   if(minVal!=0){
    //     console.log(minVal)
    //     ele["qnt"] = minVal
    //     cartPop(ele)
    //   }
    // }
//console.log(Cart[ind])
if(ele.qnt>0){
    Cart[ind].qnt = --ele.qnt
   // console.log(Cart)
    localStorage.setItem("cart",JSON.stringify(Cart))
    //let Deta  = JSON.parse(localStorage.getItem("cart"))
   // console.log(Deta)
    cartPop()
}else{

}

}
const max = (ele,ind)=>{
    Cart[ind].qnt = ++ele.qnt
   // console.log(Cart)
    localStorage.setItem("cart",JSON.stringify(Cart))
    //let Deta  = JSON.parse(localStorage.getItem("cart"))
    //console.log(Deta)
    cartPop()
}
const removeDeta = (ele,ind) =>{
    Cart.splice(ind,1)
    localStorage.setItem("cart",JSON.stringify(Cart))
    cartPop()
}
cartPop()
}