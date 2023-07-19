/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/

function dobrarValores(array){
    let novoArray = []; // novo array, diferente do valor inserido no parametro
    array.forEach((valorInserido) => { // faremos uma callback com o parametro
        novoArray.push(valorInserido * 2)  // DIFERENTE DO [5, 6, 7]
    })
    return novoArray
}

console.log(dobrarValores([5, 6, 7]))
