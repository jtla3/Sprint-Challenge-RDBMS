
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    tbl.increments('id').primary();
    tbl.string('name', 128).notNullable().unique('name');
    tbl.text('description').notNullable();
    tbl.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
