const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
console.log(pilotos);

// x-- MÉTODO POP() --x
pilotos.pop(); // Remove o último elemento da lista
console.log(pilotos);

// x-- MÉTODO PUSH() --x
pilotos.push('Verstappen'); // Adiciona um elemento à última posição da lista
console.log(pilotos);

// x-- MÉTODO SHIFT() --x
pilotos.shift(); // Remove o primeiro elemento da lista
console.log(pilotos);

// x-- MÉTODO UNSHIFT() --x
pilotos.unshift('Hamilton'); // Adiciona um elmento na primeira posição da lista
console.log(pilotos);

// x-- MÉTODO SPLICE() --x
// OBS: Pode adicionar ou remover elementos da lista
// x-- ADICIONANDO ELEMENTOS --x
// Como ler: Vá até o índice 2, não exclua nenhum elemento, adicione 'Bottas' e 'Massa' à lista
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);
// x-- REMOVENDO ELEMENTOS --x
// Como let: Vá até o índice 1 e exclua dois elementos a partir deste
pilotos.splice(1, 2); // Irá remover 'Alonso' e 'Bottas'
console.log(pilotos);
// x-- SUBSTITUINDO ELEMENTOS --x
// Como let: Vá até o índice 1, exclua dois elementos a partir dele e adicione 'Senna' e
// 'Vettel' à lista
pilotos.splice(1, 2, 'Senna', 'Vettel'); // Irá remover 'Massa' e 'Raikkonen' e adicionar 'Senna' e 'Vettel' a partir do índice 1
console.log(pilotos);
// x-- RETORNANDO UM NOVO ARRAY --x
// Como let: Vá até o índice 2, exclua dois elementos a partir dele e retorne isso para uma
// variável
const pilotosNoFimDaLista = pilotos.splice(2, 2);
console.log(pilotos);
