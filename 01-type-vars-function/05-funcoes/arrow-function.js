// DECLARATIVE FUNCTION
function apresentar(nome) {
    return `Meu nome é ${nome}`;
}


// HOISTING: MESMO COMPORTAMENTO DA EXPRESSAO DE FUNCAO


// ARROW FUNCTION
const apresentarArrow = nome => `meu nome é ${nome}`;
console.log(apresentarArrow('Hugo'));

const soma = (num1, num2) => num1 + num2;
console.log(soma(3, 7));

// 1+ bloco de código
const novaSoma = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente numeros de 1 a 9";
    } else {
        return num1 + num2;
    }
}
console.log(novaSoma(3, 11));