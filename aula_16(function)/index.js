function muitosParametros( usuarios ){
    console.log(usuarios.nome),
    console.log(usuarios.idade)
}

dadosUsuario = {
    nome: 'vítor',
    idade: 21,
    altura: '1,90',
    email: 'vitor@email.com',
    telefone: 61993399051
}

muitosParametros(dadosUsuario)



function areaRetangular(base, altura){
    let tamanho = base * altura
    return tamanho
}

function areaQuadrada(lado){
    return areaRetangular(lado, lado)
}

console.log(areaQuadrada(9))