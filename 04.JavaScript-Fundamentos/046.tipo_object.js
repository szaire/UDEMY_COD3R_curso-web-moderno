const obj1 = {};

obj1.nome = 'Celular Ultra Mega';
obj1.preco = 4998.9;
obj1['Decontao Legal'] = 0.4; // evitar atributos com espaço

console.log(obj1);

const obj2 = {
	nome: 'Camisa Polo',
	preco: 79.67,
	obj3: {
		data: new Date(),
	},
};

console.log(obj2);
