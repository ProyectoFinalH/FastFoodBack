const { findAndChange } = require("../../utils/findAndChange");

const deleteCategory=async({id})=>{
    
    const {record,changed}=await findAndChange('categories',{id:id},{active:false});
   
    if(changed==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    deleteCategory
}