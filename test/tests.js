import generateRandom from '../src/generateRandom.js';

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

//