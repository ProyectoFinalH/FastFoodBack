const { getDetailRestaurant } = require("../../controllers/restaurantController/getDetailRestaurant");


const getDetailRestaurantHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        const response=await getDetailRestaurant(id);
        response
        ?res.status(200).json(response)
        :res.status(400).json("Este restaurante no existe");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getDetailRestaurantHandler
}