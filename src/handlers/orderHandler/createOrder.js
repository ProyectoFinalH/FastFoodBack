const { createOrder } = require("../../controllers/orderController/createOrder");

const createOrderHandler=async(req,res)=>{

    const{restaurant_id,user_id,total_price,items}=req.body;

    try {
        const response=await createOrder({restaurant_id,user_id,total_price,items});
        response===false
        ?res.status(400).json("No fue posible crear la orden")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    createOrderHandler
}