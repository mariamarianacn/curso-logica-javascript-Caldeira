//a2-diferencaForOfIn.js

const numeros = [34,67,12,97,32]

for (let numerosIndice in numeros){
    console.log(numerosIndice)
}

for (let numerosValores of numeros){
    console.log(numerosValores)
}
