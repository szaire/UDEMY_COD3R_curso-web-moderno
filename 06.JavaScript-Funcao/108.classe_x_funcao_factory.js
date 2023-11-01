// Criando o mesmo objeto usando class

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

// Criando o mesmo objeto usando factory

const criarPessoa = (nome) => {
	return {
		falar: () => console.log(`Meu nome é ${nome}.`),
	};
};

const p2 = criarPessoa('João');
p2.falar();
