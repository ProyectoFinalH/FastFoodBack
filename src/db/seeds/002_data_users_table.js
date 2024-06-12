exports.seed = async function(knex) {
    // Borrar todos los registros existentes
    await knex('users').del()
    // Insertar nuevos registros
    await knex('users').insert([
          { id: 1, 
            username: 'Usuario1',
            email: 'usuario1@gmail.com',
            password: '1234',
            telefono: '12345678',
            role_id:'1',
            active:true
        },
               
    ]);
};