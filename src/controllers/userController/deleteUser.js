const { findAndChange } = require("../../utils/findAndChange");

const deleteUser=async({id})=>{
    
    const {record,changed}=await findAndChange('users',{id:id},{active:false});
   
    if(changed==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    deleteUser
}