const db = require("../db/knex");


const findAndChange = async (tableName,id,updateParams) => {
    return db.transaction(async (trx) => {
      let changed = false;
      let record = await trx(tableName).where(id).first();
  
      if (record) {
        const affectedRows=await trx(tableName).where(id).update(updateParams);
        if(affectedRows>0){
            record = await trx(tableName).where(id).first();
            changed = true;
            return { record, changed };//{data,true]=>Desactivacion exitosa
        }else{
            return{record,changed};//{data,false}=>Hubo un error en la desactivacion
        }
        
      } else {
        return { record, changed };//{null,false}=>No existe este id en la BD
      }
    });
  };

module.exports={findAndChange}