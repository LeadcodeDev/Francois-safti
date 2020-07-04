<template>
	<div>
		<h1 class="mb-5 mt-1">Edition de {{ form.label.toLowerCase() }}</h1>
		<form>
			<div class="form-group">
				<label for="label">Label</label>
				<input type="text" name="label" class="form-control" v-model="form.label" />
			</div>
			<div class="form-group">
				<button class="btn btn-primary">Valider</button>
			</div>
		</form>
	</div>
</template>
<script>
export default {
	layout: 'dashboard',
	data() {
		return {
			form: {
				label: 'Default value'
			}
		}
	}
}
</script>

<style lang="scss"></style>
