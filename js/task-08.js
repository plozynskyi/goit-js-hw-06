const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Введіть всі поля форми!!!');
  }

  const userDetails = { email: email.value, password: password.value };
  console.log(userDetails);

  event.currentTarget.reset();
}
