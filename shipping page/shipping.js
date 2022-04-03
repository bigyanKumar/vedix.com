

let cartdata=JSON.parse(localStorage.getItem("cart"));
console.log(cartdata);

let showdiv= document.querySelector("#showcartitems");

let shipsubtotal= document.querySelector("#shippingtotal");


let shipsubtotal1= document.querySelector("#shippingtotal1");

let sum=0;
let x=cartdata.reduce(function(acc,ele){
    // console.log(ele.price)
 return acc+ele.price;
},0)
// console.log(sum)
console.log(x)
shipsubtotal.innerText=x;
shipsubtotal1.innerText=x;

cartdata.forEach(function (ele,index){
    
    
    let div = document.createElement("div");
    div.setAttribute("id","showdiv");

let div1= document.createElement("div");
let shipimage = document.createElement("img");
shipimage.setAttribute("src",ele.src);
shipimage.setAttribute("id","shipimage");

div1.append(shipimage);
console.log(div1)


let shipname= document.createElement("div");
shipname.innerText=ele.name;
shipname.setAttribute("id","shipname")
console.log(shipname)


let shipprice = document.createElement("div");
shipprice.innerText="Rs"+ele.price;

shipprice.setAttribute("id","shipprice")

// console.log(shipprice);

div.append(div1,shipname, shipprice);
console.log(div)
showdiv.append(div);


})






let infoarr =JSON.parse(localStorage.getItem("userdetail"));
console.log(infoarr)

let contact = document.querySelector("#ssdiv1");
let shipto = document.querySelector("#ssdiv2");

// infoarr.forEach(function (ele){

    for(let i=0;i<infoarr.length;i++)
    {
       if(i==infoarr.length-1)
       {

           let shipemail=document.createElement("p")
           shipemail.innerText=infoarr[i].email;
           console.log(shipemail);
       
           let shipaddress=document.createElement("p")
           shipaddress.innerText=infoarr[i].address;
           console.log(shipaddress);
       
            contact.append(shipemail);
            shipto.append(shipaddress)
       } 
    }


    


// })

