const { findAndChange } = require("../../utils/findAndChange");

const deleteOrder=async({id})=>{
    
    const {record,changed}=await findAndChange('orders',{id:id},{active:false});
   
    if(changed==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    deleteOrder
}