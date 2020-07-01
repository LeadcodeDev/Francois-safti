import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
	Route.resource('users', 'UsersController')
		.apiOnly()
		.middleware({
			index: ['auth'],
			store: ['auth'],
			show: ['auth'],
			destroy: ['auth']
		})
}).prefix('/api')
