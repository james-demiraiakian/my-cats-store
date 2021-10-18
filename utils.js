export function findByID(id, items) {
    for (const item of items) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calculateOrderTotal(cart, cats) {
    let orderTotal = 0;
    for (let cat of cart) {
        const ca = findByID(cat.id, cats);
        orderTotal = orderTotal + ca.price * cat.qty;
    }
    return orderTotal;
}

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}

export function getCart() {
    const catString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(catString);
    return cart;
}

export function addCat(id) {
    const cart = getCart();
    const cartCat = findByID(id, cart);
    if (cartCat) {
        cartCat.qty++;
    } else {
        const newCat = { id: id, qty: 1 };
        cart.push(newCat);
    }
    const stringCat = JSON.stringify(cart);
    localStorage.setItem('CART', stringCat);
}

export function clearCart() {
    localStorage.removeItem('CART');
}

import { cats } from './cats.js';

export function getCat() {
    let localCats = localStorage.getItem('CATS');
    const catsStored = JSON.parse(localCats);
    
    if (!catsStored) {
        const catsString = JSON.stringify(cats);
        localStorage.setItem('CATS', catsString);
    }

    return catsStored || cats;
}

export function addCatToStore(newCat) {
    let currentCats = getCat();

    currentCats.push(newCat);

    let catsString = JSON.stringify(currentCats);
    localStorage.setItem('CATS', catsString);
}

export function clearNewCats() {
    localStorage.removeItem('CATS');

    const catsSeed = JSON.stringify(cats);
    localStorage.setItem('CATS', catsSeed);
}
