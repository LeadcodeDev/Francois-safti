<template>
	<div>
		<div class="row">
			<div class="col-sm-12 col-md-6">
				<h1 class="mb-5 mt-1">Type de transaction</h1>
			</div>
			<div class="col-sm-12 col-md-6">
				<button class="btn btn-primary float-right" v-b-modal.create>
					<i class="ti-plus"></i>
					Nouveau
				</button>
			</div>
		</div>

		<b-nav-form class="pb-3">
			<div class="search-bar">
				<b-form-input size="sm" class="mr-sm-2" v-model="search" placeholder="Search"></b-form-input>
				<b-button class="ti-search"></b-button>
			</div>
		</b-nav-form>

		<table class="table table-striped">
			<thead>
				<tr>
					<th scope="col">id</th>
					<th scope="col">label</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				<template v-if="datas.length">
					<tr v-for="(item, key) in filteredList" :key="key">
						<td>{{ item.id }}</td>
						<td>{{ item.label }}</td>
						<td class="float-right">
							<div class="btn-group" role="group">
								<nuxt-link :to="`/administration/options-biens/type-de-transaction/${item.id}`" class="btn btn-primary btn-sm"><i class="ti-pencil"></i></nuxt-link>
								<button @click.prevent="handleDelete(item.id)" type="button" class="btn btn-danger btn-sm"><i class="ti-na"></i></button>
							</div>
						</td>
					</tr>
				</template>
				<tr v-else>
					<td colspan="3">Aucune donnée n'a été trouvé</td>
				</tr>
			</tbody>
		</table>

		<b-modal ref="create" id="create" title="Nouveau" cancel-only>
			<form>
				<div class="form-group">
					<label for="label">Label</label>
					<input type="text" name="label" class="form-control" v-model="form.label" />
				</div>
			</form>
			<template v-slot:modal-footer="{ valider }">
				<b-button variant="primary" @click.prevent="handleSubmit">Valider</b-button>
			</template>
		</b-modal>
	</div>
</template>

<script>
import Axios from 'axios'

export default {
	layout: 'dashboard',
	data() {
		return {
			search: '',
			datas: [],
			form: {
				label: ''
			}
		}
	},
	methods: {
		async handleSubmit() {
			try {
				await Axios.post(process.env.api + '/product/types-transactions', this.form, { withCredentials: true })
				this.$refs['create'].hide()
				this.form = { label: '' }
				this.updateDatas()
				this.$toast.success("L'ajout de l'option à été effectuée avec succès")
			} catch (e) {
				this.$toast.error('Une erreur est survenue : ' + e)
			}
		},
		async updateDatas() {
			try {
				const { status, data } = await Axios.get(process.env.api + '/product/types-transactions', { withCredentials: true })
				this.datas = data
			} catch (e) {
				this.$toast.error('Une erreur est survenue : ' + e)
			}
		},
		async handleDelete(id) {
			try {
				await Axios.delete(process.env.api + '/product/types-transactions/' + id, { withCredentials: true })
				this.$refs['create'].hide()
				this.updateDatas()
				this.$toast.success("La suppression de l'option à été effectuée avec succès")
			} catch (e) {
				this.$toast.error('Une erreur est survenue : ' + e)
			}
		}
	},
	mounted: async function () {
		try {
			const { status, data } = await Axios.get(process.env.api + '/product/types-transactions/', { withCredentials: true })
			this.datas = data
		} catch (e) {
			this.$toast.error('Une erreur est survenue lors du chargement des données : ' + e)
		}
	},
	computed: {
		filteredList() {
			console.log(this.datas)
			return this.datas.filter((item) => {
				return item.label.toLowerCase().includes(this.search.toLowerCase())
			})
		}
	}
}
</script>

<style lang="scss"></style>
