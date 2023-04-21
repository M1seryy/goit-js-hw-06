const input = document.getElementById("validation-input");
const symbolLength = document.querySelector(`input[data-length="6"]`);

input.addEventListener("blur", (e) => {
  if (
    Number(e.currentTarget.value.length) === Number(symbolLength.dataset.length)
  ) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    console.log(e.currentTarget.value, symbolLength.dataset.length);
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
