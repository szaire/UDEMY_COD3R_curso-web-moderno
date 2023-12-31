exports.up = function (knex, Promise) {
	return knex.schema.creteTable('users', (table) => {
		table.increments('id').primary();
		table.string('name').notNull();
		table.string('email').notNull().unique();
		table.string('password').notNull();
		table.string('admin').notNull().defaultTo(false);
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTable('users');
};
