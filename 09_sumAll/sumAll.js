const sumAll = function(int1, int2) {
    let sum = int1
    let num = int1
    while (num != int2) {
        num += 1
        sum += num
    }
    return sum
};
// Do not edit below this line
module.exports = sumAll;
