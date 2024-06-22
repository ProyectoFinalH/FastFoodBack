const { findOrUpdate } = require("../../utils/findOrUpdate");

const putMenu=async({id,name})=>{

    const Menu={
        name:name,
        
    }
    
    const {record,updated}=await findOrUpdate('menus',{id:id},{name:name},Menu);
   
    if(updated==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    putMenu
}