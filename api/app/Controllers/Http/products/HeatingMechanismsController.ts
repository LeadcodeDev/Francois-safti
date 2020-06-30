import ProductResourceValidator from 'App/Validators/ProductResourceValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HeatingMechanism from 'App/Models/products/HeatingMechanism'

export default class HeatingMechanismsController {
	public async get({ params }: HttpContextContract) {
		return await HeatingMechanism.find(params.id)
	}

	public async list() {
		return await HeatingMechanism.all()
	}

	public async create({ request }: HttpContextContract) {
		const { label } = await request.validate(ProductResourceValidator)
		return await HeatingMechanism.create({ label })
	}

	public async update({ params, request }: HttpContextContract) {
		const datas = await request.validate(ProductResourceValidator)
		await HeatingMechanism.query().where('id', params.id).update(datas)
	}

	public async delete({ params }: HttpContextContract) {
		const resource = await HeatingMechanism.find(params.id)
		resource?.delete()
	}
}
