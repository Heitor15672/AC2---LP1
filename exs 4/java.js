let = "Heitor Henrique coimbrã crispim";
let totalLetras = 0
 
nomeCompleto.split('').forEach(function (caractere) {
    if (caractere !== ' ') {
        totalLetras++;
    }
})
 
console.log(totalLetras)
