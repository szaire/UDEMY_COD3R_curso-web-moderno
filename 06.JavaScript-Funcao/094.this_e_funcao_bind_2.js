// Como garantir que o this sempre irá se referir ao objeto atual?

// Utilizando "bind"
function Pessoa() {
	this.idade = 0;

	setInterval(
		function () {
			this.idade++;
			console.log(this.idade);
		}.bind(this),
		1000
	);
}

// Utilizando constante exporádica "self"
function Pessoa() {
	this.idade = 0;

	const self = this;

	setInterval(function () {
		self.idade++;
		console.log(self.idade);
	}, 1000);
}

new Pessoa();
