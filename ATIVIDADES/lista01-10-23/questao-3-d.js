function obterNumerosImpares(arrayDeNumeros) {
    let impares = []; 
   
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        let numeroAtual = arrayDeNumeros[i];
        
        if (numeroAtual % 2 !== 0) {
            impares.push(numeroAtual); 
        }
    }

    return impares;
}

let listaCompleta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let listaImpares = obterNumerosImpares(listaCompleta);

console.log("Lista original: " + listaCompleta.join(", "));
console.log("Apenas os ímpares: " + listaImpares.join(", "));