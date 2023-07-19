const numeros = [1,2,3,4]

console.log(numeros.indexOf(2)) // vai retornar indice 1

for (let indice in numeros){
    console.log(indice) // 0, 1, 2, 3 
}

for (let valores of numeros){
    console.log(valores) // 1,2,3,4
}