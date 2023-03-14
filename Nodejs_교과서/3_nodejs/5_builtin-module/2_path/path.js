'ust strict';

const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);                             // 경로의 구분자
console.log('path.delimiter:', path.delimiter);                 // 환경 변수의 구분자
console.log('-------------------------------');
console.log('path.dirname():', path.dirname(string));           // 파일이 위치한 폴더의 경로
console.log('path.extname():', path.extname(string));           // 파일의 확장자
console.log('path.basename():', path.basename(string));         // 확장자를 포함한 파일의 이름
console.log('path.basename - extname', path.basename(string, path.extname(string)));        // 두번째 인자에 확장자를 넣어 이름만 표시한다.
console.log('--------------------------------');
console.log('path.parse()', path.parse(string));                // 파일 경로를 root, dir, base, ext, name으로 분리한다.
console.log('path.format():', path.format({                     // path.parse()한 객체를 파일 경로로 합친다.
    dir: 'C:\\users\\zerocho',
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\\path.js'));         // 구분자를 실수로 여러번 쓰거나 잘못 썼을때 정상적으로 변환한다.
console.log('---------------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C\\'));                              // 파일의 경로가 절대경로인지 상대경로인지 구분한다.
console.log('path.isAbsolute(./home)', path.isAbsolute('./home'));
console.log('---------------------------------');
console.log('path.relative():', path.relative('C:\\users\\zerocho\\path.js', 'C:\\'));      // 경로 두개를 넣으면 첫번쨰에서 두번째로 가는 방법을 반환한다.
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));   // 여러 인수를 넣으면 하나의 경로로 합친다.
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/zerocho'));    // join과 유사한 기능

// join과 resolve의 차이는 join의 경우에 모든 경로를 상대경로로 처리하여 간단하게 다 합치지만.
// resolve의 경우에는 ('/a', '/b', '/c')의 경우에 첫 인자에서 /를 만나면 절대경로로 처리하여 /b/c로 만들어 버린다. (/를 만나면 절대경로로 인식하여 앞의 경로 무시)

// 구분자가 \일 시에 node에서는 특수문자로 인식하여 예기치않은 오류가 발생할 수 있으므로 \\와 같이 표현한다.