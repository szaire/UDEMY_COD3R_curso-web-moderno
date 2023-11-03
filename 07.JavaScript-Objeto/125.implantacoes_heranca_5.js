String.prototype.reverse = function () {
	return this.split('').reverse().join('');
};

const str = 'Exemplo de String';

console.log(str.reverse());

Array.prototype.first = function () {
	return this[0];
};

console.log([1, 2, 3, 4, 5].first());

// NÃO FAÇA ISSO!
String.prototype.toString = function () {
	return 'Alterando a função toString';
};

console.log(str.toString());
