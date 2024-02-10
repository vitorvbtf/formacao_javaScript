let listaVagas = [{}]
let menu = ""


function executarMenu(){
    
    do{
        console.log(listaVagas);
        menu = parseInt(prompt(`Selecione uma funcionalidade do nosso sistema, digitando o seu respectivo número
        1 - Listar vagas disponíveis
        2 - Criar uma nova vaga
        3 - Visualizar uma vaga
        4 - Inscrever um candidato em uma vaga 
        5 - Excluir uma vaga
        6 - Sair`))

        switch(menu){
            case 1:
            let exibirVagas
                listaVagas.map((pessoa, indice) => {
                    exibirVagas = `${indice}º ${pessoa.nome}`
                })
            alert(exibirVagas)
            case 2:
            let nomeVaga = prompt('Informe o nome da vaga: ')

            let descricaoVaga = prompt('Passe uma descrição sobre a vaga: ')

            let dataLimiteVaga = prompt('informe a data limite dessa vaga: ')

            listaVagas.push(listaVagas['nomeDaVaga'] = nomeVaga)
            listaVagas.push(listaVagas['descricaoDaVaga'] = descricaoVaga)
            listaVagas.push(listaVagas['dataLimiteDaVaga'] = dataLimiteVaga)

            
        }

    }while(menu !== 6){
        return
    }
}

executarMenu()