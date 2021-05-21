let diaDaSemana = 'quinta-feira'

switch (diaDaSemana) {

    case 'domingo':
        console.log(1)
        break

    case 'segunda-feira':
        console.log(2)
        break

    case 'terça-feira':
        console.log(3)
        break

    case 'quarta-feira':
        console.log(4)
        break

    case 'quinta-feira':
        console.log(5)
        break

    case 'sexta-feira':
        console.log(6)
        break

    case 'sábado':
        console.log(7)
        break

    default:
        console.log(`"${diaDaSemana}" não corresponde a um dia da semana. Por favor, insira uma entrada válida.`)
}