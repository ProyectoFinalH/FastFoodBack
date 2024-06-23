const db=require('../../db/knex');

const getAllCategories=async()=>{

    const infoDB=await db('categories').select('*').orderBy('id','asc');
    return infoDB;

};

module.exports={
    getAllCategories
}