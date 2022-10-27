const counterElement = document.querySelector("#value");
let counterValue = 0;

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const handleClickDecrement = () => {
  counterElement.textContent = counterValue = counterValue - 1;
};

buttonDecrement.addEventListener("click", handleClickDecrement);

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const handleClickIncrement = () => {
  counterElement.textContent = counterValue = counterValue + 1;
};

buttonIncrement.addEventListener("click", handleClickIncrement);
