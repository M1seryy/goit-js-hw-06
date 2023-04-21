const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.getElementById("ingredients");
let newArr = ingredients.map((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.className = "item";
  return listItem;
});
ul.append(...newArr);
