// Função é um bloco de código nomeado que recebe parâmetros de entrada (input)
// e, geralmnente, retorna valores a partir do tratamento desses dados input

// Colocando em termos simples: A maior parte da arquitetura javascript (ECMAScript) é
// baseada em funções, portanto, é de extrema importância se atentar ao uso e nomenclatura
// adequados para essas ferramentas da linguagem

// Função sem retorno
function imprimirSoma(a, b) {
	console.log(a + b);
}

imprimirSoma(1, 2);
imprimirSoma(2);
imprimirSoma(1, 3, 4, 5, 6, 7);
imprimirSoma();

console.log();

// Função com retorno
function soma(a, b = 0) {
	return a + b;
}

console.log(soma(2, 3));
console.log(soma());
console.log(soma(2));
console.log(soma(2, 5, 6, 7, 8));
