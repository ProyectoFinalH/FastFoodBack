const { putRestaurant } = require("../../controllers/restaurantController/putRestaurant");

const putRestaurantHandler=async(req,res)=>{

    const {id}=req.params;
    const {name,email,password,address,phone,description,image_url}=req.body;

    try {
        
        const response=await putRestaurant({id,name,email,password,address,phone,description,image_url});
        response===false
        ?res.status(400).json("Ya existe un restaurant con este correo o hubo un error al actualizarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    putRestaurantHandler
}