// 1-mostrarValor.js

let valores = [1, 2, 3, 4, 5, 6, 7]
valores.push(8)

console.log(valores)

for (let posicao = 0; posicao < valores.length; posicao++){
    console.log(`a posição ${posicao} tem valor ${valores[posicao]}`)
}
/////////////////////////
let posicaoTeste = 0;
/////////////////////////

console.log(`TESTE: a posição 0 tem valor: ${valores[posicaoTeste]}`)

// para cada posicao dentro de valores
for (let posicao in valores){
    console.log(valores[posicao])
}

///////////////////////
