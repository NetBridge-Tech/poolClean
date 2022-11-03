const db = require('./conexao');

async function listarPessoas(){
    await db.connect()
    result = await db.query('SELECT * FROM pessoa')
    console.log(result.rows)
    await db.end()
}

listarPessoas();