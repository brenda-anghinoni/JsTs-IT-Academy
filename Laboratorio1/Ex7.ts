// Escreva uma função que, utilizando objetos Map, calcule a frequência de cada número presente em um 
// determinado array contendo números inteiros. Utilize corretamente a declaração de tipos nos parâmetros e no 
// resultado da função


function verificaFrequencia(arr: number[]): Map<number, number>{

    var frequencia = new Map<number,number>();

    for (const numero of arr) {
        if(!frequencia.has(numero)){
            frequencia.set(numero,0);
        }
        frequencia.set(numero,frequencia.get(numero)+1); 
    }
    return frequencia
}

let arr1: number[]= [1,1,3,4,4,1,5];

console.log(verificaFrequencia(arr1));