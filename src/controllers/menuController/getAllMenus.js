const db=require('../../db/knex');

const getAllMenus=async()=>{

    const infoDB=await db('menus')
    .select('*')
    .orderBy('id','asc');
    return infoDB;

};

module.exports={
    getAllMenus
}