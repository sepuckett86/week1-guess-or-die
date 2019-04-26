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

export default addLetterDivs;