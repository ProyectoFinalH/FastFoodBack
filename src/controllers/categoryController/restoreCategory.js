const { findAndChange } = require("../../utils/findAndChange");

const restoreCategory=async({id})=>{
    
    const {record,changed}=await findAndChange('categories',{id:id},{active:true});
   
    if(changed==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    restoreCategory
}