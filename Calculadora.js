var numA = 0
var numB = 0
var contador = true
var Resultado = []
var contadorArray = 0





while (contador) {



    var opcao = prompt("Qual operação deseja fazer? 1 -Somar / 2-Subtrair /3-Multiplicar /4-Dividir / 5- Historico-Calculos")

    if (opcao == 5) {
        HistoricoDosResultados()
    } else {

        numA = parseInt(prompt("Digite Número A :"))
        numB = parseInt(prompt("Digite Número B :"))
        console.log("Número A :", numA, "\nNúmero B :", numB,)

        if (opcao == 1) {
            Resultado[contadorArray] = CalcularSoma(numA, numB)
            console.log("Resultado da soma é :" + Resultado[contadorArray])
            contadorArray++
        }

        if (opcao == 2) {
            Resultado[contadorArray] = CalcularSubtracao(numA, numB)
            console.log("Resultado da Subtração é :" + Resultado[contadorArray])
            contadorArray++

        }

        if (opcao == 3) {
            Resultado[contadorArray] = CalcularMultiplicacao(numA, numB)
            console.log("Resultado da Multiplição é :" + Resultado[contadorArray])
            contadorArray++
        }

        if (opcao == 4) {
            Resultado[contadorArray] = CalcularDivisao(numA, numB)
            console.log("Resultado da Divisão é :" + Resultado[contadorArray])
            contadorArray++
        }

    }


    var continuar = prompt("Deseja fazer mais Algum calculo? 1- sim / 2- não")
    if (continuar == 2) {
        contador = false
    }

}

function HistoricoDosResultados() {
    for (var i = 0; i < contadorArray; i++) {
        console.log("Historico dos calculos :" + Resultado[i])
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


