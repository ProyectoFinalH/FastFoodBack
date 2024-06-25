const { putRestaurant } = require("../../controllers/restaurantController/putRestaurant");

const putRestaurantHandler=async(req,res)=>{

    const {id}=req.params;
    const {name,email,password,address,phone,description}=req.body;

    let imageCloudinary;
    if (req.file) {
        imageCloudinary = req.file.path;
    }

    try {
        
        const response=await putRestaurant({id,name,email,password,address,phone,description,image_url:imageCloudinary});
        response===false
        ?res.status(409).json("Ya existe un restaurant con este correo o hubo un error al actualizarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    putRestaurantHandler
}