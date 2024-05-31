const db = require("../db/knex");

const findAndUpdate=async(tableName,findParams,updateParams)=>{
    
    return db.transaction(async (trx) => {

        const affectedRows = await trx(tableName).where(findParams).update(updateParams);

    
        if (affectedRows > 0) {
            return true;
        } else {
            return false;
        }
         
    })

}

module.exports={findAndUpdate}