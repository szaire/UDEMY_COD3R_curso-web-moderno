const notas = [1, 2, 3, 4, 5, 10, 11, 9, 7];

// for/in não itera sobre os elementos de uma lista mas sobre os índices dela
for (i in notas) {
	console.log(i, notas[i]);
}

// é possível percorrer um objeto com for/in

const pessoa = {
	nome: 'Fabricio',
	sobrenome: 'Tavares',
	idade: 25,
	peso: 70,
};

for (atributo in pessoa) {
	console.log(`${atributo} = ${pessoa[atributo]}`);
}
