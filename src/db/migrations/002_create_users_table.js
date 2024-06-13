exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('email').notNullable().unique();
    table.string('password');
    table.string('telefono');
    table.string('google_id').unique();
    table.integer('role_id').unsigned().references('id').inTable('roles');
    table.string('image_url').defaultTo('/images/user_default.jpg');
    table.boolean('active');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};

  