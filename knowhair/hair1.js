console.log("hey");
let obj = { 
    frame:null,
    sweat:null,
    appetite:null,
};


const fun1=()=>{  
  let x = document.getElementById("btn1").getAttribute('value'); 
  obj.frame=x;
}
const fun2=()=>{  
  let x = document.getElementById("btn2").getAttribute('value'); 
  obj.frame=x;
}
const fun3=()=>{  
  let x = document.getElementById("btn3").getAttribute('value'); 
  obj.frame=x;
}
const fun4=()=>{  
  let x = document.getElementById("frame1").getAttribute('value'); 
  console.log(x)
  obj.sweat=x;
}
const fun5=()=>{  
  let x = document.getElementById("frame2").getAttribute('value'); 
  console.log(x)
  obj.sweat=x;
}
const fun6=()=>{  
  let x = document.getElementById("frame3").getAttribute('value'); 
  console.log(x)
  obj.appetite=x;
}
const fun7=()=>{  
  let x = document.getElementById("frame4").getAttribute('value'); 
  console.log(x)
  obj.appetite=x;
}
const fun8=()=>{  
  let x = document.getElementById("frame5").getAttribute('value'); 
  console.log(x)
  obj.appetite=x;
}
const fun9=()=>{  
  let x = document.getElementById("frame6").getAttribute('value'); 
  console.log(x)
  obj.appetite=x;
}
const next=()=>{  
  if(obj.appetite==null||obj.sweat==null||obj.frame==null){
    alert("Please fill all areas!!")
  }
  else{
    window.location.href="hair2.html"
  }
}



document.querySelector("#cart_page").addEventListener("click",()=>{
  console.log("Hello")
  window.location.href = "../cart.html"
})
document.querySelector("#login_page").addEventListener("click",()=>{
  console.log("Hello2")
  window.location.href = "../account/accounts.html"
})