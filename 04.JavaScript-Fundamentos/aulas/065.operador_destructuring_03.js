function rand({ min = 0, max = 1000 }) /* operador destructuring */ {
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}

// Estamos passando um objeto js como argumento da função, desa forma ele é desconstruído
// de acordo com o objeto de parâmetro da função e, então, poderão ser utilizadas como variáveis

const random = rand({ min: 5, max: 60 }); // objeto java script
console.log(random);

const obj = { min: 10, max: 50 }; // pasando objetos para a função que realiza destructuring
console.log(rand(obj));

console.log(rand({ min: 900 })); // podemos passar um objeto apenas com um dos operadores
console.log(rand({ max: 550 }));
// caso não passe min ou max, o restante irá assumir o valor padrão (min = 0 e max = 1000)

console.log(rand({})); // podemos passar um objeto vazio e ele assumirá os valores padrões

console.log(rand()); // não podemos deixar sem argumentos pois os parâmetros da função esperam
// receber um objeto e não parâmetros inexistentes.
