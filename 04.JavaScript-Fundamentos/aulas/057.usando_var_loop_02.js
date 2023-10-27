// PROBLEMA CLÁSSICO DO JAVASCRIPT

const funcs = [];

for (var i = 0; i < 10; i++) {
	funcs.push(function () {
		console.log(i);
	});
}

for (let i = 0; i < 10; i++) {
	funcs[i](); // Quais são os valores que a variável irá retornar?
}

// Todos os valores serão equivalentes a 10 pois como, no primeiro for, se foi utilizado uma
// variável do tipo "var", por não possuir contexto, seu valor será atualizado para todos os
// índices do array de funções.
