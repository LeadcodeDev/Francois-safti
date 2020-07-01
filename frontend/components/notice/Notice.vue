<template>
	<div class="notice">
		<img src="https://data.1freewallpapers.com/download/nice-design-outside-the-house.jpg" alt="" />
		<div class="container">
			<div class="slider">
				<div v-for="(notice, key) in notices" :key="key" class="item">
					<div class="content">
						<h4>{{ notice.title }}</h4>
						<p class="pt-5">{{ notice.describes }}</p>
						<p>{{ notice.author }} - {{ notice.localisation }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Notice',
	data() {
		return {
			slide: 0,
			sliding: null,
			notices: [
				{
					id: 1,
					title: 'Vente de notre appartement 1',
					date: '19/06/2020',
					describes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente suscipit ullam,',
					author: 'Herbreteau yannis',
					localisation: 'Les Herbiers'
				},
				{
					id: 2,
					title: 'Vente de notre appartement 2',
					date: '19/06/2020',
					describes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente suscipit ullam,',
					author: 'Herbreteau yannis',
					localisation: 'Les Herbiers'
				},
				{
					id: 3,
					title: 'Vente de notre appartement 3',
					date: '19/06/2020',
					describes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente suscipit ullam,',
					author: 'Herbreteau yannis',
					localisation: 'Les Herbiers'
				},
				{
					id: 4,
					title: 'Vente de notre appartement 4',
					date: '19/06/2020',
					describes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente suscipit ullam,',
					author: 'Herbreteau yannis',
					localisation: 'Les Herbiers'
				}
			]
		}
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

<style scoped lang="scss" src="./notice.scss"></style>
