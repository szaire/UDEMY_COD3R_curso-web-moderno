const express = require('express');
const app = express();

// métodos use e all podem ser utilizados para todas as requisições

// Geralmente o use é utilizado para tratamento de chamadas antes de qualquer requisição
app.use('/requisicao', (req, res, next) => {
	console.log('Antes...');
	next();
});

app.get('/requisicao', (req, res, next) => {
	console.log('Durante...');

	// Podemos ter os seguintes tipos de resposta (res):

	// x-- SEND --x
	// res.send('Hello World!');

	// x-- JSON --x
	const obj1 = {
		name: 'iPad 32Gb',
		price: 1899.0,
		discount: 0.12,
	};

	const obj2 = [
		{ id: 7, name: 'Ana', position: 1 },
		{ id: 34, name: 'Bia', position: 2 },
		{ id: 45, name: 'Carlos', position: 3 },
		{ id: 62, name: 'Andrei', position: 4 },
	];

	res.json(obj2);

	next();
});

app.use('/requisicao', (req, res) => {
	console.log('Depois...');
});

app.listen(3000, () => {
	console.log('express.js started...');
});
