//Função recursiva chama ela mesmo

function dividir(num){
    console.log(num);
    if(num % 2 === 0 ){
        dividir(num / 2)
    }else{
        return
    }
}

dividir(8)

console.log('-------------------');


function fatorial(num){
    if( num === 0 || num === 1 ){
        return 1
    } else{
        console.log(`${num} * ${num - 1}`);
        return num * fatorial(num-1)
    }
}

console.log(fatorial(5));