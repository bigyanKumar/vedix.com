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

import { contain,navBar} from "../module/module.js";

let Con= document.getElementById("container");
Con.innerHTML=contain();
let Nav = document.getElementById("nav");
Nav.innerHTML = navBar()