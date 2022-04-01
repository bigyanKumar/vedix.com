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