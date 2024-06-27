const { findAndChange } = require("../../utils/findAndChange");

const restoreCategory=async({id})=>{
    
    const {record,changed}=await findAndChange('categories',{id:id},{active:true});

    const {recordItems,changedItems}=await findAndChange('menuitems',{category_id:id},{active:true});//para restaurar los items de la categoria reactivada
   
    if(changed==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    restoreCategory
}