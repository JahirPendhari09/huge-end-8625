let LS = JSON.parse(localStorage.getItem("login"))||[];

let user = document.getElementById("signinUsername");
let pas = document.getElementById("signinPassword");


let form = document.querySelector("form")
form.addEventListener("submit",function(){
    event.preventDefault();
    let isPresent=false;
    LS.forEach(element => {
        if(element.username === user.value && element.password === pas.value){
           isPresent =true;
           return;
        }
    });
   if(isPresent){
    alert("login Successful done you are Redirecting to the Home page");
    window.location.href="./home1.html"
   }else{
    alert("username and password are incorrect")
   }
   
});