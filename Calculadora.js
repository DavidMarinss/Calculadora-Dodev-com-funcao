var numA = 0
var numB = 0
var contador = true
numA = parseInt(prompt("Digite Número A :"))
numB = parseInt(prompt("Digite Número B :"))
console.log("Número A :", numA, "\nNúmero B :", numB,)

while (contador){

var opcao = prompt("Qual operação deseja fazer? 1 -Somar / 2-Subtrair /3-Multiplicar /4-Dividir ")

if (opcao == 1) {
    console.log("Resultado da soma é :", CalcularSoma(numA, numB))
}

if (opcao == 2) {
    console.log("Resultado da Subtração é :", CalcularSubtracao(numA, numB))
}

if (opcao == 3) {
    console.log("Resultado da Multiplição é :", CalcularMultiplicacao(numA, numB))
}

if (opcao == 4) {
    console.log("Resultado da Divisão é :", CalcularDivisao(numA, numB))
}
var continuar = prompt ("Deseja fazer mais Algum calculo? Aperte (ENTER) para sim e (1) para inserar.")
if (continuar == 1){
    contador = false
}

}
function CalcularSoma(num1, num2) {
    return num1 + num2
}

function CalcularSubtracao(num1, num2) {
    return num1 - num2

}

function CalcularMultiplicacao(num1, num2) {
    return num1 * num2
}

function CalcularDivisao(num1, num2) {
    return num1 / num2

}



