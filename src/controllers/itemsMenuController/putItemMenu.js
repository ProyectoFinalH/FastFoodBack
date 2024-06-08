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
    
    const {record,updated}=await findOrUpdate('menuitems',{id:id},{name:name},itemMenu);
   
    if(updated==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    putItemMenu
}