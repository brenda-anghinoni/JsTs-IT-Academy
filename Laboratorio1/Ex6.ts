// Escreva uma função getMax(arr) que recebe um array de número inteiros e retorna o maior elemento 
// encontrado no array. Assuma que o array não está vazio. Não utilize funções auxiliares de outros objetos 
// disponibilizados pelo TypeScript. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da 
// função.


function getMax(arr: number[]): number{
    var maior:number = arr[0];
    for (let val of arr) {
        if(val > maior) maior = val;
    }

    //Forma 2
    // arr.sort((x, y) => x - y);
    // let maior = arr[arr.length-1];
    return maior;
}

console.log(getMax([1,2,3,4,5]));
console.log(getMax([50,23,435,123]));