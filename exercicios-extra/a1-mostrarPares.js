// a1-mostrarPares.js

const numeros = [1,2,3,4,5,6,]

for (let numerosPares in numeros){
    if (numeros[numerosPares] % 2 ==0){
        console.log(`o numero ${numeros[numerosPares]} é par!`)
    } else{
        console.log(`o numero ${numeros[numerosPares]} não é par!`)
    }
}