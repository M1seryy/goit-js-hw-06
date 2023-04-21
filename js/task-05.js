const inputValue = document.getElementById("name-output");
const input = document.getElementById("name-input");
const getInputValue = (event) => {
  let currentValue = event.currentTarget.value;
  if (currentValue.trim() === "") {
    inputValue.textContent = "Anonymous";
  } else {
    inputValue.textContent = currentValue;
  }
};
input.addEventListener("input", getInputValue);
