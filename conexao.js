const pg = require('pg');

const client = new pg.Client({
    user: 'postgres',
    host:'localhost',
    database:'poolclean',
    password:'postgres',
    port:5432
});

module.exports = client;

// const {Sequelize} = require('sequelize')
// const sequelize = new Sequelize('exercicioSeq', 'postgres', 'postgres', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

// module.exports = {
//     Sequelize:Sequelize,
//     sequelize:sequelize
// }