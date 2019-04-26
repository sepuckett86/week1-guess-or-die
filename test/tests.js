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

// Selects the word from the array with that index and stores in a word variable for use by the guess function (word will need to be scoped in way guess function can read.

// In: array, index
// Out: word (string)

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

