let nome = "Heitor Henrique coimbrã crispim";
let totalLetras = 0
 
nome.split('').forEach(function (caractere) {
    if (caractere !== ' ') {
        totalLetras++;
    }
})
 
console.log(totalLetras)
