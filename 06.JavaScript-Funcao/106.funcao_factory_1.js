// Função Factory - Padrão de Projeto
// É basicamente uma função que retorna um objeto
function criarPessoa() {
	return {
		nome: 'Ana',
		sobrenome: 'Silva',
	};
}

console.log(criarPessoa());
