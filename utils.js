export function findByID(id, items) {
    for (const item of items) {
        if (item.id === id) {
            return item;
        };
    };
};

export function calculateOrderTotal(cart, cats) {
    let orderTotal = 0;
    for (let cat of cart) {
        const ca = findByID(cat.id, cats);
        orderTotal = orderTotal + ca.price * cat.qty
        console.log(orderTotal + ' ' + ca.price + ' ' + cat.qty);
    }
    return orderTotal;
}

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}
