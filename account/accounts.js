

//   <div>
//   <h2>Login</h2>
//   <form id="login" action="">
//       <div><input type="email" placeholder="Email"></div>
//       <div><input type="password" id="pass" placeholder="Password"></div>
//       <input type="submit" name="Sign in">
//   </form>
//   <div id="user">
//       <a href="#">New User?</a>
//       <a href="">Forget Password?</a>
//   </div>
//   <h4>Connect With</h4>
//   <div id="social">
//       <a href=""><img class="logo" src="https://cdn.shopify.com/s/files/1/2028/2057/files/fb-new.png?v=1576738325" alt=""></a>
//       <a href=""><img class="logo" src="https://cdn.shopify.com/s/files/1/2028/2057/files/google-new.png?v=1576738325" alt=""></a>
//   </div>
// </div>
let signIn = document.getElementById("signin")
signIn.addEventListener("click",(event)=>{
    event.preventDefault()
    console.log("signin")
    let username = document.getElementById("Email").value
        let password = document.getElementById("pass").value
        let obj = {
            username,
            password
        }
        let payload = JSON.stringify(obj)
      console.log(payload)
       SignIn(payload)

})
const SignIn = (deta)=>{
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : deta
    })
    .then((res)=> res.json())
    .then((data)=> {
        user = JSON.parse(deta)
        let token = localStorage.setItem("LoginToken",data.token)
        let username = localStorage.setItem("username",user.username)
        })
    .catch((Err)=> console.log(Err))
    //localStorage.setItem("token")
   //window.location.href = "../index.html"
}