<template>
	<div class="products-container">
		<h2>{{ title }}</h2>
		<div class="products">
			<div v-for="product in products" :key="product.id">
				<b-card :title="product.title" :img-src="product.image" img-alt="product.name" img-top tag="article" style="max-width: 20rem;" class="mb-2">
					<b-card-text class="price">{{ new Intl.NumberFormat().format(product.price) }}€</b-card-text>
					<nuxt-link :to="`/biens-immobiliers/${product.id}`" class="btn btn-primary">Voir détail</nuxt-link>
				</b-card>
			</div>
			<div class="read-more">
				<nuxt-link to="/biens-immobiliers" class="link">Voir tous les biens...</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Product',
	data() {
		return {
			products: [
				{
					id: 1,
					title: 'Lorem ipsum, dolor sit amet.',
					price: 200000,
					image: 'https://picsum.photos/1920/1080/'
				},
				{
					id: 2,
					title: 'Lorem ipsum, dolor sit amet.',
					price: 200000,
					image: 'https://picsum.photos/1920/1080/'
				},
				{
					id: 3,
					title: 'Lorem ipsum, dolor sit amet.',
					price: 200000,
					image: 'https://picsum.photos/1920/1080/'
				},
				{
					id: 4,
					title: 'Lorem ipsum, dolor sit amet.',
					price: 200000,
					image: 'https://picsum.photos/1920/1080/'
				},
				{
					id: 5,
					title: 'Lorem ipsum, dolor sit amet.',
					price: 200000,
					image: 'https://picsum.photos/1920/1080/'
				},
				{
					id: 6,
					title: 'Lorem ipsum, dolor sit amet.',
					price: 200000,
					image: 'https://picsum.photos/1920/1080/'
				},
				{
					id: 7,
					title: 'Lorem ipsum, dolor sit amet.',
					price: 200000,
					image: 'https://picsum.photos/1920/1080/'
				},
				{
					id: 8,
					title: 'Lorem ipsum, dolor sit amet.',
					price: 200000,
					image: 'https://picsum.photos/1920/1080/'
				}
			]
		}
	},
	props: {
		product: String,
		title: String
	}
}
</script>

<style scoped lang="scss" src="./product.scss"></style>
