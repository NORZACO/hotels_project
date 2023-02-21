/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
// import dotenv
const dotenv = require('dotenv');
// load env variables
dotenv.config();



const sequelize = new Sequelize(
    'Hotel',
    'hoteladmin',
    'Passord1#$admin',
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
);


// test connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = sequelize;