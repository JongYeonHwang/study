'use stict';

const express = require('express');
const path = require('path');

const app = express();
const indexRouter = require('./routes');
const userRouter = require('./routes/user');

app.set('port', process.env.PORT || 3000);

app.use('/', indexRouter);

app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('안녕하세요');
});

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(app.get('port'), ()=> {
    console.log(app.get('port'), '포트 server start');
});