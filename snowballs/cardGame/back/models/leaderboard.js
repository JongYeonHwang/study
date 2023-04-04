'use strict';

const Sequelize = require('sequelize');

class Leaderboard extends Sequelize.Model {
    static initiate(sequelize) {
        Leaderboard.init({
            nick: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            time: {
                type:Sequelize.TIME,
                allowNull: false,
            },
            level: {
                type:Sequelize.STRING(10),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Leaderboard',
            tableName: 'leaderboards',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {}
};

module.exports = Leaderboard;