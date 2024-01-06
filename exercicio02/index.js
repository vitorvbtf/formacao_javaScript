alert("Conversor de Medidas")
let metros = parseFloat(prompt("Digite um valor em métros para a conversão"))
let opcaoEscolhida = prompt(`Em qual unidade de medida você deseja que esse valor(${metros}m) seja convertido
mm => Milímetro
cm => Centímetro
dm => decímetro
dam => decâmetro
hm => Hectômetro
km => quilômetro`);

switch(opcaoEscolhida){
    case 'mm':
        alert(`${metros * 1000}mm `)
        break
    case 'cm':
        alert(`${metros * 100}cm `)
        break
    case 'dm':
        alert(`${metros * 10}dm `)
        break
    case 'dam':
        alert(`${metros / 10}dam `)
        break
    case 'hm':
        alert(`${metros / 100}hm `)
        break
    case 'km':
        alert(`${metros / 1000}km `)
        break
    default:
        alert('Opção inválida')
                

}
