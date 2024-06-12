exports.seed = async function(knex) {
    // Borrar todos los registros existentes
    await knex('menus').del()
    // Insertar nuevos registros
    await knex('menus').insert([
          { id: 1, name: 'desayuno' },
          { id: 2, name: 'almuerzo'},
          { id: 3, name: 'cena'},
          { id: 4, name: 'fast_food'}
          
    ]);
};