function Pessoa(nome, idade) {
	this.nome = nome;
	this.idade = idade;
}

const p1 = new Pessoa('Ricardo', 34);

// Como funciona o operador "new"?
// Simulando:
function novo(f, ...params) {
	const obj = {}; // cria a nova instância de um objeto
	obj.__proto__ = f.prototype; // associa a herança à função pai
	f.apply(obj, params); // associa o objeto à função e aplica neste os argumentos
	return obj; // retorna um novo objeto com atributos definidos em sua construção
}

// Aplicando:
const p2 = novo(Pessoa, 'Julia', 21);
console.log(p2);
