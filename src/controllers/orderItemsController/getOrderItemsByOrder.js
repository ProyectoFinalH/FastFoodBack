const db=require('../../db/knex');

const getOrderItemsByOrder=async(id)=>{

    const infoDB=await db('orderitems').where({order_id:id}).orderBy('id','asc');
    return infoDB;

};

module.exports={
    getOrderItemsByOrder
}