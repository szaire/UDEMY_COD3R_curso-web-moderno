exports.up = function (knex, Promise) {
	return knex.schema.createTable('users', (table) => {
		table.increment('id').primary();
		table.string('name').noNull();
		table.string('email').noNull().unique();
		table.string('password').noNull();
		table.string('admin').noNull().defaultTo(false);
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTable('users');
};
