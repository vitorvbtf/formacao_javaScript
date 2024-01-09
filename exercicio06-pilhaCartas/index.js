let cartas = []
let menu = ''

do{
    menu = prompt(`Selecione a opção que você deseja:
    1 - Adicionar uma carta
    2 - Puxar uma carta
    3 - Sair
    
    Lembrando você possui ${cartas.length}`)

    switch(menu){
        case '1':
            let cartaAdicionada = prompt(`Qual carta você deseja adicionar no topo do baralho? `)
            cartas.push(cartaAdicionada)
            break
        case '2':
            if (cartas.length > 0) {
                alert(`${cartas.pop()}, foi removido do baralho`)
            } else{
                alert('Não tem nenhuma carta no baralho')
            }
            break
        case '3':
            alert('Encerrando ...')
            break
        default:
            alert('Opção inválida!')
        }
} while(menu !== '3')
