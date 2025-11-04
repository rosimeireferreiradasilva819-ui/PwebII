
function calcularValorTotalCompra(valorUnitario, quantidade, desconto) {
 
    if (desconto === undefined) {
        desconto = 0;
    }
    
    let valorBruto = valorUnitario * quantidade;
    let valorDesconto = valorBruto * (desconto / 100);
    let valorTotal = valorBruto - valorDesconto;

    return valorTotal;
}


let total1 = calcularValorTotalCompra(100, 2, 10);
console.log("Com 10% desc: R$ " + total1.toFixed(2)); 
let total2 = calcularValorTotalCompra(50, 3);
console.log("Sem desc: R$ " + total2.toFixed(2)); 