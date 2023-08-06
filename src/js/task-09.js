function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetDiv = document.querySelector(".widget");
const colorSpan = document.querySelector(".color");
const btn = document.querySelector(".change-color");
const body = document.body;

btn.addEventListener("click", function (event) {
  const newBackgroundColor = getRandomHexColor();
  colorSpan.textContent = newBackgroundColor;
  body.style.backgroundColor = newBackgroundColor;
});
