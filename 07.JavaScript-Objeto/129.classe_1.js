class Lancamento {
	constructor(nome = 'Gen', valor = 0) {
		this.nome = nome;
		this.valor = valor;
	}
}

class CicloFinanceiro {
	constructor(mes = new Date().getMonth(), ano = new Date().getFullYear()) {
		this.mes = mes;
		this.ano = ano;
		this.total = 0;
		this.lancamentos = [];
	}

	addLancamentos(...lancamentos) {
		lancamentos.forEach((l) => this.lancamentos.push(l));
	}

	sumario() {
		let valorConsolidado = 0;
		this.lancamentos.forEach((l) => {
			valorConsolidado += l.valor;
		});
		this.total = valorConsolidado;
		return this.total;
	}
}

const salario = new Lancamento('Salario', 4000);
const contaDeLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro();
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());
console.log(contas);
