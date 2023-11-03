// Evitando extensões
const produto = Object.preventExtensions({
	nome: 'Padrão',
	preco: 29.99,
	tag: 'promocao',
});
console.log('Extensível ? --> ', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Escolar'; // não permite extensão
delete produto.tag; // permite exclusão
console.log(produto);

// Evitando exclusões
const pessoa = {
	nome: 'Ricardo',
	idade: 50,
};
Object.seal(pessoa); // impede que exclua atributos
console.log('Excluível ? -->', Object.isSealed(pessoa));

delete pessoa.nome; // não vai excluir

console.log(pessoa);
