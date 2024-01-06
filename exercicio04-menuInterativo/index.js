let opcao = ""

do {
    opcao = parseInt(
        prompt(`Selecione uma opção pelo o seu número
          1- opção A
          2- opção B
          3- opção C
          4- opção D
          5- Encerrar`)
      );

    switch (opcao) {
    case 1:
      alert(`Você selecionou a opção ${opcao}`); 
        break
    case 2:
      alert(`Você selecionou a opção ${opcao}`);
      break;

    case 3:
      alert(`Você selecionou a opção ${opcao}`);
      break;

    case 4:
      alert(`Você selecionou a opção ${opcao}`);
      break;

    case 5:
      alert("O sistema está encerrando");
      break;

    default:
      alert("Opção inválida, escolha novamente");
  }

} while (opcao !== 5);

