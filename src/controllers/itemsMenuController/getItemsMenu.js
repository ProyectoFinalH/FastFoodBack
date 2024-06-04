const db=require('../../db/knex');

const getItemsMenu=async()=>{

    const infoDB=await db('menuitems').select('*');
    return infoDB;

};

module.exports={
    getItemsMenu
}