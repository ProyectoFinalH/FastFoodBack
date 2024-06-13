const db=require('../../db/knex');

const getOrders=async()=>{

    const infoDB=await db('orders')
    
    .where('active',true)
    .orderBy('id','asc');
    return infoDB;

};

module.exports={
    getOrders
}