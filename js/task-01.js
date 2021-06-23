const categoriesListEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesListEl.length} категории`);

const categoryEl = document.querySelectorAll('.item').forEach(elem => {
  const catecoryNameEl = elem.querySelectorAll('h2')[0].textContent;
  console.log(`Категория: ${catecoryNameEl}`);
  console.log(`Количество элементов:${elem.querySelectorAll('ul li').length}`);
});
