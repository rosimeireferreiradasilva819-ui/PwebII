let notaN1 = 8.5; 
let notaN2 = 6.0; 
let notaMinima = 7.0;


let totalPonderado = (notaN1 * 2) + (notaN2 * 3);


let notaFinal = totalPonderado / 5;

let statusAluno;

if (notaFinal >= notaMinima) {
    statusAluno = "APROVADO";
} else {
    statusAluno = "REPROVADO";
}

console.log("Sua Nota Final é: " + notaFinal.toFixed(2));
console.log("Situação: " + statusAluno);