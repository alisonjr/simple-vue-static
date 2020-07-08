export default Vue.extend({
	name: "navbar",
	template: `
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			<a class="navbar-brand" href="#">Navbar</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<router-link class="nav-link" to="/home">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/edit">Editar</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/lista">Listagem</router-link>
					</li>
				</ul>
			</div>
		</nav>
	`,
});
