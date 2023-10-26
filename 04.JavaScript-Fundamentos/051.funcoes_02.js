// Função anônima (função sem declaração explícita)
const imprimirSoma = function (a, b) {
	console.log(a + b);
};

imprimirSoma(1, 2);

// Arrow function -> () => {}

const soma = (a, b) => {
	return a + b;
};

console.log(soma(1, 2));

const subtracao = (a, b) => a - b;

console.log(subtracao(1, 2));
