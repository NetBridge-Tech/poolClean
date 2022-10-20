const express = require('express');
const routes = express.Router();
const path = require('path');

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

routes.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

module.exports = routes;
