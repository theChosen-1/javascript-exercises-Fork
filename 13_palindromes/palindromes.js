const palindromes = function (string) {
    let cleanedStr = string.replace(/[^a-z0-9]/gi, '').toLowerCase();

    for (let x = 0; x < cleanedStr.length / 2; x++) {
        if (cleanedStr[x] !== cleanedStr[cleanedStr.length - 1 - x]) {
            return false;
        }    
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
