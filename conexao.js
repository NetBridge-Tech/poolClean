const pg = require('pg');

const client = new pg.Client({
    user: 'postgres',
    host:'localhost',
    database:'poolClean',
    password:'postgres',
    port:8080
});

module.exports = client;