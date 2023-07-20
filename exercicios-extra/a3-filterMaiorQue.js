//a3-filterMaiorQue.js

const numeros = [10, 20, 50, 2, 140, 34, 35, 90, 1, 5, 0]

const numerosMaioresQue10 = numeros.filter((numero) => {
    return numero > 10 
})

console.log(numerosMaioresQue10)