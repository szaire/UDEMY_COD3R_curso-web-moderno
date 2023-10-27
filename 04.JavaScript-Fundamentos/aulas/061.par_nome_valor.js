var variavel = 'valor'; // contexto léxico 1.
// Acesso a variável é dado por:
//      + 061.par_nome_valor.js/variavel

function funcao() {
	var variavel = 'valor'; // contexto léxico 2
}
// Acesso a variável é dado por:
//      + 061.par_nome_valor.js/funcao/variavel

// Por estarem em contextos léxicos diferentes é possível reaproveitar a nomenclatura da
// variável no mesmo código.
