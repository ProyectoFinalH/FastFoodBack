exports.up = function(knex) {
  return knex.schema.createTable('restaurants', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('address').notNullable();
    table.string('phone').notNullable();
    table.string('description');
    table.string('image_url').defaultTo('/images/restaurant_default.jpg');
    table.boolean('active');
    table.integer('role_id').unsigned().references('id').inTable('roles');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('restaurants');
};

  