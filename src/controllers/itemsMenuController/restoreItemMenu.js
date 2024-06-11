const { findAndChange } = require("../../utils/findAndChange");

const restoreItemMenu=async({id})=>{
    
    const {record,changed}=await findAndChange('menuitems',{id:id},{active:true});
   
    if(changed==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    restoreItemMenu
}