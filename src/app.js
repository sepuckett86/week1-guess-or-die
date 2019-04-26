import words from './words.js';
import generateRandom from './generateRandom.js';
import wordGenerator from './wordGenerator.js';
import addLetterDivs from './addLetterDivs.js';

const wordSection = document.getElementById('word');

// Run tested functions to load word
function loadWord() {
    const index = generateRandom(words.length);
    const word = wordGenerator(words, index);
    addLetterDivs(word, wordSection);
}

loadWord();