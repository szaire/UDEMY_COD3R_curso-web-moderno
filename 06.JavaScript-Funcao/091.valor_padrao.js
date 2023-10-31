// métodos antigos (mais trabalhosos)
function soma1(a, b, c, d) {
	a = a || 1;
	b = b != undefined ? b : 1;
	c = 2 in arguments ? c : 1;
	d = isNaN(d) ? 1 : d;
	return a + b + c + d;
}

// método novo (mais clean)
function soma2(a = 1, b = 1, c = 1, d = 1) {
	return a + b + c + d;
}
