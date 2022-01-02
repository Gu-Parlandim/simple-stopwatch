let intervalo
let display = document.querySelector(".entrada_dados")
let horas = 0
let minutos = 0
let segundos = 0
let estadoAtual

function iniciar(){
    estadoAtual = true
    statusAtual(estadoAtual)
    intervalo = setInterval(function(){
        segundos++
        display.innerHTML = verificarHora(horas, minutos, segundos)
    }, 1000)
}

function verificarHora(hr, min, sec){
    if(sec >= 60){
        minutos++
        segundos = 0
    }
    else if(min >= 60){
        horas++
        minutos= 0
    }
    let horario = `${digitos(hr)}:${digitos(min)}:${digitos(sec)}`
    return horario
}

function digitos(number){
    if(number <10){
        return "0" + number
    }
    else{
        return number
    }
}

function statusAtual(status){
    if(status == true){
        document.querySelector("#iniciar").disabled = true
    }
    else{
        document.querySelector("#iniciar").disabled = false
    }
}


function pausa(){
    estadoAtual = false
    statusAtual(estadoAtual)
    clearInterval(intervalo)
}


function reiniciar(){
    estadoAtual = false
    statusAtual(estadoAtual)
    clearInterval(intervalo)
    horas = 0
    minutos = 0
    segundos = 0
    display.innerHTML = "00:00:00"
}