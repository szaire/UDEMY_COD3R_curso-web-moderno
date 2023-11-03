Object.prototype.attr0 = 'Z'; // é ruim alterar uma classe base do javascript

const avo = { attr1: 'A' };
const pai = {
	__proto__: avo,
	attr2: 'B',
	attr3: 'D' /* esse atributo será sombreado (ignorado) */,
};
const filho = {
	__proto__: pai,
	attr3: 'C' /* devido a esse attr3 que será retornado na frente do que está acima */,
};

// Exemplo prático:

const carro = {
	velAtual: 0,
	velMax: 200,
	acelerarMais(delta) {
		if (this.velAtual + delta <= this.velMax) {
			this.velAtual += delta;
		} else {
			this.velAtual = this.velMax;
		}
	},
	status() {
		return `${this.velAtual} Km/h de ${this.velMax}`;
	},
};

const ferrari = {
	modelo: 'F40',
	velMax: 324, // esse atributo irá sombrear o atributo velMax do objeto carro
};

const volvo = {
	modelo: 'V40',

	// irá sombrear o método status original
	status() {
		return `${this.modelo}: ${super.status()}`;
		// super referencia o objeto pai
	},
};

// forma alternativa para setar protótipos
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(210);
console.log(volvo.status());
