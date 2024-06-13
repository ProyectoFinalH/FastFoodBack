const { getAllOrders } = require("../../controllers/orderController/getAllOrders");


const getAllOrdersHandler=async(req,res)=>{

    try {
        const response=await getAllOrders();
        response.length
        ?res.status(200).json(response)
        :res.status(400).json("No hay ordenes registradas");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getAllOrdersHandler
}