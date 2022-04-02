
let obj = {
    vol: null,
    type: null,
    htexture: null,
    stexture: null,
    dandruff: null,
}

const fun1=()=>{  
    let x = document.getElementById("frame1").getAttribute('value'); 
    console.log(x)
    obj.vol=x;
  }
  const fun2=()=>{  
    let x = document.getElementById("frame2").getAttribute('value'); 
    console.log(x)
    obj.vol=x;
  }
  const fun3=()=>{  
    let x = document.getElementById("frame3").getAttribute('value'); 
    console.log(x)
    obj.vol=x;
  }
  const fun4=()=>{  
    let x = document.getElementById("frame4").getAttribute('value'); 
    console.log(x)
    obj.type=x;
  }
  const fun5=()=>{  
    let x = document.getElementById("frame5").getAttribute('value'); 
    console.log(x)
    obj.type=x;
  }
  const fun6=()=>{  
    let x = document.getElementById("frame6").getAttribute('value'); 
    console.log(x)
    obj.type=x;
  }
  const fun7=()=>{  
    let x = document.getElementById("frame7").getAttribute('value'); 
    console.log(x)
    obj.htexture=x;
  }
  const fun8=()=>{  
    let x = document.getElementById("frame8").getAttribute('value'); 
    console.log(x)
    obj.htexture=x;
  }
  const fun9=()=>{  
    let x = document.getElementById("frame9").getAttribute('value'); 
    console.log(x)
    obj.htexture=x;
  }
  const fun10=()=>{  
    let x = document.getElementById("frame10").getAttribute('value'); 
    console.log(x)
    obj.stexture=x;
  }
  const fun11=()=>{  
    let x = document.getElementById("frame11").getAttribute('value'); 
    console.log(x)
    obj.stexture=x;
  }
  const fun12=()=>{  
    let x = document.getElementById("frame12").getAttribute('value'); 
    console.log(x)
    obj.stexture=x;
  }
  const fun13=()=>{  
    let x = document.getElementById("frame13").getAttribute('value'); 
    console.log(x)
    obj. dandruff=x;
  }
  const fun14=()=>{  
    let x = document.getElementById("frame14").getAttribute('value'); 
    console.log(x)
    obj.dandruff=x;
  }


  const pre=()=>{  
   window.location.href="hair1.html";

  }

  const next=()=>{  
    if(obj.dandruff==null||obj.stexture==null||obj.htexture==null||obj.vol==null||obj.type==null){
        alert("Please fill all areas!!")
      }
      else{
        window.location.href="hair3.html"
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
  