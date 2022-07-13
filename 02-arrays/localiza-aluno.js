const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];
const mediaDosAlunos = [10, 7, 9, 6];

let listaDeNotas = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotas[0].includes(nomeDoAluno)) {
        indice = listaDeNotas[0].indexOf(nomeDoAluno)
        return listaDeNotas[0][indice] + ' , sua média é '+ listaDeNotas[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Joao"));