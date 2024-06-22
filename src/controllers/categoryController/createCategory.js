const { findOrCreate } = require("../../utils/findOrCreate");

const createCategory=async({restaurant_id,name})=>{

    const newCategory={
        restaurant_id:restaurant_id,
        name:name,
        active:true
    }

    const {record,created}=await findOrCreate('categories',newCategory,newCategory);

    if(created){
        return record;
    }else{
        return false;
    }
    

};

module.exports={
    createCategory
}