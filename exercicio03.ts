class DespesaERecitas {
    despesas: string;
    receitas: string;
    economias: number;

    constructor(despesas: string, receitas: string, economias: number) {
        this.despesas = despesas;
        this.receitas = receitas;
        this.economias = economias;
    }
}
const despesaEreceita01 = new DespesaERecitas('Despesa do mês R$3000', 'Receita do mês R$5000', 7000);

class Cliente {
    nome: string;
    idade: number;
    cpf: string;
    endereco: string;
    telefone: number;
    email: string;
    genero: string;
    metas: string;
    statusConta: DespesaERecitas;


    constructor(nome: string, idade: number, cpf: string, endereco: string, telefone: number, email: string, genero: string, metas: string, statusConta: DespesaERecitas) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.genero = genero;
        this.metas = metas;
        this.statusConta=statusConta;

    }
}


const cliente01 = new Cliente('Bruno', 30, '12345678901', 'Rua das Flores', 84912345678, 'bruno@gmail.com', 'M', 'Economizar para viajar',despesaEreceita01);



class Contas {
    saldo: string;
    tipoConta: string;
    titularidade: Cliente;
    transacoes: string;

    constructor(saldo: string, tipoConta: string, titularidade: Cliente, transacoes: string) {
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.titularidade = titularidade;
        this.transacoes = transacoes;
    }
}





const conta01 = new Contas('R$ 5000.00', 'Conta corrente', cliente01, 'Transações da Conta Corrente');
