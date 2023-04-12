const db = require("./conexao")

const Pessoa = db.sequelize.define('pessoas', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
})

module.exports = Pessoa;