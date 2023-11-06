module.exports = (app, texto) => {
	function salvar(req, res) {
		res.send('Produto > salvar > ' + texto);
	}
};
