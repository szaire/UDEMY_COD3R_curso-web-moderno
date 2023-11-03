const pessoa = {
	nome: 'Rebeca',
	idade: 2,
	peso: 70,
};

// Retorna os atributos do objeto
console.log(Object.keys(pessoa));
// Retorna os valores dos atributos do objeto
console.log(Object.values(pessoa));
// Retorna uma lista com todos os pares de atributos/valores do objeto
console.log(Object.entries(pessoa));

// É possível percorrer esse objeto com o foreach
console.log('Foreach 1');
Object.entries(pessoa).forEach((e) => {
	console.log(`${e[0]}: ${e[1]}`);
});

// Fazendo a mesma coisa com destructuring
console.log('\nForeach 2');
Object.entries(pessoa).forEach(([chave, valor]) => {
	console.log(`${chave}: ${valor}`);
});

//Customizando propriedades de objetos com "defineProperty"
Object.defineProperty(pessoa, 'dataNascimento', {
	enumerable: true, // Permite fazer com que o atributo seja visivel em prints ou não
	writable: false, // Permite que ele seja editável ou não
	value: '01/01/2023', // Valor do campo
});

pessoa.dataNascimento = '02/03/2024'; // não irá funcionar

console.log('\n', pessoa);

// Concatenação/Sobrescrita de atributos
const destino = { a: 1 }; // objeto base
const o1 = { b: 2 }; // "b" será adicionado como atributo
const o2 = { c: 3, a: 4 }; // "c" será adicionado como atributo e "a" será sobrescrito com um
// novo valor
const objFinal = Object.assign(destino, o1, o2);

console.log('\n', objFinal);
