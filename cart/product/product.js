
import { navBar,Deta} from "../../module/module.js";
 let Nav = document.getElementById("nav")
 Nav.innerHTML  = navBar()
 let dis = document.getElementById("filter")

const box=()=>{
    if(dis.style.display === "none"){
        dis.style.display = "block"
    }else{
        dis.style.display = "none"
        console.log("no")
    }
}
//  document.querySelector("#disp").addEventListener("click", ()=>{

//  })
const app = (data,divA)=>{
    divA.innerHTML = ""
    data.map((ele)=>{
        //console.log(ele)
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.addEventListener("click",()=>{
            BuyNowPage(ele)
        })
        img.src = ele.src
        let p1 = document.createElement("p")
        p1.innerText = ele.name
        let h1 = document.createElement("h4")
        h1.innerText = "*****"
        let pricediv = document.createElement("div")
        pricediv.style.display = "flex"
        pricediv.style.justifyContent = "space-evenly"
        pricediv.style.alignItems = "center"
        let p2 = document.createElement("p")
        p2.innerText = "Rs. " + (ele.price-(ele.dis*ele.price/100)).toFixed(1)

        let p3  = document.createElement("p")
        p3.innerText = "Rs. "+ele.price
        p3.style.textDecoration = "line-through"
        p3.style.fontSize = "13px"
        pricediv.append(p2,p3)
        let btn = document.createElement("button")
        btn.innerText = "Add To Cart"
        btn.addEventListener("click",()=>{
            cartPop(ele)
        })
        div.append(img,p1,h1,pricediv,btn)
        divA.append(div)
    })
}
let Disp = document.getElementById("disp")
Disp.addEventListener("click",()=>{
    box()
   // dis.innerHTML = Filte()
})
 document.querySelector("#disp1").addEventListener("click",box)
 let apply = document.getElementById("apply")
 apply.style.cursor = "Pointer"
 document.querySelector("#apply").addEventListener("click",box)
let Products = JSON.parse(localStorage.getItem("products"))||[]
console.log(Products)
  
 let Regimen = document.getElementById("regimen")
 //let Best_seller = document.getElementById("best-seller")
 //let regi = Deta(Products,"regimen")
 let hair_oil = Deta(Products,"Hair-Oil")
 let shampoo =  Deta(Products,"Shampoo")
let Hair_Serum = Deta(Products,"Hair-Serum")
let conditioner = Deta(Products,"Conditioner")
let Hair_Pack = Deta(Products,"Hair-Pack")
let Hair_Pack_COMBO = Deta(Products,"Hair-Pack-COMBO")
let ONION_Hair_MASK = Deta(Products,"ONION-Hair-MASK")
let Hair_CARE_REGIMEN = Deta(Products,"Hair-CARE-REGIMEN")
let Hair_Pack_OILS = Deta(Products,"Hair-Pack-OILS")
let ORAL_CARE_OILS = Deta(Products,"ORAL-CARE-OILS")
let cleansers = Deta(Products,"CLEANSERS")
let moisturisers = Deta(Products,"MOISTURISERS")
let FACE_SERUMS = Deta(Products,"FACE-SERUMS")
let FACE_OILS = Deta(Products,"FACE-OILS")
let FACE_TONER = Deta(Products,"FACE-TONER")
let PULLING_OILS = Deta(Products,"PULLING-OILS")
//let Bist_selling = Deta(Products,5)
// append div

const Display =()=>{
    let appen = document.getElementById("FilterP")
       appen.style.display = "none"
app(Hair_CARE_REGIMEN,Regimen)
let hairoil = document.getElementById("hair-oil")
app(hair_oil,hairoil)
let  Shampoo= document.getElementById("shampoos")
app(shampoo,Shampoo)
let hair_serum = document.getElementById("hair-serums")
app(Hair_Serum,hair_serum)
let Conditioner = document.getElementById("hair-conditioners")
app(conditioner,Conditioner)
let Cleansers = document.getElementById("face-cleaners")
app(cleansers,Cleansers)
let Moisturisers = document.getElementById("face-moisturisers")
app(moisturisers,Moisturisers)
let face_serums = document.getElementById("face-serums")
app(FACE_SERUMS,face_serums)
let face_oils = document.getElementById("face-oils")
app(FACE_OILS,face_oils)
let face_masks = document.getElementById("face-masks")
app(FACE_TONER,face_masks)
let face_toners = document.getElementById("face-toners")
app(FACE_TONER,face_toners)
let oil_pulling_oil = document.getElementById("oil-pulling-oil")
app(PULLING_OILS,oil_pulling_oil)
let onion_range_shompoos = document.getElementById("onion-range-shompoos")
app(Hair_Pack,onion_range_shompoos)
let onion_range_oil = document.getElementById("onion-range-oil")
app(Hair_Pack_COMBO,onion_range_oil)
let onin_hair_mask = document.getElementById("onin-hair-mask")
app(ONION_Hair_MASK,onin_hair_mask)
let body_care = document.getElementById("body-care")
app(ORAL_CARE_OILS,body_care)
let value_combo = document.getElementById("value-combo")
app(Hair_Pack_OILS,value_combo)
}
Display()
// var radios = document.querySelectorAll('input[type=radio][name="product_type"]');
//     radios.forEach(radio => radio.addEventListener('change', () => alert(radio.value)))

var radios = document.querySelectorAll('input[type=radio][name="product_type"]');
    radios.forEach(radio => radio.addEventListener('change', () => {
       // console.log(radio.value)
        let filter = Deta(Products,radio.value)
       // console.log(filter)
       let clear = document.getElementById("poster")
let appen = document.getElementById("FilterP")
       appen.style.display = "block"
      
       clear.innerHTML = ""
       let FilterItem = document.getElementById("filter_item")
        app(filter,FilterItem)
    }))
let rest = document.getElementById("rest")
rest.style.cursor = "Pointer"
rest.addEventListener("click",()=>{
    box()
    location.reload("true")
})
let dis1 = document.getElementById("cartPop")
const cartPop = (ele)=>{
   // console.log(ele)
    dis1.innerHTML = ""
    dis1.style.display = "block"
    // <div><h3><i id="disp1" class="fa-solid fa-angle-left"></i>Filter</h3></div>
    let divhead = document.createElement("div")
    let h1tag = document.createElement("h3")
    let i1 = document.createElement("i")
    i1.setAttribute("id","disp1")
    i1.addEventListener("click",()=>{
        dis1.style.display = "none"
    })
    i1.setAttribute("class","fa-solid fa-angle-left")
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
    let div4 = document.createElement("div")
    let indiv = document.createElement("div")
    div4.append(indiv)
     // <div class="btn" ><a href="#"><h4>Your Analys<i style="color: white;font-size: 15px; margin-left: 5px;" class="fa-solid fa-angle-right"></i></h4></a></div>
    let div5 = document.createElement("div")
    let inndiv1 = document.createElement("div")
    inndiv1.style.display = "flex"
    inndiv1.style.justifyContent = "space-between"
    let h4tag = document.createElement("h3")
    h4tag.innerText = "Rs. 399"
    let inndiv2 = document.createElement("div")
    inndiv2.setAttribute("class","btn")
    let a1 = document.createElement("a")
    a1.setAttribute("href","#")
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
const BuyNowPage = (ele)=>{
    console.log(ele)
}

