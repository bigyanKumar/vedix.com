
import { navBar } from "../../module/module.js";
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