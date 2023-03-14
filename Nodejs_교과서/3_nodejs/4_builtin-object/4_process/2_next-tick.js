'use strict';

setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise'));

// Promise와 nextTick은 마이크로태스크에서 따로 구분한다. 
// 해당 코드 실행 시 nextTick과 Promise가 가장 먼저 실행 (nextTick이 최우선 실행된다)