exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('email').notNullable().unique();
    table.string('password');
    table.string('telefono');
    table.string('google_id').unique();
    table.integer('role_id').unsigned().references('id').inTable('roles');
    table.string('image_url').defaultTo('https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg');
    table.boolean('active');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};

  