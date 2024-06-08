exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
      table.boolean('active');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.dropColumn('active');
    });
  };
  