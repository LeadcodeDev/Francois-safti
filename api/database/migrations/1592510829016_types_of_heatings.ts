import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TypesOfHeatings extends BaseSchema {
	protected tableName = 'types_of_heatings'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			table.string('label')
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
