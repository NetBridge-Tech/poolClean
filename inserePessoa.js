const db = require('./conexao')

exports.inserePessoa = function(nome,cpf, email, senha){
    async function insereDados(nome, cpf, email, senha){
        const novaPessoa = 'INSERT INTO pessoa (nome, cpf, email, senha) VALUES ($1,$2,$3,$4)'
        await db.query(novaPessoa, [nome, cpf, email, senha])
    }
    return (insereDados(nome, cpf, email, senha))
}