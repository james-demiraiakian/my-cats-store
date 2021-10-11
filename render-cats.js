export function renderCats(cats) {
    const catsCard = document.createElement('div');
    catsCard.classList.add('cats-card');

    const catsHeader = document.createElement('h2');
    catsHeader.textContent = cats.name;

    const img = document.createElement('img');
    img.src = cats.img;

    const catsColor = document.createElement('div');
    catsColor.classList.add('color');
    catsColor.textContent = 'Color: ' + cats.color;

    const catsAge = document.createElement('div');
    catsAge.classList.add('age');
    catsAge.textContent = 'Age: ' + cats.age;

    const catsPersonality = document.createElement('div');
    catsPersonality.classList.add('personality');
    catsPersonality.textContent = 'Personality: ' + cats.personality;

    const button = document.createElement('button');
    button.value = cats.id;
    button.classList.add('add-button');
    button.textContent = 'Add';

    catsCard.append(catsHeader, img, catsColor, catsAge, catsPersonality, button);
    return catsCard;
}