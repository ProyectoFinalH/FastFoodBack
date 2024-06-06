const { findOrUpdate } = require("../../utils/findOrUpdate");
const { getDetailMenu } = require("./getDetailMenu");



const putMenu=async({id,name})=>{

    const Menu={
        name:name,
        
    }
    
    const infoDB=await findOrUpdate('menus',{id:id},Menu);
   
    if(infoDB==true){
        
        const menuUpdate=await getDetailMenu(id);
        
        return menuUpdate;
    }else{
        return false
    }
    
};

module.exports={
    putMenu
}