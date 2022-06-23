window.onscroll = function() {
    if (window.scrollY > 180) {
        document.querySelectorAll(".values > h3")[0].classList.add("animate__animated")
        document.querySelectorAll(".values > h3")[0].classList.add("animate__zoomIn")
    }

    if (window.scrollY > 190 && window.scrollY < 260) {
        document.querySelectorAll(".image-content")[0].classList.add("animate__animated")
        document.querySelectorAll(".image-content")[0].classList.add("animate__fadeInRight") 
        document.querySelectorAll(".text")[1].classList.add("animate__animated")
        document.querySelectorAll(".text")[1].classList.add("animate__fadeInLeft")
    }

    if (window.scrollY > 800 && window.scrollY < 850) {
        document.querySelectorAll(".image-content")[1].classList.add("animate__animated")
        document.querySelectorAll(".image-content")[1].classList.add("animate__fadeInLeft")
        document.querySelectorAll(".text")[3].classList.add("animate__animated")
        document.querySelectorAll(".text")[3].classList.add("animate__fadeInRight")
    }

    if (window.scrollY > 1150 && window.scrollY < 1900) {
        document.querySelectorAll(".image-content")[2].classList.add("animate__animated")
        document.querySelectorAll(".image-content")[2].classList.add("animate__fadeInRight")
        document.querySelectorAll(".text")[6].classList.add("animate__animated")
        document.querySelectorAll(".text")[6].classList.add("animate__fadeInLeft")
    }

    if (window.scrollY > 1300 && window.scrollY < 1400) {
        document.querySelectorAll(".image-content")[3].classList.add("animate__animated")
        document.querySelectorAll(".image-content")[3].classList.add("animate__fadeInLeft")
        document.querySelectorAll(".text")[7].classList.add("animate__animated")
        document.querySelectorAll(".text")[7].classList.add("animate__fadeInRight")
    }

    if (window.scrollY > 1800 && window.scrollY < 1900) {
        document.querySelectorAll(".ippg-tieude")[0].classList.add("animate__animated")
        document.querySelectorAll(".ippg-tieude")[0].classList.add("animate__slideInUp")
    }
    if (window.scrollY > 1900 && window.scrollY < 2100) {
        document.querySelectorAll(".IPPG-gt")[0].classList.add("animate__animated")
        document.querySelectorAll(".IPPG-gt")[0].classList.add("animate__slideInUp")
    }

    if (window.scrollY > 2000 && window.scrollY < 2300) {
        document.querySelectorAll(".IPPG-gt")[0].classList.add("animate__animated")
        document.querySelectorAll(".IPPG-gt")[0].classList.add("animate__slideInUp")
    }

    if (window.scrollY > 2200 && window.scrollY < 2400) { 
        document.querySelectorAll(".content-right")[2].classList.add("animate__animated")
        document.querySelectorAll(".content-right")[2].classList.add("animate__fadeInLeft")
        document.querySelectorAll(".image-content")[4].classList.add("animate__animated")
        document.querySelectorAll(".image-content")[4].classList.add("animate__fadeInRight")
    }

    if (window.scrollY > 2700 && window.scrollY < 2900) { 
        document.querySelectorAll(".content-right")[3].classList.add("animate__animated")
        document.querySelectorAll(".content-right")[3].classList.add("animate__fadeInRight")
        document.querySelectorAll(".image-content")[5].classList.add("animate__animated")
        document.querySelectorAll(".image-content")[5].classList.add("animate__fadeInLeft")
    }

    if (window.scrollY > 3000 && window.scrollY < 3700) { 
        document.querySelectorAll(".content-right")[4].classList.add("animate__animated")
        document.querySelectorAll(".content-right")[4].classList.add("animate__fadeInLeft")
        document.querySelectorAll(".image-content")[6].classList.add("animate__animated")
        document.querySelectorAll(".image-content")[6].classList.add("animate__fadeInRight")
    }

} 