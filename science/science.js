import {navBar,footer,contain} from "../module/module.js"
console.log(navBar(),footer(),contain());

let x= document.getElementById("container");
x.innerHTML=contain();

let y= document.getElementById("footer");
y.innerHTML=footer();
console.log(x)

let z = document.getElementById("nav")
z.innerHTML = navBar()
 