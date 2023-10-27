// PROBLEMA CLÁSSICO DO JAVASCRIPT - Resolvido pelo uso de "let"

const funcs = [];

for (let i = 0; i < 10; i++) {
	funcs.push(function () {
		console.log(i); // Agora sim a variável i está contida no escopo pelo qual ela é armazenada
	});
}

for (let i = 0; i < 10; i++) {
	funcs[i](); // Quais são os valores que a variável irá retornar?
}
