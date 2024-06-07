const { getRestaurants } = require("../../controllers/restaurantController/getRestaurants");

const getRestaurantsHandler=async(req,res)=>{

    try {
        const response=await getRestaurants();
        response.length
        ?res.status(200).json(response)
        :res.status(400).json("No hay restaurantes registrados");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getRestaurantsHandler
}