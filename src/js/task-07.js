let input = document.querySelector("#font-size-control");
let text = document.querySelector("#text");

input.value = 30;
text.style.fontSize = input.value + "px";
input.addEventListener(
  "input",
  () => (text.style.fontSize = `${input.value}px`)
);
