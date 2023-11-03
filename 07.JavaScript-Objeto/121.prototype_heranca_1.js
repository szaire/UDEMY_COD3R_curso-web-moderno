// A forma como o javascript define herança é:
// Todo objeto JS possui uma referência para seu PROTÓTIPO, que é a classe pai que
// herda tal objeto. Nesse sentido, quando chamamos uma propriedade dentro de um
// objeto JS, o compilador irá buscá-la na cadeia de protótipos que compõe o objeto
// até achá-la. Caso não ache, será retornado undefined.

// Conceitos:
//      - PROTÓTIPO: A referência para o objeto pai de um objeto filho

// Exemplo:

const ferrari = {
	modelo: 'F40',
	velMax: 324,
};

const volvo = {
	modelo: 'V40',
	velMax: 200,
};

console.log(ferrari.__proto__); // referência ao objeto pai que herda o objeto "ferrari"
console.log(volvo.__proto__); // referência ao objeto pai que herda o objeto "volvo"

console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__); // não aparecerá nada pois Object não possui
// qualquer protótipo anterior a ele

console.log(Object.prototype.__proto__ === null);
