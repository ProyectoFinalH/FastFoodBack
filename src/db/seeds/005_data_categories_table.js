exports.seed = async function(knex) {
    
    // Insertar nuevos registros
    await knex('categories').insert([
          {  restaurant_id:1, name: 'bebidas' ,active:true},
          {  restaurant_id:1, name: 'sandwichs',active:true},
          {  restaurant_id:1, name: 'entradas',active:true},
          {  restaurant_id:1, name: 'plato de fondo',active:true},
          {  restaurant_id:1, name: 'postres',active:true},
          {  restaurant_id:1, name: 'piqueos',active:true},
          {  restaurant_id:1, name: 'cocktails',active:true},
          {  restaurant_id:1, name: 'hamburguesas',active:true},
          {  restaurant_id:1, name: 'pizzas',active:true}


          
    ]);
};