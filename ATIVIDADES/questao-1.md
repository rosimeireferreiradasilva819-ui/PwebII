1) Sobre tipagem de dados em linguagens de programação e, especificamente em JavaScript, responda o que se pede:

a) Tipagem Estática:
    O que é? É quando o tipo de uma variável é definido e fixo (não muda) desde o momento da sua declaração.
    Quando é checada? A verificação de tipos ocorre em tempo de compilação (antes do programa rodar).

b) Benefícios da Tipagem Estática:
    Segurança: Ajuda a encontrar erros de tipo mais cedo (durante a escrita ou compilação do código), evitando bugs em tempo de execução.
    Performance: Permite que o compilador crie código mais rápido e otimizado, pois o tipo das variáveis já é conhecido.

c) Tipagem Dinâmica:
    O que é? É quando o tipo da variável é associado ao valor que ela contém, e esse tipo pode mudar durante a execução do programa.
    Quando é checada? A verificação de tipos ocorre em tempo de execução (runtime).
    Desafio de Performance: A necessidade de checar e determinar o tipo das variáveis enquanto o programa roda pode gerar uma pequena sobrecarga, tornando-o potencialmente mais lento que um código estático otimizado.

d) Tipagem Forte vs. Fraca (Coerção de Tipos):
    Tipagem Forte: A linguagem é rigorosa e não permite operações entre tipos incompatíveis (ex: somar um número e uma string) sem uma conversão explícita. (Ex: Python, Java)
    Tipagem Fraca: A linguagem é flexível e tenta converter os tipos automaticamente (coerção) para realizar a operação. Isso pode levar a resultados inesperados. (Ex: JavaScript)

e) Linguagens Híbridas e Inferência de Tipos:
    Linguagens Híbridas (Ex: TypeScript): Permitem usar a tipagem estática (definir os tipos) sobre uma base dinâmica (como o JavaScript), ganhando segurança sem perder a flexibilidade da base.
    Inferência de Tipos: É quando o compilador descobre o tipo da variável automaticamente pelo valor que lhe foi atribuído, sem que o programador precise declará-lo explicitamente.

f) Como JavaScript lida com a Tipagem de Dados:
    JavaScript é uma linguagem Dinamicamente Tipada (o tipo muda em tempo de execução) e Fracamente Tipada (realiza conversões automáticas entre tipos).