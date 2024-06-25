const { deleteOrder } = require("../../controllers/orderController/deleteOrder");

const deleteOrderHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        
        const response=await deleteOrder({id});
        response===false
        ?res.status(404).json("No se encontro esta orden o no fue posible borrarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    deleteOrderHandler
}