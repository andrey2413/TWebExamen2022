const { Sequelize } = require('sequelize');
module.exports = { db: new Sequelize('sqlite:memory:') }
