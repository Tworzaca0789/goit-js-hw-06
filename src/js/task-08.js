const form = document.querySelector(".login-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (form.email.value === "" || form.password.value) {
    return alert("Fill in all fields");
  }

  const objForm = {
    email: email.value,
    password: password.value,
  };
  console.log(objForm);

  form.reset();
});
