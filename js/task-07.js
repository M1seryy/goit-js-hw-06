const text = document.getElementById("text");
const rangeValue = document.getElementById("font-size-control");

text.style.fontSize = rangeValue.value + "px";
rangeValue.addEventListener("input", () => {
  text.style.fontSize = rangeValue.value + "px";
});
