const { getOrders } = require("../../controllers/orderController/getOrders");

const getOrdersHandler=async(req,res)=>{

    try {
        const response=await getOrders();
        response.length
        ?res.status(200).json(response)
        :res.status(400).json("No hay ordenes registradas");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getOrdersHandler
}