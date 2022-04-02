console.log("hello")

const showDetail= ()=>{
    let toggle=document.getElementById("dropbox");
    if(toggle.style.display=="none"){
        console.log("hi")
       toggle.style.display="block";
    }else{
        console.log("hey")
        toggle.style.display ="none"
    }

   // document.getElementById("toggleDiv").append(toggle)
}

const hair = () => {
    window.location.href="../knowhair/hair1.html"
}
const skin = () => {
    window.location.href="../knowSkin/skin1.html"
}

import { contain,navBar} from "../module/module.js";

let Con= document.getElementById("container");
Con.innerHTML=contain();
let Nav = document.getElementById("nav");
Nav.innerHTML = navBar()
document.querySelector("#cart_page").addEventListener("click",()=>{
    console.log("Hello")
    window.location.href = "../cart.html"
})
document.querySelector("#login_page").addEventListener("click",()=>{
    console.log("Hello2")
    window.location.href = "../account/accounts.html"
})