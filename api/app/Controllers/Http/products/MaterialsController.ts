import ProductResourceValidator from 'App/Validators/ProductResourceValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Material from 'App/Models/products/Material'

export default class MaterialsController {
	public async get({ params }: HttpContextContract) {
		return await Material.find(params.id)
	}

	public async list() {
		return await Material.all()
	}

	public async create({ request }: HttpContextContract) {
		const { label } = await request.validate(ProductResourceValidator)
		return await Material.create({ label })
	}

	public async update({ params, request }: HttpContextContract) {
		const datas = await request.validate(ProductResourceValidator)
		await Material.query().where('id', params.id).update(datas)
	}

	public async delete({ params }: HttpContextContract) {
		const resource = await Material.find(params.id)
		resource?.delete()
	}
}
