class Produto {
    constructor(private _nome: string, private _preco: number) {
    }
    get nome() {return this._nome;}
    get preco() {return this._preco;}
    set preco(preco: number) {this._preco = preco;}
    toString(): string {return `[nome=${this._nome}, preco=${this._preco}]`;}

}
    

class ProdutoPerecivel extends Produto {
    constructor(nome: string, preco: number, private _dataValidade: Date) {
    super(nome,preco);
    }
    get dataValidade() {return this._dataValidade;}
    toString(): string {return super.toString() + 
        `[dataValidade=${this._dataValidade.toDateString()}]`;}
        
}


let p1 = new Produto('produto 1', 1.99);
let p2 = new ProdutoPerecivel('produto 2', 2.50, new Date(2018,10,1));
console.log(p1.nome);
console.log(p1.preco);
console.log(p2.nome);
console.log(p2.preco);
console.log(p2.dataValidade);
console.log(p1.toString());
console.log(p2.toString());