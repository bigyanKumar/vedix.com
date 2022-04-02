window.addEventListener("load",()=>{
    let Login =JSON.parse(localStorage.getItem("UserDeta"))||{}
   if(Login.length!==undefined){
       alert("User Logged In")
    window.location.href = "../index.html"
   }
})
let signUp = document.getElementById("create")
signUp.addEventListener("click",(event)=>{
    event.preventDefault()
    let firstName = document.getElementById("firstN").value
    let lastName = document.getElementById("lastN").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let name = firstName+" "+lastName
    let username = email
    let mobile = ""
    let description=""
    let obj={
        name,
        email,
        password,
        username,
    }
    let payload = JSON.stringify(obj)
    createA(payload)
    console.log("signup")
})
const createA = (deta)=>{
    fetch("http://localhost:3001/Users",{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : deta
    })
    .then((res)=> res.json())
    .then((data)=> {
        window.location.href = "./accoounts.html"
    })
    .catch((Err)=> console.log(Err))
}
