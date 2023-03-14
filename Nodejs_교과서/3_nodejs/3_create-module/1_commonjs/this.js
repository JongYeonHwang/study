'use strict';

console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
    console.log('function', this === exports, this === global);
}

whatIsThis();


// 본디 함수내의 this === global은 true가 맞으나 use strict 사용시 선언하지 않고 전역변수를 대입할 수 없으며 this === global은 false가 나오게 된다.