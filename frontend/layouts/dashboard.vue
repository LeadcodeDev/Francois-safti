<template>
	<div class="dashboard">
		<b-row>
			<b-col md="2" class="sm-order-2 p-none">
				<div class="sidebar">
					<div class="px-4 py-3">
						<h2>Dashboard</h2>
						<b-nav vertical class="py-3">
							<nuxt-link to="/administration/users" class="nav-link"><i class="ti-user"></i> Utilisateurs</nuxt-link>
							<nuxt-link to="/administration/biens" class="nav-link"><i class="ti-home"></i> Biens immobilier</nuxt-link>
							<hr class="w-100 my-1" />
							<div role="tablist">
								<b-card no-body class="mb-1">
									<b-card-header header-tag="header" class="p-1" role="tab">
										<div class="nav-link" block v-b-toggle.accordion-2><i class="ti-settings"></i> Options</div>
									</b-card-header>
									<b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
										<b-card-body>
											<b-nav vertical>
												<nuxt-link to="/administration/options-biens/status" class="nav-link">Status</nuxt-link>
												<nuxt-link to="/administration/options-biens/type-de-chauffage" class="nav-link">Type de chauffage</nuxt-link>
												<nuxt-link to="/administration/options-biens/type-de-bien" class="nav-link">Type de bien</nuxt-link>
												<nuxt-link to="/administration/options-biens/type-de-transaction" class="nav-link">Type de transaction</nuxt-link>
												<nuxt-link to="/administration/options-biens/mechanisme-de-chauffage" class="nav-link">Méchanisme de chauffage</nuxt-link>
												<nuxt-link to="/administration/options-biens/exposition-du-sejour" class="nav-link">Exposition du séjour</nuxt-link>
											</b-nav>
										</b-card-body>
									</b-collapse>
								</b-card>
							</div>
						</b-nav>
					</div>
				</div>
			</b-col>
			<b-col md="10" class="sm-order-1 p-none">
				<navbar></navbar>
				<div class="container-fluid px-5">
					<div class="container-fluid p-3">
						<Nuxt />
					</div>
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import Navbar from '../components/navbar/Navbar.vue'
import axios from 'axios'

export default {
	name: 'dashboard',
	middleware: 'authenticated',
	components: {
		navbar: Navbar
	}
}
</script>

<style>
.dashboard {
	background-color: rgb(251, 251, 251);
}
.p-none {
	padding: 0;
}

.dashboard table {
	background-color: white;
	border: 1px solid rgb(235, 235, 235);
}

.dashboard .card-header {
	background-color: white;
	border: none;
}

.dashboard .card {
	border: none;
}
.dashboard .card-body {
	padding: 0 1.25rem;
}

.nav-link:focus {
	outline: none;
}

.sidebar {
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: white;
}
</style>
