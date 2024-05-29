exports.up = function(knex) {
    return knex.schema.table('restaurants', function(table) {
      table.string('image_url');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('restaurants', function(table) {
      table.dropColumn('image_url');
    });
  };
  
