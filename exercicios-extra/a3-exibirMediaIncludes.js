const media = [10]
const alunoEscolhido = ["joao"]

const mediaAluno = [media, alunoEscolhido]

function mostrarMedia (aluno){
    if (mediaAluno[1].includes(aluno)){

        const indiceDoAluno = mediaAluno[1].indexOf(aluno)
        
        const mediaDoAluno = mediaAluno[0][indiceDoAluno]

        console.log(mediaDoAluno)
    }
}

mostrarMedia("joao")