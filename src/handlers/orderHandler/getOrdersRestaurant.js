const { getOrdersRestaurant } = require("../../controllers/orderController/getOrdersRestaurant");


const getOrdersRestaurantHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        const response=await getOrdersRestaurant(id);
        response.length
        ?res.status(200).json(response)
        :res.status(400).json("No hay ordenes registradas");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getOrdersRestaurantHandler
}