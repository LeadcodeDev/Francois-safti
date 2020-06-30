import ProductResourceValidator from 'App/Validators/ProductResourceValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import State from 'App/Models/products/State'

export default class StatesController {
	public async get({ params }: HttpContextContract) {
		return await State.find(params.id)
	}

	public async list() {
		return await State.all()
	}

	public async create({ request }: HttpContextContract) {
		const { label } = await request.validate(ProductResourceValidator)
		return await State.create({ label })
	}

	public async update({ params, request }: HttpContextContract) {
		const datas = await request.validate(ProductResourceValidator)
		await State.query().where('id', params.id).update(datas)
	}

	public async delete({ params }: HttpContextContract) {
		const resource = await State.find(params.id)
		resource?.delete()
	}
}
