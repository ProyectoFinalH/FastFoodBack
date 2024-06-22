const db=require('../../db/knex');

const getItemsMenuRestaurant=async(id)=>{

    const infoDB=await db('menuitems')
    .where({restaurant_id:id})
    .orderBy('id','asc');
    return infoDB;

};

module.exports={
    getItemsMenuRestaurant
}