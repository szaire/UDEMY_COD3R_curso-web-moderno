// Funções construtoras: Conceito em JS que classifica funções como construtoras de objetos
// feitos a partir delas
// Exemplo:
function Pessoa(nome = '', idade = 0) {
	// atributos privados
	let nomePessoa = nome;
	let idadePessoa = idade;

	// métodos públicos
	this.getNome = function () {
		return nomePessoa;
	};

	this.getIdade = function () {
		return idadePessoa;
	};

	// Obs: tudo declarado com "let" ou "const" é PRIVADO e tudo declarado "this." é público
}

// objetos Pessoa
let pessoa1 = new Pessoa();
console.log(pessoa1.getNome());

let pessoa2 = new Pessoa('Fulano', 23);
console.log(pessoa2.getNome());
