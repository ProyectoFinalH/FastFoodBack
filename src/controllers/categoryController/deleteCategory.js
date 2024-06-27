const { findAndChange } = require("../../utils/findAndChange");

const deleteCategory=async({id})=>{
    
    const {record,changed}=await findAndChange('categories',{id:id},{active:false});

    const {recordItems,changedItems}=await findAndChange('menuitems',{category_id:id},{active:false});//para borrar los items de la categoria ocultada

   
    if(changed==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    deleteCategory
}