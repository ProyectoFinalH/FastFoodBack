const db=require('../../db/knex');

const getOrders=async()=>{

    const infoDB=await db('orders').where('active',true);
    return infoDB;

};

module.exports={
    getOrders
}