exports.seed = async function(knex) {
    
    // Insertar nuevos registros
    await knex('menuitems').insert([
          {  menu_id: 1,category_id: 1,restaurant_id:1,name: 'Cafe',description: 'finos granos',price: '3',active:true ,
            image_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'
          },
          {  menu_id: 1,category_id: 1,restaurant_id:1,name: 'Jugo de frutas',description: 'frutas frescas',price: '5',active:true ,
            image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaGbRaANQVIdOrW18FIRWJk_3x36sQXF-_tQ&s'
          },
          {  menu_id: 1,category_id: 2,restaurant_id:1,name: 'Sandwich de pollo',description: 'pan molde y pollo con salsas',price: '8',active:true,
            image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERnLee3DrzS-rS5k8sdqL7LK3sLRrPnr_cQ&s'
          },
          {  menu_id: 1,category_id: 2,restaurant_id:1,name: 'Sandwich con huevo',description: 'pan molde con huevo y palta',price: '9',active:true,
            image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8waP20q5GlhF2aYwYiCeazPGjQzZG_a6yQ&s'
          },
          {  menu_id: 2,category_id: 3,restaurant_id:1,name: 'Ensalada verduras',description: 'verduras frescas',price: '7',active:true,
            image_url:'https://cdn0.recetasgratis.net/es/posts/3/2/6/ensalada_de_verduras_variadas_57623_orig.jpg'
          },
          {  menu_id: 2,category_id: 3,restaurant_id:1,name: 'Sopa',description: 'fideos con pollo',price: '8',active:true,
            image_url:'https://s1.elespanol.com/2020/01/08/cocinillas/recetas/sopas-y-cremas/caldo-pollo-fideos_458216170_142008613_1706x960.jpg'
          },
          {  menu_id: 2,category_id: 4,restaurant_id:1,name: 'Arroz con pollo',description: 'acompañado de ensalada',price: '11',active:true,
            image_url:'https://www.comedera.com/wp-content/uploads/2022/05/Arroz-con-pato-peruano-shutterstock_1846729603.jpg'
          },
          {  menu_id: 2,category_id: 4,restaurant_id:1,name: 'Estofado de carne',description: 'con papas y arroz',price: '13',active:true,
            image_url:'https://www.gourmet.cl/wp-content/uploads/2016/09/estofado-de-carne-web-570x458.jpg'
          },
          {  menu_id: 2,category_id: 5,restaurant_id:1,name: 'Pie de limon',description: 'crema de limon y crunch de almendras',price: '4',active:true,
            image_url:'https://origin.cronosmedia.glr.pe/large/2020/08/10/lg_5f31d8c2f003a0716f670d8e.jpg'
          },
          {  menu_id: 2,category_id: 5,restaurant_id:1,name: 'Tarta de fresas',description: 'rellena de crema pastelera',price: '5',active:true,
            image_url:'https://cdn7.kiwilimon.com/recetaimagen/14092/640x640/11845.jpg.webp'
          },
          {  menu_id: 3,category_id: 6,restaurant_id:1,name: 'Taquitos',description: 'con crema de palta',price: '9',active:true,
            image_url:'https://recipes.net/wp-content/uploads/2024/02/what-is-a-taquito-1709214175.jpg'
          },
          {  menu_id: 3,category_id: 6,restaurant_id:1,name: 'Alitas de pollo',description: 'con cremas y aros de cebolla',price: '10',active:true,
            image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQ-Lvz0t69mbecRqKs9tsbgtYhah3YSIaVQ&s'
          },
          {  menu_id: 3,category_id: 7,restaurant_id:1,name: 'Cosmopolitan',description: 'con martini rojo',price: '11',active:true,
            image_url:'https://assets.bonappetit.com/photos/650df690c94ec4218673b45a/1:1/w_2560%2Cc_limit/20230915-WEB-SEO-0882_update%2520copy.jpg'
          },
          { menu_id: 3,category_id: 7,restaurant_id:1,name: 'Negroni',description: 'con ginebra,campari y vermu rojo',price: '12',active:true,
            image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRwl6qozEECchS7xAIw66_A68CAHBWDfdZg&s'
          },
          {  menu_id: 4,category_id: 8,restaurant_id:1,name: 'Hamburguesa de pollo',description: 'pechuga broaster, lechuga y tomate',price: '8',active:true,
            image_url:'https://i.pinimg.com/736x/21/c6/86/21c68690a919864a59b62434f243582e.jpg'
          },
          {  menu_id: 4,category_id: 8,restaurant_id:1,name: 'Hamburguesa de carne',description: 'bistec de lomo, lechuga y tomate',price: '10',active:true,
            image_url:'https://www.ajinomoto.com/cms_wp_ajnmt_global/wp-content/uploads/umamirecipes/jpg/umami_recipes_06.jpg'
          },
          {  menu_id: 4,category_id: 9,restaurant_id:1,name: 'Pizza americana',description: 'salsa roja con palitos al ajo',price: '15',active:true,
            image_url:'https://mandolina.co/wp-content/uploads/2023/08/pizza-americana.jpg'
          },
          {  menu_id: 4,category_id: 9,restaurant_id:1,name: 'Pizza hawaiana',description: 'con piña y palitos al ajo',price: '17',active:true,
            image_url:'https://i.pinimg.com/originals/2d/15/00/2d15009cab2b7b82d880d6831cb45523.jpg'
          },
          {  menu_id: 4,category_id: 8,restaurant_id:2,name: 'Whopper con queso',description: 'Hamburguesa grande a la parrilla con queso',price: '7',active:true,
            image_url:'https://www.burgerking.pe/Multimedia/productos/detalle/WHOPPER_CON_QUESO_202403251641114665.avif'
          },
          {  menu_id: 4,category_id: 8,restaurant_id:2,name: 'Whopper tejana',description: 'Hamburguesa a la parrilla con queso, BBQ',price: '8',active:true,
            image_url:'https://www.burgerking.pe/Multimedia/productos/detalle/WHOPPER_TEJANA_JUNIOR_202403141119554598.avif'
          },
          {  menu_id: 4,category_id: 8,restaurant_id:2,name: 'Whopper guacamole',description: 'Hamburguesa a la parrilla con guacamole',price: '7.5',active:true,
            image_url:'https://www.burgerking.pe/Multimedia/productos/detalle/WHOPPER_GUACAMOLE_202403141116328608.avif'
          },
          {  menu_id: 4,category_id: 1,restaurant_id:2,name: 'Coca Cola',description: 'Refrescante Coca Cola',price: '1.5',active:true ,
            image_url:'https://www.burgerking.pe/Multimedia/productos/detalle/COCA_COLA_ORIGINAL_V3.avif'
          },
          {  menu_id: 4,category_id: 1,restaurant_id:2,name: 'Fanta',description: 'Refrescante Fanta',price: '1.3',active:true ,
            image_url:'https://www.burgerking.pe/Multimedia/productos/detalle/FANTA_ORIGINAL_V3.avif'
          },
          {  menu_id: 4,category_id: 1,restaurant_id:2,name: 'Agua',description: 'Agua sin gas',price: '1.2',active:true ,
            image_url:'https://www.burgerking.pe/Multimedia/productos/detalle/SAN_LUIS_SIN_GAS_V1.avif'
          },
          {  menu_id: 4,category_id: 5,restaurant_id:2,name: 'Pie de manzana',description: 'Pie crocante relleno de trozos de manzana',price: '2',active:true,
            image_url:'https://www.burgerking.pe/Multimedia/productos/detalle/PIE_DE_MANZANA_V1.avif'
          },
          {  menu_id: 4,category_id: 5,restaurant_id:2,name: 'King Fusion Oreo',description: 'Cremoso helado de vainilla, chocolate o mixto con pedacitos de galleta OREO',price: '3',active:true,
            image_url:'https://www.burgerking.pe/Multimedia/productos/detalle/KING_FUSION_OREO_V7.avif'
          },




          
    ]);
};