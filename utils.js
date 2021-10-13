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
