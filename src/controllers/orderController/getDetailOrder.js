const db=require('../../db/knex');

const getDetailOrder=async(id)=>{

    const infoDB=await db('orders').where({id:id}).first();
    return infoDB;

};

module.exports={
    getDetailOrder
}