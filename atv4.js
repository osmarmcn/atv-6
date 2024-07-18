function verificarNumeroPrimo(numero) {
   
    if (numero <= 1) {
        return false;
    }

   
    if (numero <= 3) {
        return true;
    }

    if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }

    
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}


let entrada = prompt("Digite um número para verificar se é primo:");
let numero = parseInt(entrada);

if (verificarNumeroPrimo(numero)) {
    console.log(`${numero} é um número primo.`);
} else {
    console.log(`${numero} não é um número primo.`);
}
