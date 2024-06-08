const { putOrderItems } = require("../../controllers/orderItemsController/putOrderItems");

const putOrderItemsHandler=async(req,res)=>{

    const{id}=req.params;
    const{order_id,menuitem_id,quantity}=req.body;

    try {
        const response=await putOrderItems({id,order_id,menuitem_id,quantity});
        response===false
        ?res.status(400).json("No fue posible actualizar el item de la orden")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    putOrderItemsHandler
}