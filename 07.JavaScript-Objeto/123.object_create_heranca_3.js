const pai = { nome: 'pedro', corCabelo: 'preto' };

// criando objetos a partir de outro como base
const filha1 = Object.create(pai);
filha1.nome = 'ana'; // irá sombrear o atributo do objeto original, o pai
console.log(filha1.nome);
console.log(filha1.corCabelo); // irá buscar o atributo do objeto pai
console.log(filha1.__proto__); // pai de ana é pedro

// utilizando mais recursos da função Object.create()
const filha2 = Object.create(pai, {
	// vai criar o objeto filha2 em base do objeto pai e sombrear o atributo nome com um novo nome
	nome: { value: 'bia', writable: false, enumerable: true },
});

console.log(filha2.nome);
console.log(filha2.corCabelo);
console.log(filha2.__proto__);

// se tentarmos alterar o nome não será possível pelo freezing do atributo
filha2.nome = 'raquel';
console.log(filha2.nome);

// vamos ver quais as chaves de cada objeto filha que criamos
console.log(Object.keys(filha1));
console.log(Object.keys(filha2));
// possuem apenas "nome" pois o atributo corCabelo pertence ao seu objeto pai

// como iterar apenas pelos atributos (propriedades) que o objeto possui e não que herda
for (let key in filha1) {
	filha2.hasOwnProperty(key) ? console.log(`Possui: ${key}`) : console.log(`Por herança: ${key}`);
}
