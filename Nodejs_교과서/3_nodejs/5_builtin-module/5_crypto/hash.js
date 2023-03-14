'use strict';

const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('hase64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

// createHash: 해시 알고리즘으로 변환시킨다. md5, sha1 등등이 존재
// update: 변환할 문자열을 삽입
// digest: 인코딩 할 알고리즘을 넣는다.