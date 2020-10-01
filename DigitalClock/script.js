var div = document.querySelector('#intelligentDiv')

function currentTime() {
    var horario = new Date()

    var hora = horario.getHours()
    var minuto = horario.getMinutes()
    var segundo = horario.getSeconds()

    
    var novaHora = ajustarTempo(hora)
    var novoMinuto = ajustarTempo(minuto)
    var novoSegundo = ajustarTempo(segundo)
    
    div.innerHTML = `${novaHora} : ${novoMinuto} : ${novoSegundo}`
}

function ajustarTempo(a) {
    if (a < 10) {
        return `0${a}`
    } else {
        return a
    }
}

setInterval(currentTime, 500)