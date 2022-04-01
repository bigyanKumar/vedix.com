import {headOrder,navBar,footer,contain} from "../module/module.js"
console.log("hey")
let Footer = document.getElementById("footer")
Footer.innerHTML = footer()
document.querySelector("#cart_page").addEventListener("click",()=>{
    console.log("Hello")
    window.location.href = "../cart.html"
})
document.querySelector("#login_page").addEventListener("click",()=>{
    console.log("Hello2")
    window.location.href = "../account/accounts.html"
})