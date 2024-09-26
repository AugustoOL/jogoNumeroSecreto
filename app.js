let listaDeNumerosSorteados = [];
let limiteNumeros = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto){
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
    tentativas++
    limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* limiteNumeros + 1);
    let qtdElementosLista = listaDeNumerosSorteados.length;

    if(qtdElementosLista == limiteNumeros){
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do númerro secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 50');
}

function reiniciarGame(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled', true);
}