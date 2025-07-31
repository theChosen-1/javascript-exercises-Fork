const findTheOldest = function(dataArr) {
    let oldestAge = 0;
    let oldestPerson = "";
    // loops through all the objects inside the array
    for (obj in dataArr) {
        // checks if there is no death yaer
        if (dataArr[obj].yearOfDeath === undefined) {
            let currentDate = new Date();
            let age = currentDate.getFullYear() - dataArr[obj].yearOfBirth;
            // checks if this person is oldest
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = dataArr[obj].name;
            }
        } 
        // if there is a death year
        else {
            let age = dataArr[obj].yearOfDeath - dataArr[obj].yearOfBirth;
            // oldest person check
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = dataArr[obj].name;
            }
        }
    }
    // returns the object of the oldest person
    for (objects in dataArr) {
        if (dataArr[objects]. name === oldestPerson) {
            return dataArr[objects];
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;