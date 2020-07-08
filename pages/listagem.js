import Dados from "../componets/dados.js";
export default Vue.extend({
	name: "listagem",
	data: function () {
		return Dados;
	},
	template: `
	<div class="card p-3">
		<h5>{{ formulario.titulo }}</h5>
		<lista :livros="livros"></lista>
		<slot></slot>
	</div>
	`,
});
