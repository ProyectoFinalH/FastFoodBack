exports.up = function(knex) {
  return knex.schema.createTable('orders', table => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('id').inTable('users');
    table.integer('restaurant_id').unsigned().references('id').inTable('restaurants');
    table.decimal('total_price', 10, 2).notNullable();
    table.timestamp('order_date').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('orders');
};

  