<template>
	<b-navbar toggleable="lg">
		<div class="container-fluid">
			<nuxt-link to="/" class="navbar-brand">François Delhommeau</nuxt-link>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<nuxt-link to="/" class="nav-link">Accueil</nuxt-link>
					<nuxt-link to="/biens-immobiliers" class="nav-link">Mes biens immobiliers</nuxt-link>
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">
					<b-nav-form>
						<div class="search-bar">
							<b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
							<b-button class="ti-search"></b-button>
						</div>
					</b-nav-form>
				</b-navbar-nav>

				<b-navbar-nav class="mx-2">
					<nuxt-link to="" class="btn btn-primary">Contactez-moi</nuxt-link>
				</b-navbar-nav>

				<b-navbar-nav>
					<b-nav-item-dropdown right>
						<template v-slot:button-content>
							<em>User</em>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</div>
	</b-navbar>
</template>

<script>
export default {
	name: 'Navbar'
}
</script>

<style scoped lang="scss" src="./navbar.scss"></style>
