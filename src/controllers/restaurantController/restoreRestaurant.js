const { findAndChange } = require("../../utils/findAndChange");

const restoreRestaurant=async({id})=>{
    
    const {record,changed}=await findAndChange('restaurants',{id:id},{active:true});
   
    if(changed==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    restoreRestaurant
}