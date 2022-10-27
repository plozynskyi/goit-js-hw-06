const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i++) {
  let liItem = document.createElement("li");
  liItem.classList.add("item");

  liItem.textContent = ingredients[i];
  listEl.appendChild(liItem);
  console.log(liItem);
}
