const db=require('../db/knex');

const findOrCreate=async(tableName, findParams, createParams)=>{
    return db.transaction(async (trx) => {
      let created="";
      let record = await trx(tableName).where(findParams).first();
  
      if (!record) {
        const [id] = await trx(tableName).insert(createParams).returning('id');
        record = await trx(tableName).where( id ).first();
        created=true;
        return {record,created};
        
      }else{
        return {record,created};
      }
  
    });
}

module.exports={findOrCreate}