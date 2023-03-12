const reverseString = function(word) {
    let letters = word.split('');
    let left = 0;
    let right = letters.length;
    while (left < right) {
        let temp = letters[left];
        letters[left] = letters[right];
        letters[right] = temp;
        left++;
        right--;
    }
    return letters.join('');
};

// Do not edit below this line
module.exports = reverseString;
