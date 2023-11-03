// Objeto Literal
const obj = {
	nome: 'nome',
	cidade: 'cidade A',
	logradouro: 'logradouro B',
};

// Função Construtora   - 06.JavaScript-Funcao\102.funcoes_construtoras.js
// Função Factory       - 06.JavaScript-Funcao\106.funcao_factory_1.js
//                      - 06.JavaScript-Funcao\107.funcao_factory_2.js

// Object Create
const obj1 = Object.create(null);
obj1.nome = 'Clodovildo';
console.log(obj1);

// JSON Parser
const fromJson = JSON.parse(
	`
    {
        "info": "Sou um JSON"
    }
    `
);
console.log(fromJson);
console.log(fromJson.info);
