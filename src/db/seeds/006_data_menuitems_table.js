exports.seed = async function(knex) {
    // Borrar todos los registros existentes
    await knex('menuitems').del()
    // Insertar nuevos registros
    await knex('menuitems').insert([
          { id: 1, menu_id: 1,category_id: 1,name: 'Cafe',description: 'finos granos',price: '3',active:true },
          { id: 2, menu_id: 1,category_id: 1,name: 'Jugo de frutas',description: 'frutas frescas',price: '5',active:true },
          { id: 3, menu_id: 1,category_id: 2,name: 'Sandwich de pollo',description: 'pan frances y pollo con salsas',price: '8',active:true},
          { id: 4, menu_id: 1,category_id: 2,name: 'Sandwich con huevo',description: 'pan molde con huevo y palta',price: '9',active:true},
          { id: 5, menu_id: 2,category_id: 3,name: 'Ensalada verduras',description: 'verduras frescas',price: '7',active:true},
          { id: 6, menu_id: 2,category_id: 3,name: 'Sopa',description: 'fideos con pollo',price: '8',active:true},
          { id: 7, menu_id: 2,category_id: 4,name: 'Arroz con pollo',description: 'acompañado de ensalada',price: '11',active:true},
          { id: 8, menu_id: 2,category_id: 4,name: 'Estofado de carne',description: 'con papas y arroz',price: '13',active:true},
          { id: 9, menu_id: 2,category_id: 5,name: 'Pie de limon',description: 'crema de limon y crunch de almendras',price: '4',active:true},
          { id: 10, menu_id: 2,category_id: 5,name: 'Tarta de fresas',description: 'rellena de crema pastelera',price: '5',active:true},
          { id: 11, menu_id: 3,category_id: 6,name: 'Taquitos',description: 'con crema de palta',price: '9',active:true},
          { id: 12, menu_id: 3,category_id: 6,name: 'Alitas de pollo',description: 'con cremas y aros de cebolla',price: '10',active:true},
          { id: 13, menu_id: 3,category_id: 7,name: 'Cosmopolitan',description: 'con martini rojo',price: '11',active:true},
          { id: 14, menu_id: 3,category_id: 7,name: 'Negroni',description: 'con ginebra,campari y vermu rojo',price: '12',active:true},
          { id: 15, menu_id: 4,category_id: 8,name: 'Hamburguesa de pollo',description: 'pechuga broaster, lechuga y tomate',price: '8',active:true},
          { id: 16, menu_id: 4,category_id: 8,name: 'Hamburguesa de carne',description: 'bistec de lomo, lechuga y tomate',price: '10',active:true},
          { id: 17, menu_id: 4,category_id: 9,name: 'Pizza americana',description: 'salsa roja con palitos al ajo',price: '15',active:true},
          { id: 18, menu_id: 4,category_id: 9,name: 'Pizza hawaiana',description: 'con piña y palitos al ajo',price: '17',active:true},




          
    ]);
};