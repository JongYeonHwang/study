'use strict';

const express = require('express');
const path = require

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    // res.send('아브라카타브라');
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000, ()=> {
    console.log(app.get('port'), '번 포트 express start');
});

/* res.send, res.sendFile, res.json등 응답 함수를 하나의 라우터에서 여러개 사용시 에러가 난다. 
res.json은 json형식의 데이터를 받아 올 때 사용하게 되는데 writeHead와 end(JSONstringfiy)를 합친 기능의 메소드라고 보면 된다.
next()의 인자로는 'route'를 넣어서 중복코드를 줄이면서 라우팅이 가능하다. 
ex)
if(true) {
    next('route)
} else {
    next()
}  
*/
