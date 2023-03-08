const db = require('./conexao')

exports.inserePessoa = function(email, senha){
    async function insereDados(email, senha){
        const novaPessoa = 'INSERT INTO pessoa (email, senha) VALUES ($1,$2)'
        await db.query(novaPessoa, [email, senha])
    }
    return (insereDados(email, senha))
}