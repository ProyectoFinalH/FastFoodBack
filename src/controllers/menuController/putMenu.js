const { findOrUpdate } = require("../../utils/findOrUpdate");
const db=require('../../db/knex');

const putMenu=async({id,name})=>{

    const Menu={
        name:name,   
    }

    const {restaurant_id}=await db('menus')
    .where({id:id})
    .select('menus.restaurant_id')
    .first();
    
    
    const {record,updated}=await findOrUpdate('menus',{id:id},{name:name,restaurant_id:restaurant_id},Menu);
   
    if(updated==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    putMenu
}