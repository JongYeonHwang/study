'use strict';

// const a = false;
// if (a) {
//     import './func.mjs';
// }

// console.log('성공');

// mjs의 경우 if문 내에 import 하는것은 불가하다

const a = true;
if (a) {
    const m1 = await import('../2_ecma-script/func.mjs');
    console.log(m1);
    const m2 = await import('../2_ecma-script/var.mjs');
    console.log(m2);
}