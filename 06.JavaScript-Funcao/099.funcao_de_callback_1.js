const fabricantes = ['Mercedes', 'Ford', 'Honda', 'BMW'];

function imprimir(nome, indice) {
	console.log(`${indice + 1}. ${nome}`);
}

function imprimir2(nome, indice, lista) {
	const num = indice + 1;
	console.log(`${num}. ${nome} (${num}/${lista.length})`);
}

// Foreach é uma função que irá iterar sobre os elementos de um array qualquer. Para isso, a
// função recebe uma "função de callback". A função de callback é um conceito que explica o
// fenômeno de uma função existir dentro do escopo de uma função mestra para ser chamada quando
// esta solicitar.

// Foreach é uma função que irá iterar sobre os elementos de um array que aceita 3 argumentos
// da função de callback: valor, índice e lista
fabricantes.forEach(imprimir2);
