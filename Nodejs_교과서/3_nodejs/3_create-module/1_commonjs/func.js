'use strict';

const { odd, even } = require('./var');

function checkOddOrEven(num) {
    if (num % 2) {                  // 홀수라면 1 != num 이기때문에 true
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;