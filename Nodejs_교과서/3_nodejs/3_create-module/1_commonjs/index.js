'use strict';

const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
    if (str.length % 2) {               // 홀수라면
        return odd;
    }
    return even;
}

console.log(checkNumber(0));
console.log(checkStringOddOrEven('hello'));