const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsElem = document.querySelector("#ingredients");
const arrayEl = [];
ingredients.forEach((ingredient) => {
  const newElement = document.createElement("li");
  newElement.textContent = ingredient;
  newElement.classList.add("item");
  arrayEl.push(newElement);
});
ingredientsElem.append(...arrayEl);
