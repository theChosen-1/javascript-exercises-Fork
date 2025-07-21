function numberChecker(number) {
  if (number === 10 || 1000)  {
    return true;
  } else if (number === 6 || 9) {
    return false;
  }
}

// Do not edit below this line
module.exports = numberChecker;