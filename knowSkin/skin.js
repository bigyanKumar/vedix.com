
console.log("hey")
let obj = {
   age: null,
   gender: null,
   problem:null,
   name:null,
   darkPatches:null,
   howLong:null,
   skinType:null,
   feelLike:null,
   dehydrated:null,
   sunscreen:null,
}

const btnfunc = (v) => {
  
  
     obj.age =v;
     console.log(obj);
    
    
}

const btn1func = (g) => {
    console.log(g)
   
    obj.gender =g;
    console.log(obj);
}

const btn2func = (p) => {
   
  
    console.log(p)
    obj.problem =p;
    console.log(obj);
}


const main = () => {
    let name = document.getElementById("name").value;
    obj.name = name;
    console.log(name)
    if(obj.age==null||obj.gender==null||obj.problem==null||name=='')
    {
        alert("Please fill details");
    }
    else{

        localStorage.setItem("skin1",JSON.stringify(obj));
        window.location.href="skin2.html";
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