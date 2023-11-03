const sequencia = {
	_valor: 1, // convenção para definir variáveis privadas.
	//O compilador não tornará a variável privada
	// Resta ao desenvolvedor em respeitar a convenção

	get valor() {
		return this._valor;
	},
	set valor(valor) {
		this._valor = valor;
	},
};

const sequenciaProgressiva = {
	_valor: 0, // convenção para definir variáveis privadas.
	//O compilador não tornará a variável privada
	// Resta ao desenvolvedor em respeitar a convenção

	get valor() {
		return this._valor++;
	},
	set valor(valor) {
		if (valor > this._valor) {
			this._valor = valor;
		}
	},
};

console.log(sequencia); // getter
sequencia.valor = 10; // setter
console.log(sequencia);

console.log(sequenciaProgressiva);
sequenciaProgressiva.valor = 1;
console.log(
	sequenciaProgressiva.valor,
	sequenciaProgressiva.valor,
	sequenciaProgressiva.valor,
	sequenciaProgressiva.valor
);
