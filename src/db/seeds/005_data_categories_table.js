exports.seed = async function(knex) {
    // Borrar todos los registros existentes
    await knex('categories').del()
    // Insertar nuevos registros
    await knex('categories').insert([
          { id: 1, restaurant_id:1, name: 'bebidas' ,active:true},
          { id: 2, restaurant_id:1, name: 'sandwichs',active:true},
          { id: 3, restaurant_id:1, name: 'entradas',active:true},
          { id: 4, restaurant_id:1, name: 'plato de fondo',active:true},
          { id: 5, restaurant_id:1, name: 'postres',active:true},
          { id: 6, restaurant_id:1, name: 'piqueos',active:true},
          { id: 7, restaurant_id:1, name: 'cocktails',active:true},
          { id: 8, restaurant_id:1, name: 'hamburguesas',active:true},
          { id: 9, restaurant_id:1, name: 'pizzas',active:true}


          
    ]);
};