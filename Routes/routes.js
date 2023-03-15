const express = require('express');
const routes = express.Router();
const path = require('path');
const inserePessoa = require('../inserePessoa')
// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

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

routes.post('/add-pessoa', (req,res) => {
    inserePessoa.inserePessoa(req.body.nome, req.body.cpf, req.body.email, req.body.password).then(function(){
        res.send('Cadastro realizado com sucesso')
    }).catch(function(erro){
        res.send('Não foi possivel realizar o cadastro '+ erro)
    })
})

module.exports = routes;
