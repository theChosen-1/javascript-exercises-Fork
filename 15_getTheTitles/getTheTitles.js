const getTheTitles = function(objArr) {
    let finalArr = [];
    for (objects in objArr) {
        finalArr.push(objArr[objects].title);
    }
    return finalArr
};

// Do not edit below this line
module.exports = getTheTitles;
