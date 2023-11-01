// Função Factory - Padrão de Projeto
// É basicamente uma função que retorna um objeto
// Objeto com propriedades customizáveis
function criarProduto(nome, preco) {
	return {
		nome,
		preco,
		desconto: 0.1,
	};
}

console.log(criarProduto('Notebook', 2000));
console.log(criarProduto('Tablet', 1000));
