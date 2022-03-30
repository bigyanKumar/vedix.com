
import { navBar,Deta } from "../../module/module.js";
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

 
 let Best_seller = document.getElementById("best-seller")
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
