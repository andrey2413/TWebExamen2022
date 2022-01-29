const { Model, DataTypes } = require("sequelize");
const { db } = require('../db');

class Candidate extends Model {}

Candidate.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        validate: { min: 5 }
    },
    resume: {
        type: DataTypes.STRING,
        validate: { min: 100 }
    },
    email: { type: DataTypes.STRING, validate: { isEmail: true } }
}, { sequelize: db, modelName: 'candidate' });

db.sync().then(() => console.log('Synced Candidates'));

module.exports = Candidate;
