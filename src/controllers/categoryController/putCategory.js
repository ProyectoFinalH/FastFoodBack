const { findOrUpdate } = require("../../utils/findOrUpdate");

const putCategory=async({id,name})=>{

    const category={
        name:name,    
    }
    
    const {restaurant_id}=await db('categories')
    .where({id:id})
    .select('categories.restaurant_id')
    .first();

    const {record,updated}=await findOrUpdate('categories',{id:id},{name:name,restaurant_id:restaurant_id},category);
   
    if(updated==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    putCategory
}