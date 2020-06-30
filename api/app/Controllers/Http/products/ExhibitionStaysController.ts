import ProductResourceValidator from 'App/Validators/ProductResourceValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ExhibitionStay from 'App/Models/products/ExhibitionStay'

export default class ExhibitionStaysController {
	public async index() {
		return await ExhibitionStay.all()
	}

	public async show({ params }: HttpContextContract) {
		return await ExhibitionStay.find(params.id)
	}

	public async create({ request }: HttpContextContract) {
		const { label } = await request.validate(ProductResourceValidator)
		return await ExhibitionStay.create({ label })
	}

	public async update({ params, request }: HttpContextContract) {
		const datas = await request.validate(ProductResourceValidator)
		await ExhibitionStay.query().where('id', params.id).update(datas)
	}

	public async delete({ params }: HttpContextContract) {
		const resource = await ExhibitionStay.find(params.id)
		resource?.delete()
	}
}
