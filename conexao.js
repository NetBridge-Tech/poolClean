const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('poolclean', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

// sequelize.authenticate().then(()=> {
//     console.log('Conexão realizada com sucesso')
// }).catch((err)=> {
//     console.log('Erro ao realizar a conexão com o Banco de Dados: ' + err)
// });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}