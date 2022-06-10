//1. Escreva um trecho de código para imprimir os números pares definidos por um intervalo de valores inteiros 
//não-negativos inicio e fim. Utilize versões com for e while.
var inicio = 1;
var fim = 50;
for (var i = inicio; i <= fim; i++) {
    if (i % 2 == 0)
        console.log(i);
}
var i2 = inicio;
while (i2 <= fim) {
    if (i2 % 2 == 0)
        console.log(i2);
    i2++;
}

