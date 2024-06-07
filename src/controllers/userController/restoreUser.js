const { findAndChange } = require("../../utils/findAndChange");

const restoreUser=async({id})=>{
    
    const {record,changed}=await findAndChange('users',{id:id},{active:true});
   
    if(changed==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    restoreUser
}