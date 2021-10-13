import { cart } from '../data/cart-data.js';
import { calculateOrderTotal, findByID, toUSD } from '../utils.js';
import { cats } from '../cats.js';
import { renderLineItem } from './render-line-item.js';

const tbody = document.getElementById('table-body');

for (let cartCats of cart) {
    const catsData = findByID(cartCats.id, cats);

    const tr = renderLineItem(cartCats, catsData);
    tbody.appendChild(tr);
}

const catTotal = calculateOrderTotal(cart, cats);
const orderTotal = document.getElementById('order-total');
orderTotal.textContent = toUSD(catTotal);

const ca = findByID('01', cats);
console.log(ca);
