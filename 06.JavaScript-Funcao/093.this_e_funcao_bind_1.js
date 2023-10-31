const pessoa = {
	nome: 'Fulano Deltrano',
	apresentar() {
		console.log(`Olá, meu nome é ${this.nome}. Tudo bem?`);
	},
};

pessoa.apresentar(); // this se refere ao escopo do objeto pessoa

const apresentar1 = pessoa.apresentar;
apresentar1(); // this se refere ao contexto global, não o da função

const apresentar2 = pessoa.apresentar.bind(pessoa);
apresentar2(); // this se refere ao contexto local do objeto pessoa
