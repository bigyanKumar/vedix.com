
console.log("hey")
let obj = {
   age: null,
   gender: null, 
   name:null,
 
}

const age1 = (v) => { 
  
    obj.age =v;
    console.log(obj);
   
   
}
const gen = (v) => {
  
  
    obj.gender =v;
    console.log(obj);
   
   
}

const main = () => {
    let name = document.getElementById("name").value;
    obj.name = name;
    console.log(name)
    if(obj.age==null||obj.gender==null||name=='')
    {
        alert("Please fill details");
    }
    else{

        localStorage.setItem("hair",JSON.stringify(obj));
        window.location.href="result.html";
    }
}


const pre =()=>{
    window.location.href = "hair2.html"
}




document.querySelector("#cart_page").addEventListener("click",()=>{
    console.log("Hello")
    window.location.href = "../cart.html"
})
document.querySelector("#login_page").addEventListener("click",()=>{
    console.log("Hello2")
    window.location.href = "../account/accounts.html"
})