// a2-objObjectKeys.js

const Casa = {
    area: 1000,
    altura: 7,
    andares: 2
}

const chavesDoObjeto = Object.keys(Casa)
const valoresDoObjeto = Object.values(Casa)
const naosei = Object.entries(Casa)

console.log(chavesDoObjeto)
console.log(valoresDoObjeto)
console.log(naosei)