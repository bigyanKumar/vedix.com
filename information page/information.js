//console.log("hello")

window.addEventListener("load",()=>{
  let UserLogin = JSON.parse(localStorage.getItem("UserDeta"))||[]
  if(UserLogin[0]===undefined){
    alert("Please Login First")
    window.location.href = "./account/accounts.html"
  }
})



let Deta=JSON.parse(localStorage.getItem('UserDeta'));


  const infoarr =JSON.parse(localStorage.getItem("Taruna")) || [];
  console.log(infoarr)
  let form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
   

    const formdata = new FormData(form);
    let email = formdata.get("enterEmail");
    let country = formdata.get("country");
    let firstname = formdata.get("firstname");
    let lastname = formdata.get("Last name");
    let address = formdata.get("Address");
    let locality = formdata.get("locality");
    let city = formdata.get("city");
    let state = formdata.get("state");
    let pincode = formdata.get("pincode");
    let phone = formdata.get("phone");

    let infoObj = {
      email,
      country,
      firstname,
      lastname,
      address,
      locality,
      city,
      state,
      pincode,
      phone,
    };
    infoarr.push(infoObj)
    console.log(infoarr)
  
    
      let id=Deta[0].id;
      // console.log(id);
    
      
       
    localStorage.setItem("userdetail", JSON.stringify(infoObj));
    
    localStorage.setItem("Taruna",JSON.stringify(infoarr));
    let UpdateUser ={
      UserAddress :{
        address,
        locality,
        city,
        state,
        pincode,
        phone
      }
     
    };

    let x=JSON.stringify(UpdateUser);
    
      updateAdd(x,id);
   
    console.log(x);
    // console.log(infoObj);

   
   
   
  });

 

const updateAdd = (store,mail) => {
   console.log(store,mail)
  fetch(`http://localhost:3001/Users/${mail}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: store
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      window.location.href = "./shipping.html"
    })
    .catch((err) => console.log(err))

    //console.log(data)
   
  }

// document.querySelector("#cart_page").addEventListener("click",()=>{
//   console.log("Hello")
//   window.location.href = "../cart.html"
// })
// document.querySelector("#login_page").addEventListener("click",()=>{
//   console.log("Hello2")
//   window.location.href = "../account/accounts.html"
// })

 let cartdata = JSON.parse(localStorage.getItem("cart"))||[];
  //console.log(cartdata);
  
let subtotal = document.getElementById("amount");
let finalamount = document.querySelector("#totalPrice");
    console.log(finalamount)

let sum=0;
let x=cartdata.reduce((acc,ele)=>{
  return acc+ele.price;
},0);

//console.log(x)

subtotal.innerText="Rs. "+ x;
finalamount.innerText="Rs. " +x;


let cartproduct = document.getElementById("cartproduct");
cartdata.forEach((elem)=>{
  
  let div= document.createElement("div");
      div.setAttribute("id","showdiv");

  let image = document.createElement("img");
      image.setAttribute("src",elem.src);
      image.setAttribute("id","image");
      

  let name = document.createElement("div");
      name.innerText=elem.name;
      name.setAttribute("id","name");
     // console.log(name) ;
  
  let price =  document.createElement("div");
      price.innerText = "Rs. "+elem.price;  
      price.setAttribute("id",price);
      
      div.append(image,name,price)
      cartproduct.append(div)
      
 //document.getElementById("submit").addEventListener("click", ()=>{
 
 });

// document.querySelector("#submit").addEventListener("click",()=>{
//   window.location.href = "./shipping.html"
// })


    

