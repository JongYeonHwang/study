'use strict';

const express = require('express');
const { leaderboard, clear } = require('../controllers/leaderboard');

const router = express.Router();

router.post('/', leaderboard);

router.post('/clear', clear);

module.exports = router;