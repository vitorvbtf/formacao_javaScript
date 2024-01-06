console.log(!9 < 5)
console.log(75 * 13);


idade = 14
nome = 'ABC'

if(nome !== 'vitor'){
    if(idade >= 19){
        console.log('olá estranho você tem mais de 20 anos');
    }else if (idade > 14){
        console.log('olá estranho você é menor de idade');
    }else {
        console.log('olá estranho você é criança');
    }
}
else{
    console.log('Vítor você já sabe a sua idade');
}

// Operador ternário
resultado = idade >= 18 ?  'maior de idade' : 'menor de idade'
console.log(resultado);