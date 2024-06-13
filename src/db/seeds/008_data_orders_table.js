exports.seed = async function(knex) {
   
    // Insertar nuevos registros
    await knex('orders').insert([
          { id: 1, user_id: 1,restaurant_id:1, 
            items:JSON.stringify([
              {name_item:'Cafe',quantity:'2',partial_price:'6'},
              {name_item:'Sandwich de pollo',quantity:'1',partial_price:'8'}

            ]),
            total_price:'14',
            order_date:knex.fn.now(),
            statusorder_id:1,
            active:true
         },
          
          
    ]);
};