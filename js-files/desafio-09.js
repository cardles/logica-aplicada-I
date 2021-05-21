let numeroDeEntrada = 89

if (numeroDeEntrada % 2 === 0) {
    console.log(`${numeroDeEntrada} é um número par!`)
} else if (numeroDeEntrada % 2 != 0 && typeof numeroDeEntrada === 'number') {
    console.log(`${numeroDeEntrada} é um número ímpar!`)
} else {
    console.log (`"${numeroDeEntrada}" não corresponde a um número. Por favor, insira uma entrada válida.`)
}