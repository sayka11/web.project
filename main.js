let form = document.getElementById("form");
let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}$');
document.getElementById("log-in").addEventListener("click", function (event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log('email', email)
    console.log('email.match(regEx)', email.match(regex))
  if (password.length > 8) {
    document.getElementById("errorPass").innerHTML = "password isn't correct!";
  } else {
    document.getElementById("errorEmail").innerHTML = "";
  }
  if (email.match(regex)) {
    document.getElementById("errorPass").innerHTML = "";
  } else {
    document.getElementById("errorEmail").innerHTML = "email isn't correct!"
    document.getElementById("email").style.borderColor = "red";
  }
});
