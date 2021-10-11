// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { cats } from "../cats.js";
import { renderCats } from "../render-cats.js";

const test = QUnit.test;

test('renderCats should output some HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="cats-card"><h2>Eowyn</h2><img src="./assets/eowyn.JPG"><div class="color">Color: Calico</div><div class="age">Age: 7</div><div class="personality">Personality: Mean</div><button value="01" class="add-button">Add</button></div>';
    const eowyn = cats[0];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCats(eowyn).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
