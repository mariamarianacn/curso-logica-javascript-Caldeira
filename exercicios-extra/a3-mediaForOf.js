// a3-mediaForOf

const numeros = [1,2,3,4,5]

let somaGeral = 0

for (let valores of numeros){
    somaGeral += valores
}

console.log(`a média é: ${somaGeral/numeros.length}`)
console.log(somaGeral)