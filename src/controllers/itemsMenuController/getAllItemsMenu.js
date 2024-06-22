const db=require('../../db/knex');

const getAllItemsMenu=async()=>{

    const infoDB=await db('menuitems')
    .select('*')
    .orderBy('id','asc');
    return infoDB;

};

module.exports={
    getAllItemsMenu
}