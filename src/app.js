import words from './words.js';
import generateRandom from './generateRandom.js';
import wordGenerator from './wordGenerator.js';
import addLetterDivs from './addLetterDivs.js';
import checkIfCorrectInput from './checkIfCorrectInput.js';
import checkIfGuessed from './checkIfGuessed.js';

const wordSection = document.getElementById('word');
const submitButton = document.getElementById('submitButton');
const inputString = document.getElementById('guessInput');

// Run tested functions to load word

let word = '';
function loadWord() {
    const index = generateRandom(words.length);
    word = wordGenerator(words, index);
    addLetterDivs(word, wordSection);
}

loadWord();
let guessedArray = [];
// let guessCount = 0;

submitButton.addEventListener('click', () => {
    const input = inputString.value;
    // guess
    if(!checkIfCorrectInput(input)) {
        alert('Incorrect Input!');
        return;
    }
    if(checkIfGuessed(input, guessedArray)) {
        alert('You guessed this already');
    }

});