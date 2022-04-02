
import {headOrder,navBar,footer,contain} from "../module/module.js"
console.log("hey")
let Footer = document.getElementById("footer")
Footer.innerHTML = footer()


let data = JSON.parse(localStorage.getItem('skin1'));
let h4= document.createElement("h4");
h4.innerText=`Hi, ${data.name}`;
let h3= document.createElement("h3")
h3.innerText=`Why Vedix is good for you ${data.name}`
document.getElementById('user').append(h4)
document.getElementById('user_h3').append(h3)

document.querySelector("#cart_page").addEventListener("click",()=>{
    console.log("Hello")
    window.location.href = "../cart.html"
})
document.querySelector("#login_page").addEventListener("click",()=>{
    console.log("Hello2")
    window.location.href = "../account/accounts.html"
})