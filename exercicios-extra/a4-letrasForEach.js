// a4-letrasForEach

function ultimaPrimeiraLetra(arrayInserido){
    let novoArray = []

    arrayInserido.forEach((letraBuscada) => {
        if (typeof letraBuscada == 'string'){
            novoArray.push(letraBuscada[0], letraBuscada[letraBuscada.length-1])
        }
    })
        return novoArray
}
console.log(`a primeira e a última letra de Mariana é: ${ultimaPrimeiraLetra(["Mariana"])}`)
console.log(`a primeira e a última letra pedro é: ${ultimaPrimeiraLetra(["pedro"])}`)
console.log(`a primeira e a última letra de joao é: ${ultimaPrimeiraLetra(["joao"])}`)
console.log(`a primeira e a última letra de 1 é: ${ultimaPrimeiraLetra([2])}`)




// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.


// Examples:
//     showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
//     showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

// */
// function showFirstAndLast(arr){
//     var newArr = [];
//     arr.forEach(function(value) {
//         if(typeof value === "string"){
//             newArr.push(value[0] + value[value.length-1]);
//         }
//     });
//     return newArr;
// }