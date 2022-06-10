class Moeda{
    private _valor: number;
    private _nome: string;

    constructor(v: number, n: string){
        this._valor = v;
        this._nome = n;
    }
    getValor(): number { return this._valor}
    getNome(): string { return this._nome}
}

class Cofrinho{

    private _moedas: Moeda[] = [];
    constructor(){
    }

    adicionar(m: Moeda): void{
        this._moedas.push(m);
    }

    calcularTotal(): number{
        let soma: number = 0;
        for (const moeda of this._moedas) {
            let valor: number = moeda.getValor(); 
            soma += valor;
        }
        return soma;
    }

    menorValor(): number{

        let menorValor: number = this._moedas[0].getValor();
        for (const moeda of this._moedas) {
            if(moeda.getValor() < menorValor)
                menorValor = moeda.getValor();
        }
        //Alternativa
        // let valores: number[] = this._moedas.map((moedas) => moedas.getValor());
        // return Math.min(...valores);
        return menorValor;
    }

    menorMoeda(): Moeda{
        let menorValor: number = this.menorValor();
        let menorMoeda: Moeda;
        for (const moeda of this._moedas) {
            if(menorValor == moeda.getValor()) 
                menorMoeda = moeda;
        }
        return menorMoeda;
    }

    frequenciaMoedas(): Map<string,number>{
        let frequencia = new Map<string,number>();
        this._moedas.forEach(function(moedas){
            let key: string = `${moedas.getValor()} ${moedas.getNome()}`;
            if(!frequencia.has(key))
                frequencia.set(key,0);

            let quantidadeAtualizada = frequencia.get(key)+1;
            frequencia.set(key,quantidadeAtualizada);
        });
        return frequencia;
    }
}


let m1: Moeda = new Moeda(15,'Reais');
let m2: Moeda = new Moeda(10,'Reais');
let m3: Moeda = new Moeda(5,'Reais');
let m4: Moeda = new Moeda(1,'Real');

let cofrinho: Cofrinho = new Cofrinho();
cofrinho.adicionar(m1); 
cofrinho.adicionar(m1); 
cofrinho.adicionar(m2); 
cofrinho.adicionar(m3);
cofrinho.adicionar(m4);
cofrinho.adicionar(m4);

console.log("Total: "+cofrinho.calcularTotal());
console.log(JSON.stringify(cofrinho));
console.log("Menor valor: "+cofrinho.menorValor());
console.log(cofrinho.menorMoeda());
console.log(cofrinho.frequenciaMoedas());