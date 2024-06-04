const db=require('../../db/knex');

const getDetailCategory=async(id)=>{

    const infoDB=await db('categories').where({id:id}).first();
    return infoDB;

};

module.exports={
    getDetailCategory
}