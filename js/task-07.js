const text = document.getElementById("text");
const rangeValue = document.getElementById("font-size-control");

rangeValue.addEventListener("input", () => {
  text.style.fontSize = rangeValue.value + "px";
});
