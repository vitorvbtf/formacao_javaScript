const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]



  // Map
const chamandoOMap = personagens.map((personagem, indice) => {
    return `Indice ${indice}º: ${personagem.nome} nivel: ${personagem.nivel}`
})

console.log(chamandoOMap);


  // Filter
const chamandoOFilter = personagens.filter((personagem) =>{
    let orc = personagem.raca === "Orc"
    return orc
})
console.log(chamandoOFilter);

console.log('-----------------------------');

  // Reduce
const personagensDivididosPorRaca = personagens.reduce(function (valorAcumulado, personagem) {
    if(valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }
    return valorAcumulado
}, {})

console.log(personagensDivididosPorRaca)

// Sort
// 1, 2, 3, 4, 5, ...

//usei o slice para passar uma cópia para o método sort
const personagensOrdenados = personagens.slice().sort(function(a, b){
  // Ordem crescente
  return a.nivel - b.nivel

  // Ordem decrescente
  // b.nivel - a.nivel
})
console.log(personagensOrdenados);
console.log(personagens);