let altura = 0; 
let largura = 0;
let vidas = 1;
var tempo = 15;
var criaMosquitoTempo = 1500;

var nivel = window.location.search
nivel = nivel.replace('?','');
if(nivel === "Fácil"){
    //1500
    var criaMosquitoTempo = 1500
}else if(nivel === "Médio"){
    //1000
    var criaMosquitoTempo = 1000
}else if(nivel === 'Díficil'){
    //750
    var criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0 ){
        clearInterval(criaMosquito);
        clearInterval(cronometro);
        window.location.href = 'vitoria.html'
        
    } else{
    document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000)

function posicaoRandomica() {

    // remover caso exista
    if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove();

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
    document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
    vidas++;
        }

}
    var posicaoX = Math.floor(Math.random() * (largura - 90)); // Subtrai 90 para garantir que o mosquito fique completamente visível
    var posicaoY = Math.floor(Math.random() * (altura - 90)); // Subtrai 90 para garantir que o mosquito fique completamente visível

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    // criar elemento HTML
    const mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = TamanhoAleatorio() + ' ' + LadoAleatorio(); 
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito);
    TamanhoAleatorio();
    LadoAleatorio();
}
function TamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return'mosquito1';

        case 1:
            return 'mosquito2';

        case 2:
            return 'mosquito3';  
}
}
function LadoAleatorio(){
    var lado = Math.floor(Math.random() * 2);

    switch(lado){
        case 0:
            return'ladoA';

        case 1:
            return 'LadoB';
}


}



