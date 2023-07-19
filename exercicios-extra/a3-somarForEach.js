// a3-somarForEach.js

const numeros = [1,2,3,4,5]
let somar = 0

numeros.forEach(function somarForEach(numero){
    somar = somar + numero
    console.log(`${somar}`) // retorna 1, 3, 6, 10, 15 -> as etapas da soma 
})

console.log(`o resultado final é: ${somar}`) // retorna 15