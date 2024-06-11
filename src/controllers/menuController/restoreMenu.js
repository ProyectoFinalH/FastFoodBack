const { findAndChange } = require("../../utils/findAndChange");

const restoreMenu=async({id})=>{
    
    const {record,changed}=await findAndChange('menus',{id:id},{active:true});
   
    if(changed==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    restoreMenu
}