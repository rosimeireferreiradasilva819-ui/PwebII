function calculadoraSimples(num1, num2, operacao) {
    let resultado;

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Erro: Divisão por zero.";
            }
            resultado = num1 / num2;
            break;
        default:
            return "Erro: Operação inválida.";
    }
    return resultado;
}

console.log("10 + 5 = " + calculadoraSimples(10, 5, '+'));
console.log("10 / 0 = " + calculadoraSimples(10, 0, '/'));