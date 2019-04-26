function generateRandom(arrayLength) {
    const randomNumber = Math.floor(Math.random() * (arrayLength));
    return randomNumber;
}

export default generateRandom;