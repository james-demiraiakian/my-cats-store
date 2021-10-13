import { cats } from './cats.js';
import { renderCats } from './render-cats.js';
import { addCat } from './utils.js';

const catsList = document.getElementById('cats-list');

for (let cat of cats){
    const catsCard = renderCats(cat);
    catsList.append(catsCard);

    //event listener will go here
}

const addButton = document.querySelectorAll('.add-button');
for (let button of addButton) {
    button.addEventListener('click', ()=> {
        addCat(button.value);
        alert('Added a Cat to your cart');
    });
}

const checkout = document.getElementById('checkout');
checkout.addEventListener('click', () => {
    window.location.replace('./cart/index.html');
});
