const { findOrUpdate } = require("../../utils/findOrUpdate");


const putRestaurant=async({id,name,email,password,address,phone,description,image_url})=>{

    const restaurant={
        name:name,
        email:email,
        password:password,
        address:address,
        phone:phone,
        description:description,
        image_url:image_url
    }

    
    const {record,updated}=await findOrUpdate('restaurants',{id:id},{email:email},restaurant);
   
    if(updated==true){
        return record;
    }else{
        return false
    }
    
};

module.exports={
    putRestaurant
}