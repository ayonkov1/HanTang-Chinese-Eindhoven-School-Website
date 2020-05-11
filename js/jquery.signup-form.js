$().ready(function(){
	$("needs-validation").validate((
	rules: {
		firstname: "required",
		lastname: "required",
		email: {
			required: true,
			email: true
		},
		address: "required",
		city: "required",
		zipcode: "required",
		dob: {
			date: true,
			required: true
		},
		phonenumber: {
			required: true,
			maxlength: 13
		},
		course != "Please select...",
		checkbox: "required"
		
		
		},
	messages: {
		firstname: "Please enter your first name!",
		lastname: "Please enter your last name!",
		address: "required",
		city: "required",
		zipcode: "required",
		dob: {
			date: true,
			required: true
		},
		phonenumber: {
			required: true,
			maxlength: 13
		},
		course != "Please select...",
		checkbox: "required"
		}
	))
})