const input = document.getElementById("validation-input");
const symbolLength = document.querySelector(`input[data-length="6"]`);



input.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length == symbolLength.dataset.length) {
    input.classList.add("valid");
    console.log(e.currentTarget.value, symbolLength.dataset.length);
  } else {
    input.classList.add("invalid");
  }
});
