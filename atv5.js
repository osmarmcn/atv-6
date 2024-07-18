let calculadoraBasica = function(num1, num2, operacao) {
    switch (operacao) {
        case 'adição':
            return num1 + num2;
        case 'subtração':
            return num1 - num2;
        case 'multiplicação':
            return num1 * num2;
        case 'divisão':
            // Verifica se o divisor não é zero para evitar divisão por zero
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Erro: divisão por zero';
            }
        default:
            return 'Operação inválida';
    }
};

// Exemplo de uso:
let numero1 = 10;
let numero2 = 5;
let operacao = 'adição';

let resultado = calculadoraBasica(numero1, numero2, operacao);
console.log(`Resultado da ${operacao} de ${numero1} e ${numero2} é: ${resultado}`);
