const categories = document.querySelector("#categories");
const items = document.querySelectorAll("li.item");
console.log(`Number of categories: ${items.length}`);

for (const item of items) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}
