let pessoa = {
    nome: "Vítor",
    idade: 21,
    falar(){
        return `Olá ${this.nome}, tudo bem?`;
    }
}

console.log(pessoa.nome);
console.log(pessoa.falar());