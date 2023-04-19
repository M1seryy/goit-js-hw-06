const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBoxes = (amount) => {
  let width = 30;
  let height = 30;
  for (let index = 0; index < amount; index++) {
    const box = document.createElement("div");
    width += 10;
    height += 10;
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
};

const destroyBoxes = () =>{
  boxes.innerHTML = ""
}
create.addEventListener("click", () => createBoxes(5));
destroy.addEventListener("click", () => destroyBoxes());
