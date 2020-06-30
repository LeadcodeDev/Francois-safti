import UsersValidator from 'App/Validators/UsersValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'

export default class UsersController {
	public async register({ request }: HttpContextContract) {
		const { firstname, lastname, email, password } = await request.validate(UsersValidator)
		await Users.create({ firstname, lastname, email, password })
	}

	public async auth({ auth }: HttpContextContract) {
		return await auth.user
	}
}
