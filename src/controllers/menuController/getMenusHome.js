const db=require('../../db/knex');

const getMenusHome=async(id)=>{

    const infoDB=await db('menus')
    .where({restaurant_id:id})
    .andWhere({active:true})
    .orderBy('id','asc');
    return infoDB;

};

module.exports={
    getMenusHome
}