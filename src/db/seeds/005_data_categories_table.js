exports.seed = async function(knex) {
    // Borrar todos los registros existentes
    await knex('categories').del()
    // Insertar nuevos registros
    await knex('categories').insert([
          { id: 1, name: 'bebidas' },
          { id: 2, name: 'sandwichs'},
          { id: 3, name: 'entradas'},
          { id: 4, name: 'plato de fondo'},
          { id: 5, name: 'postres'},
          { id: 6, name: 'piqueos'},
          { id: 7, name: 'cocktails'},
          { id: 8, name: 'hamburguesas'},
          { id: 9, name: 'pizzas'}


          
    ]);
};