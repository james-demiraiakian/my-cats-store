export function renderLineItem(cartCats, catsData) {
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

    return tr;
};