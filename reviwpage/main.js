import { navBar, footer, contain } from "../module/module.js";

let navbar = document.getElementById("nav");

navbar.innerHTML = navBar();
let Footer = document.getElementById("footer");
Footer.innerHTML = footer();
let Container = document.getElementById("container");
Container.innerHTML = contain();
document.querySelector("#cart_page").addEventListener("click", () => {
  console.log("Hello");
  window.location.href = "../cart.html";
});
document.querySelector("#login_page").addEventListener("click", () => {
  console.log("Hello2");
  window.location.href = "../account/accounts.html";
});
