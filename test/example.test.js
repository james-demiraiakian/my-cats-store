// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { cats } from '../cats.js';
import { renderCats } from '../render-cats.js';
import { cart } from '../data/cart-data.js';
import { calculateOrderTotal, findByID } from '../utils.js';
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
    const expected = '2247350002.15';

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
    const expected = '<tr><td>Ducky</td><td>5</td><td>$0.43</td><td>$2.15</td></tr>';

    const cartCats = cart[0];
    const catsData = cats[1];

    const actual = renderLineItem(cartCats, catsData).outerHTML;

    expect.equal(actual, expected);
    
});
