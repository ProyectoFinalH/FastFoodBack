exports.seed = async function(knex) {
    // Borrar todos los registros existentes
    await knex('restaurants').del()
    // Insertar nuevos registros
    await knex('restaurants').insert([
          { id: 1, 
            name: 'KFC',
            email: 'kfc@gmail.com',
            password: '1234',
            address:'calle 123',
            phone: '12345678',
            description:'venta de fast food',
            role_id:'2',
            active:true
        },
               
    ]);
};