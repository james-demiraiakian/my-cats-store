import { cats } from './cats.js';
import { renderCats } from './render-cats.js';

const catsList = document.getElementById('cats-list');

for (let cat of cats){
    const catsCard = renderCats(cat);
    catsList.append(catsCard);

    //event listener will go here
}

const addButton = document.querySelectorAll('.add-button');
for (let button of addButton) {
    button.addEventListener('click', ()=> {
        addCat(button.id);
        alert('Added a Cat to your cart');
    });
}
