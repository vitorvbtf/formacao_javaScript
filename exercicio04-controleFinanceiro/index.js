let nomeCliente = prompt(`Seja bem-vindo ao nosso sistema de controle financeiro!
Qual é o seu nome?`)
let dinheiroDisponivel = parseFloat(prompt(`${nomeCliente}, qual a sua quantidade de dinheiro disponível? `))
let selecionandoOpcao = prompt(`${nomeCliente}, preciso que você selecione a opção que você deseja:
1 - Adicionar dinheiro
2 - Remover dinheiro
3 - Sair`)


do{
    if(selecionandoOpcao == '1'){
        let soma =  parseFloat(prompt(`${nomeCliente}, quanto você gostaria de adicionar`))
        dinheiroDisponivel += soma
        selecionandoOpcao = prompt(`${nomeCliente}, preciso que você selecione a opção que você deseja:
    1 - Adicionar dinheiro
    2 - Remover dinheiro
    3 - Sair
    
    Lembrando até o momento você possui ${dinheiroDisponivel}`)
    }
    else if(selecionandoOpcao == '2'){
        let retirando = parseFloat(prompt(`${nomeCliente}, quanto você gostaria de remover do seu dinheiro? `))
        dinheiroDisponivel -= retirando
        selecionandoOpcao = prompt(`${nomeCliente}, preciso que você selecione a opção que você deseja:
    1 - Adicionar dinheiro
    2 - Remover dinheiro
    3 - Sair
    
    Lembrando até o momento você possui ${dinheiroDisponivel}`)
    }
    else{
        alert('Opção inválida')
        selecionandoOpcao = prompt(`${nomeCliente}, preciso que você selecione a opção que você deseja:
    1 - Adicionar dinheiro
    2 - Remover dinheiro
    3 - Sair
    
    Lembrando até o momento você possui ${dinheiroDisponivel}`)
    }
}while(selecionandoOpcao !== '3'){
    alert('O sistema está sendo encerrado')
}
