exports.seed = async function(knex) {
    
    // Insertar nuevos registros
    await knex('restaurants').insert([
          { id: 1, 
            name: 'Tanta',
            email: 'tanta@gmail.com',
            password: '1234',
            address:'calle 123',
            phone: '12345678',
            description:'Restaurante',
            role_id:'2',
            image_url:'https://i.pinimg.com/originals/29/1c/b5/291cb59379301c2544dbb8816cf49ac1.jpg',
            active:true
        },
               
    ]);
};