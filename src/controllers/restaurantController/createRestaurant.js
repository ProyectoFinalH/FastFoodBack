const { findOrCreate } = require('../../utils/findOrCreate');

const createRestaurant=async({name,email,password,address,phone,description,image_url})=>{

    const newRestaurant={
        name:name,
        email:email,
        password:password,
        address:address,
        phone:phone,
        description:description,
        image_url:image_url,
        active:true
    }
    const emailNewRestaurant={
        email:email
    }

    const {record,created}=await findOrCreate('restaurants',emailNewRestaurant,newRestaurant)

    if(created){
        return record;
    }else{
        return false;
    }
    

};

module.exports={
    createRestaurant
}