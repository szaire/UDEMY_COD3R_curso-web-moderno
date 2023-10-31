// protype é a propriedade herdada da classe "Object" do javascript que permite com que
// sejam adicionados novos valores aos construtores dos objetos já existentes
Number.prototype.between = function (inicio, fim) {
	return this >= inicio && this <= fim;
	// "this" representa o objeto number que sofrerá uma alteração em seu construtor
	// com a adição de um novo método, o "between"
};

const imprimirResultado = function (nota) {
	if (nota.between(9, 10)) {
		console.log('Quadro de Honra');
	} else if (nota.between(7, 8.99)) {
		console.log('Aprovado');
	} else if (nota.between(3, 6.99)) {
		console.log('Recuperação');
	} else {
		console.log('Reprovado');
	}
};

imprimirResultado(4);
