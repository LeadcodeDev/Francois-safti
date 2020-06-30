import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TypesOfTransactions extends BaseSchema {
	protected tableName = 'types_of_transactions'

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
