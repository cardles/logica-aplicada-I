let anoDeNascimento = 1996
let anoAtual = 2021
const idadeAtual = anoAtual - anoDeNascimento

if (idadeAtual >= 18) {
    console.log('Você é maior de idade!')
} else if (idadeAtual < 18) {
    console.log('Você é menor de idade!')
} else {
    console.log(`"${anoDeNascimento}" não corresponde a um número. Por favor, insira uma entrada válida.`)
}