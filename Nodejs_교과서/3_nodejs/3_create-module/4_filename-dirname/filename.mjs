'use strict';

console.log(import.meta.url);
console.log('__filename은 에러');
// console.log(__filename); 

// import.meta.url로 가져온 file의 디렉토리는 한글이 자동 변환되지 않음