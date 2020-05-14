// JavaScript Document

$.validator.setDefaults({
  submitHandler: function () {
    alert("submitted!");
  }
});

$().ready(function () {


  // validate signup form on keyup and submit
  $("#signupForm").validate({
    rules: {
      firstname: {
        required: true

      },
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      address: "required",
      city: "required",
      zipcode: "required",
      birthday: "required",
      telephone: "required",
      course: "required",
      agree: "required"
    },
    messages: {
      firstname: "Please enter your first name!",
      lastname: "Please enter your last name!",
      email: "Please enter a valid email address",
      agree: "Please accept our policy",
      topic: "Please select at least 2 topics",
      course: "Please select a course!"
    }
  });
});