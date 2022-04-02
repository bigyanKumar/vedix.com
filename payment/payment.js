
window.addEventListener("load",()=>{
    
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
    ToPrice.innerText = Total
    subtotal.innerText = Total
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
