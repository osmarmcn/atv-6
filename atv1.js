function contarVogais(str) {
  
    let vogais = /[aeiouAEIOU]/g
    
   
    let vogaisEncontradas = str.match(vogais)
    
    
    if (vogaisEncontradas === null) {
        return 0;
    } else {
        return vogaisEncontradas.length
    }
}


var entrada = prompt("Digite uma palavra ou frase:")
var numVogais = contarVogais(entrada)
console.log(`O número de vogais na string '${entrada}' é: ${numVogais}`)