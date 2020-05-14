var email = document.getElementById("email");
var username = document.getElementById("usrname");
var password = document.getElementById("psw");
var passwordConfirm = document.getElementById("pswConfirm");

// storing input from register-form
function store() {
    if (password.value.length == 0) {
        console.log("password is empty")
    }
    else if (passwordConfirm.value.length == 0) {
        console.log("passwordConfirm is empty")
    }
    // else if (passwordConfirm != password) {
    //     console.log("passwords not the same")
    // }
    else {
        localStorage.setItem('email', email.value);
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
    }

}
