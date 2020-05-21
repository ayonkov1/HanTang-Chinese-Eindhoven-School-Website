// script used for login.html validation
function check() {

   var email = document.getElementById("email").value;
   var username = document.getElementById("usrname").value;
   var password = document.getElementById("psw").value;
   var loggedIn = false;

    // stored data from the register-form
    var storedEmail = localStorage.getItem("email");
    var storedName = localStorage.getItem("username");
    var storedPw = localStorage.getItem("password");



    // check if stored data from register-form is equal to data from login form
    if (email == storedEmail && password == storedPw && username == storedName) 
    {


        alert('You are logged in.');
        window.location.replace("http://i426654.hera.fhict.nl/student%20html/MyProfile.html");
    }
       
     else {
        alert('ERROR.');
    }
    
}
 

