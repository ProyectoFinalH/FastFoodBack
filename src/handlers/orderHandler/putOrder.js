const { putOrder } = require("../../controllers/orderController/putOrder");

const putOrderHandler=async(req,res)=>{

    const{id}=req.params;
    const{user_id,total_price,items,statusorder_id}=req.body;

    try {
        const response=await putOrder({id,user_id,total_price,items,statusorder_id});
        response===false
        ?res.status(400).json("No se encontro la orden o hubo un error al actualizarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    putOrderHandler
}