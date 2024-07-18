// Função para calcular o valor a ser pago
function valorPagamento(valorPrestacao, diasAtraso) {
    if (diasAtraso === 0) {
       
        return valorPrestacao;
    } else {
        
        let multa = valorPrestacao * 0.03;
        let juros = valorPrestacao * (0.001 * diasAtraso);
        let valorTotal = valorPrestacao + multa + juros;
        return valorTotal;
    }
}


function relatorioDoDia(prestacoesPagas) {
    let quantidade = prestacoesPagas.length;
    let valorTotal = 0;

    
    for (let i = 0; i < quantidade; i++) {
        valorTotal += prestacoesPagas[i];
    }

    
    console.log(`\nRelatório do Dia:`);
    console.log(`- Quantidade de prestações pagas: ${quantidade}`);
    console.log(`- Valor total recebido: R$ ${valorTotal.toFixed(2)}\n`);
}


function processarPrestacoes() {
    let prestacoesPagas = []

    while (true) {
        let valor = parseFloat(prompt("Digite o valor da prestação (ou 0 para encerrar):"));

        if (valor === 0) {
            break;
        }

        let diasAtraso = parseInt(prompt("Digite o número de dias em atraso:"));

        let valorAPagar = valorPagamento(valor, diasAtraso);

        prestacoesPagas.push(valorAPagar);

        console.log(`Valor a ser pago: R$ ${valorAPagar.toFixed(2)}`);
    }

   
    relatorioDoDia(prestacoesPagas);
}

processarPrestacoes();
