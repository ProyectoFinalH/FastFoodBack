const db=require('../../db/knex');

const getDetailMenu=async(id)=>{

    const infoDB=await db('menus').where({id:id}).first();
    return infoDB;

};

module.exports={
    getDetailMenu
}