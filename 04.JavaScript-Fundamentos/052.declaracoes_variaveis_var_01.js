{
	{
		{
			var variavel = 'variável';
		}
	}
}
console.log(variavel);

// A variavel se encontra em escopo global por estar utilizando o operador de inicialização var
// A única maneira do javascript runtime em saber elencar escopo de variáveis com o "var" é
// declarando variáveis dentro de funções.

function funcao() {
	var a = 'teste';
	console.log(a);
}

funcao();

console.log(a);
