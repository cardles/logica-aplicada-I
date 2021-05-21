let valorInicial = 1890.37
const percentualDesconto = 30/100

const valorFinal = valorInicial - valorInicial * percentualDesconto

console.log('Valor final = R$ ' + valorFinal.toFixed(2) + ' ' + '/' + ' ' + 'Desconto concedido = ' + percentualDesconto * 100 + '%')