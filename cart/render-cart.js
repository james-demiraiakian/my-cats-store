import { cart } from "../data/cart-data.js";
import { findByID } from "../utils.js";
import { cats } from "../cats.js";

const tbody = document.getElementById('table-body');
export function renderCart(items) {
    for (let cartCats of cart) {
        const catsData = findByID(cartCats.id, cats);

        const tr = document.createElement('tr');
        
        const tdName = document.createElement('td');
        tdName.textContent = catsData.name;

        const tdQuant = document.createElement('td');
        tdQuant.textContent = cartCats.qty;

        const tdPrice = document.createElement('td');
        tdPrice.textContent = catsData.price;

        const tdTotal = document.createElement('td');
        tdTotal.textContent = cartCats.qty * catsData.price;

        tr.append(tdName, tdQuant, tdPrice, tdTotal);
        tbody.appendChild(tr);
    }
}
