import ProductResourceValidator from 'App/Validators/ProductResourceValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HeatingMode from 'App/Models/products/HeatingMode'

export default class HeatingModesController {
	public async get({ params }: HttpContextContract) {
		return await HeatingMode.find(params.id)
	}

	public async list() {
		return await HeatingMode.all()
	}

	public async create({ request }: HttpContextContract) {
		const { label } = await request.validate(ProductResourceValidator)
		return await HeatingMode.create({ label })
	}

	public async update({ params, request }: HttpContextContract) {
		const datas = await request.validate(ProductResourceValidator)
		await HeatingMode.query().where('id', params.id).update(datas)
	}

	public async delete({ params }: HttpContextContract) {
		const resource = await HeatingMode.find(params.id)
		resource?.delete()
	}
}
