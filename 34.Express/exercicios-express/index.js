// Função Middleware
const saudacao = require('./saudacaoMiddleware'); // importando a função 'saudacao'
// Body Parser - Pacote Node que facilita o parsing no corpo de requisição de uma chamada HTTP
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

// Importando as funções de usuário
const usuarioApi = require('./api/usuario');

// Body Parser (sendo utilizado para texto)
app.use(bodyParser.text());
// Body Parser (sendo utilizado para json)
app.use(bodyParser.json());
// habilita o padrão de envio de formulários "url encoded" em requisições HTTP
app.use(bodyParser.urlencoded({ extended: true }));

// Utilizando os método da API 'usuario.js'
app.post('/usuario', usuarioApi.salvar);
app.get('/usuario', usuarioApi.obter);

// Inicializando a função 'saudacao'
app.use(saudacao('Pablito'));

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

// QUERY STRING: Acessando elementos via dados na url
// OBS: Do modo como essa função está escrita pode entrar em conflito com a
// forma da função seguinte, que utiliza parâmetros "string" em sua url. Para
// resolver esse problema é necessário que essa função mais específica venha
// primeiro no corpo de requisições
app.get('/clientes/relatorio', (req, res, next) => {
	let completo = req.query.completo;
	let ano = req.query.ano;

	res.send(`Cliente relatório: completo = ${completo} ano = ${ano}`);
});

// PARÂMETROS: Acessando elementos via ID
app.get('/clientes/:id', (req, res, next) => {
	let id = req.params.id;
	res.send(`Cliente ${id} selecionado!`);
});

// BODY REQUEST: Acessando dados via corpo de requisição
app.post('/corpo', (req, res) => {
	let reqBody = req.body;
	res.send(reqBody);
});

app.get;

app.listen(3000, () => {
	console.log('express.js started...');
});
