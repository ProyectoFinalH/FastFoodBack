exports.up = function(knex) {
  return knex.schema.createTable('restaurants', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('address').notNullable();
    table.string('phone').notNullable();
    table.string('description');
    table.string('image_url').defaultTo('https://img.freepik.com/free-vector/illustration-house-insurance_53876-6157.jpg?t=st=1718246779~exp=1718250379~hmac=c1dcba83f97b1ba573bf32e5a77173f4bfeff36bbd78f9363ab1aebae6a7ebe3&w=740');
    table.boolean('active');
    table.integer('role_id').unsigned().references('id').inTable('roles');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('restaurants');
};

  