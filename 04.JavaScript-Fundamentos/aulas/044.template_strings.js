const nome = "Coringa";
const templateString = `
    Olá
    ${nome}!
`;
console.log(templateString);

const up = (texto) => texto.toUpperCase();

console.log(`Presta atenção: ${up("cuidado!")}`);
