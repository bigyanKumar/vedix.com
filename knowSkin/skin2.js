
let obj = JSON.parse(localStorage.getItem('skin1'));

const btn_func = (p) => {
   
  
    console.log(p)
    obj.sunscreen =p;
    console.log(obj);
}
const btn_1func = (p) => {
   
  
    console.log(p)
    obj.dehydrated =p;
    console.log(obj);
}
const btn_2func = (p) => {
   
  
    console.log(p)
    obj.feelLike =p;
    console.log(obj);
}
const btn_3func = (p) => {
   
  
    console.log(p)
    obj.skinType =p;
    console.log(obj);
}
const btn_4func = (p) => {
   
  
    console.log(p)
    obj.howLong =p;
    console.log(obj);
}
const btn_5func = (p) => {
   
  
    console.log(p)
    obj.darkPatches =p;
    console.log(obj);
}

const main = () => {
   
    if(obj.darkPatches==null||obj.howLong==null||obj.skinType==null||obj.feelLike==null||obj.dehydrated==null||obj.sunscreen==null)
    {
        alert("Please fill details");
    }
    else{

        localStorage.setItem("skin1",JSON.stringify(obj));
        window.location.href="skin2.html";
    }
}

const main1 = () => {
    window.location.href="skin1.html";
}