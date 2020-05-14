// script used for login.html validation

var email = document.getElementById("email");
var username = document.getElementById("usrname");
var password = document.getElementById("psw");
var loggedIn = false;

function check() {

    // stored data from the register-form
    var storedEmail = localStorage.getItem('email');
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('password');

    // entered data from the login-form
    var userEmail = email.value;
    var userName = username.value;
    var userPw = password.value;

    // check if stored data from register-form is equal to data from login form
    if (userEmail.value == storedEmail.value && userPw.value == storedPw.value && userName.value == storedName.value) {
        alert('You are loged in.');
        loggedIn = true;
    } else {
        alert('ERROR.');
    }
}

function redirect() {
    if (loggedIn = true){
    // window.location.href (/student html/MyProfile.html);
    }
}
