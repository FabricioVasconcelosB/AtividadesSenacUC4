class Responsavel {
    nome: string;
    cargo: string;

    constructor(nome: string, cargo: string) {
        this.nome = nome;
        this.cargo = cargo;
    }
}


const responsavel1 = new Responsavel("João", "Gerente de Projeto");
const responsavel2 = new Responsavel("Maria", "Líder de Equipe");



class Equipe {
    quantidadeMembros: number;
    responsavel: Responsavel;

    constructor(quantidadeMembros: number, responsavel: Responsavel) {
        this.quantidadeMembros = quantidadeMembros;
        this.responsavel = responsavel;
    }
}



const equipeProjeto = new Equipe(10, responsavel2);

class Projetos {
    andamento: string;
    nomeProjeto: string;
    descricaoProjeto: string;
    equipe: Equipe;
    progresso: string;
    objetivos: string;
    prazo: Date;
    statusProjeto: string;
    responsavel: Responsavel;
    comunicacao: Comunicacao;

    constructor(andamento: string, nomeProjeto: string, descricaoProjeto: string, equipe: Equipe, progresso: string, objetivos: string, prazo: Date, statusProjeto: string, responsavel: Responsavel, comunicacao: Comunicacao) {
        this.andamento = andamento;
        this.nomeProjeto = nomeProjeto;
        this.descricaoProjeto = descricaoProjeto;
        this.equipe = equipe;
        this.progresso = progresso;
        this.objetivos = objetivos;
        this.prazo = prazo;
        this.statusProjeto = statusProjeto;
        this.responsavel = responsavel;
        this.comunicacao = comunicacao;
    }
}



class Tarefas {
    descricao: string;
    prazo: Date;
    status: string;

    constructor(descricao: string, prazo: Date, status: string) {
        this.descricao = descricao;
        this.prazo = prazo;
        this.status = status;
    }
}

class Comunicacao {
    mensagens: string;
    reuniao: string;
    responsavel: Responsavel;

    constructor(mensagens: string, reuniao: string, responsavel: Responsavel) {
        this.mensagens = mensagens;
        this.reuniao = reuniao;
        this.responsavel = responsavel;
    }
}

const comunicacaoProjeto = new Comunicacao("Troca de mensagens sobre o projeto", "Reunião de alinhamento semanal", responsavel1);

const projeto1 = new Projetos("Em andamento", "Projeto A", "Descrição do Projeto A", equipeProjeto, "50%", "Alcançar os objetivos do projeto", new Date("2024-06-30"), "Ativo", responsavel1, comunicacaoProjeto);

console.log()
