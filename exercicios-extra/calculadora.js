'use strict';

const display = document.getElementById('display')
const teclas = document.querySelectorAll('[id*=numero]') // do css também | o que esse* faz? seleta quem possuiu tecla no id, nao importa o que tem antes ou depois

teclas.forEach((teclas) => {
    teclas.addEventListener('click', inserirNumero) // ao clicar, ele irá inserir o número
})

