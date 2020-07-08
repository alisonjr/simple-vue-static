export default Vue.extend({
	props: {
		formulario: Object,
	},
	template: '<input v-model="formulario.titulo" class="form-control my-1"/>',
});
