
import { navBar,Deta,app } from "../../module/module.js";
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
 document.querySelector("#disp").addEventListener("click", box)
 document.querySelector("#disp1").addEventListener("click",box)

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

