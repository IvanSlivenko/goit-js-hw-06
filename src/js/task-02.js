const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


//Отримаємо доступ до ul
const ingridientsList = document.querySelector('#ingredients');
// ingridientsList.textContent = 'ingridients';

//створимо масив-контейнер  
const container = [];

//робот для створення елементів
  const masuv=ingredients.map((elem) => {
    const element = document.createElement('li');
    element.textContent = elem;
    element.classList.add('.item');
    container.push(element);
    
  })
//pозмістимо елементи з контейнера 
ingridientsList.append(...container);

