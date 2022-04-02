//console.log("hello")

window.addEventListener("load", () => {
  const infoarr =JSON.parse(localStorage.getItem("userdetail")) || [];
  //console.log(infoarr)
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
    localStorage.setItem("userdetail", JSON.stringify(infoarr));

    //console.log(data)
  });
});
document.querySelector("#cart_page").addEventListener("click",()=>{
  console.log("Hello")
  window.location.href = "../cart.html"
})
document.querySelector("#login_page").addEventListener("click",()=>{
  console.log("Hello2")
  window.location.href = "../account/accounts.html"
})