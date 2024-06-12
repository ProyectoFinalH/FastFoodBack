exports.seed = async function(knex) {
    // Borrar todos los registros existentes
    await knex('roles').del()
    // Insertar nuevos registros
    await knex('roles').insert([
          { id: 1, name: 'usuario' },
          { id: 2, name: 'restaurant'},
          { id: 3, name: 'superadmin'}
          
    ]);
};