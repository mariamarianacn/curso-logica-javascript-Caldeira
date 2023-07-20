const palavras = ["oi", "olá", "bonito", "maravilha", "estojo", "lapiseira", "macarrão"]

const palavrasSelecionadas = palavras.filter((palavra) => {
    return palavra.length >= 6
})

console.log(palavrasSelecionadas)