// Em js as funções podem ser consideradas:

// first class object
// first class citizen
// high order function -> este é mais específico para funções que chamam outras funções

// Isso significa que função em JS é tratada como um dado, permitindo mais manuseabilidade de
// código. Em termo simples: como se as funções fossem tratadas como qualquer outra variável
// no código. É muito útil para aplicar o paradigma de programação funcional em JS

// ====================== MÉTODOS DE TRABALHO COM FUNÇÕES ======================

// Declaração de função de forma literal:
function fun1() {} // por padrão, funções que não possuem retorno explícito retornam "undefined"

// Armazenamento em uma variável
const fun2 = function () {};

// Declaração em objeto literal
const obj = {
	nome: 'fulano',
	sobrenome: 'ciclano',
	x: 0,
	y: 0,
	posicao: [this.x, this.y], // (x, y)

	andarDireita() {
		this.x += 1;
		console.log(`(${this.x}, ${this.y})`);
	},
	andarEsquerda() {
		this.x -= 1;
		console.log(`(${this.x}, ${this.y})`);
	},
	levitar() {
		this.y += 1;
		console.log(`(${this.x}, ${this.y})`);
	},
};
obj.andarDireita();
obj.andarDireita();
obj.andarDireita();
obj.andarEsquerda();
obj.levitar();
obj.pousar = function () {
	this.y -= 1;
	console.log(`(${this.x}, ${this.y})`);
};
obj.pousar();

// Armazenamento em um array
const array = [
	function (a, b) {
		return a + b;
	},
	fun1,
	fun2,
];
console.log(array[0](1, 2)); // soma 1 e 2 e retorna 3

// Passar função como parÂmetro
function run(fun) {
	fun();
}

run(function () {
	console.log('Executando função');
});

function soma(a, b) {
	return function (c) {
		console.log(a + b + c);
	};
}

soma(2, 3)(5);
const cincoMais = soma(2, 3);
cincoMais(4);
