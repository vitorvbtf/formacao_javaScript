let array = ["15", "Vítor", "Brasil"]

    //Adiciona no final
array.push('olá')
console.log(array);
    //Adiciona no inicio
array.unshift('Ólá mundo')
console.log(array);

    //Remove no final
console.log(array.pop())
    //Remove no inicio
console.log(array.shift());

    //recorta o elemento
let array2 = [ "Vítor", "ABC", "bola", "Agua", "Terra", 
"ETC", "..9" ]
recortar = array2.slice(0,5)
console.log(array2);
console.log(recortar);

    //Achar o indice
let indice = array2.indexOf("bola")

    //Concatena os elementos
juntosNovamnete = recortar.concat(array2)
console.log(juntosNovamnete);

    //Substituição de elementos
//Primeiro o indice do elemento removido, depois a quantidade de elemento que eu desejo pegara a partir dele, e oq eu quero colocar no lugar
const elementosRemovidos = array2.splice(indice, 2, "Cruzeiro")
console.log(elementosRemovidos);
console.log(array2);