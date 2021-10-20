//import { cats } from './cats.js';
import { renderCats } from './render-cats.js';
import { addCat, getCat } from './utils.js';

const catsList = document.getElementById('cats-list');

const cats = getCat();
for (let cat of cats){
    const catsCard = renderCats(cat);
    catsList.append(catsCard);
}

const addButton = document.querySelectorAll('.add-button');
// let qtyDiv = document.getElementsByClassName('qty-div');
// console.log(addButton[0]);
for (let button of addButton) {
    // console.log(typeof button.value);
    button.addEventListener('click', ()=> {
        addCat(button.value);
        //alert('Added a Cat to your cart');
        // const cart = getCart();
        // let cartQuant = cart[0][1];
        // qtyDiv.textContent = cartQuant;
        // console.log(cart);
        // console.log(cartQuant);
        // console.log(qtyDiv.textContent);
    });
}

const checkout = document.getElementById('checkout');
checkout.addEventListener('click', () => {
    window.location.replace('./cart/index.html');
});
