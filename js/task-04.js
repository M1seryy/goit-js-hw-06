let counterValue = 0;
const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
const totalValue = document.getElementById("value");
const valueHandler = (val) => {
  counterValue += val;
  totalValue.textContent = counterValue;
};

decrementBtn.addEventListener("click", () => valueHandler(-1));
incrementBtn.addEventListener("click", () => valueHandler(1));
