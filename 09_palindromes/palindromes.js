const palindromes = function (word) {
    // Not the most JS-ish way to do things
    let left = 0;
    let right = word.length - 1;
    while (left < right) {
        // Skip non-alphabet characters
        if (!word[left].match(/[a-z]/i)) {
            left++;
            continue;
        }
        if (!word[right].match(/[a-z]/i)) {
            right--;
            continue;
        }
        if (word[left].toLowerCase() != word[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
