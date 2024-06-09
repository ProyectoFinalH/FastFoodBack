exports.up = function(knex) {
    return knex.schema.table('comments', function(table) {
      table.integer('order_id').unsigned().references('id').inTable('orders');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('comments', function(table) {
      table.dropColumn('order_id');
    });
  };
  