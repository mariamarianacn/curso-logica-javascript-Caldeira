const produtos = ["geladeira", "fogão", "coifa"]
const produtosNovos = produtos.map( function mudaLetra(valor){
    return valor[0].toUpperCase() + valor.slice(1) // pega tudo a partir do i. 1 
})

console.log(produtosNovos)
console.log(produtos)

// return valor.charAt(0).toUpperCase() + valor.slice(1) -> outra maneira seria essa!!

// o charAt(indice) retorna uma letra contida, ou seja, no indice zero de geladeira ele irá retornar g 