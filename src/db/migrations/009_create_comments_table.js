exports.up = function(knex) {
  return knex.schema.createTable('comments', table => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
    table.integer('restaurant_id').unsigned().notNullable().references('id').inTable('restaurants');
    table.integer('order_id').unsigned().notNullable().references('id').inTable('orders');
    table.text('comment').notNullable();
    table.integer('rating').unsigned().notNullable();
    table.boolean('active').defaultTo(true);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments');
};
