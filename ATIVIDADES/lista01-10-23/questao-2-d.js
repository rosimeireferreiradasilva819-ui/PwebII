
function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let nNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];
let somaPrimos = 0;


for (let i = 0; i < nNumeros.length; i++) {
    let numeroAtual = nNumeros[i];
    
    if (ehPrimo(numeroAtual)) {
        somaPrimos = somaPrimos + numeroAtual;
    }
}

console.log("Soma dos números primos: " + somaPrimos); 