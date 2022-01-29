const { Model, DataTypes } = require("sequelize");
const { db } = require('../db');
const Candidate = require('./candidate.js');

class JobPosting extends Model {}

JobPosting.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        validate: {
            min: 3
        }
    },
    deadline: DataTypes.DATE
}, { sequelize: db, modelName: 'jobposting' });

//JobPosting.hasMany(Candidate);

db.sync().then(() => console.log('Synced Job Postings'));

module.exports = JobPosting;
