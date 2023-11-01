function getPreco(imposto = 0, moeda = 'R$') {
	const precoFinal = this.preco * (1 - this.desc) * (1 + imposto);
	return `${moeda} ${precoFinal}`;
}

// Com call e apply podemos aplicar um objeto com determinados atributos à uma função que
// tem ciência desses atributos

// Contra-Exemplo:

const produto = {
	nome: 'Notebook',
	preco: 2000,
	desc: 0.15,
	getPreco, // Atribuindo a função existente "getPreco" a um método declarado
	// no objeto literal de mesmo nome
};

console.log(produto.getPreco());

// Exemplo:
const produto1 = {
	nome: 'Notebook',
	preco: 2000,
	desc: 0.15,
};

// Aplicando o objeto produto1 na função getPreco
console.log(getPreco.call(produto1));
console.log(getPreco.apply(produto1));

// Se quizermos alterar os parâmetros padrão para call ou apply é possível fazê-lo da seguinte
// forma:
console.log(getPreco.call(produto1, 0.2, '$'));
console.log(getPreco.apply(produto1, [0.17, '£']));
