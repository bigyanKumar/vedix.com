console.log("hey");
let obj = { 
    frame:null
    
};


const fun1=()=>{
  
  let x = document.getElementById(id).getAttribute('value'); 
  console.log(x);
}
document.querySelector("#cart_page").addEventListener("click",()=>{
  console.log("Hello")
  window.location.href = "../cart.html"
})
document.querySelector("#login_page").addEventListener("click",()=>{
  console.log("Hello2")
  window.location.href = "../account/accounts.html"
})