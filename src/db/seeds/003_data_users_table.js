exports.seed = async function(knex) {
    
    // Insertar nuevos registros
    await knex('users').insert([
        {  
            username: 'Usuario1',
            email: 'usuario1@gmail.com',
            password: '12345',
            telefono: '12345678',
            role_id:'1',
            active:true
        },
        {
            username: 'Administrador',
            email: 'admin@gmail.com',
            password: '12345',
            telefono: '12345678',
            role_id:'3',
            active:true

        }
               
    ]);
};