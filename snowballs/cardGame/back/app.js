'use strict';

const express = require('express');
const morgan = require('morgan');

const leaderboard = require('./routes/leaderboard');

const app= express();

app.set('port', process.env.PORT || 8001);

app.use('/leaderboard', leaderboard);

app.listen(app.get('port'), () => {
    '번 포트 서버 시작'});