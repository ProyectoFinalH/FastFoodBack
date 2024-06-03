const db=require('../../db/knex');

const getItemDetailMenu=async(id)=>{

    const infoDB=await db('menuitems').where({id:id}).first();
    return infoDB;

};

module.exports={
    getItemDetailMenu
}