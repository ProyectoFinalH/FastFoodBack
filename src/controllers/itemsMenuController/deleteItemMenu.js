const { findAndChange } = require("../../utils/findAndChange");

const deleteItemMenu=async({id})=>{
    
    const {record,changed}=await findAndChange('menuitems',{id:id},{active:false});
   
    if(changed==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    deleteItemMenu
}