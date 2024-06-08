const db=require('../../db/knex');

const getDetailOrderItems=async(id)=>{

    const infoDB=await db('orderitems').where({id:id}).first();
    return infoDB;

};

module.exports={
    getDetailOrderItems
}