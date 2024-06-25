const { putStatusOrder } = require("../../controllers/orderController/putStatusOrder");

const putStatusOrderHandler=async(req,res)=>{

    const{id}=req.params;
    const{statusorder_id}=req.body;

    try {
        const response=await putStatusOrder({id,statusorder_id});
        response===false
        ?res.status(404).json("No se encontro la orden o hubo un error al cambiar estado")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    putStatusOrderHandler
}