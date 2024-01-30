const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancarFaixa = document.getElementById('proximaFaixa');
const botaoVoltarFaixa = document.getElementById('faixaAnterior');
const faixa = document.getElementById('faixa');
const nomeDoCapitulo = document.getElementById('capitulo');

const numeroDeCapitulos = 10;
let estaTocando = 0;
let faixaatual = 1;

function tocarFaixa(){
    faixa.play();
    botaoPlayPause.classList.remove('bi-play');
    botaoPlayPause.classList.add('bi-pause');
    estaTocando = 1;
}

function pausarFaixa(){
    faixa.pause();
    botaoPlayPause.classList.remove('bi-pause');
    botaoPlayPause.classList.add('bi-play');
    estaTocando = 0;
}

function tocarPausar(){
    if (estaTocando === 0){
        tocarFaixa();
    }else{
        pausarFaixa();
    }
}

function trocarNomeFaixa(){
    nomeDoCapitulo.innerText = 'Capitulo ' + faixaatual;

}

function avancarFaixa(){
    if (faixaatual === numeroDeCapitulos){
        faixaatual = 1;
    } else {
    faixaatual = faixaatual + 1;
    }
    
    faixa.src = './src/books/dom-casmurro/'+ faixaatual + '.mp3';
    tocarFaixa();
    estaTocando = 1;
    trocarNomeFaixa()
}

function voltarFaixa(){
    if (faixaatual === 1){
        faixaatual = numeroDeCapitulos;
    } else {
        faixaatual = faixaatual - 1;
    }

    faixa.src = './src/books/dom-casmurro/'+ faixaatual + '.mp3';
    tocarFaixa();
    estaTocando = 1;
    trocarNomeFaixa()
}

botaoPlayPause.addEventListener('click', tocarPausar); 
botaoAvancarFaixa.addEventListener('click', avancarFaixa);
botaoVoltarFaixa.addEventListener('click', voltarFaixa);
