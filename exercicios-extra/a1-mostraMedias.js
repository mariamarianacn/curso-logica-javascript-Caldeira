// a1-mostraMedias.js

const alunos = ["ana", "pedro", "joao"]
const media = [10, 9, 7]

const alunosMedia = [alunos, media]

function exibirMedia(nome){
    if (alunosMedia[0].includes(nome)){
        const indice = alunosMedia[0].indexOf(nome); // chamar pelo nome da let inserida NÃO pode

        const media = alunosMedia[1][indice]; // indexOf(indice)

        console.log(`o/a aluno/a ${nome} tem a nota final ${media}`)
    } else {
        console.log("aluno não encontrado")
    }
}

exibirMedia("ana")
exibirMedia("pedro")
exibirMedia("joao")
exibirMedia("paulo")
