'use strict';

const express = require('express');
const morgan = require('morgan');

const leaderboardRouter = require('./routes/leaderboard');

const app= express();
app.set('port', process.env.PORT || 8001);

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('qweqwe');
});

app.use('/leaderboard', leaderboardRouter);

// app.use((req, res, next) => {
//     const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
//     error.status = 404;
//     next(error);
// });

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트 서버 시작')});