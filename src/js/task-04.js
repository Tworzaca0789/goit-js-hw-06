const remButton = document.querySelector('button[data-action = "decrement"]');
const addButton = document.querySelector('button[data-action = "increment"]');
const valueButton = document.querySelector("#value");
let counterValue = 0;
valueButton.textContent = counterValue;
remButton.addEventListener("click", (e) => {
  console.log(counterValue--);
});
addButton.addEventListener("click", (e) => {
  console.log(counterValue++);
});
console.log(e.target);
