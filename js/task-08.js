const collections = document.querySelector('#controls');
const createBtnEl = document.querySelector('[data-action="render"]');
const values = document.querySelector('#controls input');
const container = document.querySelector('#boxes');
const delEl = document.querySelector('[data-action="destroy"]');

createBtnEl.addEventListener('click', () => {
  const createBoxes = amount => {
    for (let i = 1; i <= amount; i++) {
      const newDivEl = document.createElement('div');
      newDivEl.style.width = '30px';
      newDivEl.style.height = '30px';
      newDivEl.style.backgroundColor = 'green';
      newDivEl.style.margin = '10px';

      container.appendChild(newDivEl);
      const destroyBoxes = () => {
        newDivEl.remove();
        values.value = '';
      };

      delEl.addEventListener('click', destroyBoxes);
    }
  };
  createBoxes(values.value);
});
