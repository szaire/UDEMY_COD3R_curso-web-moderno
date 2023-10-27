//  desctructuring de arrays
const [a, b, c, d] = [10, 9, 8, 7];
console.log(a, b, c, d);

// atribua a n1
// ignore o segundo elemento
// atribua a n3
// ignore o quarto elemento
// atribua a n5
// não há sexto elemento mas o valor padrãod e n6 é 0
const [n1, , n3, , n5, n6 = 0] = [1, 2, 3, 4];
console.log(n1, n3, n5, n6);
