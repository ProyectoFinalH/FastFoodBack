const { findAndChange } = require("../../utils/findAndChange");

const restoreOrder=async({id})=>{
    
    const {record,changed}=await findAndChange('orders',{id:id},{active:true});
   
    if(changed==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    restoreOrder
}