exports.seed = async function(knex) {
    
    // Insertar nuevos registros
    await knex('menus').insert([
          {  restaurant_id:1 , name: 'desayuno', active:true},
          {  restaurant_id:1 , name: 'almuerzo', active:true},
          {  restaurant_id:1, name: 'cena',active:true},
          {  restaurant_id:1, name: 'fast_food',active:true}
          
    ]);
};