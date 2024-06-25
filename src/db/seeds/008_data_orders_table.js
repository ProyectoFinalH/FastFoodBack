exports.seed = async function(knex) {
  // Insertar nuevos registros
  await knex('orders').insert([
    { 
      user_id: 2,
      restaurant_id: 1, 
      items: JSON.stringify([
        {name_item: 'Cafe', quantity: '2', partial_price: '6'},
        {name_item: 'Sandwich de pollo', quantity: '1', partial_price: '8'}
      ]),
      total_price: '14',
      order_date: knex.fn.now(),
      statusorder_id: 1,
      active: true,
      email_sent: false // Añadir el nuevo campo
    },
    { 
      user_id: 3,
      restaurant_id: 1, 
      items: JSON.stringify([
        {name_item: 'Arroz con pollo', quantity: '1', partial_price: '11'},
        {name_item: 'Pie de limon', quantity: '2', partial_price: '8'}
      ]),
      total_price: '19',
      order_date: knex.fn.now(),
      statusorder_id: 1,
      active: true,
      email_sent: false // Añadir el nuevo campo
    },
    { 
      user_id: 2,
      restaurant_id: 2, 
      items: JSON.stringify([
        {name_item: 'Whopper con queso', quantity: '1', partial_price: '7'},
        {name_item: 'Fanta', quantity: '1', partial_price: '1.3'}
      ]),
      total_price: '8.3',
      order_date: knex.fn.now(),
      statusorder_id: 1,
      active: true,
      email_sent: false // Añadir el nuevo campo
    },
    { 
      user_id: 3,
      restaurant_id: 2, 
      items: JSON.stringify([
        {name_item: 'Whopper tejana', quantity: '1', partial_price: '8'},
        {name_item: 'Coca Cola', quantity: '1', partial_price: '1.5'}
      ]),
      total_price: '9.5',
      order_date: knex.fn.now(),
      statusorder_id: 1,
      active: true,
      email_sent: false // Añadir el nuevo campo
    }
  ]);
};
