const db = require("../db/knex");


const findOrUpdate = async (tableName,id, findParams, updateParams) => {
    return db.transaction(async (trx) => {
      let updated = false;
      
      let existingRecord = await trx(tableName).where(findParams).first();
      

      if (!existingRecord) {
        // No existe un registro con el correo electrónico proporcionado
        const affectedRows = await trx(tableName).where(id).update(updateParams);
        if (affectedRows > 0) {
            // La actualización se realizó con éxito
            const updatedRecord = await trx(tableName).where(id).first();
            updated = true;
            return { record: updatedRecord, updated };
        } else {
            // Hubo un error en la actualización de datos
            return { record: null, updated: false };
        }
      } else if (existingRecord.id === Number(id.id)) {
        // El correo electrónico es el mismo que el de la cuenta que se está editando
        const affectedRows = await trx(tableName).where(id).update(updateParams);
        if (affectedRows > 0) {
            // La actualización se realizó con éxito
            const updatedRecord = await trx(tableName).where(id).first();
            updated = true;
            return { record: updatedRecord, updated };
        } else {
            // Hubo un error en la actualización de datos
            return { record: null, updated: false };
        }
      } else {
        // El correo electrónico ya existe en la base de datos
        return { record: existingRecord, updated: false };
      }

    });
  };

module.exports={findOrUpdate}