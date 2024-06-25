const { findOrCreate } = require("../../utils/findOrCreate");

const createCategory=async({restaurant_id,name})=>{

    const newCategory={
        restaurant_id:restaurant_id,
        name:name,
        active:true
    }

    const nameNewCategory={
        name:name,
        restaurant_id:restaurant_id  
    }

    const {record,created}=await findOrCreate('categories',nameNewCategory,newCategory);

    if(created){
        return record;
    }else{
        return false;
    }
    

};

module.exports={
    createCategory
}