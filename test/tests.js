import generateRandom from '../src/generateRandom.js';
import wordGenerator from '../src/wordGenerator.js';

const test = QUnit.test;

// generateRandom
test('returns random number between 0 and length of words array', (assert) => {
    // Arrange
    const arrayLength = 20;
    const expected = true;
    // Act
    const result = (generateRandom(arrayLength) >= 0 && generateRandom(arrayLength) < arrayLength);
    // Assert
    assert.equal(result, expected);
});

// wordGenerator

test('returns first word from input array when index is 0', (assert) => {
    // Arrange
    const wordArray = ['abc', 'def', 'ghi'];
    const index = 0;
    const expected = 'abc';

    // Act
    const result = wordGenerator(wordArray, index);

    // Assert
    assert.equal(result, expected);
});

test('returns word at index 2 from input array when index is 2', (assert) => {
    // Arrange
    const wordArray = ['abc', 'def', 'ghi'];
    const index = 2;
    const expected = 'ghi';

    // Act
    const result = wordGenerator(wordArray, index);

    // Assert
    assert.equal(result, expected);
});

// Create the letters of the "Word to Guess". (You might not hide them initially during development so you can "see" that word is loading correctly. Otherwise, you will need to inspect with the Dev Tools)

// In: word
// Out: nothing, but in function render div elements

test('makes a div to contain letter for each letter of word', (assert) => {
    // Arrange
    const word = 'ab'
    const parentDiv = document.createElement('div');
    const expected = '<div class="letter-and-line"><div class="letter">A</div><div class="letter-line"></div></div><div class="letter-and-line"><div class="letter">B</div><div class="letter-line"></div></div>';

    // Act
    addLetterDivs(word, parentDiv);

    // Assert
    const parentContent = parentDiv.innerHTML;
    assert.equal(parentContent, expected);
});

function addLetterDivs(word, parentDiv) {
    for(let i = 0; i < word.length; i++) {
        const letter = word[i].toUpperCase();
        const childDiv = document.createElement('div');
        childDiv.classList.add('letter-and-line');
        const childLetterDiv = document.createElement('div');
        childLetterDiv.classList.add('letter');
        childLetterDiv.textContent = letter;
        const childLetterLineDiv = document.createElement('div');
        childLetterLineDiv.classList.add('letter-line');
        childDiv.appendChild(childLetterDiv);
        childDiv.appendChild(childLetterLineDiv);
        parentDiv.appendChild(childDiv);
    }
}