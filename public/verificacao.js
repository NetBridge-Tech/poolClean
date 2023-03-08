let nome = getElementById('nome')
let cpf = getElementById('cpf')
let email = getElementById('email')
let senha = getElementById('senha')
let senha2 = getElementById('senha2')


function verificar(){
    if(nome == null || nome == ''){
        alert('Preencha seu nome corretamente!')
    } else if( cpf == null || cpf == '' || cpf.length < 11){
        alert('Preencha um cpf válido!')
    } else if( email == null || email == ''){
        alert('Preencha um email válido!')
    } else if( senha == null || senha == ''){
        alert('Preencha uma senha vállda!')
    } else if(senha != senha2){
        alert('Preenha senhas iguais nos dois campos!')
    } else {
        alert('Cadastro feito com sucesso')
    }
}