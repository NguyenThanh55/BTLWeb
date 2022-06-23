$(document).ready(function() {
        window.scrollTo(0, 0)
})

var getImg = document.querySelectorAll(".icon_thuong_hieu div")
var select = 0;
var hu = "hieuung";
var isDo = false

window.addEventListener("scroll", function() {
    console.log("x")
    if (window.scrollY >= 1310 && window.scrollY < 1900) {
        document.querySelectorAll(".iconic_hot")[0].classList.add("animate__animated") 
        document.querySelectorAll(".iconic_hot")[0].classList.add("animate__slideInLeft")
        document.querySelectorAll(".iconic_hot")[1].classList.add("animate__animated") 
        document.querySelectorAll(".iconic_hot")[1].classList.add("animate__slideInRight")
    }
})


window.onscroll = function() {

    if (window.scrollY > 107 && window.scrollY < 1287) {
        isDo = true
        if (isDo == true) {
            for (let i = 0; i < 26; i++) {
                let j = select
                if (select == 26)
                    select = 0;
                getImg[i].classList.add(hu + select++)
            }
            isDo = false;
        }
    }


} 