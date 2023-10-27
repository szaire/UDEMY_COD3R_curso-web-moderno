// protype é a propriedade herdada da classe "Object" do javascript que permite com que
// sejam adicionados novos valores aos construtores dos objetos já existentes
Number.prototype.between = function (nota) {
	return this >= inicio && this <= fim;
	// "this" representa o objeto number que sofrerá uma alteração em seu construtor
	// com a adição de um novo método, o "between"
};
