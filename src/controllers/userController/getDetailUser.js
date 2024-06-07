const db=require('../../db/knex');

const getDetailUser=async(id)=>{

    const infoDB=await db('users')
    .where({id:id})
    .andWhere({active:true})
    .first();
    return infoDB;

};

module.exports={
    getDetailUser
}