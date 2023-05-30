const express = require('express');
const routes = express.Router();
const path = require('path');
const Pessoa = require('../Pessoa')
const bcrypt = require('bcryptjs');
const autenticarUsuario = require('../autenticarUsuario')
const session = require('express-session');

routes.get('/', (req, res) => {
    res.render('../views/home', {
        title: 'Pool Clean',
        style: 'home.css',
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


routes.post('/add-pessoa', async (req, res) => {
    if(req.body.senha == req.body.senha2){
        const hashedPassword = await bcrypt.hash(req.body.senha, 10)
        Pessoa.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: hashedPassword
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

routes.get('/login', (req, res) => {
    res.render('../views/login', {
        title: 'Login',
        style: 'login.css'
    })
});


routes.post('/login', (req, res) => {
    const email = req.body.email;
    const senhaInserida = req.body.senha;
  
    autenticarUsuario(email, senhaInserida)
      .then((autenticado) => {
        if (autenticado) {
            req.session.userEmail = email;
            res.redirect("/perfil") // Renderiza a página de sucesso
        } else {
          res.send('Credenciais inválidas!'); // Renderiza a página de erro
        }
      })
      .catch((error) => {
        res.status(500).send('Erro no servidor'); // Renderiza uma página de erro genérica
      });
  });



routes.get('/perfil', (req, res) => {
    Pessoa.findAll({
        order: [['id', 'DESC']],
        limit: 1
    }).then((pessoa) => {
        res.render('perfil', {
            pessoa: pessoa,
            title: 'Perfil',
            style: 'perfil.css'
        })
    })
})

routes.get('/editar', (req,res) => {
    Pessoa.findAll({
        order: [['id', 'DESC']],
        limit: 1
    }).then((pessoa) => {
        res.render('editar', {
            pessoa: pessoa,
            title: 'Perfil',
            style: 'editar.css'
        })
    })
})

routes.post('/alterar', async (req, res) => {
    try {

        const { nome, email, senha } = req.body;
        const { userEmail } = req.session;
        const user = await Pessoa.findOne({ where: { email: userEmail } });
  
        if (!user) {
          return res.status(404).send('Usuário não encontrado');
        }

        const existingUser = await Pessoa.findOne({ where: { email: email } });

        if (existingUser && existingUser.id !== user.id) {
            return res.status(400).send('O email fornecido já está sendo usado por outro usuário');
        }

        const hashedPassword = await bcrypt.hash(senha, 10)
  
        await Pessoa.update(
            { nome: nome, email: email, senha: hashedPassword },
            { where: { id: user.id } }
        );

        req.session.userEmail = email; 
        await user.save();
  
        res.redirect('/perfil');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro no servidor');
    }
  }); 

routes.get("/logout", function(req, res) {
    req.session.destroy(function(err) {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/login");
      }
    });
  })
  
  routes.post("/logout", function (req, res) {
    req.session.destroy(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/login");
      }
    });
  });

module.exports = routes;
