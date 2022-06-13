abstract class Cliente{
    constructor(private _nome: string){
    }
    get nome(): string{return this._nome}
    abstract get mensalidade(): number;
}

class ClienteFisico extends Cliente{

    constructor(nome:string, private _idade: number, private _salario: number){
        super(nome);
    }

    get idade(): number{return this._idade}
    set idade(idade: number) {this._idade = idade}

    get salario(): number{return this._salario}
    set salario(salario: number) {this._salario = salario}

    get mensalidade(): number {
        if(this._idade < 60){
            return this._salario * 0.10;
        }else{
            return this._salario * 0.15;
        }
    }

}

class ClienteJuridico extends Cliente{

    constructor(nome:string, private _mensalidade: number){
        super(nome);
    }

    set mensalidade(mensalidade: number){this._mensalidade = mensalidade}
    get mensalidade(): number {return this._mensalidade}
    
}


class CadastroClientes {
    private _clientes: Cliente[] = [];

    adicionar(cliente: Cliente): void{
        this._clientes.push(cliente);
    }

    listarMensalidades(): string{
        let lista = '\nLista de mensalidades: \n';
        for (const cliente of this._clientes) {
            lista+= `Nome: ${cliente.nome} - Mensalidade: R$${cliente.mensalidade}\n`;
        }
        return lista;
    }
}

let cadastro = new CadastroClientes();
let c1 = new ClienteFisico('Ana', 22, 5000);
let c2 = new ClienteFisico('Robert',59, 3500);
let c3 = new ClienteFisico('Maria',63, 2500);
let c4 = new ClienteJuridico('Empresa1', 15000);
cadastro.adicionar(c1);
cadastro.adicionar(c2);
cadastro.adicionar(c3);
cadastro.adicionar(c4);

console.log(cadastro.listarMensalidades());