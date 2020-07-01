<template>
	<div class="cotnainer-fluid">
		<b-row>
			<b-col md="5">
				<b-carousel id="carousel-1" v-model="slide" :interval="4000" controls background="#ababab" img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
					<b-carousel-slide v-for="(image, key) in product.image" :key="key" :img-src="image"></b-carousel-slide>
				</b-carousel>
			</b-col>
			<b-col md="7">
				<h1>{{ product.title }}</h1>
				<h4 class="py-3 text-primary">{{ new Intl.NumberFormat().format(product.price) }}€</h4>
				<p>{{ product.describes }}</p>
				<p>{{ product.describes }}</p>
				<p>{{ product.describes }}</p>
			</b-col>
		</b-row>

		<slogan hook="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, sit!" backgroundColor="#e65e21" color="white"></slogan>
		<div class="container">
			<product limit="3" title="A découvrir aussi.."></product>
		</div>
		<footer-bottom></footer-bottom>
	</div>
</template>

<script>
import Header from '../../components/header/Header.vue'
import Footer from '../../components/footer/Footer.vue'
import Social from '../../components/social/Social.vue'
import Value from '../../components/value/Value.vue'
import Slogan from '../../components/slogan/Slogan.vue'
import Product from '../../components/product/Product.vue'

export default {
	layout: 'master',
	data() {
		return {
			slide: 0,
			sliding: null,
			product: {
				id: 1,
				title: 'Lorem ipsum, dolor sit amet.',
				price: 200000,
				image: ['https://picsum.photos/1920/1080/', 'https://picsum.photos/1920/1080/'],
				describes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente suscipit ullam,'
			}
		}
	},
	components: {
		'header-top': Header,
		'footer-bottom': Footer,
		social: Social,
		value: Value,
		slogan: Slogan,
		product: Product
	},
	methods: {
		onSlideStart(slide) {
			this.sliding = true
		},
		onSlideEnd(slide) {
			this.sliding = false
		}
	}
}
</script>
