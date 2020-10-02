var contador = 1
var div = document.querySelector('.intelligentDiv')
var id = null

function play() {
    if (id == null) {
        id = setInterval(function jogar() {
            div.innerHTML = contador++
        }, 1000)
    }

}

function stop() {
    clearInterval(id)
    clearInterval(mili)
    id = null
    mili = null

}

function reload() {
    location.reload()
}