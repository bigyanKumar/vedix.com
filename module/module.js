const headOrder = ()=>{
    return `<div><h4>Order Now & Get Assured Dispatch In 24hrs</h4></div>
    <div>
        <a href="./product.html"><h4>Order Now</h4></a>
    </div>`
}
const navBar = ()=>{
    return `<div>
    <div>
        <div>
        <a href="./index.html">
            <img src="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/logo.svg?v=1585630376" alt="Vedix Logo">
            </a>
        </div>
    </div>
    <div>
        <div><a href="./knowSkin/skin1.html">Know Your Skin<i class="fa-solid fa-angle-right"></i></a>
        </div>
        <div><a href="./knowhair/hair1.html">Know Your Hair<i class="fa-solid fa-angle-right"></i></a> </div>
        <div id="cart_page"><a href="./cart.html"><img src="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/cart_icon_93f3b819-aa16-479e-b6ba-c5007e8520d2.png?v=1623129140" alt="cart_img"></a></div>
        <div id="login_page"><a href="#"><img src="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/signin-lock.png?v=1623746079" alt="profile_img"></a></div>
    </div>
</div>`
}
const footer = ()=>{
    return `<div>
    <div>
        <h3>Quick Links</h3>
        <a href="#">Blog</a>
        <a href="#">Our Team</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
    </div>
    <div>
        <h3>&nbsp</h3>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Content Policy</a>
        <a href="#">Offers And Coupons</a>
        <a href="#">Refunds & Cancellations</a>
        <a href="#">Become An Affiliate</a>
    </div>
    <div>
        <h3>Follow Us</h3>
       <div style="display: flex; gap: 5px;">
           <a href="https://www.facebook.com/vedixofficial/" target="_blank"><div><img src="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/facebook.png?v=1589958280" alt="facebook"></div></a>
           <a href="https://www.instagram.com/vedixofficial/" target="_blank"><div><img src="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/instagram.png?v=1589958271" alt="Instagram"></div></a>
          <a href="https://www.youtube.com/c/VedixOfficial" target="_blank"><div><img src="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/Youtube-icon_62e7ba53-63d1-42c0-a538-f1497f11da75.png?v=1591359272" alt="Youtube"></div></a>
       </div>
    </div>
    <div>
        <h3>Contact Us</h3>
        <div style="display: flex; gap: 5px;"><img src="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/Youtube-icon_62e7ba53-63d1-42c0-a538-f1497f11da75.png?v=1591359272" alt="">
            <a style="text-decoration: none; color: white; margin-top: 6px; margin-left: 4px;" href="#">+91 40714 34363
            </a></div>
        <p style="font-size: 12px; margin-left: 40px;margin-top: -4px;">(9AM - 6PM, Mon - Sat)</p>
    </div>
    <div>
        <h4>&nbsp</h4>
        <div style="display: flex; gap: 5px;"><img src="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/mail.png?v=1589974419" alt=""><a style="text-decoration: none; color: white; margin-top: 5px;" href="#">support@vedix.com</a></div>
        
    </div>
</div>
<div><h3>Copyright © 2022.</h3></div>`
}
const contain = ()=>{
    return ` <div>
    <p><a href="../index.html">Home</a></p>
    <p><a href="./whyVedix.html">Why Vedix</a></p>
    <select name="" id="sci">
    <option value="">Science</option>
    <option value="Science1"> Hair </option>
    <option value="Science2">Skin</option>
</select>
    <p><a href="./price.html">Pricing</a></p>
    <p><a href="./main.html">Reviews</a></p>
    <p><a href="./blog.html">Blog</a></p>
    <p><a href="./faqs.html">Faqs</a></p>
</div>
<div>
    <p><a href="#">Shop<i class="fa-solid fa-angle-right"></i></a></p>
   <p> <a href="#">Know Your Hair<i class="fa-solid fa-angle-right"></i></a></p>
</div>`
}
const Deta = (Products,search) => {
    let Reg = Products.filter(function(ele){
        return ele.cat.includes(search)
    })
    return Reg
}
export {headOrder,navBar,footer,contain,Deta}