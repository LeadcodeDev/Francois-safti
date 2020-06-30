import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Images extends BaseSchema {
	protected tableName = 'images'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			table.string('filename').notNullable()
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
