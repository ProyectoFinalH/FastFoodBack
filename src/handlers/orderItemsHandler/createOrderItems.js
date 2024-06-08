const { createOrderItems } = require("../../controllers/orderItemsController/createOrderItems");


const createOrderItemsHandler=async(req,res)=>{

    const{order_id,menuitem_id,quantity}=req.body;

    try {
        const response=await createOrderItems({order_id,menuitem_id,quantity});
        response===false
        ?res.status(400).json("No fue posible crear el item de la orden")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    createOrderItemsHandler
}