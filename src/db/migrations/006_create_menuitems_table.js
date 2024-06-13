exports.up = function(knex) {
  return knex.schema.createTable('menuitems', table => {
    table.increments('id').primary();
    table.integer('menu_id').unsigned().references('id').inTable('menus');
    table.integer('category_id').unsigned().references('id').inTable('categories');
    table.integer('restaurant_id').unsigned().references('id').inTable('restaurants');
    table.string('name').notNullable();
    table.string('description');
    table.decimal('price', 10, 2).notNullable();
    table.string('image_url').defaultTo('/images/default_menuitem.jpg');
    table.boolean('active');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menuitems');
};

  