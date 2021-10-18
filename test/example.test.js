// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { cats } from '../cats.js';
import { renderCats } from '../render-cats.js';
import { cart } from '../data/cart-data.js';
import { findByID, calculateOrderTotal, getCart, addCat, getCat } from '../utils.js';
import { renderLineItem } from '../cart/render-line-item.js';

const test = QUnit.test;

test('renderCats should output some HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="cats-card"><h2>Eowyn</h2><img src="./assets/eowyn.jpg"><div class="color">Color: Calico</div><div class="age">Age: 7</div><div class="personality">Personality: Mean</div><div class="price">$7,250,000</div><button value="01" class="add-button">Add</button></div>';
    const eowyn = cats[0];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCats(eowyn).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('calculate order total functions as intended', (expect) => {
    const expected = '410350000';

    const actual = calculateOrderTotal(cart, cats);

    expect.equal(actual, expected);
});

test('findByID function test', (expect) => {
    const expected = {
        'id': '01',
        'name': 'Eowyn',
        'age': '7',
        'color': 'Calico',
        'personality': 'Mean',
        'price': 7250000,
        'img': './assets/eowyn.jpg'
    };

    const actual = findByID('01', cats);

    expect.deepEqual(actual, expected);
});

test('DOM Generation', (expect) => {
    const expected = '<tr><td>Ducky</td><td>5</td><td>$7,000,000.00</td><td>$35,000,000.00</td></tr>';

    const cartCats = cart[0];
    const catsData = cats[1];

    const actual = renderLineItem(cartCats, catsData).outerHTML;

    expect.equal(actual, expected); 
});

test('getCart() does a thing', (expect) => {
    const testCart = [0, 1, 2, 3, 4, 5];
    const testCartString = JSON.stringify(testCart);
    localStorage.setItem('CART', testCartString);

    const expected = [0, 1, 2, 3, 4, 5];

    const actual = getCart();

    expect.deepEqual(actual, expected);
});

test('addCat() does a thing', (expect) => {
    const testCart = getCart();
    console.log(testCart);
    const testCart2 = JSON.parse(testCart);

    const expected = {
        'id': '01',
        'name': 'Eowyn',
        'age': '7',
        'color': 'Calico',
        'personality': 'Mean',
        'price': 7250000,
        'img': './assets/eowyn.jpg'
    };

    const actual = testCart2;
    // console.log(actual);
    expect.deepEqual(actual, expected);
});

test('clearCart() does a thing', (expect) => {
    const testCart = [2, 3, 4, 5, 6];
    localStorage.setItem('CART', testCart);

    const expected = [2, 3, 4, 5, 6];

    const actual = getCart();

    expect.deepEqual(actual, expected);
});

test('addCatToStore adds a cat', (expect) => {

})
