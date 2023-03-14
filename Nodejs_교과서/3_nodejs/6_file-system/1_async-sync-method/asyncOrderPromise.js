'use strict';

const fs = require('fs').promises;

console.log('시작');
fs.readFile('./readme.txt')
    .then((data) => {
        console.log('1번', data.toString());
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('2번', data.toString());
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('3번', data.toString());
        console.log('끝')
    })
    .catch((err) => {
        console.error(err);
    });

    // function을 만들어 async/await을 이용하여 만들수도 있다.