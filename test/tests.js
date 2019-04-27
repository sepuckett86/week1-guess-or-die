import generateRandom from '../src/generateRandom.js';
import wordGenerator from '../src/wordGenerator.js';
import addLetterDivs from '../src/addLetterDivs.js';
import checkIfCorrectInput from '../src/checkIfCorrectInput.js';
import checkIfGuessed from '../src/checkIfCorrectInput.js';

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

// addLetterDivs
test('makes a div to contain letter for each letter of word', (assert) => {
    // Arrange
    const word = 'ab';
    const parentDiv = document.createElement('div');
    const expected = '<div class="letter-and-line"><div class="letter hidden">A</div><div class="letter-line"></div></div><div class="letter-and-line"><div class="letter hidden">B</div><div class="letter-line"></div></div>';

    // Act
    addLetterDivs(word, parentDiv);

    // Assert
    const parentContent = parentDiv.innerHTML;
    assert.equal(parentContent, expected);
});

// checkIfCorrectInput
test('return false if not a letter', (assert) => {
    // Arrange
    const inputString = 'notaletteriamastring';
    const expected = false;

    // Act
    const actual = checkIfCorrectInput(inputString);

    // Assert
    assert.equal(actual, expected);
});

test('return true if input a capital letter', (assert) => {
    // Arrange
    const inputString = 'A';
    const expected = true;

    // Act
    const actual = checkIfCorrectInput(inputString);

    // Assert
    assert.equal(actual, expected);
});

test('return true if input a lowercase letter', (assert) => {
    // Arrange
    const inputString = 'z';
    const expected = true;

    // Act
    const actual = checkIfCorrectInput(inputString);

    // Assert
    assert.equal(actual, expected);
});

// checkIfGuessed

test('return true if letter in array', (assert) => {
    const inputString = 'a';
    const letterArray = ['a', 'b', 'c'];
    const expected = true;

    const actual = checkIfGuessed(inputString, letterArray);

    assert.equal(actual, expected);
});

test('return false if letter not array', (assert) => {
    const inputString = 'd';
    const letterArray = ['a', 'b', 'c'];
    const expected = false;

    const actual = checkIfGuessed(inputString, letterArray);

    assert.equal(actual, expected);
});

test('adds letter to letterArray', (assert) => {
    const inputString = 'd';
    let letterArray = ['a', 'b', 'c'];
    const expected = ['a', 'b', 'c', 'd'];
    checkIfGuessed(inputString, letterArray);
    const actual = letterArray;
    assert.deepEqual(actual, expected);
});