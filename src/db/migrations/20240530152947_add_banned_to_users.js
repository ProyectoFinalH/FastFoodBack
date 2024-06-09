exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
      table.boolean('banned').defaultTo(false);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.dropColumn('banned');
    });
  };
  
