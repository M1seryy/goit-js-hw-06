const colorButton = document.querySelector(".change-color");
const color = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
colorButton.addEventListener("click", () => {
  let myColor = getRandomHexColor();
  document.body.style.backgroundColor = myColor;
  color.textContent = myColor;
});
