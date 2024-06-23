exports.up = function(knex) {
    return knex.schema.createTable('statusorder', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('statusorder');
  };