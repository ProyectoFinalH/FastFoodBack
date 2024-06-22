
1. Crear su base datos en postgres llamada: fast_food_app, si hubo actualizacion del back debera borrarla y crearla nuevamente la base datos.
   
2. Editar el archivo knexfile.js ubicado en la carpeta db y poner la misma data del archivo .env a estas variables:

      host: 'localhost',  
      user: 'xxxx',
      password: 'xxxx',
      database: 'fast_food_app',
      port: '5432',
   
3. Configurar su user y pass de acceso postgres en el archivo .env

4. Ejecutar npm i (para descargar dependencias nuevas si las hay)
   
4. Ejecutar npm run migrate (esto para crear las tablas en la base de datos)

5. Ejecutar npm run datastart (esto para insertar data inicial en la base de datos)

