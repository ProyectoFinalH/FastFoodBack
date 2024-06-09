exports.up = function(knex) {
    return knex.schema.createTable('ingredient_options', function(table) {
      table.increments('id').primary();
      table.integer('menuitem_id').unsigned().references('id').inTable('menuitems');
      table.string('name').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ingredient_options');
  };
  
