// pessoa -> #00001 -> {...}
const pessoa = { nome: 'Josão' };
pessoa.nome = 'Pedro';
console.log(pessoa);

// Não é possível mais associar a constante "pessoa" a outro objeto por ser, justamente,
// uma constante
// pessoa = { nome: 'Wagner' }; // resulta em erro!

// Para evitar erros como esse é possível congelar o objeto da constante
// para torná-lo imutável
Object.freeze(pessoa);

pessoa.nome = 'Maria';
pessoa.endereco = 'Rua A, 123';
delete pessoa.nome;

console.log(pessoa); // O objeto estará inalterável pois aogra tanto a referência quanto o
// próprio objeto estão constantes (imutáveis)

// Criando objetos imutáveis desde o começo:
const pessoaImutavel = Object.freeze({
	nome: 'Joao',
});
