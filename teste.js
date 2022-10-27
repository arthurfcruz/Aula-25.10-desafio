var nome = []
var senha = []
var fazer
var index = 0

function solicitarNome(){
    nome[index] = prompt("Qual seu nome?")
    senha[index] = prompt ("Digite sua senha")
    index++
}

function oqFazer(){
    fazer = prompt("o que deseja faze? 1-cadastrar; 2-fazer login; 3-excluir um cadastro; 4-encerrar o programa")
    if (fazer == 1) {
        solicitarNome()
    }
    if (fazer == 2) {
        fazerLogin()
    }
    if (fazer == 3){
        excluirCadastro()
    }
    if (fazer == 4) {
        encerrarPrograma()
    }
}

function fazerLogin() {
    
}

function excluirCadastro() {
    
}

function encerrarPrograma() {
    
}