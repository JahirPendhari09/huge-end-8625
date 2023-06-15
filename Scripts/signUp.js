let LS = JSON.parse(localStorage.getItem("login"))||[];

let username = document.getElementById("signupUsername");
let password = document.getElementById("signupPassword");
let email = document.getElementById("signupEmail");

let form = document.querySelector("form")
form.addEventListener("submit",function(){
    event.preventDefault();
    let isPresent=true;
    LS.forEach(element => {
        if(element.email === email.value){
           isPresent =false;
           return;
        }
    });
   if(isPresent){
    let obj={
        username:username.value,
        email:email.value,
        password:password.value
    };
    LS.push(obj);
    localStorage.setItem("login",JSON.stringify(LS));
    window.location.href="./signIn.html"
    alert("Signup Successfully Done you are Redirecting to Sign In page");
   
   }else{
    alert("This email is already used")
   }
   
});