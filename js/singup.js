const names = document.getElementById("name");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function validateForm() {
  if (
    names.value == "" ||
    lastname.value == "" ||
    email.value == "" ||
    password.value == "" ||
    password2.value == ""
  ) {
    alert("Please, use all fields");
    return false;
  }
  return true;
}

document
  .getElementById("submit-singup")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (validateForm() && password.value === password2.value) {
      alert("Please, login with your new account");
      location.href = "../pages/login.html";
    } else if (password.value != "" && password2.value != "") {
      alert("Passwords do not match");
    }
  });
