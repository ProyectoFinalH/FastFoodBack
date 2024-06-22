const { findOrUpdate } = require("../../utils/findOrUpdate");

const putCategory=async({id,name})=>{

    const category={
        name:name,    
    }
    
    const {record,updated}=await findOrUpdate('categories',{id:id},{name:name},category);
   
    if(updated==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    putCategory
}