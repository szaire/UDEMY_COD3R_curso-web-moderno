const obj = {
	a: 1,
	b: 2,
	c: 3,
	soma() {
		return a + b + c;
	},
};

// A função stringify converte um objeto JS para json. Ela não conservou a função
// pois json é usado exclusivamente para armazenamento de dados
console.log(JSON.stringify(obj));

// x-- Formatos inválidos para JSON --x
// console.log(JSON.parse('{ a: 1, b: 2, c: 3}'));
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"));

// x-- Formatos válidos para JSON --x
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));
console.log(
	JSON.parse(
		`
        {
            "a": 1, 
            "b": "string", 
            "c": true, 
            "d": {
                "da": 1,
                "db": "nome"
            },
            "e": [
                "ea", 1, 2, 3, "string",
                {
                    "eba": 1,
                    "ebb": "string"
                }
            ]
        }
        `
	)
);
