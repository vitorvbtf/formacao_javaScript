let matriz = [
    ['l1, c1','l1, c2','l1, c3',],
    ['l2, c1','l2, c2','l2, c3',],
    ['l3, c1','l3, c2','l3, c3',]
]

// console.table(matriz);

// matriz.push(['Nova linha']);
// matriz[0].push(['nova coluna'])

// console.table(matriz);

for(let i = 0; i < matriz.length; i++){
    for(let x = 0; x < matriz[i].length; x++){
        console.log(matriz[i][x]);
    }
}