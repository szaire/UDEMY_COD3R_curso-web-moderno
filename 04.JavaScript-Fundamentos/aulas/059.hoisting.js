// hoisting siginifica "içar"
// O hoisting é uma técnica que o compilador do js utiliza para declarar qualquer variável
// previamente no código, o que permite que ela "funcione" mesmo que tenha sido chamada
// previamente a sua delcaração

// O que o programador vê
console.log('a =', a); // a = undefined
var a = 2;
console.log('a =', a); // a = 2

// O que o compilador faz:
var b;
console.log('b =', b); // b = undefined
b = 2;
console.log('b =', b); // b = 2

// O hoisting funciona para variáveis let?
console.log('c =', c); // resultará em erro!
let c = 2;
console.log('c =', c);
