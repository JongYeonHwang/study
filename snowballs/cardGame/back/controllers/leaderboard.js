'use strict';

const Leaderboard = require("../models/leaderboard");

exports.leaderboard = async (req, res, next) => {
    const { nick, time, level } = req.body;
    try {
        const scoreBoard = await Leaderboard.findAll({
            where: {
                level
            },
            order: [['time', 'ASC']],
        });
        res.render('result', {scoreBoard});
        
    } catch (error) {
        console.error(error);
        next(error);
    }
};