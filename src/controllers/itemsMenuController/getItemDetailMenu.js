const db=require('../../db/knex');

const getItemDetailMenu=async(id)=>{

    const infoDB=await db('menuitems')
    .where({id:id})
    .andWhere({active:true})
    .first();
    return infoDB;

};

module.exports={
    getItemDetailMenu
}