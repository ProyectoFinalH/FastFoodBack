const db=require('../../db/knex');

const getOrderItems=async()=>{

    const infoDB=await db('orderitems').select('*').orderBy('id','asc');
    return infoDB;

};

module.exports={
    getOrderItems
}