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