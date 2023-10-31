function soma() {
	let soma = 0;
	for (i in arguments) {
		// arguments é uma keyword que denota todos os parâmetros de uma função
		soma += arguments[i];
	}
	return soma;
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9));
