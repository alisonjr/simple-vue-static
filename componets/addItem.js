export default Vue.extend({
	props: ["livros"],
	data: function () {
		return {
			novoLivro: "",
			novoAutor: "",
		};
	},
	methods: {
		addLivro: function () {
			var titulo, autor;
			titulo = this.novoLivro.trim();
			autor = this.novoAutor.trim();
			if (titulo) {
				this.livros.push({
					titulo: titulo,
					autor: autor,
					checked: false,
				});
				this.novoLivro = "";
				this.novoAutor = "";
			}
		},
	},
	template: `
		<div>
			<input v-model="novoLivro" @keyup.enter="addLivro" placeholder="Adicionar título do livro" type="text" class="form-control my-1" />
			<input v-model="novoAutor" @keyup.enter="addLivro" placeholder="Adicionar autor do livro" type="text" class="form-control my-1" /> <br/>
			<span class="input-group-btn float-right mt-3">
				<button @click="addLivro" class="btn btn-primary" type="button">Adicionar</button>
			</span>
		</div>`,
});
