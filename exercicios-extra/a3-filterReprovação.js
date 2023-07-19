const alunos = ["ana", "ma", "liz", "anne"]

const notas = [2,8,5,10]

const reprovados = alunos.filter((indiceDoAluno) => {
    return notas[indiceDoAluno] < 7
})

console.log(reprovados)
