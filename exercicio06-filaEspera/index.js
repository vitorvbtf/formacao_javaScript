/*
Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

let fila = []
let menu = ""


do {
    // Aqui será importante pois quando alguém for consultado vai zerar numeração
    let paciente = ''
    for (let i = 0; i < fila.length; i++) {
        paciente += `${i + 1}º ${fila[i]} \n`
    }

    menu = prompt(`Acompanhe a fila até o momento:
${paciente}
Escolha uma das opções abaixo:
1 - Adicionar um novo paciente.
2 - Consultar paciente.
3 - Sair
`)

    switch (menu) {
        case "1":
            let novoPaciente = prompt('Digite o novo paciente ')
            fila.push(novoPaciente)
            break
        case "2":
            let pacienteAtendido = fila.shift()
            if(pacienteAtendido){
                alert(`${pacienteAtendido}, foi removido da fila`)
            }else{
                alert('A fila está vazia')
            }
            
            break
        case "3":
            alert('encerrando...')
            break
        default:
            alert('Opção inválida')
    }
} while (menu !== '3')





