var emailInput = document.getElementById("email");

// When the user clicks on the password field, show the message box
emailInput.onfocus = function () {
    document.getElementById("message-email").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
emailInput.onblur = function () {
    document.getElementById("message-email").style.display = "none";
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