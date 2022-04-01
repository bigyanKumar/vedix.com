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
        mobile,
        description
    }
    let payload = JSON.stringify(obj)
    createA(payload)
    console.log("signup")
})
const createA = (deta)=>{
    fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : deta
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
    .catch((Err)=> console.log(Err))
}
