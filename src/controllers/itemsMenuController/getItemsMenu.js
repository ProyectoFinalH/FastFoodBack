const db=require('../../db/knex');

const getItemsMenu=async()=>{

    const infoDB=await db('menuitems')
    .where({active:true});
    return infoDB;

};

module.exports={
    getItemsMenu
}