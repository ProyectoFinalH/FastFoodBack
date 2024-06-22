const { restoreOrder } = require("../../controllers/orderController/restoreOrder");

const restoreOrderHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        
        const response=await restoreOrder({id});
        response===false
        ?res.status(400).json("No se encontro esta orden o no fue posible restaurarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    restoreOrderHandler
}