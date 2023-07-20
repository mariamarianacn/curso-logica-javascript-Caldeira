const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arrayFrutas, letrasEscolhidas) {
  return arrayFrutas.filter((fruta) => fruta.toLowerCase().includes(letrasEscolhidas.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']