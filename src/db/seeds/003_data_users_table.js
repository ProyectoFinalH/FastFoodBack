exports.seed = async function(knex) {
    
    // Insertar nuevos registros
    await knex('users').insert([
        {  
            username: 'Administrador',
            email: 'admin@gmail.com',
            password: '12345',
            telefono: '12345678',
            role_id:'3',
            active:true
        },
        {
            username: 'Carla',
            email: 'carla@gmail.com',
            password: '12345',
            telefono: '12345678',
            role_id:'1',
            active:true

        },
        {
            username: 'Manuel',
            email: 'manuel@gmail.com',
            password: '12345',
            telefono: '12345678',
            role_id:'1',
            active:true
        }
               
    ]);
};