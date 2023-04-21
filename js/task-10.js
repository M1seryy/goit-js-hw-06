const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");
const wrap = document.getElementById("controls");
console.log(wrap.firstElementChild);
let inputValue = 0;
wrap.firstElementChild.addEventListener("change", (e) => {
  inputValue = e.currentTarget.value;
  console.log(inputValue);
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBoxes = (amount) => {
  let step = wrap.firstElementChild.step;
  let min = wrap.firstElementChild.min;
  let max = wrap.firstElementChild.max;
  let width = 30;
  let height = 30;
  console.log(min);
  if (amount >= Number(min) && amount <= Number(max)) {
    for (let index = 0; index < amount; index +=Number(step)) {
      const box = document.createElement("div");
      width += 10;
      height += 10;
      box.style.width = width + "px";
      box.style.height = height + "px";
      box.style.backgroundColor = getRandomHexColor();
      boxes.append(box);
    }
    wrap.firstElementChild.value = "";
  }
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

create.addEventListener("click", () => createBoxes(inputValue));
destroy.addEventListener("click", () => destroyBoxes());
