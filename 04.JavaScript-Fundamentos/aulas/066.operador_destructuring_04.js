function rand([min = 0, max = 1000]) /* operador destructuring */ {
	if (min > max) [min, max] = [max, min];
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}

const random = rand([50, 40]);
console.log(random);

console.log(rand([100, 800]));
