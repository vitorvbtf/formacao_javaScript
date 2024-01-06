let numero_selecionado = parseInt(prompt('Me informe um número: '))
tabuada = []

for(let i = 1; i <= 20; i++){
    tabuada.push(numero_selecionado * i)
}
alert(`A tabuada do número digitado foi:
${tabuada}`)
