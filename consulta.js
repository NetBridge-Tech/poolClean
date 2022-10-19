const db = require('./conexao');

async function listarFuncionarios(){
    await db.connect()
    result = await db.query('SELECT * FROM funcionario')
    console.log(result.rows)
    await db.end()
}

listarFuncionarios();