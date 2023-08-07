const remButton = document.querySelector('button[data-action = "decrement"]');
const addButton = document.querySelector('button[data-action = "increment"]');
const valueButton = document.querySelector("#value");
let counterValue = 0;

remButton.addEventListener("click", () => {
  counterValue--;
  valueButton.textContent = counterValue;
});
addButton.addEventListener("click", () => {
  counterValue++;
  valueButton.textContent = counterValue;
});
