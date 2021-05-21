let valorInicial = 115.64
const taxaDeServico = 10/100

const valorFinal = valorInicial + valorInicial * taxaDeServico

console.log(`Valor final do jantar = R$ ${valorFinal.toFixed(2)} / Taxa de serviço = R$ ${taxaDeServico * 100}%`)