import { addCatToStore, clearNewCats } from '../utils.js';

const form = document.getElementById('cat-form');
const clearCats = document.getElementById('clear-new-cats');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const newCat = {
        id: data.get('id'),
        name: data.get('name'),
        age: data.get('age'),
        color: data.get('color'),
        personality: data.get('personality'),
        price: Number(data.get('price')),
        img: data.get('img')
    };
    
    addCatToStore(newCat);
    alert('New Cat Added!');
});

clearCats.addEventListener('click', () => {
    clearNewCats();
});
