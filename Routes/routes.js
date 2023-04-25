const express = require('express');
const routes = express.Router();
const path = require('path');
const Pessoa = require('../Pessoa')


routes.get('/', (req, res) => {
    res.render('../views/home', {
        title: 'Pool Clean',
        style: 'home.css',
        // function: 'toggleSidebar()'
    })
});

routes.get('/login', (req, res) => {
    res.render('../views/login', {
        title: 'Login',
        style: 'login.css'
    })
});

routes.get('/servicos', (req, res) => {
    res.render('../views/servicos', {
        title: 'Serviços',
        style: 'servicos.css'
    })
});

routes.get('/sobre', (req, res) => {
    res.render('../views/sobre', {
        title: 'Sobre',
        style: 'sobre.css'
    })
});

routes.get('/cadastro', (req, res) => {
    res.render('../views/cadastro', {
        title: 'Cadastro',
        style: 'cadastro.css'
    })
});


routes.post('/add-pessoa', (req, res) => {
    if(req.body.password == req.body.password2){
        Pessoa.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.password
        }).then(() => {
            res.render('../views/add-pessoa', {
                title: 'Cadastro',
                style: 'add-pessoa.css'
            })
        }).catch((err) => {
            res.send("Erro: Não foi possível realizar o cadastro!" + err)
        })
    } else{
        res.render('../views/erro-cadastro', {
            title: 'Erro',
            style: 'add-pessoa.css'
        })
    }
})

routes.get('/perfil', (req, res) => {
    Pessoa.findAll({
        order: [['id', 'DESC']],
        limit: 1
    }).then((pessoa) => {
        res.render('perfil', {
            pessoa: pessoa,
            title: 'perfil',
            style: 'perfil.css'
        })
    })
})

module.exports = routes;
