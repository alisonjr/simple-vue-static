Vue.config.devtools = true;

import router from "./router.js";

/** COMPONETES */
import Dados from "./componets/dados.js";
import Lista from "./componets/lista.js";
import AlteraTitulo from "./componets/alteraTitulo.js";
import AddItem from "./componets/addItem.js";
import Navbar from "./componets/navbar.js";

/** Registrando componentes */
Vue.component("navbar", Navbar);
Vue.component("lista", Lista);
Vue.component("altera-titulo-comp", AlteraTitulo);
Vue.component("add-item-comp", AddItem);
//exemplo na mesmo arquivo
Vue.component("form-edit", {
	data: function () {
		return Dados;
	},
	template: `
		<div class="card panel">
			<div class="card-header bg-secondary text-light">
				<h5>Editar a lista</h5>
			</div>
			<div class="card-body panel-body">
				<div class="row">
					<div class="col">
						<label>Mude o título da lista:</label>
						<altera-titulo-comp :formulario="formulario" ></altera-titulo-comp>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<label class="mt-3">Adicionar item:</label>
						<add-item-comp :livros="livros"></add-item-comp>
					</div>
				</div>
			</div>
		</div>
	`,
});

const app = new Vue({
	router, // igual a router: router,
	el: "#app",
	data: Dados,
	template: `
		<div>
			<navbar></navbar>
			<div class="container mt-3">
				<router-view></router-view>
			</div>
		</div>
	`,
});
