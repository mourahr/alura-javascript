const listaDeChamadas = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

console.log(`Lista de Chamada: ${listaDeChamadas}`);

listaDeChamadas.splice(1, 2, 'Rodrigo');

console.log(`Lista de Chamada: ${listaDeChamadas}`);

listaDeChamadas.splice(1,0,'Jose')
console.log(`Lista de Chamada: ${listaDeChamadas}`);
