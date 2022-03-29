import {headOrder,navBar,footer,contain} from "../module/module.js"
 let headOrd = document.getElementById("orderHead")
 
 headOrd.innerHTML = headOrder()
 let navbar = document.getElementById("nav")
//console.log(navBar)
 navbar.innerHTML = navBar()
 let Footer = document.getElementById("footer")
Footer.innerHTML = footer()
let Container = document.getElementById("container")
Container.innerHTML = contain()

let imgage = JSON.parse(localStorage.getItem("images"))||[]
 console.log(imgage)
let i=0;
let app = document.getElementById("append")
const slide=(i)=>{
setInterval(()=>{
    app.innerHTML = ""
let firstdiv = document.createElement("div")
let seconddiv = document.createElement("div") 
let imga = document.createElement("img")
imga.src = imgage[i].img
firstdiv.append(imga)
let stardiv =document.createElement("div")
let star1 = document.createElement("img")
star1.src = imgage[i].str
let star2 = document.createElement("img")
star2.src = imgage[i].str
let star3 = document.createElement("img")
star3.src = imgage[i].str
let star4 = document.createElement("img")
star4.src = imgage[i].str
let star5 = document.createElement("img")
star5.src = imgage[i].str
stardiv.append(star1,star2,star3,star4,star5)
let h1 = document.createElement("h3")
h1.innerText = imgage[i].con
let h2 = document.createElement("h3")
h2.innerText = imgage[i].Ele
let p1 = document.createElement("p")
p1.innerText = imgage[i].dsc
let p2 = document.createElement("p")
p2.innerText = imgage[i].name
p2.style.color = "#E78471"
p2.style.fontSize = "16px"
let p3 = document.createElement("p")
p3.innerText = imgage[i].post
seconddiv.append(stardiv,h1,h2,p1,p2,p3)
app.append(firstdiv,seconddiv)
   // console.log(img[i])
    if(i===5){
        i = 0
    }
    i++
},3000)
}
slide(i)
// document.querySelector("#back").addEventListener("click",()=>{
//     i--
//     slide(i)
// })
// document.querySelector("#forw").addEventListener("click",()=>{
//     i++
//     slide(i)
// })