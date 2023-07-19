// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function - RESUMINDO, QUER OS PARES

function apenasPares(array){
    let novoArray = []

    array.forEach((arrayPar) => {
        if (arrayPar % 2 == 0){
            novoArray.push(arrayPar)
        }
    })
    return novoArray
}

console.log(`os números pares de 1,2,3,4,5,6,7,8 são: ${apenasPares([1,2,3,4,5,6,7,8])}`) // PARES: 2, 4, 6, 8
