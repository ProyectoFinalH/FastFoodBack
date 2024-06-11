exports.up = function(knex) {
  return knex.schema.createTable('menus', table => {
    table.increments('id').primary();
    table.integer('restaurant_id').unsigned().references('id').inTable('restaurants');
    table.string('name').notNullable();
    table.boolean('active');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menus');
};
  