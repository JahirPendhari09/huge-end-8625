function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}

let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    alert("Are you Sure ");
    window.location.href="./home.html";
})
let btn1 = document.querySelector(".btn");

btn1.addEventListener("click",function(){
    alert("Are you Sure ");
    window.location.href="./home.html";
})