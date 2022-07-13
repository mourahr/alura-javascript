// DECLARACAO DE FUNCAO

// function soma(num1, num2) {
//     return num1 + num2;   
// }
// console.log(soma(4, 7));

// EXPRESSAO DE FUNCAO

console.log(apresentar());

function apresentar() {
    return "Olá!";
}

console.log(soma(2, 6));
const soma = function(num1, num2) {return num1 + num2};

// FUNCOES E VAR SAO CARREGADAS NO INICIO DA EXECUCAO
// CONST ACIMA GERA ERRO DEVIDO NAO SER CARREGADO NO INICIO != DE VAR