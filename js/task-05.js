const refs = {
  inputValueName: document.querySelector("#name-input"),
  confirmName: document.querySelector("#name-output"),
};

refs.inputValueName.addEventListener("input", (event) => {
  if (!event.currentTarget.value) {
    refs.confirmName.textContent = "Anonymous";
  } else refs.confirmName.textContent = event.currentTarget.value;
});
