'use strict';

const Leaderboard = require("../models/leaderboard");

exports.leaderboard = async (req, res, next) => {
    const { level } = req.body;
    try {
        const scoreBoard = await Leaderboard.findAll({
            where: {
                level
            },
            order: [['time', 'ASC']],
            limit: [10],
        });
        res.send({scoreBoard});
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.clear = async (req, res, next) => {
    try {
        const score = await Leaderboard.create({
            nick: req.body.nick,
            time: req.body.time,
            level: req.body.level,
        });
        res.send(req.body.level);
    } catch (error) {
        console.error(error);
        next(error);
    }
};