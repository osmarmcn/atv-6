
function valorPagamento(valorPrestacao, diasAtraso) {
   
    if (diasAtraso > 0) {
        
        let juros = valorPrestacao * (0.01 * diasAtraso);
        let valorTotal = valorPrestacao + juros;
        return valorTotal;
    } else {
        
        return valorPrestacao;
    }
}


function calcularValorPagar() {
    let valor = parseFloat(prompt("Digite o valor da prestação:"));
    let dias = parseInt(prompt("Digite o número de dias em atraso:"));

   
    let valorAPagar = valorPagamento(valor, dias);

   
    console.log(`Valor a ser pago: R$ ${valorAPagar.toFixed(2)}`);
}


calcularValorPagar();
