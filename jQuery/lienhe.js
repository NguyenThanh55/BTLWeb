var getClick = document.querySelectorAll(".list a");

setInterval(function() {

    getClick.forEach(function(e) {
        e.onclick = function() {
            document.querySelector(".list span").innerHTML = e.innerHTML;
        }
    })
},10)