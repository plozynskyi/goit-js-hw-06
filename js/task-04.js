const counterElement = document.querySelector('#value');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
let counterValue = 0;

const handleClickDecrement = () => {
  counterElement.textContent = counterValue = counterValue - 1;
};

const handleClickIncrement = () => {
  counterElement.textContent = counterValue = counterValue + 1;
};

buttonDecrement.addEventListener('click', handleClickDecrement);
buttonIncrement.addEventListener('click', handleClickIncrement);
