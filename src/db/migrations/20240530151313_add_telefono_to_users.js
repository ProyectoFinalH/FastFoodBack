exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('telefono');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.dropColumn('telefono');
    });
  };
  
