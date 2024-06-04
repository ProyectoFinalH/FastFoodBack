exports.up = function(knex) {
  return knex.schema.createTable('restaurants', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('phone').notNullable();
    table.string('description');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('restaurants');
};

  