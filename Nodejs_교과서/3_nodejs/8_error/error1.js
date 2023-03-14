'use strict';

setInterval(() => {
    console.log('시작');
    try{
        throw new Error('서버 고장');
    } catch (err) {
        console.log(err);
    }
}, 1000);