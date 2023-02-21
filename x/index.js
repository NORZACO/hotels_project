/* eslint-disable no-unused-vars */
const Sequelize = require('sequelize')
const fs = require("fs")
const path = require("path")

const basename = path.basename(__filename);
require('dotenv').config()




const sequelize = new Sequelize(
    'Hotel',
    'hoteladmin',
    'Passord1#$admin',
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
);



const db = {}
db.sequelize = sequelize
fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize);
        db[model.name] = model;
        console.log(db)
    });


Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// test connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = db