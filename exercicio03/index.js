let nomeTurista = prompt('Olá turista! qual é o seu nome? ')
let resposta = prompt(`${nomeTurista}, Você já visitou alguma cidade? (sim / não) `)
let cidades = []
contador = 0

while(resposta === 'sim'){
    ++contador
    cidadesVisitadas = prompt(`${nomeTurista}, Qual foi a cidade? `)
    cidades.push(cidadesVisitadas)
    resposta = prompt(`${nomeTurista}, você visitou mais alguma cidade? (sim / não)`)

}

alert(`Turista: ${nomeTurista}
 Quantidade de cidades visitadas: ${contador} cidades.
 Cidades visitadas:(${cidades})`)
