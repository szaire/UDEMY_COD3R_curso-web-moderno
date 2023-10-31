// para o JS, a função não possui tipo de retorno atrelado a ela (void, tipo primitido ou objeto)
// e dessa forma seu retorno é indefinido (undefined) caso não retorne qualquer valor e definido
// caso retorno
function area(altura, largura) {
	const area = altura * largura;
	if (area > 20) {
		console.log(`Valor acima do permitido: ${area}m²`);
	} else {
		return area;
	}
}

// também para o JS, como visto anteriormente, os parâmetros de função são opcionais, o compilador
// do JS não irá exigir que haja parâmetros nos escopo da função, porém, irá atribuir valores
// padrão para eles.
console.log(area(2, 2)); // parâmetros ok
console.log(area(2)); // apenas um parâmetro
console.log(area()); // nenhum parâmetro
console.log(area(1, 2, 3, 4, 5, 6)); // excesso de parâmetros
