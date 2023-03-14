'use strict';

const os = require('os');

console.log('운영체제 정보----------------------------------------------------');
console.log('os.arch():', os.arch());                   // process.arch와 동일하다. (프로세서 아키텍쳐 정보)
console.log('os.platform():', os.platform());           // process.platform과 동일하다. (운영체제 플랫폼 정보)
console.log('os.type():', os.type());                   // 운영체제의 종류
console.log('os.uptime():', os.uptime());               // 운영체제 부팅 후 흐른 시간 (second) (process.uptime()은 노드의 실행 시간)
console.log('os.hostname():', os.hostname());           // 컴퓨터의 이름을 보여준다.
console.log('os.hostname():', os.release());            // 운영체제의 버전을 보여준다.

console.log('경로-------------------------------------------------------------');
console.log('os.homedir():', os.homedir());             // 홈 디렉토리의 경로를 보여준다.
console.log('os.tmpdir():', os.tmpdir());               // 임시 파일 저장 경로를 보여준다.

console.log('cpu 정보---------------------------------------------------------');
console.log('os.cpus():', os.cpus());                   // 컴퓨터의 코어 정보를 보여준다.
console.log('os.cpus().length:', os.cpus().length);     // 컴퓨터의 코어 갯수

console.log('메모리 정보-------------------------------------------------------');
console.log('os.freemem():', os.freemem());             // 사용 가능한 메모리
console.log('os.totalmem():', os.totalmem());           // 전체 메모리 용량