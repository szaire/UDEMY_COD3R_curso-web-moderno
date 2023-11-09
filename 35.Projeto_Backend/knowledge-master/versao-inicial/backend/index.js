const app = require('express')(); // encadeia o resultado da chamada do express em app
const consign = require('consign');
const db = require('./config/db');

app.db = db;

// injetando as dependências dos middlewares na aplicação
// facilita o gerenciamento das dependências dentro da aplicação
consign()
	.then('./config/middlewares.js')
	.then('./api/validation.js')
	.then('./api')
	.then('./config/routes.js')
	.into(app);

app.listen(3000, () => {
	console.log('backend started...');
});
