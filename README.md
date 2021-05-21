# reprograma-s2-exercicio-logica

Desafios apresentados ao curso online de back-end da {reprograma}.
Referentes a aula da semana 02: "Lógica - Variáveis, Operadores e Condicional".

<br>
<br>

## Curiosidades sobre mim

Estou iniciando a minha carreira como desenvovedora back-end agora nesse mês de maio, que também é meu aniversário (que presente!).
Essas são basicamente minhas primeiras linhas de código, acreditam?
Sou arquiteta urbanista e sempre tive muito medo de entrar na área de programação (ainda mais back-end!), porque achava tão complicado e difícil, apesar de admirar e me interessar demais.
No entanto, meus anos na faculdade e minhas experiências profissionais me mostraram que eu sou capaz de lidar com o desafio emocionante que é codar.
Me sinto muito orgulhosa dessas primeiras poucas linhas, porque elas representam todos os meus erros e acertos, minha coragem em me arriscar e minha vontade de encarar novos desafios (não sem medo).
Espero que aproveitem e possam aprender junto comigo!


## Para realizar os desafios propostos, foram aplicados:

Variáveis:
let
const

Operadores aritméticos:
+
-
*
/
%

Operadores de atribuição:
/=

Operadores de comparação:
===
!=
>=
<

Condicionais:
if-else
switch-case


## Desafios propostos

Ao final da aula, a professora Simara disponibilizou no repositório em questão com os desafios de 1 a 10 listados a seguir.
Antes de começar a codar, apliquei o pensamento lógico em linguagem narrativa para estruturar o meu código, para que ele fosse feito de forma mais rápida e precisa.
Os códigos aplicados estão disponíveis na pasta "js files" deste repositório.


1) Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do desconto e o preço a pagar.

Lógica de resolução: criar 02 entradas > calcular "valor final" a partir da multiplicação e subtração delas > imprimir os resultados com arredondamento onde se aplica.


2) Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem.

Lógica de resolução: criar 02 entradas > calcular "tempo de viagem" a parte da divisão delas > imprimir o resultado.


3) Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

Lógica de resolução: criar 02 entradas > calcular o "valor final" a partir da multiplicação e soma delas > imprimir os resultados com arredondamento onde se aplica.

4) Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

Lógica de resolução: criar 04 entradas > calcular o "valor final" a partir da multiplicação e soma delas > imprimir o resultado com arredondamento.


5) Receba do usuários 3 números e calcule a média entre eles.

Lógica de resolução: criar 03 entradas > calcular "média aritmética" a partir da soma e divisão delas > imprimir o resultado com arredondamento.


6) Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

Lógica de resolução: criar entrada > usar o 'if-else' para declarar as seguintes condições: 1-domingo 2-segunda 3-terça 4-quarta 5-quinta 6-sexta 7-sábado > criar uma condição que não represente nenhum dos casos > imprimir as mensagens.


7) Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

Lógica de resolução: criar 02 entradas > usar o 'if-else' para declarar as condições apresentadas no enunciado > criar uma condição que não represente nenhum dos casos > imprimir as mensagens.


8) Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação: a) Se a media for igual ou maior que 7 - Aprovado;  b) Se a media for maior e igual a cinco e menor que 7 - Recuperação e c) Se a media for menor que 5 - Reprovado

Lógica de resolução: criar 03 entradas > calcular "média aritmética" a partir da soma e divisão delas > usar o 'if-else' para declarar as condições apresentadas no enunciado > criar uma condição que não represente nenhum dos casos > imprimir as mensagens.


9) Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

Lógica de resolução: criar entrada > usar o 'if-else' para declarar as condições apresentadas no enunciado > par = resto da divisão é 0; impar = resto da divisão é diferente de 0, mas ainda é um 'number' > criar uma condição que não represente nenhum dos casos > imprimir as mensagens.


10) Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

Lógica de resolução: criar 02 entradas > calcular a "idade atual" a partir da subtração delas > usar o 'if-else' para declarar as condições apresentadas no enunciado > criar uma condição que não represente nenhum dos casos > imprimir as mensagens.




### O maior desafio

O desafio mais difícil para mim foi o 09, cuja resolução segue abaixo:

```
let numeroDeEntrada = 89

if (numeroDeEntrada % 2 === 0) {
    console.log(`${numeroDeEntrada} é um número par!`)
} else if (numeroDeEntrada % 2 != 0 && typeof numeroDeEntrada === 'number') {
    console.log(`${numeroDeEntrada} é um número ímpar!`)
} else {
    console.log (`"${numeroDeEntrada}" não corresponde a um número. Por favor, insira uma entrada válida.`)
}
```

De acordo com a minha lógica, o 'else' deveria ser executado apenas no caso de o "numeroDeEntrada" ser uma 'string'.
Para isso, eu precisava declarar no 'else if' da linha 05 que o "numeroDeEntrada", embora fosse diferente de 0, precisava ainda ser um caractere do tipo 'number'.
Eu não tinha ideia de como fazer isso, mas em aula foi citado que operador 'typeof' verificava o tipo da variável.
Assim, depois de MUITAS tentativas e erros, descobri que igualar o operador a 'number' era a forma de obter um "true" na condicional se a entrada fosse um número e um "false" se fosse um texto, pois se:
```
typeof numeroDeEntrada === number //true
```
então:
```
number === number
```

Dessa forma, em caso de "true", é impresso a mensagem do 'console.log' da linha 06 e, em caso de "false", o código continua sendo executado até a ultima linha, imprimindo a mensagem do 'console.log' da linha 08.



## Notas de aprendizagem

* Não utilizar a variável 'var', pois, dentre outras coisas, ela é uma variável de escopo global e sofre hoisting de escopo. 
* Por isso, é melhor utilizar as variáveis de escopo bloqueado 'let', que pode ser não declarada imediatamente e reatribuída, ou 'const', que necessita sem declarada imediatamente e não pode ser reatribuída ou atualizada.
* A condicional 'switch-case' parece ser mais apropriada quando trabalhamos com uma variável apenas e não é necessário fazer operações, enquanto 'if-else' trabalha bem essas situações.
* O método 'toFixed()' realiza o arredondamento de casas decimais da variável que o antecede.


### **Essa foi a minha primeira experiência com JavaScript e espero continuar aprendendo e aprimorando essa e outras linguagens nessa jorgada incrível proporcionada pela {reprograma}!**
Women, let's code!
