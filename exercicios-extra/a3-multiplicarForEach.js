// a3-multiplicarForEach.js

const numeros = [1,2,3,4,5]

let multiplicar = 0
let somar = 0

numeros.forEach(function multiplicarForEach(numero){
    multiplicar = numero * 2
    console.log(`${numero} * 2 = ${multiplicar}`)
})
