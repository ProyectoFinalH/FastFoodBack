const db=require('../../db/knex');

const getItemsMenu=async()=>{

    const infoDB=await db('menuitems')
    .where({active:true})
    .orderBy('id','asc');
    return infoDB;

};

module.exports={
    getItemsMenu
}