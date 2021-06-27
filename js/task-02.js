const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = element;
  return ingredientEl;
});
ingredientsEl.append(...elements);
