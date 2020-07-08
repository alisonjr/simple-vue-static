import Listagem from "./pages/listagem.js";
import Editar from "./pages/editar.js";
import Home from "./pages/home.js";
export default new VueRouter({
	routes: [
		{ path: "/lista", component: Listagem },
		{ path: "/edit", component: Editar },
		{ path: "/home", component: Home },
	],
});
