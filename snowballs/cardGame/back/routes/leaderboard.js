'use strict';

const express = require('express');
const { leaderboard } = require('../controllers/leaderboard');

const router = express.Router();

router.post('/', leaderboard);

module.exports = router;