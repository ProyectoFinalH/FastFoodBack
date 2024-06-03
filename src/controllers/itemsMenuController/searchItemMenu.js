const db=require('../../db/knex');

const SearchItemMenu=async(name)=>{

    const infoDB=await db('menuitems').where('name','ilike',`%${name}%`);
    return infoDB;

};

module.exports={
    SearchItemMenu
}