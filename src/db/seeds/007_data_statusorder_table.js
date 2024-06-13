exports.seed = async function(knex) {
    
    // Insertar nuevos registros
    await knex('statusorder').insert([
          { id: 1, name: 'Registrada' },
          { id: 2, name: 'Pago aceptado'},
          { id: 3, name: 'Pago rechazado'},
          { id: 4, name: 'Completada'},
          { id: 5, name: 'Cancelada'},
          
    ]);
};