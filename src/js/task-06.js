const input = document.querySelector("#validation-input");

const handler = (e) => {
  if (e.currentTarget.value.length === Number(input.dataset.length)) {
    input.textContent = "password okay";
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.textContent = "password is not okay";
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};
input.addEventListener("blur", handler);
