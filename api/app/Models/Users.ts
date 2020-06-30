import Product from 'App/Models/products/Product'
import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Users extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public firstname: string

	@column()
	public lastname: string

	@column()
	public avatar: string

	@column()
	public email: string

	@column()
	public password: string

	@column()
	public rememberMeToken?: string

	@hasMany(() => Product)
	public products: HasMany<typeof Product>

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@beforeSave()
	public static async hashPassword(users: Users) {
		if (users.$dirty.password) {
			users.password = await Hash.make(users.password)
		}
	}
}
