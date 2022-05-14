var altura = 0
var largura = 0
var vidas = 1
var tempo = 60
var criaMosquitoTempo = 1500

// Aplicando nivel de dificuldade

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
    criaMosquitoTempo = 750
}

// Ajustar tamanho do palco do jogo

function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustarTamanhoPalcoJogo()

// Cronômetro

var cronometro = setInterval(function() {
    
    tempo -= 1
    
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'win.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

// Posições randomicas

function posicaoRandomica() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'game-over.html'
        } else {
            document.getElementById('v' + vidas).src = "src/images/coracao_vazio.png"
            vidas++
        }
    }
    
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criar elemento html
    var mosquito = document.createElement('img')

    mosquito.src = 'src/images/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)

}


// Tamanho randômico

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

// Lado randômico 

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

// Iniciar Jogo 

function iniciarJogo() {
    var nivel = document.getElementById('nivel').value

    if (nivel === '') {
        alert('Selecione um nível para iniciar o jogo')
        return false
    }

    window.location.href = "app.html?" + nivel
}
 
