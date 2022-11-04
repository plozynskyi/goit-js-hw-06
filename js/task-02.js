const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const createItemList = elements => {
  const createLi = document.createElement('li');
  createLi.classList.add('item');

  console.log(createLi);
};
const createGalleryList = ingredients.map(ingredient => createLi(ingredient));
console.log(createGalleryList());

// for (let i = 0; i < ingredients.length; i++) {
//   let liItem = document.createElement('li');

//   liItem.classList.add('item');
//   liItem.textContent = ingredients[i];

//   listEl.appendChild(liItem);

//   console.log(liItem);
// }
