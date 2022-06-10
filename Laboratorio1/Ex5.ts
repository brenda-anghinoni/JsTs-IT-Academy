// Escreva uma função toMaiusculaPrimeira(s) que recebe uma string s (assuma qualquer string não vazia) e 
// retorna a mesma string com a primeira letra em maiúscula. Utilize corretamente a declaração de tipos nos 
// parâmetros e no resultado da função

"use strict";

function toMaiusculaPrimeira(s: string): string {
    if(s.length)
    return s.slice(0,1).toUpperCase() + s.slice(1);
    else
    return 'Nenhuma string informada';
}

console.log(toMaiusculaPrimeira('brenda'));
console.log(toMaiusculaPrimeira('anghinoni'));
console.log(toMaiusculaPrimeira('barbosa'));
console.log(toMaiusculaPrimeira(''));