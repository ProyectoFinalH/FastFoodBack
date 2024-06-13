exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('email').notNullable().unique();
    table.string('password');
    table.string('telefono');
    table.string('google_id').unique();
    table.integer('role_id').unsigned().references('id').inTable('roles');
    table.string('image_url').defaultTo('https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1718246869~exp=1718250469~hmac=a01e4895522ae8276b12e8e9cb0b08ab9c074ae4ea434a6203e7226481dd081e&w=740');
    table.boolean('active');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};

  