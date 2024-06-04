exports.up = function(knex) {
  return knex.schema.createTable('orderitems', table => {
    table.increments('id').primary();
    table.integer('order_id').unsigned().references('id').inTable('orders');
    table.integer('menuitem_id').unsigned().references('id').inTable('menuitems');
    table.integer('quantity').notNullable();
    table.decimal('price', 10, 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('orderitems');
};

  