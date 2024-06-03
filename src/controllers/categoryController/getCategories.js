const db=require('../../db/knex');

const getCategories=async()=>{

    const infoDB=await db('categories').select('*');
    return infoDB;

};

module.exports={
    getCategories
}