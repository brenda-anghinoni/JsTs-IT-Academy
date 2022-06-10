//2. Qual o resultado do seguinte bloco de comandos? Qual a explicação para o resultado? 
 
let i: number = 0; 
while (i != 10) { 
  i += 0.2; 
} 
console.log(i);

//Resposta: Loop infinito, pois por ser ponto flutuante, ele não se iguala a 10; let está declarado fora do escopo