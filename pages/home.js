import Dados from "../componets/dados.js";
export default Vue.extend({
	name: "editar",
	data: function () {
		return Dados;
	},
	template: `
		<div class="row">
			<div class="col-md-6">
				<form-edit></form-edit>
			</div>
			<div class="col-md-5">
				<div class="card p-3">
					<h5>{{ formulario.titulo }}</h5>
					<lista :livros="livros"></lista>
				</div>
			</div>
		</div>
	`,
});
