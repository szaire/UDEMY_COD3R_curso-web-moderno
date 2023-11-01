const notas = [4, 3.1, 9, 8, 5.2, 6.3, 2.1];

// OBJETIVO: Imprimir os números menores que 7

// Forma imperativa:
const notasFiltradas1 = [];
for (nota in notas) {
	if (notas[nota] < 7) {
		notasFiltradas1.push(notas[nota]);
	}
}
console.log(notasFiltradas1);

// Forma utilizando filter e função de callback
const notasFiltradas2 = notas.filter(function (nota) {
	return nota < 7;
});
console.log(notasFiltradas2);

// Forma utilizando filter e função de callback (arrow function)
const notasFiltradas3 = notas.filter((nota) => nota < 7);
console.log(notasFiltradas3);

// Mesmos resultados, porém, maneiras melhores de se escrever a mesma coisa!
