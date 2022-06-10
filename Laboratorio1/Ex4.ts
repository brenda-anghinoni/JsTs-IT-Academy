// Escreva uma função pow(x,y) que calcula o valor de 𝑥^𝑦
// , ou seja, x elevado a potência y. Assuma que os 
// valores de x e y são números inteiros não negativos e que 𝑥^0 = 1 para qualquer valor de x. Apresente uma 
// versão iterativa e uma versão recursiva para a função. Não utilize o operador **. Utilize corretamente a 
// declaração de tipos nos parâmetros e no resultado da função


function pow(x: number, y: number): number {
    if(y == 0) return 1;
    let resultado = 1;
    for(let cont = 1; cont <= y; cont++){
        resultado *= x;
    }
    return resultado;
}


function powRecursivo(x: number, y: number): number {
    if(y == 0) return 1;
    return x * powRecursivo(x, y-1);
}

console.log("Iterativo:"+ pow(2,3));
console.log("Recursivo:"+ powRecursivo(2,3));