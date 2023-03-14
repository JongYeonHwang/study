'use strict';

const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) =>{                             // deprecated는 대체 가능한 성능이 더 좋은 기능이 있을때 사용하지 말라는 의미이다.
    console.log(x + y);                                                 // 첫번쨰 인수로는 함수, 두번째 인수로는 메세지를 담는다.
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes);          // 콜백패턴을 플미스로 변환하여 async/await 까지 사용가능하게 한다.
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.error(error);
    })