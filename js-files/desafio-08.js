let nota1 = 10
let nota2 = 4
let nota3 = 6

const mediaAritmetica = (nota1 + nota2 + nota3)/3

if (mediaAritmetica >= 7) {
    console.log('Aprovado')
} else if (mediaAritmetica >= 5) {
    console.log('Recuperação')
} else if (mediaAritmetica < 5) {
    console.log('Reprovado')
} else {
    console.log('Por favor, insira uma entrada válida.')
}