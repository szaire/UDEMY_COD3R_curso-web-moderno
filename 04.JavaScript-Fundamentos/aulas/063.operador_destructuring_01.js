const pessoa = {
	nome: 'Ana',
	idade: 5,
	endereco: {
		logradouro: 'Rua ABC',
		numero: 100,
	},
};

// Operador de destructuring
const { nome, idade } = pessoa;
console.log(nome, idade);

// criando novas variáveis a partir dos mesmos dados
const { nome: n, idade: i } = pessoa;
console.log(n, i);

// acessando atributos de objetos internos
const {
	endereco: { logradouro, numero, cep },
} = pessoa;
console.log(logradouro, numero, cep);
// Caso uma variável seja criada e não exista uma correspondente no objeto descontruido
// essa assimilará o valor "undefined"
