function checkIfCorrectInput(inputString) {
    if(inputString.length > 1) {
        return false;
    } else if(inputString.charCodeAt(0) < 65 || inputString.charCodeAt(0) > 122) {
        return false;
    } else {
        return true;
    }
}

export default checkIfCorrectInput;