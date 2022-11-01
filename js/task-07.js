const refs = {
  curentChangeValue: document.querySelector("#font-size-control"),
  changeText: document.querySelector("#text"),
};

refs.curentChangeValue.addEventListener("input", (event) => {
  const rengeValue = event.currentTarget.value;
  refs.changeText.style.fontSize = `${rengeValue}px`;
});
