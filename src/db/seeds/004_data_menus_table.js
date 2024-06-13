exports.seed = async function(knex) {
    
    // Insertar nuevos registros
    await knex('menus').insert([
          { id: 1, restaurant_id:1 , name: 'desayuno', active:true},
          { id: 2, restaurant_id:1 , name: 'almuerzo', active:true},
          { id: 3, restaurant_id:1, name: 'cena',active:true},
          { id: 4, restaurant_id:1, name: 'fast_food',active:true}
          
    ]);
};