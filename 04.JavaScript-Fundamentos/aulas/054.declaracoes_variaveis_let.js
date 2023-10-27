var numero = 1;
{
	var numero = 2; // sobrescreve o valor da variável numero
	console.log('dentro =', numero);
}
console.log(numero);

let num = 1;
{
	let num = 2;
	console.log('fora =', num);
}

console.log(num);
