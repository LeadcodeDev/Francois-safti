import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
	Route.resource('exhibition-stays', 'ExhibitionStaysController')
		.except(['create', 'edit'])
		.apiOnly()
		.middleware({
			index: ['auth'],
			store: ['auth'],
			show: ['auth'],
			destroy: ['auth']
		})

	Route.resource('heating-mechanisms', 'HeatingMechanismsController')
		.except(['create', 'edit'])
		.apiOnly()
		.middleware({
			index: ['auth'],
			store: ['auth'],
			show: ['auth'],
			destroy: ['auth']
		})

	Route.resource('heating-modes', 'HeatingModesController')
		.except(['create', 'edit'])
		.apiOnly()
		.middleware({
			index: ['auth'],
			store: ['auth'],
			show: ['auth'],
			destroy: ['auth']
		})

	Route.resource('materials', 'MaterialsController')
		.except(['create', 'edit'])
		.apiOnly()
		.middleware({ index: ['auth'], store: ['auth'], show: ['auth'], destroy: ['auth'] })

	Route.resource('states', 'StatesController')
		.except(['create', 'edit'])
		.apiOnly()
		.middleware({
			index: ['auth'],
			store: ['auth'],
			show: ['auth'],
			destroy: ['auth']
		})

	Route.resource('types-heatings', 'TypesOfHeatingsController')
		.except(['create', 'edit'])
		.apiOnly()
		.middleware({
			index: ['auth'],
			store: ['auth'],
			show: ['auth'],
			destroy: ['auth']
		})

	Route.resource('types-products', 'TypesOfProductsController')
		.except(['create', 'edit'])
		.apiOnly()
		.middleware({
			index: ['auth'],
			store: ['auth'],
			show: ['auth'],
			destroy: ['auth']
		})

	Route.resource('types-transactions', 'TypesOfTransactionsController')
		.except(['create', 'edit'])
		.apiOnly()
		.middleware({
			index: ['auth'],
			store: ['auth'],
			show: ['auth'],
			destroy: ['auth']
		})
}).prefix('/api/product')
