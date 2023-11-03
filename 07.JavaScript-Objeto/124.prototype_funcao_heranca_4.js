// função
function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = 'Nome';
MeuObjeto.prototype.falar = function () {
	console.log(`Olá, meu nome é ${this.nome}`);
};

obj1.falar();

const obj3 = {};
obj3.__proto__ = new MeuObjeto();
obj3.nome = 'Obj3';
obj3.falar();

// Em resumo...
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(MeuObjeto.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__); // as referências acabam aqui!
