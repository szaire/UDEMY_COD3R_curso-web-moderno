class Pessoa {
	constructor(nome) {
		this.nome = nome;
	}

	falar() {
		console.log(`Meu nome é ${this.nome}.`);
	}
}

const p1 = new Pessoa('Fulano');
p1.falar();

// =============== versão função construtora ===============

function PessoaFunc(nome) {
	this.falar = function () {
		console.log(`Oieeee, Meu nome é ${nome} (construtora)`);
	};
}

const pConst = new PessoaFunc('Manoel');
pConst.falar();

// =============== versão função factory ===============

function criarPessoa(nome) {
	return {
		nome: nome,
		falar: function () {
			console.log(`Olá, meu nome é ${nome}! (function)`);
		},
	};
}

const pFunction = criarPessoa('João');
pFunction.falar();

// Versão arrow function

const criarPessoaArrow = (nome) => {
	return {
		nome: nome,
		falar: () => {
			console.log(`Olá, meu nome é ${nome}! [() => {}]`);
		},
	};
};

const pArrow = criarPessoaArrow('André');
pArrow.falar();
