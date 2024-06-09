const { getOrderItems } = require("../../controllers/orderItemsController/getOrderItems");

const getOrderItemsHandler=async(req,res)=>{

    try {
        const response=await getOrderItems();
        response.length
        ?res.status(200).json(response)
        :res.status(400).json("No hay items de ordenes registradas");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getOrderItemsHandler
}