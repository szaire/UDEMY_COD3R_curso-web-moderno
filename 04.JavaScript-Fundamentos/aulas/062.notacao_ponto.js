// O operador "." que é utilizado para acessar atributos e métodos de um objeto
// Exemplo 1:
const obj = {};
obj.nome = 'nome';

console.log(obj.nome);

// Exemplo 2
function Obj(nome) {
	this.nome = nome;
	// "this" é a palavra reservada que define o contexto atual para qualquer variável
	// declarada dentro do bloco de código vigente
}

// Exemplo 3
const obj2 = new Obj('nome2');
console.log(obj2.nome);
