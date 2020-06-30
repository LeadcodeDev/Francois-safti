import ProductResourceValidator from 'App/Validators/ProductResourceValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TypesOfHeating from 'App/Models/products/TypesOfHeating'

export default class TypesOfHeatingsController {
	public async get({ params }: HttpContextContract) {
		return await TypesOfHeating.find(params.id)
	}

	public async list() {
		return await TypesOfHeating.all()
	}

	public async create({ request }: HttpContextContract) {
		const { label } = await request.validate(ProductResourceValidator)
		return await TypesOfHeating.create({ label })
	}

	public async update({ params, request }: HttpContextContract) {
		const datas = await request.validate(ProductResourceValidator)
		await TypesOfHeating.query().where('id', params.id).update(datas)
	}

	public async delete({ params }: HttpContextContract) {
		const resource = await TypesOfHeating.find(params.id)
		resource?.delete()
	}
}
