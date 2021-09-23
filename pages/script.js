let btn_1 = document.getElementById("acender");
let btn_2 = document.getElementById("apagar")
let img = document.getElementById("luz")



function acender(){
    img.src = "../assets/download-removebg-preview.png"
    btn_2.addEventListener("click", function (){
        img.src = "../assets/2-removebg-preview.png";
    })

}