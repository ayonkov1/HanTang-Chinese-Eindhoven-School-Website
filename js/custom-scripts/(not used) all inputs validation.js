// input validation script for login.html and register.html

var usrInput = document.getElementById("usrname");
var pasInput = document.getElementById("psw");
var emailInput = document.getElementById("email");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


// When the user clicks on the password field, show the message box
usrInput.onfocus = function () {
    document.getElementById("message-user").style.display = "block";
}

emailInput.onfocus = function () {
    document.getElementById("message-email").style.display = "block";
}

pasInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
usrInput.onblur = function () {
    document.getElementById("message-user").style.display = "none";
}

emailInput.onblur = function () {
    document.getElementById("message-email").style.display = "none";
}

pasInput.onblur = function () {
    document.getElementById("message").style.display = "none";
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

emailInput.onkeyup = function () {
    var empty = /[a-z]/g;
    if (emailInput.value.match(empty)) {
        letterEmail.classList.remove("invalid");
        letterEmail.classList.add("valid");
    } else {
        letterEmail.classList.remove("valid");
        letterEmail.classList.add("invalid");
    }
}

pasInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (pasInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (pasInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (pasInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (pasInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}




