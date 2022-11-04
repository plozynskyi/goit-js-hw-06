const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const createGalleryList = ingredients.map(ingredient => {
  const createLi = document.createElement('li');
  createLi.classList.add('item');
  createLi.textContent = ingredient;
  return createLi;
});

listEl.append(...createGalleryList);
