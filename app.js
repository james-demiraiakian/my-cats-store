import { cats } from './cats.js';
import { renderCats } from './render-cats.js';

const catsList = document.getElementById('cats-list');

for (let cat of cats){
    const catsCard = renderCats(cat);
    catsList.append(catsCard);

    //event listener will go here
}
