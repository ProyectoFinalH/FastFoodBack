const { getOrderItemsByOrder } = require("../../controllers/orderItemsController/getOrderItemsByOrder");

const getOrderItemsByOrderHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        const response=await getOrderItemsByOrder(id);
        response.length
        ?res.status(200).json(response)
        :res.status(400).json("No hay items con la orden indicada");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getOrderItemsByOrderHandler
}