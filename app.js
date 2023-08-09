'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const img1 = document.getElementById('img1')

function mudarCor (){
    forma1.classList.toggle('vermelho')
}

function mudarForma (){
    forma2.classList.toggle('circulo')
}

function mudarImg (){
    img1.classList.toggle('principe')
}

function invisivel (){
    forma3.classList.toggle('some')
}

function mudar (){
    forma4.classList.toggle('muda')
}

function aumenta (){
    forma5.classList.toggle('posição')
}

function soom (){
    forma6.classList.toggle('zoom')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
img1.addEventListener('click', mudarImg)
forma3.addEventListener('click', invisivel)
forma4.addEventListener('click', mudar)
forma5.addEventListener('click', aumenta)
forma6.addEventListener('click', soom)