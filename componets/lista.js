/**
 * Declarando os componentes
 */
export default Vue.extend({
	name: "lista",
	props: ["livros"],
	template: `
		<ul class="list">
			<li v-for="livro in livros" class="livro.checked ? 'removido': '']">
		  <div class="checkbox">
		   <label>
		    <input type="checkbox" v-model="livro.checked">
		     <big>{{ livro.titulo }}</big> - <small>{{ livro.autor }}</small>
		    </label>
		  </div>
		 </li>
		</ul>`,
});
