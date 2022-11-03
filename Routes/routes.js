const express = require('express');
const routes = express.Router();
const path = require('path');

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

routes.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

routes.get('/servicos', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'servicos.html'));
});

routes.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'sobre.html'));
});

module.exports = routes;
