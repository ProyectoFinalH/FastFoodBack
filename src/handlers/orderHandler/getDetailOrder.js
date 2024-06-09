const { getDetailOrder } = require("../../controllers/orderController/getDetailOrder");

const getDetailOrderHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        const response=await getDetailOrder(id);
        response
        ?res.status(200).json(response)
        :res.status(400).json("Esta orden no existe");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getDetailOrderHandler
}