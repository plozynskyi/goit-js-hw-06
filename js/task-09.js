const changeColorBtn = document.querySelector('.change-color');
const spanColorText = document.querySelector('.color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', changeColor);

function changeColor(getRandomHexColor) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  body.style.backgroundColor = getRandomHexColor();
  spanColorText.textContent = getRandomHexColor();
}
