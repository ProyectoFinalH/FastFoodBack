exports.seed = async function(knex) {
    // Borrar todos los registros existentes
    await knex('orders').del()
    await knex('restaurants').del()
    await knex('users').del()
    await knex('roles').del()
    
    // Insertar nuevos registros
    await knex('roles').insert([
          { id: 1, name: 'usuario' },
          { id: 2, name: 'restaurant'},
          { id: 3, name: 'superadmin'}
          
    ]);
};