const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulArr = [];
const ul = document.getElementById("ingredients");
ingredients.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  ulArr.push(listItem);
});
ulArr.forEach((item) => {
  ul.append(item);
});
