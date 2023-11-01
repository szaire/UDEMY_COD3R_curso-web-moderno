function Pessoa() {
	this.idade = 0;
	console.log('this Pessoa', this);

	setInterval(() => {
		this.idade++;
		console.log(this.idade);
		console.log('this Interval', this);
	}, 1000);
}

new Pessoa();

// O this de uma função arrow é um this fixo e imutável associado ao contexto em que aquela
// função foi escrita
