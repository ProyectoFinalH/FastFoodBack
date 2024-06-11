const { findAndChange } = require("../../utils/findAndChange");

const deleteRestaurant=async({id})=>{
    
    const {record,changed}=await findAndChange('restaurants',{id:id},{active:false});
   
    if(changed==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    deleteRestaurant
}