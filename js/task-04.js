const spanEl = document.querySelector('#value');
const btnIncr = document.querySelector('button[data-action="increment"]');
const btndecr = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  spanEl.innerHTML = counterValue;
};
btnIncr.addEventListener('click', increment);

const decrement = () => {
  counterValue -= 1;
  spanEl.innerHTML = counterValue;
};
btndecr.addEventListener('click', decrement);
