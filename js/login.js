const email = document.getElementById("email");
const password = document.getElementById("password");

function validateForm() {
  if (email.value == "" || password.value == "") {
    alert("Please, use all fields");
    return false;
  }
  return true;
}

document
  .getElementById("login-form")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (
      validateForm() &&
      email.value === "cac@java" &&
      password.value === "fs"
    ) {
      location.href = "../pages/user.html";
    } else if (email.value != "" && password.value != "") {
      alert("Error validating data, try again");
    }
  });
