const { deleteRestaurant } = require("../../controllers/restaurantController/deleteRestaurant");

const deleteRestaurantHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        
        const response=await deleteRestaurant({id});
        response===false
        ?res.status(404).json("No se encontro este restaurant o no fue posible borrarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    deleteRestaurantHandler
}