const caesar = function(word, shift) {
    return word.split('').map(letter => shiftLetter(letter, shift)).join('');
};

function shiftLetter(letter, shift) {
    let ascVal = letter.charCodeAt();
    let shiftedVal = ascVal;
    shift = (shift % 26 + 26) % 26;  // handle negative shifts
    if (ascVal >= 65 && ascVal <= 90) {
        shiftedVal = 65 + ((ascVal - 65 + shift) % 26);
    }
    if (ascVal >= 97 && ascVal <= 122) {
        shiftedVal = 97 + ((ascVal - 97 + shift) % 26);
    }
    return String.fromCharCode(shiftedVal);
}

// Do not edit below this line
module.exports = caesar;
