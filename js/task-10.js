function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

let widthNewBox = 0;
let heightNewBox = 0;
let boxesDiv = [];

const createBoxes = () => {
  const amountElements = Number(refs.input.value);

  for (let i = 0; i < amountElements; i += 1) {
    const newDivBox = document.createElement('div');

    widthNewBox = widthNewBox > 0 ? widthNewBox + 10 : 30;
    heightNewBox = heightNewBox > 0 ? heightNewBox + 10 : 30;

    newDivBox.style.backgroundColor = getRandomHexColor();
    newDivBox.style.width = `${widthNewBox}px`;
    newDivBox.style.height = `${heightNewBox}px`;

    boxesDiv.push(newDivBox);
  }

  refs.boxes.append(...boxesDiv);
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = '';
  widthNewBox = 0;
  heightNewBox = 0;
  boxesDiv = [];
};

refs.createButton.addEventListener('click', createBoxes);
refs.destroyButton.addEventListener('click', destroyBoxes);
