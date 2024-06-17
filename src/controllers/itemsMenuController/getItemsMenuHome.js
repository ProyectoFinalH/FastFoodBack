const db=require('../../db/knex');

const getItemsMenuHome=async(id)=>{

    const infoDB=await db('menuitems')
    .where({restaurant_id:id})
    .where({active:true})
    .orderBy('id','asc');
    return infoDB;

};

module.exports={
    getItemsMenuHome
}