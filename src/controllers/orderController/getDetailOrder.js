const db=require('../../db/knex');

const getDetailOrder=async(id)=>{

    const infoDB=await db('orders')
    .where({id:id})
    .andWhere({active:true})
    .first();
    return infoDB;

};

module.exports={
    getDetailOrder
}