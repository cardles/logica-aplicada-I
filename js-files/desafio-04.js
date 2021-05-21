const aluguelPorDia = 60
const aluguelPorDistanciaPercorrida = 0.15

let distanciaPercorrida = 75
let diasDeAluguel = 15

const valorFinal = aluguelPorDia * diasDeAluguel + aluguelPorDistanciaPercorrida * distanciaPercorrida

console.log(`Valor total do aluguel = R$ ${valorFinal.toFixed(2)}`)