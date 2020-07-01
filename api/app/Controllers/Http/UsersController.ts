import UsersValidator from 'App/Validators/users/CreateValidator'
import UpdateValidator from 'App/Validators/users/UpdateValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'

export default class UsersController {
	public async index() {
		return Users.all()
	}

	public async show({ params }: HttpContextContract) {
		return Users.find(params.id)
	}

	public async store({ request }: HttpContextContract) {
		const { firstname, lastname, email, password } = await request.validate(UsersValidator)
		await Users.create({ firstname, lastname, email, password })
	}

	public async update({ params, request }: HttpContextContract) {
		const datas = await request.validate(UpdateValidator)
		await Users.query().where('id', params.id).update(datas)
	}

	public async destroy({ params }: HttpContextContract) {
		await Users.query().where('id', params.id).delete()
	}

	public async auth({ auth }: HttpContextContract) {
		return await auth.user
	}
}
