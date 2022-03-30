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
