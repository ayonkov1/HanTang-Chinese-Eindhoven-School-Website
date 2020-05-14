// input validation script for login.html and register.html

var usrInput = document.getElementById("usrname");

// When the user clicks on the password field, show the message box
usrInput.onfocus = function () {
    document.getElementById("message-user").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
usrInput.onblur = function () {
    document.getElementById("message-user").style.display = "none";
}

// When the user starts to type something inside the password field
usrInput.onkeyup = function () {
    var empty = /[a-z]/g;
    if (usrInput.value.match(empty)) {
        letterUser.classList.remove("invalid");
        letterUser.classList.add("valid");
    } else {
        letterUser.classList.remove("valid");
        letterUser.classList.add("invalid");
    }
}