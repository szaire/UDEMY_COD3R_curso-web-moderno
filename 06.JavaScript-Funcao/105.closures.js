// Um função em JS é um closure, pois as variáveis possuem ciência do local em que as variáveis e funções
// dentro do seu escopo são declaradas. É basicamente o escopo que envolve a função e aplicação do
// contexto léxico na prática.

let variavel = 'Global';

function func1() {
	let variavel = 'Local';

	function func2() {
		return variavel;
	}

	return func2;
}

const exec = func1();
console.log(exec());
