
window.addEventListener("load",()=>{
    let userdetail = JSON.parse(localStorage.getItem("userdetail"))
    console.log(userdetail)
    document.querySelector("#email").innerHTML = userdetail.email
    // document.querySelector("#address").innerHTML = "At :"+userdetail.address+", "+"Post :"+userdetail.city+", "
    // `At :${userdetail.address}, Post :${userdetail.city}, 
    // State :${userdetail.state}, Pin-Code :${userdetail.pincode}, Phone :${userdetail.phone}`

})
let CartD = JSON.parse(localStorage.getItem("cart"))||[]
let appendCart = document.getElementById("cartItem")
let ToPrice = document.getElementById("totalPrice")
let subtotal = document.getElementById("subTotalPrice")
console.log(CartD)
const CartDisplay =()=>{
    let Total = 0
  appendCart.innerHTML = ""
    CartD.map((ele)=>{
        let div = document.createElement("div")
        div.style.display = "flex"
        div.style.justifyContent = "space-between"
        div.style.alignItems = "center"
        let div1 = document.createElement("div")
        let img = document.createElement("img")
        img.style.width = "70px"
        img.style.height = "70px"
        img.style.border = "0.2px solid black"
        img.style.borderRadius = "8px"
        img.src = ele.src
        let pqnt = document.createElement("p")
        pqnt.innerText = ele.qnt
        pqnt.style.width = "fit-content"
        pqnt.style.width = "25px"
        pqnt.style.height = "25px"
        pqnt.style.border = "0.2px solid black"
        pqnt.style.borderRadius = "50%"
        pqnt.style.marginTop = "-88px"
        pqnt.style.marginLeft = "65px"
        pqnt.style.color = "white"
        pqnt.style.fontWeight = "bold"
        pqnt.style.textAlign = "center"
        pqnt.style.zIndex = "1"
        pqnt.style.background = "black"
        // pqnt.style.position = "fixed"
        div1.append(img,pqnt)
        let div2 = document.createElement("div")
        let h4 = document.createElement("p")
        h4.innerText = ele.name
        let p = document.createElement("h5")
        p.innerText = `BUNDLE DISCOUNT(Rs. ${((ele.price*ele.dis/100)*ele.qnt).toFixed(2)})`
        p.style.fontSize = "13px"
        div2.style.paddingLeft = "5px"
        div2.append(h4,p)
        let div3 = document.createElement("div")
        let PriceA = document.createElement("p")
        PriceA.innerText = `Rs. ${ele.price}.00`
        PriceA.style.textDecoration = "line-through"
        let DisPrice = document.createElement("h4")
        DisPrice.innerText = `R${(ele.price-(ele.dis*ele.price/100).toFixed(2))}`
        div3.style.textAlign = "right"
        div3.append(PriceA,DisPrice)
        div.append(div1,div2,div3)
        appendCart.append(div)
        Total += ((ele.price-(ele.dis*ele.price/100)*ele.qnt))
    })
    ToPrice.innerText = Total.toFixed(2)
    subtotal.innerText = Total.toFixed(2)
}
CartDisplay()
let count = 0
let apply = document.getElementById("submit")
let promo = document.getElementById("promo")
apply.addEventListener("click",()=>{
   // console.log("hello")
   //console.log(+ToPrice.innerText)
   if(count===0){
    if(promo.value=="masai30"){
        console.log(ToPrice.innerText)
        let Dis = +ToPrice.innerText-(30*(+ToPrice.innerText)/100)
        ToPrice.innerHTML = Dis.toFixed(2)
        count++
    }
    else{
        alert("Please Enter Valid Discount Code")
    }
}else{
    alert("Only apply one time")
}

})
let form = document.querySelector("form")
let paymentPopup = document.getElementById("payment")
let PaymentM = ""
let Pmethod = document.querySelectorAll('input[type=radio][name="Pmode"]');
    Pmethod.forEach(Pmethod => Pmethod.addEventListener('change', () => {
        PaymentM = Pmethod.value
    }))
let address = ""
 let Address = document.querySelectorAll('input[type=radio][name="address"]')
    Address.forEach(Address => Address.addEventListener("change",()=>{
            address = Address.value
    }))
document.querySelector("#ship").addEventListener("click",()=>{
    if(PaymentM==="COD" && address!== ""){
        //console.log(address)
        alert("Your Order has been placed, Thank You")
        window.location.href = "../index.html"
    }
    else if(address==="" && PaymentM!=="POD"){
        alert("Please Select Address type one of them")
    }
    else if(PaymentM==="POD" && address!== ""){
        paymentPopup.style.display = "block"
    }

})

document.querySelector("#getotp").addEventListener("click",(event)=>{
    event.preventDefault()
    let cardno = form.card.value 
    let name = form.name.value  
    let date = form.date.value 
    let year = form.year.value
    let cvv = form.cvv.value
    obj = {
        payment:{cardno,
            name,
            date,
            year,
            cvv,}
    }
    localStorage.setItem("CardDetails",JSON.stringify(obj))
    document.querySelector("#getotp").style.display = "none"
    document.getElementById("payM").style.display="block"
    document.getElementById("otp").style.display = "block"
})
document.querySelector("#payM").addEventListener("click",(event)=>{
    event.preventDefault()
    if(form.otp.value=="12345"){
        alert("Your Order has been placed, Thank You for Shoping")
        localStorage.removeItem("cart")
        window.location.href = "../index.html"
    }
    else{
        alert("Pleases Enter valid otp")
    }
})


// const callDetabase = (PayDetails,id)=>{

//    console.log(id)
//     // fetch(`http://localhost:3001/Users/${id}`,{
//     //   method: "PATCH",
//     //   headers: {
//     //     'Content-Type': 'application/json'
//     //   },
//     //   body: PayDetails
//     // })
//     // .then((res) => res.json())
//     // .then((data) => {
//     //     console.log(data)
//     // // alert("Your Order has been placed, Thank You for Shoping")
//     // //localStorage.removeItem("cart")
      
//     // })
//     // .catch((err) => console.log(err))
//     // //window.location.href = "../index.html"
// }
