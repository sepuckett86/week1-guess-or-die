function checkIfGuessed(inputString, letterArray) {
    if(letterArray.includes(inputString)) {
        return true;
    } else {
        letterArray.push(inputString);
        return false;
    }
}

export default checkIfGuessed;