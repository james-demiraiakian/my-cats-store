import { addCatToStore, clearNewCats, findByID, getCat } from '../utils.js';

const form = document.getElementById('cat-form');
const clearCats = document.getElementById('clear-new-cats');
const removeACat = document.getElementById('remove-cats');

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
    window.location.reload();
});

clearCats.addEventListener('click', () => {
    clearNewCats();
    window.location.reload();
});

let cats = getCat();

for (let cat of cats) {
    const catButton = document.createElement('button');
    catButton.textContent = cat.name;
    catButton.value = cat.id;

    removeACat.appendChild(catButton);

    catButton.addEventListener('click', () => {
        let currentCats = getCat();
        let targetCat = findByID(catButton.value, currentCats);

        const targetIndex = currentCats.indexOf(targetCat);
        currentCats.splice(targetIndex, 1);

        localStorage.setItem('CATS', JSON.stringify(currentCats));
        window.location.reload();
    });    
}
