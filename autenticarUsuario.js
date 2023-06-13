const Pessoa = require('./Pessoa');
const bcrypt = require('bcryptjs');

async function autenticarUsuario(email, senhaInserida) {
    try {
      const usuario = await Pessoa.findOne({ where: { email } });
  
      if (!usuario) {
        return false;
      } else {
        const senhaCadastrada = usuario.senha;
        return bcrypt.compare(senhaInserida, senhaCadastrada);
      }
    } catch (error) {
      console.error('Ocorreu um erro durante a consulta ao banco de dados:', error);
      throw error;
    }
  }

module.exports = autenticarUsuario;