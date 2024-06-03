const { findOrCreate } = require("../../utils/findOrCreate");

const createCategory=async({name})=>{

    const newCategory={
        name:name
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