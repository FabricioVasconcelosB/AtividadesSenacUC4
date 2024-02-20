class Livro {
    titulo: string;
    autor: string;
    ano: Date;
    categoria: string;
    editora: string;
    disponiveis: boolean;
    quantidadeDeCopias: number;

    constructor(titulo: string, autor: string, ano: Date, categoria: string, editora: string, disponiveis: boolean, quantidadeDeCopias: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.categoria = categoria;
        this.editora = editora;
        this.disponiveis = disponiveis;
        this.quantidadeDeCopias = quantidadeDeCopias;

    }
}

const livro1 = new Livro('O Senhor dos Anéis', 'J. R. R. Tolkien', new Date('1937'), 'Fantasia', 'Allen & Unwin', true, 20);
//const livro2 = new Livro('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', new Date('1997'), 'Fantasia', 'Bloomsbury Publishing', true, 25);
//const livro3 = new Livro('1984', 'George Orwell', new Date('1949'), 'Ficção Científica', 'Secker & Warburg', false, 15);
//const livro4 = new Livro('Orgulho e Preconceito', 'Jane Austen', new Date('1813'), 'Romance', 'T. Egerton, Whitehall', true, 18);
//const livro5 = new Livro('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', new Date('1943'), 'Fábula', 'Reynal & Hitchcock', true, 22);



class Usuario {
    nome: string;
    idade: number;
    telefone: number;
    endereco: string;
    historicoDeEmprestimo: string;
    historicoDeDevolucao: string;

    constructor(nome: string, idade: number, telefone: number, endereco: string, historicoDeEmprestimo: string, historicoDeDevolucao: string) {
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
        this.endereco = endereco;
        this.historicoDeEmprestimo = historicoDeEmprestimo;
        this.historicoDeDevolucao = historicoDeDevolucao;

    }
}

const usuario1 = new Usuario('Maria', 23, 84912345678, 'Rua Araguaia', '3 Emprestimos', '3 Devoluções');
//const usuario2 = new Usuario('João', 30, 84998765432, 'Avenida Paulista', '2 Empréstimos', '1 Devolução');
//const usuario3 = new Usuario('Ana', 28, 84955556666, 'Rua Bela Vista', '2 Empréstimos', '2 Devoluções');
//const usuario4 = new Usuario('Pedro', 35, 84911112222, 'Rua dos Girassóis', '1 Empréstimo', '1 Devolução');
//const usuario5 = new Usuario('Carla', 25, 84933334444, 'Avenida das Flores', '3 Empréstimos', '2 Devoluções');





class Emprestimos {
    emprestimoRealizados: number;
    dataEmprestimo: Date;
    dataDevolucao: Date;
    infoUsuario: Usuario;
    infoLivro: Livro;

    constructor(emprestimoRealizados: number, dataEmprestimo: Date, dataDevolucao: Date, infoUsuario: Usuario, infoLivro: Livro) {
        this.emprestimoRealizados = emprestimoRealizados;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.infoUsuario = infoUsuario;
        this.infoLivro = infoLivro;

    }
}

const emprestimos1 = new Emprestimos(60, new Date("2024-9-3"), new Date('2024-9-12'), usuario1, livro1);
//const emprestimos2 = new Emprestimos(45, new Date("2024-8-15"), new Date('2024-8-30'), usuario2, livro2);
//const emprestimos3 = new Emprestimos(30, new Date("2024-7-20"), new Date('2024-8-19'), usuario3, livro3);
//const emprestimos4 = new Emprestimos(14, new Date("2024-6-10"), new Date('2024-6-24'), usuario4, livro4);
//const emprestimos5 = new Emprestimos(21, new Date("2024-5-5"), new Date('2024-5-26'), usuario5, livro5);



console.log(emprestimos1)