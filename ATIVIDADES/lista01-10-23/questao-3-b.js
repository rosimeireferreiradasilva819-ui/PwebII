function calcularProdutorio(arrayDeNumeros) {
    let produtorio = 1;

  
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        produtorio = produtorio * arrayDeNumeros[i];
    }
    
    return produtorio;
}

let numerosParaMultiplicar = [2, 3, 4];
let resultadoProduto = calcularProdutorio(numerosParaMultiplicar);


console.log("Produtório de [2, 3, 4]: " + resultadoProduto); 