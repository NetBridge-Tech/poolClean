const db = require('./conexao');

// async function criarTabela(){
//     await db.connect()
//     await db.query(`CREATE TABLE endereco(
//             id_endereco integer PRIMARY KEY not null,
//             rua varchar(50) not null,
//             numero integer not null,
//             bairro varchar(50) not null,
//             cidade varchar(50) not null,
//             cep numeric not null,
//     )`)
// }

criarTabela();