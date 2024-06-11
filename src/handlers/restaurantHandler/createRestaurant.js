const { createRestaurant } = require("../../controllers/restaurantController/createRestaurant");

const createRestaurantHandler=async(req,res)=>{

    const{name,email,password,address,phone,description}=req.body;

    let imageCloudinary;
    if (req.file) {
        imageCloudinary = req.file.path;
    }

    try {
        const response=await createRestaurant({name,email,password,address,phone,description,image_url:imageCloudinary});
        response===false
        ?res.status(400).json("Ya existe un restaurant con este correo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    createRestaurantHandler
}