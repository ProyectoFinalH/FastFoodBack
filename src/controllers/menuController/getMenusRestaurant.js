const db=require('../../db/knex');

const getMenusRestaurant=async(id)=>{

    const infoDB=await db('menus')
    .where({restaurant_id:id})
    .orderBy('id','asc');
    return infoDB;

};

module.exports={
    getMenusRestaurant
}