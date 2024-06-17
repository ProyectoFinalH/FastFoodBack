const db=require('../../db/knex');

const getCategoriesHome=async(id)=>{

    const infoDB=await db('categories')
    .where({restaurant_id:id})
    .andWhere('active',true)
    .orderBy('id','asc');
    return infoDB;

};

module.exports={
    getCategoriesHome
}