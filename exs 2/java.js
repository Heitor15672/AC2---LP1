let numeros = [2, 5, 8, 13, 16, 21];
let numerosImpares = [];
numeros.forEach(num => {

    if (num % 2 !== 0) {
        let multiplicar = Math.floor(Math.random() * 10) + 1;
        numerosImpares.push(num * multiplicar);
        
    } else {
        numerosImpares.push(num);
    }
});

console.log(impares);