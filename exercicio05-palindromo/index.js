let palavra_digitada = prompt('Digite uma palavra e descubra se ela é um Palíndromo. (Digite a palavra toda em minúsculo)')
let palindromo = ''

for(let i = (palavra_digitada.length - 1) ; i >= 0  ; i--){
    palindromo += palavra_digitada[i]
}

if(palavra_digitada == palindromo){
    alert("Essa palavra é um palíndromo 🙂")
}else{
    alert("Essa palavra NÃO é um palíndromo 😐")
}