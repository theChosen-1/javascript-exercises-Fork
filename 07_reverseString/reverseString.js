const reverseString = function(string) {
    let array = string.split(' ');
    for (word in array) {
        array[word] = array[word].split('').reverse().join('');
    }
    let reverseStr = array.join(' ');
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
