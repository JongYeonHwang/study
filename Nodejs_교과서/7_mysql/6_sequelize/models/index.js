'use strict';

const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Comment = Comment;

User.initiate(sequelize);
Comment.initiate(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;

// index.js 를 통해 db 로 export 하지않고 직접 모델끼리 참조하게되면 순환참조가 일어나게 된다.