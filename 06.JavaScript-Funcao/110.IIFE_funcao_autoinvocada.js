// IIFE -> Immediately Invoked Function Expression

(function () {
	console.log('Será executado no momento da declaração');
	console.log('Foge do escopo mais abrangente. Não está contida no escopo global.');
})();
