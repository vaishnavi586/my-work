$(document).ready(function() {
$("#login").click(function() {
var UserId = $("#UserId").val();
var password = $("#password").val();
var cpassword = $("#cpassword").val();
if (UserId == '' || password == '' || cpassword == '') {
alert("Please fill all fields.........");
} else if ((password.length) < 8) {
alert("Password should atleast 8 character in length........");
} else if (!(password).match(cpassword)) {
alert("Your passwords don't match. Try again?")
document.getElementById("password").value="";
    document.getElementById("cpassword").value="";;
} else {
alert("data submitted successfully");
}
});
});