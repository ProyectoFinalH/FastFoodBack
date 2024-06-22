const { findOrCreate } = require('../../utils/findOrCreate');

const createMenu=async({restaurant_id,name})=>{

    const newMenu={
        restaurant_id:restaurant_id,
        name:name,
        active:true
    }
    const nameNewMenu={
        name:name
    }

    const {record,created}=await findOrCreate('menus',nameNewMenu,newMenu)

    if(created){
        return record;
    }else{
        return false;
    }
    

};

module.exports={
    createMenu
}