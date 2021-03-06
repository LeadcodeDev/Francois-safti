import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Image extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public filename: string

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}
