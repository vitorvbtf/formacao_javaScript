let menuInterativo = ''
let imoveis = []



do{
    menuInterativo = parseInt(prompt(`Até o momento possui ${imoveis.length} cadastrados.

Agora selecione uma opção:
1 - Salvar um imóvel
2 - Exibir os imoveis salvos
3 - Encerrar o sistema`))

    switch(menuInterativo){
    case 1:
        // Aqui eu estou criando um novo objeto para cada propriedade
        let imovel = {}
        imovel.nomePropietario = prompt(`Qual o nome do propietario do imóvel? `)
        imovel.qtdQuartos = prompt(`Qual a quantidade de quartos? `)
        imovel.qtdBanheiros = prompt(`Qual a quantidade de banheiros? `)
        imovel.garagem = prompt(`Possui garagem? `)
        let confirmacao = confirm(`Você realmente deseja salvar essa propiedade? 

propietario: ${imovel.nomePropietario}
quantidade de quartos: ${imovel.qtdQuartos}
quantidade de banheiros: ${imovel.qtdBanheiros}
Possui garagem: ${imovel.garagem}`)

        if(confirmacao){
        imoveis.push(imovel)
        }else{
            alert('Voltando ao menu')
        }

        break
    case 2:
        for(let i = 0; i < imoveis.length; i++){
            alert(`${i + 1}º imovel
            
propietario: ${imoveis[i].nomePropietario}
quantidade de quartos: ${imoveis[i].qtdQuartos}
quantidade de banheiros: ${imoveis[i].qtdBanheiros}
Possui garagem: ${imoveis[i].garagem}`)
        }
        break
    case 3:
        alert("Encerrando o sistema")
        break
    default:
        alert("opção inválida! Tente novamente.")
    }
    
    

}while(menuInterativo !== '3')