const db=require('../../db/knex');

const getCategories=async()=>{

    const infoDB=await db('categories').where('active',true);
    return infoDB;

};

module.exports={
    getCategories
}