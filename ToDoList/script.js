var input = document.querySelector('#intelligentInput1')
var botaoAdicionar = document.querySelector('#intelligentButton1')
var botaoApagar = document.querySelector('#intelligentButton2')
var table = document.querySelector('#intelligentTable')
var leticia = document.querySelector('#intelligent.input')

botaoAdicionar.addEventListener('click', adicionarInformacoes)
botaoApagar.addEventListener('click', apagarInformacoes)

function limpezaGeral(m) {
    if (m.value != '') {
        return leticia = ''
    } else {   
        console.log('ok');
    }
}

function adicionarInformacoes() {

    var td = document.createElement('td')

    td.textContent = input;

    var tr = document.createElement('tr')

    limpezaGeral('input')

    tr.appendChild(td)
    table.append(tr)


}

function apagarInformacoes(){
    table.innerHTML = ''
}