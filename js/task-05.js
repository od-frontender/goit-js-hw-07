const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');

const onInputChange = event => {
  textEl.textContent = event.currentTarget.value;
};
inputEl.addEventListener('input', onInputChange);
