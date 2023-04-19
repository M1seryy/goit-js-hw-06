const form = document.querySelector(".login-form");
const userData = {
  email: "",
  password: "",
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value && password.value == "") {
    alert(`Всі поля повинні бути заповнені`);
  } else {
    userData.email = email.value;
    userData.password = password.value;
    console.log(userData);
    event.currentTarget.reset();
  }
});
