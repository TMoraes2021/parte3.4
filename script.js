//cores
function corPagina(){
    var cor = document.getElementById('cor1').value;
    var local = document.getElementById('body');

    local.style.backgroundColor = cor;
}

function corSubtitulo(){
    var cor = document.getElementById('cor2').value;
    var local = document.getElementsByClassName('subtitulo');
    var i;

    for (i=0; i< local.length; i++)
        local[i].style.color = cor;
}

function corFundotexto(){
    var cor = document.getElementById('cor3').value;
    var local = document.getElementById('index');

    local.style.backgroundColor = cor;
}

function corParagrafo(){
    var cor = document.getElementById('cor4').value;
    var local = document.getElementsByClassName('texto');
    var i;

    for (i=0; i< local.length; i++)
        local[i].style.color = cor;
}


function corTitulo(){
    var cor = document.getElementById('cor5').value;
    var local = document.getElementById('titulo');

    local.style.color = cor;
}

function corLink(){
    var cor = document.getElementById('cor6').value;
    var local = document.getElementsByClassName('link');
    var i;

    for (i=0; i< local.length; i++)
        local[i].style.color = cor;
}


//nome da fonte
function fonteSelecionada(fonte){
    var index = document.getElementById('index');

    index.style.fontFamily = fonte.value;
}


//tamanho da fonte

//tamanho original
var tamanhoTitulo = 32;
var tamanhoLink = 16;
var tamanhoSeparador = 16;
var tamanhoSubtitulo = 24;
var tamanhoTexto = 11;
var tamanhoEndereco = 10;
var tamanhoNomeLabel = 11;
//aumentar
function Aumentar(){
    var localTitulo = document.getElementById('titulo');
    var localLink = document.getElementsByClassName('link');
    var localSeparador = document.getElementsByClassName('separador');
    var localSubtitulo = document.getElementsByClassName('subtitulo');
    var localTexto = document.getElementsByClassName('texto');
    var localEndereco = document.getElementById('endereco');
    var localNomeLabel = document.getElementsByClassName('nomeLabel');

    var i;

    tamanhoTitulo ++;
    tamanhoLink ++;
    tamanhoSeparador ++;
    tamanhoSubtitulo ++;
    tamanhoTexto ++;
    tamanhoEndereco ++;
    tamanhoNomeLabel ++;
    
    //Titulo
    localTitulo.style.fontSize = tamanhoTitulo + 'px';
    //Link
    for (i=0; i< localLink.length; i++)
        localLink[i].style.fontSize = tamanhoLink + 'px';
    //Separador
    for (i=0; i< localSeparador.length; i++)
        localSeparador[i].style.fontSize = tamanhoSeparador + 'px';
    //Subtitulo
    for (i=0; i< localSubtitulo.length; i++)
        localSubtitulo[i].style.fontSize = tamanhoSubtitulo + 'px';
    //Texto
    for (i=0; i< localTexto.length; i++)
        localTexto[i].style.fontSize = tamanhoTexto + 'pt';
    //Endereco
    localEndereco.style.fontSize = tamanhoEndereco + 'pt';
    //NomeLabel
    for (i=0; i< localNomeLabel.length; i++)
        localNomeLabel[i].style.fontSize = tamanhoNomeLabel + 'pt';

};

//diminuir
function Diminuir(){
    var localTitulo = document.getElementById('titulo');
    var localLink = document.getElementsByClassName('link');
    var localSeparador = document.getElementsByClassName('separador');
    var localSubtitulo = document.getElementsByClassName('subtitulo');
    var localTexto = document.getElementsByClassName('texto');
    var localEndereco = document.getElementById('endereco');
    var localNomeLabel = document.getElementsByClassName('nomeLabel');

    var i;

    tamanhoTitulo --;
    tamanhoLink --;
    tamanhoSeparador --;
    tamanhoSubtitulo --;
    tamanhoTexto --;
    tamanhoEndereco --;
    tamanhoNomeLabel --;
    
    //Titulo
    localTitulo.style.fontSize = tamanhoTitulo + 'px';
    //Link
    for (i=0; i< localLink.length; i++)
        localLink[i].style.fontSize = tamanhoLink + 'px';
    //Separador
    for (i=0; i< localSeparador.length; i++)
        localSeparador[i].style.fontSize = tamanhoSeparador + 'px';
    //Subtitulo
    for (i=0; i< localSubtitulo.length; i++)
        localSubtitulo[i].style.fontSize = tamanhoSubtitulo + 'px';
    //Texto
    for (i=0; i< localTexto.length; i++)
        localTexto[i].style.fontSize = tamanhoTexto + 'pt';
    //Endereco
    localEndereco.style.fontSize = tamanhoEndereco + 'pt';
    //NomeLabel
    for (i=0; i< localNomeLabel.length; i++)
        localNomeLabel[i].style.fontSize = tamanhoNomeLabel + 'pt';

};

//restaurar valores

function RestaurarValores(){
    var localTitulo = document.getElementById('titulo');
    var localLink = document.getElementsByClassName('link');
    var localSeparador = document.getElementsByClassName('separador');
    var localSubtitulo = document.getElementsByClassName('subtitulo');
    var localTexto = document.getElementsByClassName('texto');
    var localEndereco = document.getElementById('endereco');
    var localNomeLabel = document.getElementsByClassName('nomeLabel');

    var i;

    
    var tamanhoTitulo = 32;
    var tamanhoLink = 16;
    var tamanhoSeparador = 16;
    var tamanhoSubtitulo = 24;
    var tamanhoTexto = 11;
    var tamanhoEndereco = 10;
    var tamanhoNomeLabel = 11;
    
    //Titulo
    localTitulo.style.fontSize = tamanhoTitulo + 'px';
    //Link
    for (i=0; i< localLink.length; i++)
        localLink[i].style.fontSize = tamanhoLink + 'px';
    //Separador
    for (i=0; i< localSeparador.length; i++)
        localSeparador[i].style.fontSize = tamanhoSeparador + 'px';
    //Subtitulo
    for (i=0; i< localSubtitulo.length; i++)
        localSubtitulo[i].style.fontSize = tamanhoSubtitulo + 'px';
    //Texto
    for (i=0; i< localTexto.length; i++)
        localTexto[i].style.fontSize = tamanhoTexto + 'pt';
    //Endereco
    localEndereco.style.fontSize = tamanhoEndereco + 'pt';
    //NomeLabel
    for (i=0; i< localNomeLabel.length; i++)
        localNomeLabel[i].style.fontSize = tamanhoNomeLabel + 'pt';

};


//hover imagem
var Jaspion = document.getElementById('Jaspion');
var Changeman = document.getElementById('Changeman');
var Jiraiya = document.getElementById('Jiraiya');
var Jiban = document.getElementById('Jiban');

var imgGeral = document.getElementById('imgGeral');


function mouseOverJaspion(){
    imgGeral.src = "jaspion.png";
};
function mouseOutJaspion(){
    imgGeral.src = "tokusatsu.png";
};

function mouseOverChangeman(){
    imgGeral.src = "changeman.png";
};
function mouseOutChangeman(){
    imgGeral.src = "tokusatsu.png";
};

function mouseOverJiraiya(){
    imgGeral.src = "jiraiya.png";
};
function mouseOutJiraiya(){
    imgGeral.src = "tokusatsu.png";
};

function mouseOverJiban(){
    imgGeral.src = "jiban.png";
};
function mouseOutJiban(){
    imgGeral.src = "tokusatsu.png";
};