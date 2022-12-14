const refs = {
  inputValueName: document.querySelector('#validation-input'),
};

refs.inputValueName.addEventListener('blur', event => {
  refs.inputValueName.classList.add('invalid');

  event.currentTarget.value.length === Number(refs.inputValueName.getAttribute('data-length'))
    ? refs.inputValueName.classList.replace('invalid', 'valid')
    : refs.inputValueName.classList.replace('valid', 'invalid');
});
