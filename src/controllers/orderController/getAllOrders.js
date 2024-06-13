const db=require('../../db/knex');

const getAllOrders=async()=>{

    const infoDB=await db('orders').select('*').orderBy('id','asc');;
    return infoDB;

};

module.exports={
    getAllOrders
}