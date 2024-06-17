const db=require('../../db/knex');

const getCategoriesRestaurant=async(id)=>{

    const infoDB=await db('categories')
    .where({restaurant_id:id})
    .orderBy('id','asc');
    return infoDB;

};

module.exports={
    getCategoriesRestaurant
}