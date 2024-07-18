function calcularAreaEPerimetro(raio) {
    
    var area = Math.PI * raio * raio 
    
    
    var perimetro = 2 * Math.PI * raio
    
  
    return {
        area: area,
        perimetro: perimetro
    }
}


var raio = 5
var resultados = calcularAreaEPerimetro(raio)
console.log(`Para um círculo com raio ${raio}:`)
console.log(`- Área: ${resultados.area.toFixed(2)}`)
console.log(`- Perímetro: ${resultados.perimetro.toFixed(2)}`)
