const db = require('./conexao');

async function listarPessoas(){
    await db.connect()
    result = await db.query('SELECT nome, email FROM pessoa ORDER BY id DESC LIMIT 1')
    console.log(result.rows)
    await db.end()
}

listarPessoas();