const { restoreRestaurant } = require("../../controllers/restaurantController/restoreRestaurant");

const restoreRestaurantHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        
        const response=await restoreRestaurant({id});
        response===false
        ?res.status(404).json("No se encontro este restaurante o no fue posible restaurarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    restoreRestaurantHandler
}