/*
Tarefa:
Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
um certo número inteiro de GrowCoins.
Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
desejado pelo cliente, determine o número de cada uma das notas
necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

Exemplo de entrada:
72
Exemplo de saída:
GC$ 50,00 -> 1
GC$ 10,00 -> 2
GC$ 5,00 -> 0
GC$ 1,00 -> 2
*/


let growcoins = Number(prompt('Digite o valor a ser sacado:'))
let nota50 = 0;
let nota10 = 0;
let nota5 = 0;
let nota1 = 0;

while (growcoins < 1 || isNaN(growcoins)) {
    alert('Valor inválido! Digite um valor válido para sacar! ')
    growcoins = Number(prompt('Digite o valor a ser sacado:'))
}

let valorSaque = growcoins

while (valorSaque >= 50) {
    nota50 +=1
    valorSaque = valorSaque - 50;
}

while (valorSaque >= 10) {
    nota10 +=1
    valorSaque = valorSaque - 10;
}

while (valorSaque >= 5) {
    nota5 += 1
    valorSaque = valorSaque - 5;
}

while (valorSaque >= 1) {
    nota1 += 1
    valorSaque = valorSaque - 1;
}

document.write(`<p>O valor do saque é de <strong>${growcoins} GC$</strong>.</p>`)
document.write(`<p>GC$ 50,00 -> <strong>${nota50} notas.</strong></p> `)
document.write(`<p>GC$ 10,00 -> <strong>${nota10} notas.</strong></p> `)
document.write(`<p>GC$ 5,00 -> <strong>${nota5} notas.</strong></p> `)
document.write(`<p>GC$ 1,00 -> <strong>${nota1} notas.</strong></p> `)





