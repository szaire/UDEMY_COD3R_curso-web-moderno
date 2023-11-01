// chamando cada função antes de sua assinatura:
console.log(soma(1, 2)); // o compilador do JS irá carregar essa função antes de executar o código
console.log(sub(1, 2)); // irá dar erro pois considerará que a variável que guarda a função não existe ainda
console.log(mult(1, 2)); // igualmente à anterior

// function declaration
function soma(x, y) {
	return x + y;
}

// function expression
const sub = function (x, y) {
	return x - y;
};

// named function expression
const mult = function mult(x, y) {
	return x * y;
};
