const { findOrUpdate } = require("../../utils/findOrUpdate");


const putItemMenu=async({id,menu_id,category_id,name,description,price,image_url})=>{

    const itemMenu={
        menu_id:menu_id,
        category_id:category_id,
        name:name,
        description:description,
        price:price,
        image_url:image_url        
    }

    const {restaurant_id}=await db('menuitems')
    .where({id:id})
    .select('menuitems.restaurant_id')
    .first();
    
    const {record,updated}=await findOrUpdate('menuitems',{id:id},{name:name,restaurant_id:restaurant_id},itemMenu);
   
    if(updated==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    putItemMenu
}