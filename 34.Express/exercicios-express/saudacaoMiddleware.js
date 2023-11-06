const saudacao = (nome) =>
	function (req, res, next) {
		console.log(`Seja muito bem vindo, ${nome}!`);
		next();
	};

module.exports = saudacao;
