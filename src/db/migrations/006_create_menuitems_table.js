exports.up = function(knex) {
  return knex.schema.createTable('menuitems', table => {
    table.increments('id').primary();
    table.integer('menu_id').unsigned().references('id').inTable('menus');
    table.integer('category_id').unsigned().references('id').inTable('categories');
    table.integer('restaurant_id').unsigned().references('id').inTable('restaurants');
    table.string('name').notNullable();
    table.string('description');
    table.decimal('price', 10, 2).notNullable();
    table.string('image_url').defaultTo('https://img.freepik.com/free-vector/plate-cuttlery-graphic-illustration_53876-9118.jpg?t=st=1718246949~exp=1718250549~hmac=673220d0dd7397122e739a0554fccce79e8285b6026936060fcae1aceb9b38bc&w=740');
    table.boolean('active');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menuitems');
};

  