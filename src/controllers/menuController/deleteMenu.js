const { findAndChange } = require("../../utils/findAndChange");

const deleteMenu=async({id})=>{
    
    const {record,changed}=await findAndChange('menus',{id:id},{active:false});
   
    if(changed==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    deleteMenu
}