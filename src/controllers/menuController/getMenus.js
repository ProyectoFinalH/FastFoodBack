const db=require('../../db/knex');

const getMenus=async()=>{

    const infoDB=await db('menus')
    .where({active:true})
    .orderBy('id','asc');
    return infoDB;

};

module.exports={
    getMenus
}