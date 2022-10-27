var nome = []
var senha = []
var fazer
var index = 0
var nomeSup = []
var senhaSup = []
var index2 = 0
var continuar = "s"

function solicitarNome(){
    nome[index] = prompt("Qual seu nome?")
    senha[index] = prompt ("Digite sua senha")
    index++
}

function oqFazer(){
    fazer = prompt("o que deseja faze? 1-cadastrar; 2-fazer login; 3-excluir um cadastro; 4-encerrar o programa")
    return fazer
}

function fazerLogin(nome, senha) {
   for (var index1 = 0; index1 < nome.length; index1++) {
     if (nome == nome[index1] && senha == senha[index1]) {
            return true
        }
        return false
     } 
}  

function excluirCadastro(nome) {
    for (var index1 = 0; index1 < nome.length; index1++) {  
        if (nome == nome[index1]) {
            nome[index1] = 0
            senha[index1] = 0
        }
    }
    for (let index1 = 0; index1 < nome.length; index1++) {
      if (nome[index1] != 0 ) {
        nomeSup[index2] = nome[index1]
        senhaSup[index2] = senha[index1]
        index2++
      }  
    }
    nome = nomeSup
    senha= senhaSup
}

while (continuar == 's') {
    var fazer = oqFazer()
    if (fazer == '1') {
        solicitarNome()
        console.log('cadastro feito com sucesso')
    }else if (fazer == '2') {
        var nome = prompt('insira seu nome para login')
        var senha = prompt('insira sua senha para login')
        var login = fazerLogin(nome, senha)
        if (login == true) {
            console.log('login realizado com sucesso')
        } else {
            console.log('nome ou senha incorretos, impossivel realizar login')
        }
    }else if (fazer == '3') {
        var nome = prompt('digite um nome cadastrado para ser excluido')
        excluirCadastro(nome)
        console.log('cadastro excluido com sucesso')
    }else if (fazer == '4') {
        continuar = 'n'
        console.log('o programa sera encerrado')
    } 
    if (continuar == 's') {
        continuar = prompt('deseja continuar realizando acoes?')
    }
}