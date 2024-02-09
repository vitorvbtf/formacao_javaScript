const lista = ['banana', 'maça', 'arroz', 'tomate']

function exibirElemento(comida, indice, array){
    console.log({
    comida,
    indice,
    array
})
}


lista.forEach(exibirElemento)



/*  O forEach funciona da seguinte forma:

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

*/
console.log("------------------------");

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

const retornoForEach = nomes.map((nomeAtual, abc) => {
    let resposta = `${abc}º  ${nomeAtual}`
    return resposta;
})
console.log(retornoForEach) 