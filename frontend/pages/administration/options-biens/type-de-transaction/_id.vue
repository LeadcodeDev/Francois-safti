<template>
	<div>
		<h1 class="mb-5 mt-1">Edition de {{ form.label.toLowerCase() }}</h1>
		<form>
			<div class="form-group">
				<label for="label">Label</label>
				<input type="text" name="label" class="form-control" v-model="form.label" />
			</div>
			<div class="form-group">
				<button @click.prevent="handleSubmit" class="btn btn-primary">Valider</button>
			</div>
		</form>
	</div>
</template>
<script>
import Axios from 'axios'

export default {
	layout: 'dashboard',
	data() {
		return {
			form: {
				label: ''
			}
		}
	},
	methods: {
		handleSubmit: async function () {
			try {
				await Axios.put('http://localhost:3333/api/product/types-transactions/' + this.$route.params.id, this.form, { withCredentials: true })
				this.$toast.success('Mise à jour effectuée')
				this.$router.back()
			} catch (e) {
				this.$toast.danger('Une erreur est survenue')
			}
		}
	},
	mounted: async function () {
		console.log(this.$router)
		const { status, data } = await Axios.get('http://localhost:3333/api/product/types-transactions/' + this.$route.params.id, { withCredentials: true })
		this.form = data
	}
}
</script>

<style lang="scss"></style>
