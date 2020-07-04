<template>
	<div>
		<h1 class="mb-5 mt-1">Types de bien</h1>
		<b-table striped hover :items="items"></b-table>
	</div>
</template>
<script>
export default {
	layout: 'dashboard',
	data() {
		return {
			items: [
				{ age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
				{ age: 21, first_name: 'Larsen', last_name: 'Shaw' },
				{ age: 89, first_name: 'Geneva', last_name: 'Wilson' },
				{ age: 38, first_name: 'Jami', last_name: 'Carney' }
			]
		}
	}
}
</script>

<style lang="scss"></style>
