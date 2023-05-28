const Pessoa = require('./Pessoa'); // Importe o modelo Pessoa
const bcrypt = require('bcryptjs');

// Função para autenticar o usuário
async function autenticarUsuario(email, senhaInserida) {
    try {
      // Recupere o usuário pelo email fornecido
      const usuario = await Pessoa.findOne({ where: { email } });
  
      if (!usuario) {
        // Usuário não encontrado
        return false;
      } else {
        const senhaCadastrada = usuario.senha; // Recupere a senha cadastrada do usuário
        return bcrypt.compare(senhaInserida, senhaCadastrada);
      }
    } catch (error) {
      // Trate qualquer erro ocorrido durante a consulta ao banco de dados
      console.error('Ocorreu um erro durante a consulta ao banco de dados:', error);
      throw error;
    }
  }

module.exports = autenticarUsuario;