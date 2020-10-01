const imported = document.createElement('script')
imported.src = 'lista.js'
document.head.appendChild(imported)


var div = document.querySelector('#intelligentDiv')
var botao = document.querySelector('#botao')
var limpar = document.querySelector('#limpar')

botao.addEventListener('click', cliqueBotao)
function cliqueBotao() {
    var giro = Math.floor(Math.random() * lista.length)
    var resultado = lista[giro]
    div.innerHTML = resultado
}

limpar.addEventListener('click', limpaTela)
function limpaTela(){
    div.innerHTML = ''
}






