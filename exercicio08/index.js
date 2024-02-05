let menu = ""
let base;
let altura;
let lado;
let baseMaior;
let baseMenor;
let raio;

do {
    menu = parseInt(prompt(`Selecione a opção que você deseja: 
    1- Calcular a area do triangulo
    2- Calcular a area do retangulo
    3- Calcular a area do quadrado
    4- Calcular a area do trapezio
    5- Calcular a area do circulo
    6- Encerrar o sistema `))

    switch (menu) {
        case 1:
            base = parseInt(prompt('Qual é o valor da base '))
            altura = parseInt(prompt('Qual é o valor da altura '))
            alert(calcularAreaDoTriangulo(base, altura))
            break
        case 2:
            base = parseInt(prompt('Qual é o valor da base '))
            altura = parseInt(prompt('Qual é o valor da altura '))
            alert(calcularAreaDoRetangulo(base, altura))
            break
        case 3:
            lado = parseInt(prompt('Qual é o valor da lateral? '))
            alert(calcularAreaDoQuadrado(lado))
            break
        case 4:
            baseMaior = parseInt(prompt('Qual é o valor da maior base '))
            baseMenor = parseInt(prompt('Qual é o valor da menor base '))
            altura = parseInt(prompt('Qual é o valor da altura '))
            alert(calcularAreaDoTrapezio(baseMaior, baseMenor, altura))
            break
        case 5:
            raio = parseInt(prompt('Qual é o valor do raio '))
            alert(calcularAreaDoCirculo(raio))
            break
        case 6:
            alert('Encerrando o sistema...');
        default:
            alert('Opcão invalida')
    }

} while (menu !== 3)

alert("Sistema encerrado!!!");


function calcularAreaDoTriangulo(base, altura) {
    return `A área do triangulo eh: ${base * altura / 2}`
}

function calcularAreaDoRetangulo(base, altura) {
    return `A área do retangulo eh: ${base * altura}`
}

function calcularAreaDoQuadrado(lado) {
    return `A área do quadrado eh: ${lado * lado}`
}

function calcularAreaDoTrapezio(baseMaior, baseMenor, altura) {
    return `A área do trapezio eh: ${(baseMaior + baseMenor) * altura / 2}`
}

function calcularAreaDoCirculo(area, pi = 3.14) {
    return `A área do circulo eh: ${pi * (Math.pow(raio, 2))}`
}