const colorButton = document.querySelector(".change-color");
const color = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
colorButton.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
});
