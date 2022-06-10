// Crie uma classe que represente um Círculo. Esta classe deve possuir as propriedades de um ponto central 
// (coordenadas x, y) e um tamanho de raio. Defina métodos para o cálculo da área do círculo e do comprimento 
// da circunferência. Escreva um bloco de código para testar a implementação do círculo.

class Circulo{
    private _coordx: number;
    private _coordy: number;
    private _raio: number;

    constructor(coordx:number, coordy:number, raio:number){
        this._coordx = coordx;
        this._coordy = coordy;
        this._raio = raio;
    }

    calculaArea(): number{
        let area:number = Math.PI * Math.sqrt(this._raio);
        return area;
    }

    calculaCircunferencia(): number{
        let circunferencia:number = 2 * Math.PI * this._raio;
        return circunferencia;
    }
}


let circulo: Circulo = new Circulo(3,5,10);
console.log("Área: "+circulo.calculaArea());
console.log("Circunferência: "+circulo.calculaCircunferencia());