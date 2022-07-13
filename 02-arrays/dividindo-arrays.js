const nomes = ['Joao', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(nomes.length);
console.log(`Alunos sala 1: ${sala1}`)
console.log(`Alunos sala 2: ${sala2}`)

console.log(sala1.length);
console.log(sala2.length);