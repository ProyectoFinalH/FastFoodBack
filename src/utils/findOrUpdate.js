const db = require("../db/knex");

// const findOrUpdate=async(tableName,findParams,updateParams)=>{
    
//     return db.transaction(async (trx) => {

//         const affectedRows = await trx(tableName).where(findParams).update(updateParams);

    
//         if (affectedRows > 0) {
//             return true;
//         } else {
//             return false;
//         }
         
//     })

// }

const findOrUpdate = async (tableName,id, findParams, updateParams) => {
    return db.transaction(async (trx) => {
      let updated = false;
      let record = await trx(tableName).where(findParams).first();
  
      if (!record) {
        const affectedRows=await trx(tableName).where(id).update(updateParams);
        if(affectedRows>0){
            record = await trx(tableName).where(id).first();
            updated = true;
            return { record, updated };//{data,true]=>Actualizacion exitosa
        }else{
            return{record,updated};//{null,false}=>Hubo un error en la actualizacion de data
        }
        
      } else {
        return { record, updated };//{data,false}=>Ya existe el dato actualizar en la BD
      }
    });
  };

module.exports={findOrUpdate}