'use strict';

let i = 1;
setInterval(() => {
    if (i === 5) {
        console.log('종료!');
        process.exit();
    }
    console.log(i);
    i += 1;
}, 1000);

// exit 메서드는 인수로 코드 번호를 줄 수 있다. 비정상 종료하는 경우에는 인수로 1을 주면 된다. ex) if문 활용하여 에러로 비정상 종료시 exit(1);