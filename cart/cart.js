import { calculateOrderTotal, findByID, toUSD, getCart, clearCart } from '../utils.js';
import { cats } from '../cats.js';
import { renderLineItem } from './render-line-item.js';

const tbody = document.getElementById('table-body');
const cart = getCart();
for (let cartCats of cart) {
    const catsData = findByID(cartCats.id, cats);
    const tr = renderLineItem(cartCats, catsData);
    tbody.appendChild(tr);
}

const catTotal = calculateOrderTotal(cart, cats);
const orderTotal = document.getElementById('order-total');
orderTotal.textContent = toUSD(catTotal);

const orderButt = document.getElementById('place-order');
orderButt.addEventListener('click', () => {
    clearCart();
    window.location.replace('..');
});
