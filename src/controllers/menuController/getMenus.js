const db=require('../../db/knex');

const getMenus=async()=>{

    const infoDB=await db('menus').select('*');
    return infoDB;

};

module.exports={
    getMenus
}