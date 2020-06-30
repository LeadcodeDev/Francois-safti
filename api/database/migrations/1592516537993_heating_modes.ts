import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class HeatingModes extends BaseSchema {
	protected tableName = 'heating_modes'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			table.string('label').notNullable()
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
