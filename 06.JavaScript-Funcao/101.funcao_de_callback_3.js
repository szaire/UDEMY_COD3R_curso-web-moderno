// É possível associar uma função de callback a um evento de uma página web,
// associando javascript e html
// Exemplo:
document.getElementsByTagName('body')[0].onclick = function (e) {
	console.log('Callback realizado!');
};
// Para cada click na tag body da página web, será dado um trigger em uma função anônima
// que representa um evento. Eventos são convenções associadas a funções que descrevem quando
// alguma ação ocorreu na página. Nesse caso, a ação é representada por um click na tag body
// da página web e a resposta a esse evento é o print no console com a mensagem.
