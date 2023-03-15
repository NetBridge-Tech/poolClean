const db = require('./conexao')

exports.inserePessoa = function(nome,cpf, email, password){
    async function insereDados(nome, cpf, email, password){
        await db.connect()
        const novaPessoa = 'INSERT INTO pessoa (nome, cpf, email, senha) VALUES ($1,$2,$3,$4)'
        await db.query(novaPessoa, [nome, cpf, email, password])
        await db.end()
    }
    return (insereDados(nome, cpf, email, password))
}