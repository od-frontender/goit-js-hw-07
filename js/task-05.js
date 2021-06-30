const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');
console.log(textEl.textContent);

const onInputChange = () => {
  if (inputEl.value === '') {
    textEl.innerHTML = 'незнакомец';
  } else {
    textEl.innerHTML = inputEl.value;
  }
};
inputEl.addEventListener('input', onInputChange);
