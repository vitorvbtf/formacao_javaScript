function calculadora(num01, num02, calculo){
    return calculo(num01, num02)
}


function soma(x, y){
    return x + y
}

function restoDaDivisao(x, y){
    return x % y
}
function multiplicacao(x, y){
    return x * y
}
function divisao(x, y){
    return x / y
}

console.log(calculadora(9,3, divisao));
//Outra forma de fazer usando uma função anônima
console.log(calculadora(3,3, function name(x,y) {
    return x - y
}));

console.log("-----------------------");

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    });
}

const lista = ["Maça", "Banana", "Laranja", "Limão"]

for( let i = 0; i < lista.length; i++){
    exibirElemento(lista[i], i, lista)
}
