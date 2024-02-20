class Funcionario {
    nome: string;
    idade: number;
    cpf: string
    cargo: string;
    salario: number;
    departamento: string;
    endereco: string;
    email: string;
    telefone: string;
    genero: string;

    constructor(nome: string, idade: number, cpf: string, cargo: string, salario: number, departamento: string, endereco: string, email: string, telefone: string, genero: string) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.cargo = cargo;
        this.salario = salario;
        this.departamento = departamento;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
        this.genero = genero;


    }

}

const funcionario1 = new Funcionario('João', 167, '12345678901', 'medico', 8000, 'pediatra', 'av apuracana', 'joao@gmail.com', '84123456789', 'M')

//console.log(funcionario1);

class Paciente {
    nome: string;
    idade: number;
    dataDeNascimento: Date;
    cpf: string;
    endereco: string;
    contato: number;
    sintomas: string;

    constructor(nome: string, idade: number, dataDeNascimeto: Date, cpf: string, endereco: string, contato: number, sintomas: string) {
        this.nome = nome;
        this.idade = idade;
        this.dataDeNascimento = dataDeNascimeto
        this.cpf = cpf;
        this.endereco = endereco;
        this.contato = contato;
        this.sintomas = sintomas;


    }
}

const paciente1 = new Paciente('Daniel', 8, new Date("2016-8-24"), '123456789011', 'AvApucarana', 84912345678, 'Dor de cabeça');

//console.log(paciente1)

class Consulta {
    local: string;
    dataehorario: Date;
    medico: Funcionario;
    informacaoPaciente: Paciente;
    exame: string;



    constructor(local: string, dataehorario: Date, medico: Funcionario, informacaoPaciente: Paciente, exame: string) {
        this.local = local;
        this.dataehorario = dataehorario;
        this.medico = medico;
        this.informacaoPaciente = informacaoPaciente;
        this.exame = exame;



    }

}

const consulta1 = new Consulta('Av. Florianópolis', new Date("2023-4-8T12:0:0"), funcionario1, paciente1, 'tomografia')

console.log(consulta1)