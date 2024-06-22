const { getAllRestaurants } = require("../../controllers/restaurantController/getAllRestaurants");


const getAllRestaurantsHandler=async(req,res)=>{

    try {
        const response=await getAllRestaurants();
        response.length
        ?res.status(200).json(response)
        :res.status(400).json("No hay restaurantes registrados");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getAllRestaurantsHandler
}